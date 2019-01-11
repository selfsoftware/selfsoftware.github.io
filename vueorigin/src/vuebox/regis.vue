<template>
    <div>
        <h3>用户注册</h3>
        <div>
         <label>注册账号：</label>
        <input type="text" placeholder="请输入需要注册账号名">
        </div>
        <div>
        <label>注册密码：</label>
        <input type="text" placeholder="请输入密码">
        </div>
        <div>
        <label>再次请输入密码:</label>
        <input type="text" placeholder="再次请输入密码">
        </div>
        <div>
        <button type="button" >注册</button>
        </div>
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
   
</style>