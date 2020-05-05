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
import manageAd from "../views/super/manageAd"
import manageCompany from "../views/super/manageCompany"
import addGoods from "../views/merchants/addGoods";
import collectDetail from "../views/collectDetail";
import merInfo from "../views/merchants/merInfo";
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
                names: '个人资料',
                meta:{
                  icon:['el-icon-user']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                names: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path: '/collection',
                component: collection,
                names: '我的收藏',
                meta:{
                  icon:['el-icon-star-off']
                }
              },
              {
                path: '/message',
                component: message,
                names: '留言与回复',
                meta:{
                  icon:['el-icon-chat-dot-round']
                }
              },
              {
                path:"/collectionDetail",
                name:'collectDetail',
                component:collectDetail
              }
              ]
          }]
      }
      if (getters.type===2){
        return [
          {
            path: '/',
            component: index,
            children: [
              {
                path: '/merInfo',
                component: merInfo,
                names: '商家资料',
                meta:{
                  icon:['el-icon-s-shop']
                }
              },
              {
                path:'/goods',
                component:goods,
                names:'商品列表',
                meta:{
                  icon:['el-icon-menu']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                names: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path:'/partake',
                component:partake,
                names:'我要参展',
                meta:{
                  icon:['el-icon-s-opportunity']
                }
              },
              {
                path:'/applyGood',
                component:applyGood,
                names:'申请展品',
                meta:{
                  icon:['el-icon-plus']
                }
              },
              {
                path:'/addGoods',
                name:'addGoods',
                component:addGoods
              },
              {
                path:'/applyAdvertising',
                component:applyAdvertising,
                names:'广告申请',
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
                names: '展会资料',
                meta:{
                  icon:['el-icon-date']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                names: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path: '/apply',
                component: apply,
                names: '我要开展',
                meta:{
                  icon:['el-icon-edit']
                }
              },
              {
                path:'/mangeex',
                component:mangeExhibit,
                names:'展会管理',
                meta:{
                  icon:['el-icon-set-up']
                }
              },
              {
                path:'/auditGood',
                component:auditGood,
                names:'商家管理',
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
                path:'/manageAd',
                component:manageAd,
                names:'广告管理',
                meta:{
                  icon:['el-icon-data-analysis']
                }
              },
              {
                path: '/exhibition',
                component: exhibition,
                names: '展会列表',
                meta:{
                  icon:['el-icon-s-unfold']
                }
              },
              {
                path:'/manageCompany',
                component:manageCompany,
                names:'商家管理',
                meta:{
                  icon:['el-icon-s-management']
                }
              },
              {
                path: '/auditExhibition',
                component: auditExhibition,
                names: '展会审核',
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
                name:'Edit',
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
