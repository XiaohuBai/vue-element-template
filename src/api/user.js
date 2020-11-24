/*
 * @Author: XiaohuBai
 * @Date: 2020-11-18 15:57:32
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-24 17:08:54
 * @Description: 描述
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getCaptcha() {
  return request({
    url: '/getCaptcha',
    method: 'get'
  })
}

export function refreshToken(data) {
  return request({
    url: '/refreshToken',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/getinfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/user/profile',
    method: 'get'
  })
}

export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/user/updatePwd',
    method: 'put',
    data: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return request({
    url: '/user/avatar',
    method: 'post',
    data: data
  })
}

export function updateUser(data) {
  return request({
    url: '/updateUser',
    method: 'put',
    data: data
  })
}
