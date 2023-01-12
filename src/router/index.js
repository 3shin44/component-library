import { createRouter, createWebHashHistory } from 'vue-router'
import CustomerManagementPreview from '../views/CustomerManagementPreview.vue'
import QueryContract from '../views/QueryContract.vue'
import NotificationManagement from '../views/NotificationManagement.vue'

const routes = [
  {
    // 客戶管理
    path: '/customer-management-preview',
    name: 'customer-management-preview',
    component: CustomerManagementPreview
  },
  {
    //合約查詢
    path: '/query-contract',
    name: 'query-contract',
    component: QueryContract
  },
  {
    //通知管理
    path: '/notification-management',
    name: 'notification-management',
    component: NotificationManagement
  },
  // {
  //   path: '/HomeView',
  //   name: 'HomeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
