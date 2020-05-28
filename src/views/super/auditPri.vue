<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="goodsId"
                    label="商品id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="goodsName"
                    label="商品名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="companyId"
                    label="公司id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="priority"
                    label="申请优先级级别"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="商品图片"
                    width="180">
                <template slot-scope="scope">
                    <el-image :src="scope.row.image" fit='contain' style="height: 50px"></el-image>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleCheck(scope.row)">查看详情</el-button>
                    <el-button size="small" type="success" @click="handlePass(scope.row.goodsId)">通过</el-button>
                    <el-button size="small" type="danger" @click="handleReject(scope.row.goodsId)">驳回</el-button>
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
                tableData: []
            }
        },
        methods:{
            init(){
                this.axios.get(`/api/exhibition/Admin/queryGoodsByStatus/1/4`).then((res)=>{
                    this.tableData=res.data.data.list
                })
            },
            handlePass(id){
                this.axios.post(`/api/exhibition/goods/modify/goodStatus?goodsId=${id}&goodsStatus=2`).then(
                    ()=>{
                        this.$message.success('操作成功')
                        this.init()
                    }
                )
            },
            handleReject(id){
                this.axios.post(`/api/exhibition/goods/modify/goodStatus?goodsId=${id}&goodsStatus=3`).then(
                    ()=>{
                        this.$message.success('操作成功')
                        this.init()
                    }
                )
            },
            handleCheck(item){
                console.log(item)
                this.$router.push({name:'addGoods',params:{data:item}})
            }
        },
        created() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
