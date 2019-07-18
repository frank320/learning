const { produce } = require('immer')
const state = {
  done: false,
  val: { a: 1 },
  arr: [1],
  p:{x:[]}
}

const newState = produce(state, draft => {//内部使用代理实现 数据操作(get set)被劫持(重新处理)
  draft.done = true
  // draft.val.a = 2
  // draft.p.x.push(0)
}) //一旦生成就不可变 newState被修改部分将冻结(Object.freeze)

console.log(newState === state)// false
console.log(state.done) // false
console.log(newState.done) // true
console.log(state.val === newState.val);//true
// state.val = 2;//设置有效

//自动冻结功能
//Immer 还在内部做了一件很巧妙的事情，那就是通过 produce 生成的 nextState 是被冻结（freeze）的，
//（Immer 内部使用Object.freeze方法，只冻结 nextState 跟 currentState 相比修改的部分），
//这样，当直接修改 nextState 时，将会报错。这使得 newState 成为了真正的不可变数据。

newState.val = { c: 1 }//设置无效
newState.val.b = 2//设置有效
newState.done = false//设置无效
newState.other = "124"//设置无效
console.log("state: ",state)
console.log("newState: ",newState)




