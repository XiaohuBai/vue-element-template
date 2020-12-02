/*
 * @Author: XiaohuBai
 * @Date: 2020-11-16 14:19:50
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-12-02 17:35:54
 * @Description: 描述
 */
import request from '@/utils/request'

// 查询角色列表
export function listRole(data) {
  return request({
    url: '/roleList',
    method: 'get',
    params: data
  })
}

export function getRoutes(data) {
  return request({
    url: '/roleMenus',
    method: 'get',
    data: data
  })
}
