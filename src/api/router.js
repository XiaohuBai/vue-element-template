/*
 * @Author: XiaohuBai
 * @Date: 2020-11-16 14:19:50
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-24 14:59:02
 * @Description: 描述
 */
import request from '@/utils/request'

// 查询角色列表
export function listRole(query) {
  return request({
    url: '/roleList',
    method: 'get',
    params: query
  })
}

export function getRoutes() {
  return request({
    url: '/roleMenu',
    method: 'get'
  })
}
