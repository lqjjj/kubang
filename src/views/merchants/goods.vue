<template>
    <div id="goods">
        <el-row>
            <el-col :span="3" v-for="(o) in 9" :key="o" >
                <el-card :body-style="{ padding: '0px'}" style="margin-right: 20px;margin-top: 20px;background-color: rgba(255,255,255,0.3)" >
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "goods"
    }
</script>

<style scoped>
    .image {
        width: 100%;
        display: block;
    }
</style>
