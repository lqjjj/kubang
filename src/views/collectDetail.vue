<template>
    <div class="main">
        <div class="list">
            <div class="name">商品名：</div>
            <div class="input">
                <el-input v-model="list.name"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">展区号：</div>
            <div class="input">
                <el-input v-model="list.areaNumber"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">公司名：</div>
            <div class="input">
                <el-input v-model="list.companyName"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">分类：</div>
            <div class="input">
                <el-input v-model="list.category"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">时间：</div>
            <div class="input">
                <el-input v-model="list.startTime"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">价格：</div>
            <div class="input">
                <el-input v-model="list.currentPrice" readonly></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">产地：</div>
            <div class="input">
                <el-input v-model="list.originPlace" readonly></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">关键词：</div>
            <div class="input" >
                <el-input v-model="list.introduction" type="textarea"
                          :rows="3"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">图片：</div>
            <div class="input">
                <el-image
                        style="width: 120px; height: 120px"
                        :src="list.picture[0]"
                        :preview-src-list="list.picture"
                        fit="fit"></el-image>
            </div>
        </div>
        <div class="footer">
            <div class="find" @click="back">返回</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list:{
                },
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
        },
        mounted() {
            console.log(this.$route.params.data)
            this.list=this.$route.params.data
            this.list.startTime=new Date(this.list.startTime).Format('yyyy-MM-dd')
            this.list.endTime=new Date(this.list.endTime).Format('yyyy-MM-dd')
            this.list.startTime=this.list.startTime + ' 至 '+this.list.endTime
        }
    };
</script>
<style  scoped>
    .main {}
        .list {
            display: flex;
            margin-top: 15px;
            padding-left: 120px;}
            .name {
                width: 100px;
                text-align: right;
                line-height: 40px;
                color: #303133;
                font-weight: 700;
                font-size: 18px;
            }
            .input {
                width: 500px;}
                img {
                    width: 200px;
                    height: 214px;
                }
                .rate {
                    padding: 10px;
                    border: 1px solid #dcdfe6;
                    border-radius: 4px;
                }
                .rate:hover {
                    border: 1px solid #c0c4cc;
                }
        .footer {
            display: flex;
            margin-top: 20px;}
            .find {
                background: #ff6a16;
                color: white;
                width: 320px;
                text-align: center;
                border-radius: 6px;
                line-height: 40px;
                margin-left: 205px;
                font-size: 18px;
                font-weight: 700;
                cursor: pointer;
            }
            .find:hover {
                background: salmon;
            }
</style>
