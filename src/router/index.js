const Home = () => import('../views/Home.vue')

export const constantRouterMap = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
]