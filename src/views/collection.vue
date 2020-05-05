<template>
    <div id="collection">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品" name="first">
                <el-row>
                    <el-col :span="3" v-for="item in goodsData" :key="item.id" >
                        <el-card :body-style="{ padding: '0px'}" style="margin-right: 20px;margin-top: 20px;background-color: rgba(255,255,255,0.3);height:230px" >
                            <el-image :src="item.picture[0]" style="width: 150px; height: 150px" fit="cover"></el-image>
                            <div style="padding: 5px;">
                                <span style="color: rgb(255,86,1)">￥{{item.currentPrice}}</span>
                            </div>
                            <div style="padding: 5px;">
                                <el-link type="primary" @click="detail(item)">{{item.name}}</el-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="商家" name="second">
                <el-row>
                    <el-col :span="3" v-for="item in companyData" :key="item.name" >
                        <el-card :body-style="{ padding: '0px'}" style="margin-right: 20px;margin-top: 20px;background-color: rgba(255,255,255,0.3)" >
                            <el-image :src="item.headPicture" style="width: 150px; height: 150px" fit="cover"></el-image>
                            <div style="padding: 14px;">
                                <span>{{item.name}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "collection",
        data() {
            return {
                activeName: 'first',
                goodsData:[],
                companyData:[]
            }
        },
        methods:{
            detail(item){
                this.$router.push({name:'collectDetail',params:{data:item}})
            }
        },
        created() {
            this.axios.get(`/api/exhibition/user/collect/goods?userId=1`)
            .then(
            (res)=>{
                this.goodsData=res.data.data
                console.log(res.data.data)
            }
            )
            this.axios.get(`/api/exhibition/user/collect/company?userId=1`)
                .then(
                    (res)=>{
                        this.companyData=res.data.data
                        console.log(res.data.data)
                    }
                )
        }
    }
</script>

<style scoped>

    .image {
        width: 100%;
        display: block;
    }
</style>
<template>
    <div id="collection">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品" name="first">
                <el-row>
                    <el-col :span="3" v-for="item in goodsData" :key="item.id" >
                        <el-card :body-style="{ padding: '0px'}" style="margin-right: 20px;margin-top: 20px;background-color: rgba(255,255,255,0.3);height:230px" >
                            <el-image :src="item.picture[0]" style="width: 150px; height: 150px" fit="cover"></el-image>
                            <div style="padding: 5px;">
                                <span style="color: rgb(255,86,1)">￥{{item.currentPrice}}</span>
                            </div>
                            <div style="padding: 5px;">
                                <el-link type="primary" @click="detail(item)">{{item.name}}</el-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="商家" name="second">
                <el-row>
                    <el-col :span="3" v-for="item in companyData" :key="item.name" >
                        <el-card :body-style="{ padding: '0px'}" style="margin-right: 20px;margin-top: 20px;background-color: rgba(255,255,255,0.3)" >
                            <el-image :src="item.headPicture" style="width: 150px; height: 150px" fit="cover"></el-image>
                            <div style="padding: 14px;">
                                <span>{{item.name}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "collection",
        data() {
            return {
                activeName: 'first',
                goodsData:[],
                companyData:[]
            }
        },
        methods:{
            detail(item){
                this.$router.push({name:'collectDetail',params:{data:item}})
            }
        },
        created() {
            this.axios.get(`/api/exhibition/user/collect/goods?userId=1`)
            .then(
            (res)=>{
                this.goodsData=res.data.data
                console.log(res.data.data)
            }
            )
            this.axios.get(`/api/exhibition/user/collect/company?userId=1`)
                .then(
                    (res)=>{
                        this.companyData=res.data.data
                        console.log(res.data.data)
                    }
                )
        }
    }
</script>

<style scoped>

    .image {
        width: 100%;
        display: block;
    }
</style>
