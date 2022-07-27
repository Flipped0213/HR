import Layout from '@/layout'

export default {
  path: '/employees',
  name: 'employees',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/employees'),
    name: 'employees',
    meta: {
      title: '员工管理',
      icon: 'people'
    }
  }, {
    path: 'detail/:id', //  ?的含义是表示该参数可传可不传  动态路由参数  /employees/detail/123  /employees/detail
    component: () => import('@/views/employees/detail'),
    hidden: true, // 表示该内容不在左侧菜单显示
    meta: {
      title: '员工详情'
    }
  }, {
    path: 'print/:id', // 二级默认路由
    component: () => import('@/views/employees/print'), // 按需加载
    hidden: true,
    meta: {
      title: '打印',
      icon: 'people'
    }
  }]
}
