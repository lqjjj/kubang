<template>
    <div id="login">
    <el-radio-group v-model="radio">
        <el-radio :label="1">个人用户</el-radio>
        <el-radio :label="2">商家用户</el-radio>
        <el-radio :label="3">展会用户</el-radio>
        <el-radio :label="4">管理员用户</el-radio>
    </el-radio-group>
    <el-button size="small" style="margin: 10px auto;display: block" @click="deal">登录</el-button>
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
            async deal(){
                this.$store.commit('changeLogin')
                if (this.radio===1){
                    await this.$router.addRoutes(this.$store.getters.routes)
                    this.$router.push({path:'/'})
                }
                if (this.radio===2){
                    this.$store.commit('changeType',this.radio)
                    await this.$router.addRoutes(this.$store.getters.routes)
                    this.$router.push({path:'/'})
                }
                if (this.radio===3){
                    this.$store.commit('changeType',this.radio)
                    await this.$router.addRoutes(this.$store.getters.routes)
                    this.$router.push({path:'/'})
                }
                if (this.radio===4){
                    this.$store.commit('changeType',this.radio)
                    await this.$router.addRoutes(this.$store.getters.routes)
                    this.$router.push({path:'/'})
                }
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
