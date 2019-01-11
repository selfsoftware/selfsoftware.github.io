<template>
    <div>
        <h3>用户登录 </h3>
        <div>
        <label>账号：</label>
        <input type="text" placeholder="请输入账号">
        </div>
        <div>
        <label>密码：</label>
        <input type="text" placeholder="请输入密码">
        </div>
        <div>
        <button type="button" >登录</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style >
    input{
        padding-left: 5px;
    }
    button{
        border: none;
        color: aliceblue;
        background-color: #751111;
        padding: 10px;
        text-align: center;
        line-height: 20px;
        width: 60px;
        font-size: 18px;
        font-weight: 700;
    }
</style>