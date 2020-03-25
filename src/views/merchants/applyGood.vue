<template>
    <div>
        <h3>请根据示例文件中的格式，填好所要申请的商品、申请的展示优先级、展示时间段等信息后，上传文件等待审核</h3>
        <div style="display: flex">
            <div class="left">
                <el-link type="primary" style="margin-bottom:10px">点击下载示例模板文件</el-link>
                <div style="width: 300px">
                    <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :auto-upload="false"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">请根据示例文件的格式填写文件</div>
                    </el-upload>
                    <el-button style="margin-top:10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                </div>
            </div>
            <div class="right">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="申请日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="申请名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            label="审核状态">
                        <template slot-scope="scope">
                            <el-tag :type="scope.row.status==1?'info':(scope.row.status==2?'success':'danger')">{{scope.row.status==1?'审核中':(scope.row.status==2?'已通过':'已拒绝')}}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="管理" >
                        <template slot-scope="scope">
                            <el-button size="small" v-if="scope.row.status==1" type="danger" @click="handleEdit(scope.$index)">撤回</el-button>
                            <el-button size="small" v-if="scope.row.status!==1"  @click="handleEdit(scope.$index)">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "applyGood",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    name: '商品申请',
                    status: 1
                }, {
                    date: '2016-05-04',
                    name: '商品申请',
                    status: 1
                }, {
                    date: '2016-05-01',
                    name: '商品申请',
                    status: 3
                }, {
                    date: '2016-05-03',
                    name: '商品申请',
                    status: 2
                }]
            }
        }
    }
</script>

<style scoped>
    .right{
        width: 600px;
        margin-left: 200px;
    }
</style>
