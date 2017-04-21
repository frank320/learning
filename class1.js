/**
 * Created by wikeLi on 2017/2/14.
 */
class Bar {
  constructor(x) {
    this.a = this.foo()
    this.b = x
  }

  foo() {
    return 1
  }
}
const bar = new Bar(2)
console.log(bar.a)
console.log(bar.b)