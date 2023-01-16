import { createRouter, createWebHashHistory } from 'vue-router'
import CustomerManagementPreview from '../views/CustomerManagementPreview.vue'
import QueryContract from '../views/QueryContract.vue'
import NotificationManagement from '../views/NotificationManagement.vue'
import IphoneFullscreen from '../views/IphoneFullscreen.vue'
import SortByDate from '../views/SortByDate.vue'
import TestField from '../views/TestField.vue'

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
  {
    // 陣列中物件依據日期排序
    path: '/sort-by-date',
    name: 'sort-by-date',
    component: SortByDate
  },
  {
    // iPhone 全螢幕(垂直方向)滿版跑版
    path: '/iphone-fullscreen',
    name: 'iphone-fullscreen',
    component: IphoneFullscreen
  },
  {
    // TestField
    path: '/test-field',
    name: 'test-field',
    component: TestField
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
