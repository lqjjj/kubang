<template>
    <div id="main">
        <el-page-header @back="goBack" content="商品详情" style="margin-bottom: 20px">
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
                    prop="name"
                    label="商品"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价">
            </el-table-column>
            <el-table-column
                    prop="detail"
                    label="商品描述">
            </el-table-column>
            <el-table-column
                    prop="url"
                    label="商品图片url">
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
        name: "store",
        data(){
            return{
                tableData:[{
                    id: '1',
                    name: '薯片',
                    price:"5",
                    detail:'来自美国，好吃的薯片',
                    url:'/api/goods/1253'
                }, {
                    id: '1',
                    name: '牛奶',
                    price:"10",
                    url:'/api/goods/123'
                }, {
                    id: '1',
                    name: '蔬菜',
                    price:"10",
                    url:'/api/goods/123'
                }, {
                    id: '1',
                    name: '球拍',
                    price:"10",
                    url:'/api/goods/123'
                }]
            }
        },
        methods:{
            goBack(){
                this.$router.back()
            }
        },
        created() {
            axios.get('http://localhost:3000/goods').then(res=>this.tableData=res.data
            )
        }
    }
</script>

<style scoped>

</style>
