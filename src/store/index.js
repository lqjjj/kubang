import Vue from 'vue'
import Vuex from 'vuex'
import index from "../views/index";
import detail from "../views/detail";
import exhibition from "../views/public/exhibition";
import collection from "../views/collection";
import message from "../views/message";
import goods from "../views/merchants/goods";
import partake from "../views/merchants/partake";
import apply from '../views/exhibit/apply'
import mangeExhibit from "../views/exhibit/mangeExhibit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    type:0,
    routes:[]
  },
  mutations: {
    changeLogin(state){
      if(state.isLogin===true){
        state.isLogin=false
      }else {
        state.isLogin=true
      }
    },
    changeType(state,type){
      if(type===1){
        state.type=0
      }
      if(type===2){
        state.type=1
      }
      if(type===3){
        state.type=2
      }
      if(type===4){
        state.type=3
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    routes:state => {
      if (state.type===0){
        return [
          {
            path: '/',
            component: index,
            children: [
              {
                path: '/detail',
                component: detail,
                name: '个人资料',
                meta:{
                  icon:['el-icon-user']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                name: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path: '/collection',
                component: collection,
                name: '我的收藏',
                meta:{
                  icon:['el-icon-star-off']
                }
              },
              {
                path: '/message',
                component: message,
                name: '留言与回复',
                meta:{
                  icon:['el-icon-chat-dot-round']
                }
              }]
          }]
      }
      if (state.type===1){
        return [
          {
            path: '/',
            component: index,
            children: [
              {
                path: '/detail',
                component: detail,
                name: '商家资料',
                meta:{
                  icon:['el-icon-s-shop']
                }
              },
              {
                path:'goods',
                component:goods,
                name:'商品列表',
                meta:{
                  icon:['el-icon-menu']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                name: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path:'/partake',
                component:partake,
                name:'我的参展',
                meta:{
                  icon:['el-icon-s-opportunity']
                }
              }]
          }]
      }
      if (state.type===2){
        return [
          {
            path: '/',
            component: index,
            children: [
              {
                path: '/detail',
                component: detail,
                name: '展会资料',
                meta:{
                  icon:['el-icon-date']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                name: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path: '/apply',
                component: apply,
                name: '我要开展',
                meta:{
                  icon:['el-icon-edit']
                }
              },
              {
                path:'/mangeex',
                component:mangeExhibit,
                name:'展会管理',
                meta:{
                  icon:['el-icon-set-up']
                }
              }]
          }]
      }
      if (state.type===3){
        return [
          {
            path: '/',
            component: index,
            children: [
              {
                path: '/detail',
                component: detail,
                name: '商家资料',
                meta:{
                  icon:['el-icon-s-shop']
                }
              },
              {
                path:'goods',
                component:goods,
                name:'商品列表',
                meta:{
                  icon:['el-icon-menu']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                name: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path:'/partake',
                component:partake,
                name:'我的参展',
                meta:{
                  icon:['el-icon-s-opportunity']
                }
              }]
          }]
      }
    }
  }
})
