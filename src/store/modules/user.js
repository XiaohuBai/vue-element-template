/*
 * @Author: XiaohuBai
 * @Date: 2020-11-18 15:57:39
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-12-03 18:13:06
 * @Description: 用户登录 退出、获取token 接口
 */
import { login, logout, refreshToken } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import storage from '@/utils/storage'

const state = {
  token: getToken(),
  userInfo: storage.get('userInfo')
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
    storage.set('userInfo', userInfo)
  }
}

const actions = {
  // user login
  async login({ commit }, loginInfo) {
    const res = await login(loginInfo)
    if (res.code === 200) {
      commit('SET_TOKEN', res.data.token)
      commit('SET_USER_INFO', res.data.userInfo)
      setToken(res.data.token)
    }
  },

  async LogOut({ commit }) {
    const res = await logout()
    if (res.code === 200) {
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', '')
      removeToken()
      storage.clear()
    }
  },

  async refreshToken({ commit, state }) {
    const res = await refreshToken({ token: state.token })
    if (res.code === 200) {
      commit('SET_TOKEN', res.data.token)
      setToken(res.data.token)
      return true
    }
    return false
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
