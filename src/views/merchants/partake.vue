<template>
    <div id="partake">
        <el-table
                :data="tableData"
                style="width: 100%"
        >
            <el-table-column
                    prop="id"
                    label="id"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="startTime"
                    label="开始日期"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="endTime"
                    label="结束日期"
                    width="100">
            </el-table-column>
            <el-table-column
                    label="展会名称"
                    width="200"
            >
                <template slot-scope="scope">
                    <el-link type="primary" @click="handleDetails(scope.$index)">{{scope.row.name}}</el-link>
                </template>
            </el-table-column>
            <el-table-column
                    prop="introduction"
                    label="展会概况"
                    width="200"
            >
            </el-table-column>
            <el-table-column
                    prop="showRoom"
                    label="所用展厅"
                    width="150"
            >
            </el-table-column>
            <el-table-column
                    label="展会状态">
                <template slot-scope="scope">
                    <el-tag :type="color[scope.row.status]">
                        {{type[scope.row.status]}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index)">查看详情</el-button>
                    <el-button size="small" @click="handleApply(scope.row.id)">我要参展</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination layout="prev, pager, next" :page-size=8 :current-page="cuPage" :total="total" @current-change="handleCurrentChange"></el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "partake",
        data(){
            return{
                tableData:[],
                type:[
                    '等待上传','待审核','初审通过','初审未通过','初审通过','终审通过','终审未通过','已删除'
                ],
                color:[
                    'info','','success','warning','success','success','warning','danger'
                ],
                cuPage:1,
                total:1,
            }
        },
        methods:{
            initData(){
                this.axios.get(`/api/exhibition/exhibition/queryReadyToStartExhibitionInfo/${this.cuPage}`).then((res)=>{
                    this.formatData(res.data.data.exhibitionList)
                    this.total=res.data.data.maxPage*8
                }
                    )
            },
            formatData(list){
                this.tableData=[]
                for(let item of list){
                    this.tableData.push({
                        name:item.name,
                        id:item.id,
                        startTime:new Date(item.startTime).toLocaleDateString(),
                        endTime:new Date(item.endTime).toLocaleDateString(),
                        organizer:item.organizer,
                        introduction:item.introduction.slice(0,20)+'....',
                        showRoom:item.showRoom,
                        status:item.status,
                        tel:item.tel
                    })
                }
            },
            handleCurrentChange(page){
                this.cuPage=page;
                this.initData()
            },
            handleApply(id) {
                this.$confirm('你确定要提交申请吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.axios.post(`/api/exhibition/company/attendExhibition?companyId=8&exhibitionId=${id}`).then(() => {
                        this.$message.success('申请成功')
                    })
                })
            }
        },
        created() {
            this.initData()
        }
    }
</script>

<style scoped>

</style>
