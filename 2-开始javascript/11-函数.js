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

//拓展：下面的例子如果暂时有难度，先略过
//回到上面的例子，printArr只支持普通数组，当面对数组里嵌套数组，就无能为力了，下面实现一个高级版的
function printArrPlus(arr){
    for(var i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            printArrPlus(arr[i]) //调用自己，就是函数的递归调用
        }else{
            console.log(arr[i])
        }
    }
}
//测试这个函数
console.log('------------分割线----------')
var xxx_arr = [1,[2,3],[4,[5,[6,7]]]] //一个嵌套很多层的数组
printArrPlus(xxx_arr)


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

//当一个对象里有个属性是函数时，这个属性按习惯会被称为方法（本质就是函数，只是称呼变了）
var wyhInfo = {
    name:'wyh', //我是name属性，表示对象的一个信息
    age:30,     //我是age属性
    eat:function(food){  //我是eat属性，由于属性值是个函数，使用者会称呼我为eat方法
        console.log('我在吃'+food)
    }
}

wyhInfo.eat('鸡')
//注意，当定义方法时，无需指定函数名称 