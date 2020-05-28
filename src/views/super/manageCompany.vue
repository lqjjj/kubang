<template>
    <div>
        <el-row :gutter="20" id="search_bar">
            <el-col :span="6"><el-input v-model="searching" placeholder="请输入关键词搜索商家" style="margin-bottom: 20px;width: 300px"></el-input></el-col>
            <el-col :span="2"><el-button  @click="handleSearch">搜索商家</el-button></el-col>
            <el-col :span="6"><el-button  @click="handleId">搜索商家ID</el-button></el-col>
            <el-col :span="5"><el-button  @click="handleNew">新增商家</el-button></el-col>
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
                prop="telephone"
                label="电话"
                width="150">
        </el-table-column>
        <el-table-column
                label="信息"
                width="250"
        >
            <template slot-scope="scope">
                <el-button size="small" @click="handleGoods(scope.row.id)">查看商品</el-button>
            </template>
        </el-table-column>
        <el-table-column
                label="管理" >
            <template slot-scope="scope">
                <el-button size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
        <div class="pagination">
        <el-pagination layout="prev, pager, next" :page-size=10 :current-page="cuPage" :total="total" @current-change="handleCurrentChange"></el-pagination>
    </div>
    </div>
</template>

<script>
    export default {
        name: "manageCompany",
        data(){
            return {
                tableData:[

                ],
                total:1,
                cuPage:1
            }
        },
        methods:{
            init(){
                this.axios.get(`/api/exhibition/Admin/queryAllCompany/${this.cuPage}`)
                .then((res)=>{
                    this.tableData=res.data.data.list
                    this.total=res.data.data.total
                })
            },
            handleCurrentChange(page){
                this.cuPage=page;
                this.init()
            },
            handleEdit(id){
                this.$router.push({path:'/merInfo',query:{id:id}})
            },
            handleGoods(id){
                this.$router.push({path:'/manageCompany/goods',query:{id:id}})
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>
    .pagination{
        margin-top: 22px;
        display: flex;
        justify-content: center;
    }
</style>
