/**
 * 函数（function），就是定义的一段可执行代码，也可以成为方法(method)
 * 之前定义变量的形式为 var 变量名；或者 var 变量名 = 初值；
 * 函数的定义形式为 function 函数名(参数1，参数2){
 * 代码
 * return 返回值 //注意，有些函数无需返回值，可以省略return语句，系统会自动返回null
 * }
 * 调用函数的形式是  函数名（参数）
 */

function print(msg) {
    console.log(msg)
}
//上面定义了一个最简单的函数，函数体代码就是之前我们经常见的打印语句
var testInfo = '一段信息'
//之前的写法是
console.log(testInfo)
//现在使用函数调用
print(testInfo)

/**
 * 函数的本质是包装一段代码，让这段代码再次执行时，只需要调用函数即可，而无需再次写这一段代码
 */
//还记得当时演示多层for循环时感到困难吗？
var arrDemo = [1, 2, [1, 2, 4], 4, 6, [1,2,3]]
for (var i = 0; i < arrDemo.length; i++) {
    if (Array.isArray(arrDemo[i])) {
        for(var j = 0;j<arrDemo[i].length;j++){
            console.log(arrDemo[i][j])
        }
    } else {
        console.log(arrDemo[i])
    }
}
console.log('-----分割线-----')
//打印for循环这段代码是重复的，可以提炼为一个函数
function printArr(arr){
    for(var i = 0;i<arr.length;i++){
        console.log(arr[i])
    }
}
for (var i = 0; i < arrDemo.length; i++) {
    if (Array.isArray(arrDemo[i])) {
        printArr(arrDemo[i])
    } else {
        console.log(arrDemo[i])
    }
}
//是不是没那么绕了，但是我还是希望熟练掌握第一种写法，实际开发中，2层、3层循环是经常出现的，熟能生巧

//之前的函数都是没有返回值的，下面演示一个有返回值的
//输入一段字符串，得到这段字符串的倒序文字，同时都转化成大写
function handleStr(text){
    //将字符串逆转顺序
    var reversedText = text.split('').reverse().join('')
    //将字符串转化成大写
    var upperdText = reversedText.toUpperCase()
    return upperdText
}
var value = handleStr('wyh is a man')
console.log(value)