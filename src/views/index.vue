<template>
    <div id="index">
        <el-container>
            <el-header style="padding-right: 0;background: rgba(255,255,255,0.5)"><span class="title">酷邦网管理系统</span>
                <span style>管理员用户 username</span>
                <el-dropdown @command='handle' trigger="click" size="small" style="float: right;line-height: 60px;width:100px;cursor: pointer;text-align: center">
                    <span class="el-dropdown-link">
                        <i class="el-icon-user" style="font-size: 20px;padding: 20px" ></i>
                    </span>
                        <el-dropdown-menu slot="dropdown" style="margin-top: -10px;">
                            <el-dropdown-item command='details'  icon="el-icon-user">我的资料</el-dropdown-item>
                            <el-dropdown-item command='logout' icon="el-icon-top-right">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container >
                <sidebar></sidebar>
                <el-main><router-view :key="key" /></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import sidebar from "../components/sidebar/sidebar";
    export default {
        name: "index.vue",
        components:{
            sidebar
        },
        methods:{
            handle:function(command){
                if(command==='logout'){
                    this.$store.commit('changeLogin',0)
                    sessionStorage.clear()
                    this.$router.push({path:'/login'})}
                if(command==='details'){
                    this.$router.push({path:'/detail'})
                }
            }
        },
        computed:{
            key() {
                return this.$route.path
            }
        }

    }
</script>

<style>
    .title{
        padding-left: 20px;
        line-height: 60px;
        font-size: 20px;
        color: rgba(0,0,0,1);
        opacity: 1;
    }
    body{
        margin: 0;
        background-image: url("../assets/background.png");
    }
</style>
