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
import exhiDetails from "../views/public/exhiDetails";
import storeDetails from "../views/public/store"
import edit from "../components/edit"
import applyGood from "../views/merchants/applyGood";
import applyAdvertising from "../views/merchants/applyAdvertising";
import auditGood from  "../views/exhibit/auditGood"
import auditExhibition from "../views/super/auditExhibition"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:0,
    routes:[]
  },
  mutations: {
    changeType(state,type){
      if(type===1){
        state.type=1
      }
      if(type===2){
        state.type=2
      }
      if(type===3){
        state.type=3
      }
      if(type===4){
        state.type=4
      }
      if(type===0){
        state.type=0
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    routes:getters => {
      if (getters.type===1){
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
      if (getters.type===2){
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
                path:'/goods',
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
              },
              {
                path:'/applyGood',
                component:applyGood,
                name:'申请展品',
                meta:{
                  icon:['el-icon-plus']
                }
              },
              {
                path:'/applyAdvertising',
                component:applyAdvertising,
                name:'广告申请',
                meta:{
                  icon:['el-icon-s-data']
                }
              }
            ]
          }]
      }
      if (getters.type===3){
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
              },
              {
                path:'/auditGood',
                component:auditGood,
                name:'审核商品',
                meta:{
                  icon:['el-icon-s-management']
                }
              }
            ]
          }]
      }
      if (getters.type==4){
        return [
          {
            path: '/',
            component: index,
            children: [
              {
                path: '/detail',
                component: detail,
                meta:{
                  icon:['el-icon-s-shop']
                }
              },
              {
                path:'/goods',
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
                path:'/auditGood',
                component:auditGood,
                name:'审核商品',
                meta:{
                  icon:['el-icon-s-management']
                }
              },
              {
                path: '/auditExhibition',
                component: auditExhibition,
                name: '展会审核',
                meta:{
                  icon:['el-icon-s-order']
                }

              },
              {
                path:'/exhibit',
                component:exhiDetails
              },
              {
                path:'/store',
                component:storeDetails
              },
              {
                path:'/edit',
                component:edit
              }
              ]
          }
        ]
      }
    },
    type:state => {
      if (sessionStorage.getItem("type")){
        state.type=Number(sessionStorage.getItem("type"))
        return Number(sessionStorage.getItem("type"))
      }
      else return state.type
    }
  }
})
