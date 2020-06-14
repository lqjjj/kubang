<template>
    <div id="login">
        <h2 style="text-align: center">酷邦网管理系统</h2>
    <el-radio-group v-model="radio" style="">
        <el-radio :label="1">个人用户</el-radio>
        <el-radio :label="2">商家用户</el-radio>
        <el-radio :label="3">展会用户</el-radio>
        <el-radio :label="4">管理员用户</el-radio>
    </el-radio-group>
<!--        <el-form label-width="120px" style="margin-top: 50px;height:200px" >-->
            <el-form label-width="120px" style="height:200px" >
            <el-form-item>
                <el-switch
                        v-model="type"
                        active-text="验证码登录"
                        inactive-text="账号登录">
                </el-switch>
            </el-form-item>
            <el-form-item label="邮箱/手机号" label-width="120px">
                <el-input v-model="account"> </el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="120px" v-if="type">
                <el-input v-model="pass" type="password"> </el-input>
            </el-form-item>
            <el-row type="flex" :gutter="20" v-show="!type">
                <el-col :span="20">
                    <el-form-item label="验证码" prop="age">
                        <el-input v-model="code"></el-input></el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-button @click="send">
                        <span v-show="show">获取验证码</span>
                        <span v-show="!show" class="count">{{count}} s</span>
                    </el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-row :gutter="10" type="flex" justify="center" style="margin-top: 10px">
            <el-col :span="5"><el-button size="small" style="margin: 10px auto;display: block" @click="dealReg">注册</el-button></el-col>
            <el-col :span="5"><el-button size="small" style="margin: 10px auto;display: block" @click="dealLogin">登录</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
    const TIME_COUNT = 60;
    export default {
        name: "logIn",
        data () {
            return {
                radio: 1,
                type:true,
                show:true,
                count:'',
                timer: null,
                code:"",
                pass:"",
                account:""
            }
    },
        methods:{
            async dealLogin(){
                this.$store.commit('changeType',this.radio)
                await this.$router.addRoutes(this.$store.getters.routes)
                this.$router.push({path:'/'})
                sessionStorage.setItem('type',this.radio)
            },
            dealReg(){
                this.$router.push({path:'/regist'})
            },
            send(){
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);  // 清除定时器
                            this.timer = null;
                        }
                    }, 1000)
                }
        }}
    }
</script>

<style scoped>
#login{
    position: absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    width: 450px;
}
</style>
