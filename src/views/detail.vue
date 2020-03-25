<template>
<div id="detail">
    <div>
        <p style="font-size: 20px"><el-link @click="dialogFormVisible = true"><i class="el-icon-edit"></i> 修改资料</el-link></p>
        <el-avatar :size="80"> user </el-avatar>
        <p>{{user}}</p>
    </div>
    <div class="info" v-if="this.$store.getters.type==1">
        <P>性别：{{sex}}</P>
        <p>绑定邮箱：1999412412@122.com</p>
    </div>
    <el-dialog title="修改个人资料" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input  v-model="user"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="sex" placeholder="请选择性别">
                    <el-option label="男" value="shanghai"></el-option>
                    <el-option label="女" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上传头像" :label-width="formLabelWidth">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                dialogFormVisible:false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                imageUrl: '',
                formLabelWidth: '100px',
                user:'username',
                sex:'男'
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
    #detail{
        display: flex;
        margin-top: 40px;
        margin-left: 30px;
    }
    .info{
        margin-left: 200px;
        margin-top: 60px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
