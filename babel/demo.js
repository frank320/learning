/**
 * Created by wikeLi on 2017/3/2.
 */
class User {
  static foo = 'bar'

  static delete() {
    console.log('delete me')
  }

  constructor(name = 'frank', age = 18) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log(`helllo,my name is ${this.name},I'm ${this.age} 岁`);
  }

}
const user = new User('Lily', 17)
user.sayHi()
User.delete()
console.log(User.foo)