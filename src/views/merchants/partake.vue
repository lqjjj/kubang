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
                    prop="introduction"
                    label="展会概况"
                    width="150"
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
                    <el-tag :type="scope.row.status==0?'':(scope.row.status==1?'success':'info')">{{scope.row.status==0?'筹备中':(scope.row.status==1?'进行中':'已结束')}}</el-tag>
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
                    <el-button size="small" @click="handleEdit(scope.$index)">我要参展</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "partake",
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            initData(){
                this.axios.get(`api/exhibition/Admin/queryAllExhibition/1`).then((res)=>{this.formatData(res.data.data.list)})
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
            }
        },
        created() {
            this.initData()
        }
    }
</script>

<style scoped>

</style>
