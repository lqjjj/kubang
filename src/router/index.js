import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"
import detail from "../views/detail";
import exhibition from "../views/public/exhibition";
import collection from "../views/collection";
import message from "../views/message";
import index from "../views/index";
import logIn from "../views/logIn";
import reg from "../views/reg"
import exhiDetails from "../views/public/exhiDetails";
// import nofound from "../views/nofound"
Vue.use(VueRouter)

// const routes = [
//   {
//     path:'/login',
//     component:logIn
//   },
//   {
//     path:'/',
//     component:index,
//     children:[
//       {
//         path:'/detail',
//         component:detail,
//         name:'个人资料'
//       },
//       {
//         path:'/exhibition',
//         component:exhibition,
//         name:'展会列表'
//       },
//       {
//         path:'/collection',
//         component:collection,
//         name:'我的收藏'
//       },
//       {
//         path:'/message',
//         component:message,
//         name:'留言与回复'
//       }
//     ]
//   },
//   {
//     path:'/404',
//     component:nofound
// },
//   { path: '*', redirect: '/404', hidden: true }
// ]
export const constantRoutes=[
  {
    path:'/login',
    component:logIn
  },
  {
    path: '/regist',
    component: reg
  },

]
export const asyncRoutes=[
  {
    path:'/',
    component:index,
    children:[
      {
        path:'/detail',
        component:detail,
        name:'个人资料'
      },
      {
        path:'/exhibition',
        component:exhibition,
        name:'展会列表'
      },
      {
        path:'/collection',
        component:collection,
        name:'我的收藏'
      },
      {
        path:'/message',
        component:message,
        name:'留言与回复'
      }
    ]
  },
]
// const router = new VueRouter({
//   routes,
//   mode: 'history',
// })

const createRouter = () => new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  if(store.getters.type===0 && to.path!=='/login'){
    next({path: '/login'})
  }
  next()
})
router.onReady(() => {
  if(store.getters.type!==0) {
    router.addRoutes(store.getters.routes) // 添加动态路由,这里不必用$addRoutes，因为刷新后就没有上一次的动态路由，故不必清除
  }
})


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
