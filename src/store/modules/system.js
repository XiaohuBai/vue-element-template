/*
 * @Author: XiaohuBai
 * @Date: 2020-11-16 14:19:50
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-19 13:21:21
 * @Description: 描述
 */
import { getSystemConfig } from '@/api/system'
import storage from '@/utils/storage'
const state = {
  systemInfo: storage.get('systemInfo')
}

const mutations = {
  SET_SYSTEM_INFO: (state, data) => {
    state.systemInfo = data
    storage.set('systemInfo', data)
  }
}

const actions = {
  getSystemConfig({ commit }) {
    return new Promise((resolve, reject) => {
      getSystemConfig().then(response => {
        const { data } = response
        commit('SET_SYSTEM_INFO', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
