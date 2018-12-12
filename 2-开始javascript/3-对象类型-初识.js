/**
 * 1、代码世界里，很多数据都不是简单的一个数值或者一串文字，经常是一个包含很多信息的数据结构体
 * 在js里，这些复杂的数据结构都是对象类型
 * 要定义一个对象类型，有很多种办法，现在介绍最简单又是最常用的办法，即直接书写对象
 * 2、js里，使用{}包裹一堆key:value信息，形成一个数据对象，数据之间用,隔开，看如下示例
 */

//举一个现实的例子，下面定义了一个人员信息的变量，其值是一个对象类型
var myInfo = {
    name: 'wyh',
    age: 30,
    addr: {
        city: '北京',
        street: '常营南路'
    }
}
//如此就定义了一个人员信息的对象，打印一下
console.log(myInfo)

console.log('-----------------')
/**
 * 通过点语法取出对象中的信息，依次取出其中的信息并打印
 */
console.log(myInfo.name)
console.log(myInfo.age)
console.log(myInfo.addr) //地址信息本身还是一个对象，可以继续取值

console.log('-----------------')

console.log(myInfo.addr.city)
console.log(myInfo.addr.street)

console.log('-----------------')

/**
 * js的对象是灵活的，当取一个不存在的信息时，不会报错，而是得到一个undefined
 */
 console.log('打印不存在信息',myInfo.job)

//修改对象的信息
myInfo.name = 'wyh19'
console.log(myInfo)

 /**
 * 当给对象不存在的信息赋值时，不会报错，而是增加这个信息并赋值
 */
myInfo.job = '软件开发'
console.log(myInfo)