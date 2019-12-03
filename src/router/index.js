import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from "../views/detail";
import exhibition from "../views/exhibition";
import collection from "../views/collection";
import message from "../views/message";
Vue.use(VueRouter)

const routes = [
  {
    path:'/detail',
    component:detail
  },
  {
    path:'/exhibition',
    component:exhibition
  },
  {
    path:'/collection',
    component:collection
  },
  {
    path:'/message',
    component:message
  },
]

const router = new VueRouter({
  routes
})

export default router
