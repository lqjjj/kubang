<template>
    <div>
        <div class="title" style="display: flex">
            <h3>广告优先级调整</h3>
            <el-button size="mini" style="height: 40px;margin-top: 35px;margin-left: 800px">确认修改顺序</el-button>
        </div>
        <el-table
                :data="adData"
                style="width: 100%">
            <el-table-column
                    label="轮播顺序"
                    width="100">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="广告名称"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="exhibition"
                    label="广告所属方"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="图片预览"
                    width="350">
                <template slot-scope="scope">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="scope.url"
                            fit="contain"></el-image>
                </template>
            </el-table-column>
            <el-table-column
                    label="图片上传"
                    width="300">
                <template >
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleUp(scope.$index)">上调</el-button>
                    <el-button size="small" @click="handleDown(scope.$index)">下调</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "manageAd",
        data() {
            return {
                imageUrl: '',
                adData:[{
                    date: '1',
                    name: '广告1',
                    url: '../../../../public/1.png',
                    exhibition: '厦门国际展览会',
                    status: 1
                }, {
                    date: '2',
                    name: '广告2',
                    exhibitionId: '中',
                    exhibition: '厦门国际展览会',
                    status: 1
                }, {
                    date: '3',
                    name: '广告3',
                    exhibitionId: '最高',
                    exhibition: '厦门展览会',
                    status: 3
                }, {
                    date: '4',
                    name: '广告4',
                    exhibitionId: '普通',
                    exhibition: '厦门国际展览会',
                    status: 2
                }]
            }
        },
        methods:{
            handleUp(scope){
                if (scope===0){
                    return
                }
                else {
                    let tmp=this.adData[scope]
                    this.adData[scope]=this.adData[scope-1]
                    this.adData.splice(scope-1,1,tmp)
                }

            },
            handleDown(scope){
                if (scope===3){
                    return
                }
                else {
                    let tmp=this.adData[scope]
                    this.adData[scope]=this.adData[scope+1]
                    this.adData.splice(scope+1,1,tmp)
                }
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
        }
    }
</script>

<style scoped>

</style>
