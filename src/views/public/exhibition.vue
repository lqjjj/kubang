<template>
    <div id="exhibition">
        <el-row :gutter="20" id="search_bar">
            <el-col :span="6"><el-input v-model="searching" placeholder="请输入关键词搜索展会" style="margin-bottom: 20px;width: 300px"></el-input></el-col>
            <el-col :span="3"><el-button  @click="handleSearch">搜索展会</el-button></el-col>
<!--            <el-col :span="3"><el-button  @click="handleId">搜索展会ID</el-button></el-col>-->
            <el-col :span="5"><el-checkbox v-model="checked" style="line-height: 40px" @change="checkboxChange">查看进行中的展会</el-checkbox></el-col>
            <el-col :span="3"><el-button  @click="handleNew">新增展会</el-button></el-col>

        </el-row>
        <el-table
                :data="tableData"
                style="width: 100%"
        >
            <el-table-column
                    prop="id"
                    label="id"
                    width="60">
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
                    <el-link type="primary">{{scope.row.name}}</el-link>
                </template>
            </el-table-column>
            <el-table-column
                    label="图片预览"
                    width="250">
                <template slot-scope="scope">
                    <el-image
                            style="width: 200px; height: 100px"
                            :src="scope.row.picture"
                            fit="contain"></el-image>
                </template>
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
                    width="100"
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
                    label="展示顺序"
                    width="100"
            >
                <template slot-scope="scope">
                <el-select v-model="scope.row.priority" placeholder="" @change="onchange($event,scope.row.id)" :disabled='!(new Date()>new Date(scope.row.startTime)&&new Date()<new Date(scope.row.endTime))'>
                    <el-option
                            v-for="item in options"
                            :key="item"
                            :label="item"
                            :value="item"
                    >
                    </el-option>
                </el-select>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理" v-if="this.$store.getters.type===4">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>
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
        name: "exhibition",
        data() {
            return {
                searching:'',
                value:'',
                tableData: [],
                page:1,
                data:[],
                options:[
                    0,1,2,3,4
                ],
                cuPage:1,
                total:1,
                type:[
                    '等待上传','待审核','初审通过','初审未通过','初审通过','终审通过','终审未通过','已删除'
                ],
                color:[
                    'info','','success','warning','success','success','warning','danger'
                ],
                checked:false
            }
        },
        methods:{
            handleEdit(scope){
                this.$router.push({name:'Edit',params:{data:this.data[scope]}})
            },
            handleNew(){
              this. $router.push({path:'/edit'})
            },
            handleDetails(scope){
                this.$router.push('/exhibit')
            },
            handleCurrentChange(page){
                this.cuPage=page;
                this.initData()
            },
            handleSearch(){
                this.axios.get(`/api/exhibition/Admin/queryExhibitionByKeyWord?keyWord=${this.searching}&pageNum=1`).then((res)=>{
                    this.formatData(res.data.data.list)})
                this.checked=false
                this.cuPage=1;
                this.total=5
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
                if(this.checked===true){
                    this.axios.get(`/api/exhibition/exhibition/querySortOnGoing`).then((res)=>{
                        this.formatData(res.data.data)
                        this.total=10
                    })
                }else {
                this.axios.get(`/api/exhibition/Admin/queryAllExhibition/${this.cuPage}`).then((res)=>{
                    this.formatData(res.data.data.list)
                    this.total=res.data.data.total
                })
                }
            },
            formatData(list){
                this.tableData=[]
                this.data=list
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
                        tel:item.tel,
                        picture:item.picture,
                        priority:item.priority
                    })
                }
            },
            onchange(value,id){
                this.axios.post(`/api/exhibition/exhibition/setPriority?id=${id}&priority=${value}`).then((res)=>{
                    this.initData()
                    this.$message.success('修改成功')
                })
            },
            checkboxChange(){
                this.initData()
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
    .text{
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
    }
</style>
