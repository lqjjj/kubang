<template>
    <div class="reg_main">
        <el-page-header @back="goBack" title="返回登录" content="注册账号" style="margin-bottom: 40px">
        </el-page-header>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item>
            <el-switch
                v-model="type"
                active-text="邮箱注册"
                inactive-text="手机号注册">
        </el-switch>
        </el-form-item>
        <el-form-item v-if='!type' label="手机号" prop="tell">
            <el-input type="tel" v-model="ruleForm.tel" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item v-if='type' label="邮箱账号" prop="tell">
            <el-input type="tel" v-model="ruleForm.tel" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邀请码" prop="invite">
            <el-input  v-model="ruleForm.invite" autocomplete="off"></el-input>
        </el-form-item>
        <el-row type="flex" :gutter="20">
            <el-col :span="20">
                <el-form-item label="验证码" prop="code">
                <el-input v-model="ruleForm.code"></el-input></el-form-item>
            </el-col>
            <el-col :span="10">
                <el-button @click="send">
                    <span v-show="show">获取验证码</span>
                    <span v-show="!show" class="count">{{count}} s</span>
                </el-button>
            </el-col>
        </el-row>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    const TIME_COUNT = 60;
    export default {
        name: "reg",
        data() {
            var checkAge = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                }
                callback()
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    code: '',
                    tel:"",
                    invite:""
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    code: [
                        { validator: checkAge, trigger: 'blur' }
                    ],
                    invite:[
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                type:true,
                show:true,
                count:'',
                timer: null
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post(`/api/exhibition/email/check/register?email=${this.ruleForm.tel}&pwd=${this.ruleForm.pass}&code=${this.ruleForm.code}&recCode=${this.ruleForm.invite}`).then((res)=>{
                            if(res.data.errMsg){
                                this.$message.error(res.data.errMsg)
                            }
                            else {
                                this.$message.success('注册成功')
                                this.$router.push({path:'/login'})
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            goBack(){
              this.$router.back()
            },
            send(){
                if (!this.timer) {
                    if(this.type){
                            this.axios.post(`/api/exhibition/email/send/emailRegister?to=${this.ruleForm.tel}`).then(()=>{
                                this.$message.success('发送成功')
                            })
                        .catch((res)=>{
                            this.$message.error(res)
                        })
                    }

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
        }
    }
    }
</script>

<style scoped>
.reg_main{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:400px;
}
</style>
