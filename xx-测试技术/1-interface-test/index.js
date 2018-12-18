/**
 * 这里用nodejs来实现接口的测试，熟悉js语法后，会很轻松编写各种接口测试代码
 * 注意：写代码就是照葫芦画瓢，这里用到了 => 可能初学者不知道什么以上，先不用管，照着写就行
 * 
 */

//这一行代码是引入依赖的包
const axios = require('axios')

//接口的基本地址
var baseUrl = 'http://10.20.222.151:9288/skill-platform'

/**
 * 接口1：获取技能列表
 * 请求方式：GEt
 * 请求参数：无
 */
var getSkillListUrl = '/manage/v1/skill/list'

axios.get(baseUrl + getSkillListUrl).then(res => {
    console.log('\n-----打印demo1------')
    console.log(res.data)
    console.log('------json对象转字符串，便于打印显示------')
    console.log(JSON.stringify(res.data))
})


/**
 * 接口2：获取技能列表（带参数，用于演示参数使用）
 * 请求方式：GET
 * 请求参数：pageNum(页码)  pageSize（一页多少条）
 */
var getSkillListUrl = '/manage/v1/skill/list'

var params = {
    pageNum: 1,
    pageSize: 1
}

axios.get(baseUrl + getSkillListUrl, { params: params }).then(res => {
    console.log('\n-----打印demo2------')
    console.log(JSON.stringify(res.data))
})

//注意:上面的  axios.get(baseUrl + getSkillListUrl, { params: params })
//可以写成     axios.get(baseUrl + getSkillListUrl, { params })
//当对象里的 key名称和value的变量同名时，可以简写