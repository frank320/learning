/**
 * Created by Frank on 2017/6/11.
 */
function getKey(v) {
  return v + 1
}
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,//使用属性表达式
}

for(let k in obj){
  console.log(k)
  console.log(obj[k])
}