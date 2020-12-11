/*
 * @Author: XiaohuBai
 * @Date: 2020-11-16 14:19:50
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-12-10 17:06:38
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
    url: '/menu/roleMenus',
    method: 'post',
    data
  })
}

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: '/menu/listMenus',
    method: 'post',
    params: query
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: '/api/v1/menu/' + menuId,
    method: 'get'
  })
}

// 查询菜单下拉树结构
export function treeselect() {
  return request({
    url: '/api/v1/menuTreeselect',
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: '/api/v1/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/api/v1/menu',
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: '/api/v1/menu',
    method: 'put',
    data: data
  })
}

// 删除菜单
export function delMenu(menuId) {
  return request({
    url: '/api/v1/menu/' + menuId,
    method: 'delete'
  })
}
