/*
 * @Author: XiaohuBai
 * @Date: 2020-11-19 11:28:14
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-12-02 14:12:26
 * @Description: 描述
 */
import request from '@/utils/request'

// @Tags systrm
// @Summary 获取配置文件内容
// @Security ApiKeyAuth
// @Produce  application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"返回成功"}"
// @Router /system/getSystemConfig [post]

export function getSystemConfig() {
  return request({
    url: '/base/getSystemConfig',
    method: 'get'
  })
}

export function setSystemConfig(data) {
  return request({
    url: '/system/setSystemConfig',
    method: 'post',
    data
  })
}

export function getSystemState() {
  return request({
    url: '/system/getServerInfo',
    method: 'post'
  })
}
