<template>
    <div>

    <el-form label-width="80px">
        <el-row :gutter="40">
            <el-col :span="8">
        <el-form-item>
        <el-switch
                v-model="value"
                active-text="编辑"
                inactive-text="查看"
                @change="dealSwitch(value)"
        >
        </el-switch>
        </el-form-item>
            </el-col>
            <el-col :span="5" v-if="this.value">
                <el-button   type="primary" icon="el-icon-edit" @click="submit">确认修改</el-button>
            </el-col>
        </el-row>
    <el-row :gutter="20">
        <el-col :span="8">
        <el-form-item label="名字" >
            <el-input v-model="list.name" :readonly="!value"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
        <el-form-item label="类别" >
            <el-input v-model="list.type" :readonly="!value"></el-input>
        </el-form-item>
        </el-col>
    </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="地址" >
                    <el-input v-model="list.address" :readonly="!value"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="网址" >
                    <el-input v-model="list.website" :readonly="!value"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="电话" >
                    <el-input v-model="list.telephone" :readonly="!value"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="认证状态" >
                    <el-input value="已认证" :readonly=true></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="公司介绍" >
            <el-input type="textarea" autosize v-model="list.introduction" ></el-input>
        </el-form-item>
        <el-form-item label="公司图标" v-if="!this.value">
        <el-image :src="list.headPicture" style="width: 250px;height: 250px" >
            <el-input v-model="list.headPicture" :readonly=true  v-if="this.value"></el-input>
        </el-image>
        </el-form-item>
        <el-col :span="12">
        <el-form-item label="公司图标" v-if="this.value">
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
            </el-col>
    </el-form>
    </div>
</template>

<script>
    export default {
        name: "merInfo",
        data(){
            return{
                list:{},
                value: false,
                fileList:[],
                id:1
            }
        },
        methods:{
            dealSwitch(value){
                if(value===false){
                    this.initPage()
                }
            },
            initPage(){
                this.axios.get(`/api/exhibition/company/getInformationByCompanyId?id=${this.id}`)
                    .then((res)=>{
                        this.list=res.data.data.companyInformation
                    })
            },
            submit(){
                this.$confirm('你确定要提交修改吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    let filelist=this.$refs.upload.uploadFiles
                    let formData=new FormData
                    let headerConfig={headers:{'Content-Type': 'multipart/form-data'}};
                    if(filelist[0]){
                        formData.append('file',filelist[0].raw)
                    }
                        // ?companyId=1&name=${this.list.name}&address=${this.list.addresss}&website=${this.list.website}&type=${this.list.type}&tel=${this.list.telephone}&introduce=${this.list.introduction}
                    this.axios.post(`/api/exhibition/company/updateInformation?companyId=1&name=${this.list.name}&address=${this.list.addresss}&website=${this.list.website}&type=${this.list.type}&tel=${this.list.telephone}&introduce=${this.list.introduction}`,formData,headerConfig).then(()=>{
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                        })
                    })
                .catch((error)=>{
                        this.$message({
                            message: '请求失败！',
                            type: 'error'
                        })
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        created() {
            if(this.$route.query.id){
                this.id=this.$route.query.id
            }
            this.initPage()
        }
    }
</script>

<style scoped>

</style>
