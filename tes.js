// import { useEffect,  } from useState 'react';

// function Dong() {

//     const [count,setCount] = useState(0);

//     useEffect(() => {
//         setInterval(() => {
//             setCount(count + 1);
//         }, 500);
//     }, []);

//   useEffect(() => {
//         setInterval(() => {
//             console.log(count);
//         }, 500);
//     }, []);

//     return <div>guang</div>;
// }

// export default Dong; 
// 0


function deepClone(data) {
  if (Array.isArray(data)) {
    const _arr = [];
    for (let i = 0; i < data.length; i++) {
      _arr[i] = deepClone(data[i])
    }
    return _arr;
  }

  if (Object.prototype.toString.call(data) === "[object Object]") {
    const _obj = {}
    for (let k in data) {
      _obj[k] = deepClone(_obj[k])
    }

    return _obj;
  }

  return data;
}



function reactive(obj) {

  const handle = {
    get(target, key) {
      console.log(target)

      return Reflect.get(target, key)

    },
    set(target, key, val) {

    }
  }

  return new Proxy(obj, handle);

}
const foo = reactive({
  name: 'test',
  info: {
    age: 18,
    job: '前端',
  }
})

console.log(foo.info.job)




// { val: number, next: } 
// Bingwei
function sortList(head) {
  if (!head || !head.next) {
    return head;
  }

  const arr = [];

  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  arr.sort((a, b) => (a.val - b.val));

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }

  return arr[0];

};




let flag = 0;

Array.prototype.flat = function flat(param = 1) {
  const oriArr = this;
  let newArr = [];
  if (param === 1) {
    for (let v of oriArr) {
      let arr = Array.isArray(v) ? [...v] : [v];
      newArr.push(...arr);

    }
  }

  if (param === Infinity) {
    for (let v of oriArr) {
      let arr = Array.isArray(v) ? flat.call(v, Infinity) : [v];
      newArr.push(...arr);
    }
  }


  if (param > 1) {
    for (let v of oriArr) {
      let arr;

      if (Array.isArray(v) && flag < param) {
        arr = flat.call(v, param);
        flag++;
      } else {
        arr = [v]
      }

      newArr.push(...arr);
    }
  }



  return newArr;
}



function flat(arr) {
  let arr1 = []
  arr.forEach((val)=>{
      if(Array.isArray(val)){
          arr1 = arr1.concat(fn(val))
      }else{
          arr1.push(val)
      }
   })
   return arr1
}
