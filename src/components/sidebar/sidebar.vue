<template>
    <el-aside width="200px" background-color="rgba(255, 255, 255,0.6)">
        <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="rgba(255, 255, 255,0.6)"
                text-color="rgb(103, 101, 101)"
                active-text-color="rgb(251, 53, 116)"
                :router="true"
        >
            <el-menu-item v-for="route in routes" :index="route.path" :key="route.path" >
                <template slot="title" >
                    <i :class="route.meta.icon"></i>
                    <span>{{route.names}}</span>
                </template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>


    export default {
        name: "sidebar",
        data(){
            return{
            }
        },
        computed:{
            routes(){
                return this.$store.getters.routes[0].children.filter((item)=>{return item.names})
            }
        }
    }
</script>

<style scoped>

</style>
