<template>
  <div id="app">
    <el-container style="border: 2px solid #ebebeb;border-radius:3px;">
      <el-header style="background-color: rgb(239, 235, 236);"><span class="title">酷邦网管理系统</span>
        <el-dropdown trigger="click" size="small" style="float: right;line-height: 60px;width:100px;cursor: pointer;text-align: center">
          <span class="el-dropdown-link">
            <i class="el-icon-user" style="font-size: 20px"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="margin-top: -10px;">
            <el-dropdown-item icon="el-icon-top-right">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="rgb(244, 241, 240)"
                  text-color="rgb(103, 101, 101)"
                  active-text-color="rgb(251, 53, 116)"
                  :router="true"
                  style="height: calc(100vh - 80px)"
          >
            <el-menu-item index="/detail">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>个人资料</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/exhibition">
              <i class="el-icon-s-unfold"></i>
              <span slot="title">展会列表</span>
            </el-menu-item>
            <el-menu-item index="/collection">
              <i class="el-icon-star-off"></i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="/message">
              <i class="el-icon-chat-line-round"></i>
              <span slot="title">留言与回复</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods:{
    logOut:function(){
      alert('logout')
    }
  }
}
</script>

<style scoped>
  .title{
    padding-left: 20px;
    line-height: 60px;
    font-size: 20px;
  }
</style>
