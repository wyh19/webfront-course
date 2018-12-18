const axios  = require('axios')

//接口的基本地址
var baseUrl = 'http://10.20.222.151:9288/skill-platform'

/**
 * 接口1：获取技能列表
 * 请求方式：GEt
 *请求参数：无
 */
var getSkillListUrl = '/manage/v1/skill/list'

axios.get(baseUrl+getSkillListUrl).then(res =>{
     console.log(res.data)
     console.log('------json对象转字符串------')
     console.log(JSON.stringify(res.data))
 })

