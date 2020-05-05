<template>
    <div class="main">
        <el-page-header @back="goBack" content="展会信息" style="margin-bottom: 20px">
        </el-page-header>
        <el-form label-width="100px" class="demo-ruleForm" >
            <el-form-item label="展会名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="展会时间" >
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="开始时间" v-model="ruleForm.startTime" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="结束时间" v-model="ruleForm.endTime" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="7">
            <el-form-item label="展会id" prop="id">
                <el-input v-model="ruleForm.id" :disabled="true"></el-input>
            </el-form-item>
                </el-col>
                <el-col :span="7">
            <el-form-item label="所用展厅" prop="showRoom">
                <el-input v-model="ruleForm.showRoom"></el-input>
            </el-form-item></el-col>
                <el-col :span="7">
                    <el-form-item label="展会面积" prop="acreage">
                        <el-input v-model="ruleForm.acreage"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-form-item label="所属行业" prop="acreage">
                    <el-select   v-model="ruleForm.trade" placeholder="请选择分类">
                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="主办单位" prop="organizer">
                        <el-input v-model="ruleForm.organizer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="承办单位id" prop="contractorId">
                        <el-input v-model="ruleForm.contractorId"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-form-item label="举办届数" prop="session">
                        <el-input v-model="ruleForm.session"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="举办周期" prop="period">
                        <el-input v-model="ruleForm.period"></el-input>
                    </el-form-item></el-col>
                <el-col :span="7">
                    <el-form-item label="联系方式" prop="Tel">
                        <el-input v-model="ruleForm.Tel"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-form-item label="展会状态" prop="status">
                        <el-select   v-model="ruleForm.status" placeholder="请选择状态">
                            <el-option v-for="item in options2" :key="item.value" :label="item.label"
                                       :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="图标URL地址" prop="picture">
                        <el-input v-model="ruleForm.picture"></el-input>
                    </el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="14">
                    <el-form-item label="展会概况" prop="introduction">
                        <el-input v-model="ruleForm.introduction" type="textarea" :autosize="{ minRows: 3, maxRows: 4}"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="submit()">立即{{buttonName}}</el-button>
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
                },
                rule:{
                    id:[]
                },
                buttonName:'创建',
                options:[
                    {
                        value:"1",
                        label:'教育'
                    },
                    {
                        value:"2",
                        label:'农业'
                    },
                    {
                        value:"3",
                        label:'运动'
                    },
                    {
                        value:"4",
                        label:'美妆'
                    },
                    ],
                options2:[
                    {
                        value:0,
                        label:'待审核'
                    },
                    {
                        value:1,
                        label:'审核通过'
                    },
                    {
                        value:2,
                        label:'审核未通过'
                    },
                    {
                        value:3,
                        label:'已删除'
                    }
                    ]
            };
        },
        methods: {
            submit() {
                this.$confirm('你确定要提交修改吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.axios.put('/api/exhibition/Admin/updateExhibitionInfo',this.ruleForm).then(()=>{
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            goBack(){
                this.$router.back()
            }
        },
        created(){
            if(this.$route.params.data){
                this.ruleForm=this.$route.params.data
                this.ruleForm.startTime=new Date(this.ruleForm.startTime)
                console.log(this.ruleForm)
                this.buttonName='修改'
            }

        }
    }
</script>

<style scoped>

</style>
