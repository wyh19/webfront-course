/**
 * for循环主要用于遍历数组
 */
var arrDemo = [1, 2, 3, 4, 5]
//依次打印数组中的值
for (var i = 0; i < arrDemo.length; i++) {
    console.log(arrDemo[i])
}
//注意，上述形式是最常用的写法，
//由于数组下标从0开始，所以长度为5的数组，最大的索引为4，因此上面的判断条件是 i < arrDemo.length
//也有些人习惯下面的写法,即提前将数组的长度转化为最大索引值，判断条件要一直比较到相等为止
// for (var i = 0; i <= arrDemo.length - 1; i++) {
//     console.log(arrDemo[i])
// }
//我觉得就是个人思维习惯问题

//js中对象的信息也能遍历，看下面的demo
var wyhInfo = {
    name:'wyh',
    age:30,
    job:'web front programer'
}

for(var key in wyhInfo){
    console.log(key+':')
    console.log(wyhInfo[key])
}


