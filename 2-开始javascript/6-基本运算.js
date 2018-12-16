/**
 * 基本运算包括加、减、乘、除、求余等，通过 = 把右边的运算表达式的值，赋值给左侧的变量
 */

//定义一些变量，下面的例子用得上
var num1 = 3
var num2 = 7
var num3 = 5.6
var str1 = 'wyh'
var str2 = 'nba'
var str3 = '5'

/**
 * 加运算，js中包含数值加和字符串加两种
 */

 /**
  * demo1,数值+数值
  */
 var plusDemo1 = num1 + num2 
 console.log(plusDemo1)

 /**
  * demo2,字符串+字符串
  */
 var plusDemo2 = str1 +str2
 console.log(plusDemo2)

/**
 * demo3,字符串+数值
 */
var plusDemo3 = str1 +num1
console.log(plusDemo3)
//继续演示(str3是个数字内容的字符串)
plusDemo3 = str3 + num1
console.log(plusDemo3)

/**
 * 结论：
 * 1、js中，只有数值+数值才会进行加法的数学运算
 * 2、当有一个变量是字符串时，+运算变为拼接字符串
 */

 /**
  * 减运算、乘运算、除运算、求余运算，都是数学运算
  * 需要注意的是，当某个字符串可以转化为数字时，按js会在计算时自动转化
  * 当字符串无法转化为数字时，计算结果为NaN,即表示不是一个数值
  */

 /**
  * demo4,正常数值运算
  */
 var demo4 = num1 - num2
 console.log(demo4)
 demo4 = num1 * num2
 console.log(demo4)
 demo4 = num2 / num1
 console.log(demo4)
 demo4 = num2 % num1
 console.log(demo4)

 /**
  * demo5, 运算量可以转化成数值
  */

  var demo5 = str3 - num1
  console.log(demo5)