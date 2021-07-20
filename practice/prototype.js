function Cat () {
  this.name = 'mimi'
  this.sayHello()
}

Cat.prototype.sayHello = function () {
  console.log('hello')
}

const cat = new Cat()

cat.sayHello() //hello hello


function Animal() {
  this.name = 'animal';
}
Animal.prototype.sayName = function() {
  alert(this.name);
};

function Person() {
  Animal.call(this); // apply, call, bind方法都可以．细微区别，后面会提到．
}

const p = new Person()

console.log(p.name)//animal
console.log(p.sayName)//undefined