/**
 * 逻辑运算就是 与（&&）或（||）非（!）
 * 逻辑运算的量都是 布尔值的，计算结果也是布尔值
 * 逻辑运算的目的主要是用于判断条件是否成立
 * 与运算规则：全是true结果才是true,有一个false，结果就为false
 * 或运算规则：全是false，结果才是false，有一个true，结果就为true
 * 非运算，就是求反
 */

/**
 * if语句就是条件判断，形式如下：
 * if(条件){
 *  条件为 true 时，执行这里的代码
 * }else{
 * 条件为 false 时，执行这里的代码
 * }
 * 很多时候，只要需要单独对条件符合时进行代码处理，所以这种情况可以省略后面的else
 */

//正好复习下上一节的比较
/**
 * 场景1：年龄>18,同时支付50元，才能入场
 */
var wyh = {
    age: 30,
    pay: 50
}
if (wyh.age > 18 && wyh.pay >= 50) {
    console.log('wyh 符合条件要求')
} else {
    console.log('wyh 不符合条件要求')
}

/**
* 场景2：年龄>18 同时支付50元或者性别为女,才能入场
*/
var lhh = {
    age: 26,
    pay: 0,
    sex: '女'
}
if (lhh.age > 18 && (lhh.pay >= 50 || lhh.sex == '女')) {
    console.log('lhh 符合条件要求')
} else {
    console.log('lhh 不符合条件要求')
}
//注意上面的表达式，lhh.pay >= 50 || lhh.sex == '女'是用括号括起来的，表示这个运算要优先运算
//而且括号括起来，更符合语义和不容易出错

/**
 * 场景3：打印下列数组中奇数的值
 * 注意：下一节将详细介绍for循环，这里先让它露个脸
 */
var arr_demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i < arr_demo.length; i++) {
    //对2求余，余数为0的是偶数，反之则为奇数
    if (!(arr_demo[i] % 2 == 0)) {
        console.log(arr_demo[i])
    }
}

/**
 * 三元表达式
 * 很多if-else的代码体内就一句代码，因此有三元表达式这种便捷方式
 */
var demo = {
    sex:1   //这在实际开发中很常见，很少数据库里保存男女，而是用1和2表示，那么在前端显示时需要做个判断转化
}
var showText
if(demo.sex == 1){
    showText = '男'
}else{
    showText = '女'
}
//简化后
showText = (demo.sex == 1) ? "男":"女"
