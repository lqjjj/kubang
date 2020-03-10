<template>
    <div id="exhibition">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-select v-model="value" placeholder="请选择关键词搜索" style="width: 300px">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            </el-col>
            <el-col :span="8"><el-input v-model="searching" placeholder="请输入搜索内容" style="margin-bottom: 20px;width: 300px"></el-input></el-col>
            <el-col :span="3"><el-button  @click="handleEdit">添加展会</el-button></el-col>
        </el-row>
        <el-table
                :data="table"
                style="width: 100%"
        >
            <el-table-column
                    prop="id"
                    label="展会id">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="开始日期"
                    width="100">
            </el-table-column>
            <el-table-column
                        prop="enddate"
                        label="结束日期"
                        width="100">
            </el-table-column>
            <el-table-column
                    label="展会图标">
                    <i class="el-icon-connection"></i>
            </el-table-column>
            <el-table-column
                    label="展会名称">
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
                    width="200"
            >
            </el-table-column>
            <el-table-column
                    prop="introduction"
                    label="展会概况"
                    width="300"
            >
            </el-table-column>
            <el-table-column
                label="展会状态">
            <template slot-scope="scope">
                <el-tag>{{scope.row.state}}</el-tag>
            </template>
        </el-table-column>
            <el-table-column
                    prop="tel"
                    label="联系方式"
            >
            </el-table-column>
            <el-table-column
                    label="管理">
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
                tableData: [{
                    id:'1',
                    date: '2016-05-02',
                    enddate:'2016-10-25',
                    name: '国际展会',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state:'进行中',
                    organizer:'qewe',
                    introduction:'全额委屈肉i给歌曲二技能请你佛齐万年ioqn七日那我穷恶你请我请问你请我额请问你哦呢ionw',
                    tel:'13888888888'
                }, {
                    id:'2',
                    date: '2016-05-04',
                    enddate:'2016-10-28',
                    name: '农业展会',
                    address: '上海市普陀区金沙江路 1517 弄',
                    state:'进行中',
                    organizer:'qewe11',
                    tel:'13888888888'
                }, {
                    id:'3',
                    date: '2016-05-01',
                    enddate:'2016-10-23',
                    name: '体育展会',
                    address: '上海市普陀区金沙江路 1519 弄',
                    state:'进行中',
                    organizer:'qe31211',
                    tel:'13888888888'
                }, {
                    id:'4',
                    date: '2016-05-03',
                    enddate:'2016-10-21',
                    name: '茶叶展会',
                    address: '上海市普陀区金沙江路 1516 弄',
                    state:'进行中',
                    organizer:'qe32211',
                    tel:'13888888888'
                }],
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
                this.$router.push('/edit')
            },
            handleDetails(scope){
                this.$router.push('/exhibit')
            }
        },
        computed:{
            table(){
                if (this.searching){
                    return this.tableData.filter((item)=> {
                        return item[this.value].match(this.searching)
                    })
               }
                else return this.tableData
            }
        }
    }
</script>

<style scoped>
    #search_bar{
        display: flex;
    }
</style>
