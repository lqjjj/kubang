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
                    label="状态">
                <template slot-scope="scope">
                    <el-tag  >{{state[scope.row.goodsStatus]}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(tableData[scope.$index])">编辑</el-button>
                    <el-button size="small" @click="handleApply(scope.row.goodsId)">优先级申请</el-button>
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
                ],
                state:['','审核中','审核通过','审核未通过','展品优先级审核中','提交修改审核中'],
                id:7
            }
        },
        methods:{
            handleApply(id){
                console.log(id)
                this.$prompt('请申请输入优先级(0，1，2，3)', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[0-3]/,
                    inputErrorMessage: '请输入0，1，2，3'
                }).then(({ value }) => {
                    this.axios.post(`/api/exhibition/goods/modify/priority?goodsId=${id}&priority=${value}`)
                    .then(()=>{
                            this.init()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            handleEdit(item){
                this.$router.push({name:'addGoods',params:{data:item}})
            },
            handleNew(){
                this.$router.push({name:'addGoods'})
            },
            init(){
                this.axios.get(`/api/exhibition/goods/query/company?companyId=${this.id}&goodsStatus=0&pageNum=1&pageSize=10`).then(res=>this.tableData=res.data.data.list)
            }
        },
        created() {
            if(this.$route.query.id){
                this.id=this.$route.query.id
            }
            this.init()
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
