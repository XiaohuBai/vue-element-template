/*
 * @Author: XiaohuBai
 * @Date: 2020-11-17 13:51:54
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-24 17:00:17
 * @Description: 描述
 */

module.exports = [

  // user login
  {
    url: '/login',
    type: 'post',
    response: config => {
      return {
        code: 200,
        msg: '登录成功',
        requestId: 'daw93209-32-dc2-c22c22c',
        data: {
          token: 'sdugouogiuub32423uilbekebk2bek3bek2be323kl32lk3rl2rd0-siv-sc-ds-0c3k2n3j2kejb2k',
          userInfo: {
            name: 'xiaohu',
            uuid: 'dsa54675sad-qjdcs-3cdsa',
            roles: ['admin'],
            phone: '13269110806',
            headerImg: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
          }
        }
      }
    }
  },

  // user getCaptcha
  {
    url: '/getCaptcha',
    type: 'get',
    response: config => {
      return {
        code: 200,
        msg: 'success',
        data: {
          captchaId: 'UcAGyZrzeBTOtSnjFG9v',
          picPath: 'data:image/png;base64,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'
        }
      }
    }
  },

  // user logout
  {
    url: '/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        msg: 'success',
        data: {}
      }
    }
  },

  // user profile
  {
    url: '/user/profile',
    type: 'get',
    response: config => {
      return {
        code: 200,
        msg: 'success',
        data: {
          avatar: '',
          createBy: '1',
          createdAt: '2020-10-09 14:21:39',
          dataScope: '',
          deletedAt: null,
          deptId: 1,
          email: 'xiaohubai@outlooj.com',
          nickName: '白小虎',
          params: '',
          password: '',
          phone: '18300697959',
          postId: 1,
          remark: '',
          role: 'admin',
          roleId: '0000000001',
          roleName: '系统管理员',
          salt: '',
          sex: '0',
          status: '0',
          updateBy: '1',
          updatedAt: '2020-10-24 14:21:39',
          userId: 'dciwu333-ccsed33324555-eewc',
          username: 'admin',
          deptName: '新方通信'

        }
      }
    }
  }

]
