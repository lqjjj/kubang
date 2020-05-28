<template>
    <div id="manage">
        <el-col :span="5" ><el-button  @click="handleNew" style="margin-bottom: 20px">新增展会</el-button></el-col>
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
                    label="开始日期"
                    width="100">
                <template slot-scope="scope">
                    {{new Date(scope.row.startTime).toLocaleDateString()}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="endTime"
                    label="结束日期"
                    width="100">
            </el-table-column>
            <el-table-column
                    label="展会名称"
                    width="150"
            >
                <template slot-scope="scope">
                    <el-link type="primary" @click="handleDetails(scope.$index)">{{scope.row.name}}</el-link>
                </template>
            </el-table-column>
            <el-table-column
                    prop="organizer"
                    label="主办单位"
            >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="150"
            >
            </el-table-column>
            <el-table-column
                    label="展会概况"
                    width="200"
            ><template slot-scope="scope">
                <div  class="text">
                    {{scope.row.introduction}}
                </div>
            </template>
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
                    prop="tel"
                    label="联系方式"
                    width="120"
            >
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
        name: "mangeExhibit",
        data(){
            return{
                tableData:[],
                type:[
                    '等待上传','待审核','初审通过','初审未通过','初审通过','终审通过','终审未通过','已删除'
                ],
                color:[
                    'info','','success','warning','success','success','warning','danger'
                ],
            }
        },
        methods:{
            initData(){
                this.axios.post(`/api/exhibition/organizer/queryOrganizerHoldExhibition?id=1`).then((res)=>{this.formatData(res.data.data.data)})
            },
            formatData(list){
                this.tableData=[]
                console.log(list)
                for(let item of list){
                    this.tableData.push({
                        name:item.name,
                        id:item.id,
                        startTime:new Date(item.startTime).toLocaleDateString(),
                        endTime:new Date(item.endTime).toLocaleDateString(),
                        organizer:item.organizer,
                        introduction:item.introduction,
                        showRoom:item.showRoom,
                        status:item.status,
                        tel:item.tel
                    })
                }
            },
            handleNew(scope){
                this.$router.push({name:'Add'})
            },
        },
        created() {
            this.initData()
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
