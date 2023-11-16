<template>
    <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Product</router-link>
    <a v-on:click="logout" href="#">Logout</a>

    </div>
</template>
<script>
export default{
    name:'Header-page',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style>
.nav{
    background-color: #ED7D31;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #F6F1EE;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color:#F6F1EE;
    color: #ED7D31;
}
</style>