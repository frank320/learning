### unknow
 unknown类型跟any类型的不同之处在于，它不能直接使用。主要有以下几个限制。
1. 首先，unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）,这就避免了污染问题。
2. unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。1. 
3. 只有明确unknown变量的实际类型，才允许使用它，防止像any那样可以随意乱用，“污染”其他变量。类型缩小以后再使用，就不会报错。

### never
由于不存在任何属于“空类型”的值，所以该类型被称为never，即不可能有这样的值。
never类型的一个重要特点是，可以赋值给任意其他类型。

### object
object 类型包含了所有对象、数组和函数。

### Object
原始类型值、对象、数组、函数都是合法的Object类型。
事实上，除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型。

### 交叉类型
交叉类型的主要用途是表示对象的合成。

let obj:
  { foo: string } &
  { bar: string };

obj = {
  foo: 'hello',
  bar: 'world'
};

### 数组
const arr = [];
arr // 推断为 any[]

arr.push(123);
arr // 推断类型为 number[]

arr.push('abc');
arr // 推断类型为 (string|number)[]

类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。

TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。
const arr:readonly number[] = [0, 1];
或者
const arr = [0, 1] as const;

### interface
一个接口中最多只能定义一个数值索引。数值索引会约束所有名称为数值的属性。



