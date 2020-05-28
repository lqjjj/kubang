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
                    <el-form-item label="展馆id" prop="id">
                        <el-input v-model="ruleForm.exhibitionHallId"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="举办界数" prop="showRoom">
                        <el-input v-model="ruleForm.session"></el-input>
                    </el-form-item></el-col>
                <el-col :span="7">
                    <el-form-item label="举办周期" prop="acreage">
                        <el-input v-model="ruleForm.period"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
                    <el-form-item label="图标" prop="picture">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                :http-request="upload"
                                :file-list="fileList"
                                :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip"></div>
                        </el-upload>
                    </el-form-item>
            <el-row :gutter="20">
                <el-col :span="14">
                    <el-form-item label="展会概况" prop="introduction">
                        <el-input v-model="ruleForm.introduction" type="textarea" :autosize="{ minRows: 3, maxRows: 4}"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="分区信息">
            <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
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
                    startTime:"",
                    endTime:"",
                    exhibitionHallId:"",
                    session:'',
                    period:"",
                    introduction:'',
                    icon:''
                },
                rule:{
                    id:[]
                },
                buttonName:'创建',
                dynamicTags: [],
                inputVisible: false,
                inputValue: ''
            };
        },
        methods: {
            submit() {
                this.ruleForm.subAreaList=this.dynamicTags
                this.id=1
                this.ruleForm.startTime=new Date(this.ruleForm.startTime).Format('yyyy-MM-dd')
                this.ruleForm.endTime=new Date(this.ruleForm.endTime).Format('yyyy-MM-dd')
                this.axios.post(`/api/exhibition/organizer/holdExhibition?subAreaList=${this.dynamicTags}&userId=1&name=${this.ruleForm.name}&startTime=${this.ruleForm.startTime}&endTime=${this.ruleForm.endTime}&exhibitionHallId=${this.ruleForm.exhibitionHallId}&session=${this.ruleForm.session}&period=${this.ruleForm.period}&introduce=${this.ruleForm.introduction}&icon==${this.ruleForm.icon}`)
                .then((res)=>{
                    this.$message.success('添加成功,请等待审核')
                    this.$router.push({path:'/mangeex'})
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            goBack(){
                this.$router.back()
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        },
        created(){
            if(this.$route.params.data){
                this.ruleForm=this.$route.params.data
                this.ruleForm.startTime=new Date(this.ruleForm.startTime)
                this.buttonName='修改'
            }

        }
    }
</script>

<style scoped>

</style>
