<template>
    <div class="main">
        <el-page-header @back="goBack" content="展会信息" style="margin-bottom: 20px">
        </el-page-header>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="展会id" prop="id">
                <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
            <el-form-item label="展会名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="展会时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="11">
            <el-form-item label="展会id" prop="id">
                <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
                </el-col>
                <el-col :span="11">
            <el-form-item label="所用展厅" prop="showRoom">
                <el-input v-model="ruleForm.showRoom"></el-input>
            </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11">
                    <el-form-item label="展会面积" prop="acreage">
                        <el-input v-model="ruleForm.acreage"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="所属行业" prop="trade">
                        <el-input v-model="ruleForm.trade"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11">
                    <el-form-item label="主办单位" prop="organizer">
                        <el-input v-model="ruleForm.organizer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="承办单位id" prop="contractorId">
                        <el-input v-model="ruleForm.contractorId"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11">
                    <el-form-item label="举办届数" prop="session">
                        <el-input v-model="ruleForm.session"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="举办周期" prop="period">
                        <el-input v-model="ruleForm.period"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11">
                    <el-form-item label="展会概况" prop="introduction">
                        <el-input v-model="ruleForm.introduction"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="联系方式" prop="Tel">
                        <el-input v-model="ruleForm.Tel"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11">
                    <el-form-item label="status" prop="status">
                        <el-input v-model="ruleForm.status"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="图标URL地址" prop="picture">
                        <el-input v-model="ruleForm.picture"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data() {
            return {
                ruleForm: {
                    name: '',
                    id:"",
                    startTime:"",
                    endTime:"",
                    exhibitionHallId:"",
                    showRoom:"",
                    acreage:"",
                    trade:"",
                    organizer:'',
                    contractorId:'',
                    session:'',
                    period:"",
                    introduction:'',
                    Tel:'',
                    status:"",
                    picture:''
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            goBack(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

</style>
