<template>
    <div>
        <el-row :gutter="20" id="search_bar">
            <el-col :span="6"><el-input v-model="searching" placeholder="请输入关键词搜索商家" style="margin-bottom: 20px;width: 300px"></el-input></el-col>
            <el-col :span="2"><el-button  @click="handleSearch">搜索商家</el-button></el-col>
            <el-col :span="6"><el-button  @click="handleId">搜索商家ID</el-button></el-col>
            <el-col :span="5"><el-button  @click="handleNew">新增商家</el-button></el-col>
            <el-col :span="2"><el-button  @click="handlePage('up')">上一页</el-button></el-col>
            <el-col :span="2"><el-button  @click="handlePage('next')">下一页</el-button></el-col>
        </el-row>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="公司id"
                width="100">
        </el-table-column>
        <el-table-column
                prop="name"
                label="公司名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="type"
                label="公司类型"
                width="120">
        </el-table-column>
        <el-table-column
                prop="website"
                label="公司网站"
                width="200">
        </el-table-column>
        <el-table-column
                prop="phone"
                label="电话"
                width="150">
        </el-table-column>
        <el-table-column
                label="信息"
                width="250"
        >
            <template slot-scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index)">查看商品</el-button>
                <el-button size="small" @click="handleEdit(scope.$index)">详细信息</el-button>
            </template>
        </el-table-column>
        <el-table-column
                label="管理" >
            <template slot-scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        name: "manageCompany",
        data(){
            return {
                tableData:[{
                    id:1,
                    name:'飞利浦',
                    type:'公司类型',
                    website:'www.qewqweqwew.com',
                    phone:'13423422123'
                },{
                    id:2,
                    name:'旺旺',
                    type:'公司类型',
                    website:'www.qeww.com',
                    phone:'13423422123'
                }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
