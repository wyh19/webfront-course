/**
 * 比较：大于（>）,小于（<）,等于（==），大于等于（>=）,小于等于（<=）,不等于（!=）
 * 两个进行比较的量，一般是两个基本类型的量（回忆下：哪些是基本类型），很少涉及对象类型的比较，所以不用考虑对象类型
 * 比较的结果是得到一个布尔值，即true或者fale
 */

/**
 * 数值的比较，不多做啰嗦，就是谁大谁小，符合描述就是true，反之则为false
 * 这个例子比较简单，我直接使用数值常量，而没有定义一个变量
 */
var demo1 = 2 > 1
console.log('2 > 1 = ' + demo1)
demo1 = 2 < 1
console.log('2 < 1 = ' + demo1)
//换个写法,比上面省一行代码
console.log('2 == 1 = ' + (2 == 1))
console.log('2 == 2 = ' + (2 == 2))
console.log('2 >= 2 = ' + (2 >= 2))
console.log('2 >= 3 = ' + (2 >= 3))
console.log('2 != 2 = ' + (2 != 2))
console.log('2 != 3 = ' + (2 != 3))

/**
 * 字符串的比较，主要是按照字符从左往右比较，比较出结果大小则停止比较
 * 比较的规则是字符在ascII码中的大小（不了解也无所谓，比较运算主要看结果，不看过程）
 */
var str1 = 'wyh'
var str2 = 'wya'
var str3 = 'wyh19'
console.log('"wyh" > "wya" = '+ (str1 > str2))
console.log('"wyh19" > "wyh" = '+ (str3 > str1))

/**
 * 布尔值的比较，布尔值很简单，就true和false,
 */
console.log('true == true = ' + (true == true))
console.log('false == false = ' + (false == false))
console.log('true == false = ' + (true == false))
//下面混入一个障眼法
console.log('true == "true" = ' + (true == 'true'))

/**
 * undefined 、null 之间的比较
 */
console.log('undefined == undefined = ' + (undefined == undefined))
console.log('null == null = ' + (null == null))
console.log('undefined == null = ' + (undefined == null))
//所以之前说过对于初学者而言 undefined 和 true 是一个东西