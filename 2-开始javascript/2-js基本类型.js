//数值
var num_demo = 1

//字符串
var str_demo1 = "1"
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