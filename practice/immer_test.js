const { produce } = require('immer')
const state = {
  done: false,
  val: { a: 1 },
}

const newState = produce(state, draft => {//内部使用代理实现 数据操作(get set)被劫持(重新处理)
  draft.done = true
  // draft.val = { b: 1 }
}) //一旦生成就不可变
console.log(newState === state)// false
console.log(state.done) // false
console.log(newState.done) // true
console.log(state.val === newState.val);//true
// state.val = 2;//设置有效
newState.val = { c: 1 }//设置无效
// newState.val.a = 2//设置有效
newState.done = false//设置无效
newState.other = "124"//设置无效
console.log("state: ",state)
console.log("newState: ",newState)




