/**
 * Created by wikeLi on 2016/12/28.
 * events模块的使用
 */
const EventEmitter = require('events').EventEmitter

const event = new EventEmitter()

//事件的订阅和发布
event.on('some_event', (...arg)=> {
  console.log(arg)
  console.log('event occured')
})
event.on('some_event1', (...arg)=> {
  console.log(arg)
  console.log('event1 occured')
})


setTimeout(()=> {
 event.emit('some_event',1,2,3)
}, 2000)

setTimeout(()=> {
 event.emit('some_event1')
}, 3000)



