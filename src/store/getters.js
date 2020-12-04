/*
 * @Author: XiaohuBai
 * @Date: 2020-11-16 14:19:50
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-12-03 18:18:25
 * @Description: 描述
 */

const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.userInfo.headerImg,
  userInfo: state => state.user.userInfo,
  introduction: state => state.user.introduction,
  permisaction: state => state.user.permisaction,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  appInfo: state => state.system.info
}
export default getters
