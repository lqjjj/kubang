<template>
    <div id="collection">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品" name="first">商品</el-tab-pane>
            <el-tab-pane label="商家" name="second">商家</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "collection",
        data() {
            return {
                activeName: 'second'
            }
        }
    }
</script>

<style scoped>

</style>
