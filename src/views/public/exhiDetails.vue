<template>
    <div id="main">
        <el-page-header @back="goBack" content="商家详情" style="margin-bottom: 20px">
        </el-page-header>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="序号"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="店铺名"
                    width="180">
                <template slot-scope="scope">
                    <el-link type="primary" @click="handleEdit(scope.$index)">{{scope.row.name}}</el-link>
                </template>
            </el-table-column>
            <el-table-column
                    prop="owner"
                    label="所有者">
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index)">编辑信息</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    const axios = require('axios')
    export default {
        name: "exhiDetails",
        data(){
            return{
                tableData:[{
                    id: '1',
                    name: '国际展会',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '1',
                    name: '农业展会',
                    owner: '上海市普陀区金沙江路 1517 弄',
                }, {
                    id: '1',
                    name: '体育展会',
                    owner: '上海市普陀区金沙江路 1519 弄',
                }, {
                    id: '1',
                    date: '2016-05-03',
                    owner: '茶叶展会',
                }]
            }
        },
        methods:{
            handleEdit(scope){
                this.$router.push('/store')
            },
            goBack(){
                this.$router.back()
            }
        },
        created() {
            axios.get('http://localhost:3000/store').then(res=>this.tableData=res.data
            )
        }
    }
</script>

<style scoped>

</style>
