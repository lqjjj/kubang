<template>
    <div>
        <el-table
                :data="adData"
                style="width: 100%">
            <el-table-column
                    label="轮播顺序"
                    width="80">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column
                    label="开始时间"
                    width="150">
                <template slot-scope="scope">
                    {{new Date(scope.row.startTime).toLocaleDateString()}}
                </template>
            </el-table-column>
            <el-table-column
                    label="结束时间"
                    width="150">
                <template slot-scope="scope">
                    {{new Date(scope.row.endTime).toLocaleDateString()}}
                </template>
            </el-table-column>
            <el-table-column
                    label="广告id"
                    width="90">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
            <el-table-column
                    label="图片预览"
                    width="300">
                <template slot-scope="scope">
                    <el-image
                            style="width: 200px; height: 100px"
                            :src="scope.row.picture"
                            fit="contain"></el-image>
                </template>
            </el-table-column>
            <el-table-column
                    label="优先级"
                    width="100">
                <template slot-scope="scope">
                    {{scope.row.priority}}
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="dealEdit(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="展示优先级" :label-width="formLabelWidth">
                    <el-select v-model="form.priority" placeholder="请选择优先级">
                        <el-option
                                v-for="item in options"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="展示时间" :label-width="formLabelWidth">
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="开始时间" v-model="form.startTime" style="width: 200px;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-date-picker type="date" placeholder="结束时间" v-model="form.endTime" style="width:200px;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                <el-upload
                        action="/api/exhibition/Admin/upload/picture/1"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :file-list="fileList"
                        :on-change="handleBefore"
                        :on-success="handleSuccess"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dealConfirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "manageAd",
        data() {
            return {
                imageUrl: '',
                adData:[],
                dialogFormVisible: false,
                form: {
                    startTime:'',
                    endTime:'',
                    priority:0,
                    id:0,
                    picture:''
                },
                formLabelWidth: '120px',
                options:[
                    0,1,2,3,4,5,6,7,8
                ],
                fileList:[]
            }
        },
        methods:{
            handleBefore(file,fileList){
                this.fileList=fileList.slice(-1)
            },
            handleSuccess(response){
                this.form.picture=response.data
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            init(){
                this.axios.get(`/api/exhibition/advertisement/get?pageNum=1`).then((res)=>{
                    this.adData=res.data.data.goodsList
                })
            },
            dealEdit(scope){
                this.dialogFormVisible = true
                this.form.startTime=scope.startTime
                this.form.endTime=scope.endTime
                this.form.priority=scope.priority
                this.form.id=scope.id
                this.form.picture=scope.picture
                this.fileList=[{
                    name:'1',
                    url:scope.picture
                }]
            },
            dealConfirm(){
                console.log(this.form)
                this.axios.post(`/api/exhibition/advertisement/updateAds`,this.form).then((res)=>{
                    console.log(res)
                })
            }
        },
        created() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
