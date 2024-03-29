const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // 在根级的getters上 开发子模块的属性给别人看 给别人用
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId, // 建立用户id的映射
  staffPhoto: state => state.user.userInfo.staffPhoto, 
  companyId: state => state.user.userInfo.companyId, // 建立用户的公司Id映射
  routes: state => state.permission.routes // 导出当前的路由
}
export default getters
