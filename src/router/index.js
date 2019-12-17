import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"
import detail from "../views/detail";
import exhibition from "../views/public/exhibition";
import collection from "../views/collection";
import message from "../views/message";
import index from "../views/index";
import logIn from "../views/logIn";
import nofound from "../views/nofound"
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
    path:'/404',
    component:nofound
  },
  { path: '*', redirect: '/404', hidden: true }
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
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  if(store.state.isLogin===false && to.path!=='/login'){
    next({path: '/login'})
  }
  next()

})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
