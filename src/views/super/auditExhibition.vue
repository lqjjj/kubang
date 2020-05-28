<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="展会id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="startTime"
                    label="开始时间"
                    width="180">
                <template slot-scope="scope">
                    {{new Date(scope.row.startTime).toLocaleDateString()}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="endTime"
                    label="结束时间"
                    width="180">
                <template slot-scope="scope">
                    {{new Date(scope.row.endTime).toLocaleDateString()}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="exhibitionHallId"
                    label="展会方id"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="申请详情"
                    width="180">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleCheck(scope.row)">查看详情</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" type="success" @click="handlePass(scope.row.id)">通过</el-button>
                    <el-button size="small" type="danger" @click="handleReject(scope.row.id)">驳回</el-button>
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
                    name: '展会申请',
                    exhibitionId:'1',
                    exhibition:'厦门国际展览会',
                    status: 1
                }, {
                    date: '2016-05-04',
                    name: '展会申请',
                    exhibitionId:'1',
                    exhibition:'厦门国际展览会',
                    status: 1
                }, {
                    date: '2016-05-01',
                    name: '展会申请',
                    exhibitionId:'2',
                    exhibition:'厦门展览会',
                    status: 3
                }, {
                    date: '2016-05-03',
                    name: '展会申请',
                    exhibitionId:'1',
                    exhibition:'厦门国际展览会',
                    status: 2
                }]
            }
        },
        methods:{
            init(){
                this.axios.get(`/api/exhibition/Admin/queryExhibitionByStatus/1/1`).then((res)=>{
                    this.tableData=res.data.data.list
                })
            },
            handlePass(id){
                this.axios.put(`/api/exhibition/Admin/updateExhibitionStatus?id=${id}&status=2`).then(
                    ()=>{
                        this.$message.success('操作成功')
                        this.init()
                    }
                )
            },
            handleReject(id){
                this.axios.put(`/api/exhibition/Admin/updateExhibitionStatus?id=${id}&status=3`).then(
                    ()=>{
                        this.$message.success('操作成功')
                        this.init()
                    }
                )
            },
            handleCheck(item){
                console.log(item)
                this.$router.push({name:'Edit',params:{data:item}})
            }
        },
        created() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
