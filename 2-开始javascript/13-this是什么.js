//13 14节我需要好好构思下怎么讲解和演示。。。

//并不影响去学习vue ⛽️

// this ,从字面理解就是“这个”的意思，先从下面例子看起，逐步理解this是什么

//demo1
var info = {
    name: '小宝',
    say: function () {
        console.log('demo1: hello,my name is ' + info.name)
    }
}
info.say()
/**
 * 上面定义了一个对象info，其中包含一个属性name,和一个方法say
 * 其中，say方法需要使用name，那么按照之前的经验，使用info.name来获取
 * 思考下，当你需要将info改名时，里面所有使用info的地方都得修改
 * 但是使用this，则默认表示当前这个对象
 */

 //demo2
 var info = {
    name: '小宝',
    say: function () {
        console.log('demo2: hello,my name is ' + this.name)
    }
}
info.say()
