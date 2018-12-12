/**
 * 1、任何编程语言都有变量，而变量又分为基本类型和对象类型（或者说引用类型）
 * 2、基本类型：就是用于存放最简单值类型的变量类型，
 * 比如数字、一串文字（官话：字符串）、是否（官话：布尔型）、空（js里有两种空，一种是null,一种是undefined,初学者认为这两者是一样即可）
 * 3、基本类型的特点是变量直接访问内存里的值，变量a赋值给变量b时，b得到了一份全新的值，改变a的值，不会影响到b
 * 4、js中，定义变量的形式是 ： var 变量名
 * 定义时一般会赋值，则形式为： var 变量名 = 值
 * 5、console是系统提供的方法，用于打印消息
 */

//数值
var num_demo = 1

//字符串
var str_demo1 = "1"  //打印面板看到的是1，没有双引号，因为双引号是代码的一部分，而不是值的一部分
var str_demo2 = "Hello World"

//布尔
var bool_demo1 = true
var bool_demo2 = false

//null
var null_demo = null

//undefined
var undefined_demo = undefined

console.log('----开始------')
//打印上面定义的变量
console.log(num_demo)
console.log(str_demo1)
console.log(str_demo2)
console.log(bool_demo1)
console.log(bool_demo2)
console.log(null_demo)
console.log(undefined_demo)

console.log('----分割线------')

//对各个变量类型求值
console.log(typeof(num_demo))
console.log(typeof(str_demo1))
console.log(typeof(str_demo2))
console.log(typeof(bool_demo1))
console.log(typeof(bool_demo2))
console.log(typeof(null_demo)) //这个应该是null类型才对，但是因为历史遗留问题，js语法已经无法挽回这个错误了
console.log(typeof(undefined_demo))

//变量a赋值给变量b
var a = 1
var b = a
//修改a的值
a = 2
//查看a和b的值,可以印证，a的值和b的值都是各自独立的，不会相互影响
console.log('a当前值为'+a)
console.log('b当前值为'+b)