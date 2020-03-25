<template>
    <div id="exhibition">
        <el-row :gutter="20" id="search_bar">
            <el-col :span="6"><el-input v-model="searching" placeholder="请输入关键词搜索展会" style="margin-bottom: 20px;width: 300px"></el-input></el-col>
            <el-col :span="2"><el-button  @click="handleSearch">搜索展会</el-button></el-col>
            <el-col :span="6"><el-button  @click="handleId">搜索展会ID</el-button></el-col>
            <el-col :span="5"><el-button  @click="handleEdit">添加展会</el-button></el-col>
            <el-col :span="2"><el-button  @click="handlePage('up')">上一页</el-button></el-col>
            <el-col :span="2"><el-button  @click="handlePage('next')">下一页</el-button></el-col>
        </el-row>
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
                    label="管理" v-if="this.$store.getters.type===4">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "exhibition",
        data() {
            return {
                searching:'',
                value:'',
                tableData: [],
                page:1,
                options:[
                    {
                    value:'name',
                    label:'名称'},
                    {
                        value: 'date',
                        label: '日期'
                    },
                    {
                        value: 'id',
                        label: '展会id'
                    }
                ]
            }
        },
        methods:{
            handleEdit(scope){
                this.$router.push({path:'/edit',query:{id:this.tableData[scope].id}})
            },
            handleDetails(scope){
                this.$router.push('/exhibit')
            },
            handlePage(type){
                if (type==='next'){
                    this.page++
                }
                this.initData()
            },
            handleSearch(){
                this.axios.get(`/api/exhibition/exhibition/admin/query/keyWord?keyWord=${this.searching}&pageNum=1`).then((res)=>{this.formatData(res.data.data.list)})
            },
            handleId(){
                this.axios.get(`/api/exhibition/exhibition/admin/query/id/${this.searching}`).then((res)=>{
                    this.tableData=[]
                    this.tableData.push(res.data.data)
                    this.tableData[0].startTime=new Date(this.tableData[0].endTime).toLocaleDateString()
                    this.tableData[0].endTime=new Date(this.tableData[0].endTime).toLocaleDateString()
                })
            },
            initData(){
                this.axios.get(`/api/exhibition/exhibition/admin/query/allStatus/${this.page}`).then((res)=>{this.formatData(res.data.data.list)})
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
                        introduction:item.introduction,
                        showRoom:item.showRoom,
                        status:item.status,
                        tel:item.tel
                    })
                }
            }
        },
        computed:{
        },
        created(){
            this.initData()
        }
    }
</script>

<style scoped>
    #search_bar{
        display: flex;
        justify-content: flex-start;
    }
</style>
