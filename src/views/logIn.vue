<template>
    <div id="login">
    <el-radio-group v-model="radio">
        <el-radio :label="1">个人用户</el-radio>
        <el-radio :label="2">商家用户</el-radio>
        <el-radio :label="3">展会用户</el-radio>
        <el-radio :label="4">管理员用户</el-radio>
    </el-radio-group>
        <el-row :gutter="10" type="flex" justify="center" style="margin-top: 10px">
            <el-col :span="5"><el-button size="small" style="margin: 10px auto;display: block" @click="dealReg">注册</el-button></el-col>
            <el-col :span="5"><el-button size="small" style="margin: 10px auto;display: block" @click="dealLogin">登录</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "logIn",
        data () {
            return {
                radio: 1
            }
    },
        methods:{
            async dealLogin(){
                this.$store.commit('changeType',this.radio)
                // if (this.radio===1){
                    await this.$router.addRoutes(this.$store.getters.routes)
                    this.$router.push({path:'/'})
                // }
                // if (this.radio===2){
                //     await this.$router.addRoutes(this.$store.getters.routes)
                //     this.$router.push({path:'/'})
                // }
                // if (this.radio===3){
                //     await this.$router.addRoutes(this.$store.getters.routes)
                //     this.$router.push({path:'/'})
                // }
                // if (this.radio===4){
                //     await this.$router.addRoutes(this.$store.getters.routes)
                //     this.$router.push({path:'/'})
                // }
                sessionStorage.setItem('type',this.radio)
            },
            dealReg(){
                this.$router.push({path:'/regist'})
            }
        }
    }
</script>

<style scoped>
#login{
    position: absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%)
}
</style>
