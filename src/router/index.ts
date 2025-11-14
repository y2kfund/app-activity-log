import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import ActivityLog from '../views/ActivityLog.vue'
// Use the correct type for the routes array
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ActivityLog',
    component: ActivityLog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router