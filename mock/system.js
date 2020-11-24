/*
 * @Author: XiaohuBai
 * @Date: 2020-11-17 17:26:28
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-19 13:43:11
 * @Description: login页面相关接口
 */
module.exports = [
  {
    url: '/system/getSystemConfig',
    type: 'get',
    response: config => {
      return {
        code: 200,
        msg: 'success',
        data: {
          name: 'vue-element-template',
          logo: 'https://gitee.com/mydearzwj/image/raw/master/img/go-admin.png'
        }
      }
    }
  }
]
