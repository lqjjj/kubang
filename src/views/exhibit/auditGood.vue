<template>
    <div>
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
                    prop="storename"
                    label="商家名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="exhibition"
                    label="所属展会"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="申请详情"
                    width="180">
                <template >
                    <el-link type="primary">下载链接</el-link>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index)">通过</el-button>
                    <el-button size="small" type="danger" @click="handleEdit(scope.$index)">驳回</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "auditGood",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    name: '商品申请',
                    storename:'三只松鼠',
                    exhibition:'厦门国际展览会',
                    status: 1
                }, {
                    date: '2016-05-04',
                    name: '商品申请',
                    storename:'三只松鼠',
                    exhibition:'厦门国际展览会',
                    status: 1
                }, {
                    date: '2016-05-01',
                    name: '商品申请',
                    storename:'三只松鼠',
                    exhibition:'厦门展览会',
                    status: 3
                }, {
                    date: '2016-05-03',
                    name: '商品申请',
                    storename:'三只松鼠',
                    exhibition:'厦门国际展览会',
                    status: 2
                }]
            }
        }
    }
</script>

<style scoped>

</style>
