<template>
    <div class="main">
        <div class="list">
            <div class="name">商品名：</div>
            <div class="input">
                <el-input v-model="list.goodsName"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">展区号：</div>
            <div class="input">
                <el-input v-model="list.goodsAreaNumber"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">优先级：</div>
            <div class="input">
                <el-input v-model="list.priority"></el-input>
            </div>
        </div>
        <div class="list">
            <div class="name">分类：</div>
            <div class="input">
                <el-select   v-model="list.categoryId" placeholder="请选择分类">
                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </div>
        </div>
        <div class="list">
            <div class="name">时间：</div>
            <div class="input">
                <el-row :gutter="20">
                <el-col :span="11">
                        <el-date-picker type="date" placeholder="开始时间" v-model="list.startTime" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col :span="11">
                        <el-date-picker type="date" placeholder="结束时间" v-model="list.endTime" style="width: 100%;"></el-date-picker>
                </el-col>
                </el-row>
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
<!--            <div class="input">-->
<!--                <el-image-->
<!--                        style="width: 120px; height: 120px"-->
<!--                        :src="list.picture[0]"-->
<!--                        :preview-src-list="list.picture"-->
<!--                        fit="fit"></el-image>-->
<!--            </div>-->
            <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
        </div>
        <div class="footer">
            <div class="find" @click="back">确认修改</div>
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
                options:[
                    {
                        value:1,
                        label:'教育'
                    },
                    {
                        value:2,
                        label:'农业'
                    },
                    {
                        value:3,
                        label:'运动'
                    },
                    {
                        value:4,
                        label:'美妆'
                    },
                ],
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
            this.list.startTime=new Date(this.list.startTime).toLocaleDateString()
            // this.list.picture=[...this.$route.params.data.picture]

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
        width: 200px;
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
