<template>
    <div id="goods">
        <el-row :gutter="20" id="search_bar">
            <el-col :span="6"><el-input v-model="searching" placeholder="请输入关键词搜索商品" style="margin-bottom: 20px;width: 300px"></el-input></el-col>
            <el-col :span="2"><el-button  @click="handleSearch">搜索商品</el-button></el-col>
            <el-col :span="6"><el-button  @click="handleId">搜索商品ID</el-button></el-col>
            <el-col :span="5"><el-button  @click="handleNew">新增商品</el-button></el-col>
            <el-col :span="2"><el-button  @click="handlePage('up')">上一页</el-button></el-col>
            <el-col :span="2"><el-button  @click="handlePage('next')">下一页</el-button></el-col>
        </el-row>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="goodsId"
                    label="商品id"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="商品名称"
                    width="150"
            >
                <template slot-scope="scope">
                    <div class="text">{{scope.row.goodsName}}</div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="priority"
                    label="优先级">
            </el-table-column>
            <el-table-column
                    prop="currentPrice"
                    label="现价">
            </el-table-column>
            <el-table-column
                    label="类别">
                <template slot-scope="scope">
                    {{type[scope.row.categoryId]}}
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(tableData[scope.$index])">编辑</el-button>
                    <el-button size="small" @click="handleApply(scope.$index)">优先级申请</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "goods",
        data() {
            return {
                tableData: [
                    {
                        goodsId:1,
                        goodsName:'饼干',
                        originalPrice:'20',
                        currentPrice:'15',
                        originPlace:'厦门'
                    }
                ],
                type:[
                    '','教育','农业','运动','美妆'
                ]
            }
        },
        methods:{
            handleApply(){
                this.$prompt('请申请输入优先级(0，1，2，3)', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[0-3]/,
                    inputErrorMessage: '请输入0，1，2，3'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            handleEdit(item){
                this.$router.push({name:'addGoods',params:{data:item}})
            }
        },
        created() {
            this.axios.get(`/api/exhibition/goods/query/company?companyId=7&pageNum=1&pageSize=5`).then(res=>this.tableData=res.data.data.list)
        }
    }
</script>

<style scoped>
    .image {
        width: 100%;
        display: block;
    }
    .text{
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
    }
</style>
