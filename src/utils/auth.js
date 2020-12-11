/*
 * @Author: XiaohuBai@outlook.com
 * @Date: 2020-12-09 16:59:35
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-12-09 16:59:35
 * @Description: 描述
 */
import Cookies from 'js-cookie'

const TokenKey = 'x-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
