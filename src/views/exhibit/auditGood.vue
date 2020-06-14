<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="商家图标"
                    width="130">
                <template slot-scope="scope">
                <el-image
                        style="width: 100px; height: 100px"
                        :src="scope.row.headPicture"
                        fit="contain"></el-image>
            </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="商家名称"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="telephone"
                    label="联系电话"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="introduction"
                    label="介绍"
                    width="180">
                <template slot-scope="scope">
                    <div  class="text">
                        {{scope.row.introduction}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="申请详情"
                    width="180">
                <template >
                    <el-link type="primary">查看详情</el-link>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" >
                <template slot-scope="scope">
                    <el-button size="small" @click="handlePass(scope.row.id)">通过</el-button>
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
        },
        methods:{
            init(){
                this.axios.post(`/api/exhibition/organizer/checkCompanyApplyByExhibitionId?exhibitionId=2`).then((res)=>{
                    this.tableData=res.data.data
                })
            },
            handlePass(id){
                this.axios.post(`/api/exhibition/organizer/verifyCompanyApplyByExhibitionId?companyId=${id}&exhibitionId=2`).then((res)=>{
                    this.$message.success('操作成功')
                    this.init()
                })
            }
        },
        created() {
            this.init()
        }
    }
</script>

<style scoped>
    .text{
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
    }

</style>
