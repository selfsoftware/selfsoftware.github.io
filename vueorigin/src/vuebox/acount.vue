<template>
    <div>
        <h3>账户登录 === {{msg}}</h3>
        <router-link to="/acount/login">登录</router-link>
        <router-link to="/acount/regis">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data:()=>{
        return {msg:'vue组建内部的msg'}
    },
    methods:{
        show(){
            console.log('acount中调用的方法');
        }
    }
}
</script>
<style scoped>
    div{
        color: #a74242;
    }
</style>
