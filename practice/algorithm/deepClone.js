const obj = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 4]
}

function deepClone(params) {
  // 如果数组类型数据
  if (Array.isArray(params)) {
    let newnew = []
    for (let i = 0; i < params.length; i++) {
      newnew[i] = deepClone(params[i]) // 递归调用克隆
    }
    return newnew // 克隆完以后，再返回出结果
  }
  // 如果是对象类型数据
  if (Object.prototype.toString.call(params) === '[object Object]') {
    let newnew = {}
    for (const key in params) {
      newnew[key] = deepClone(params[key]) // 递归调用克隆
    }
    return newnew // 克隆完以后，再返回出结果
  }
  // 如果是普通数据类型
  return params
}


console.log(deepClone(obj))