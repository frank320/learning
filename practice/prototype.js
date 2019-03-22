function Cat () {
  this.name = 'mimi'
  this.sayHello()
}

Cat.prototype.sayHello = function () {
  console.log('hello')
}

const cat = new Cat()

cat.sayHello()