

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
    for (let i = 0; i < data.length; i++){
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