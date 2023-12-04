<script setup>

</script>

<template>
    <div class="img-box">
        <img class="logo" src="../assets/uiclogo.png" />
    </div>
     <div class="contact-form">
                    <form class="form">
    
   
    <div class="login">
        <input type="text" v-model="email" placeholder="Admin Account" />
        <input type="password" v-model="password" placeholder="Password" />
        <button v-on:click="home">Login</button>
      <ul>
        <router-link to="/picker">
            Back
        </router-link>
        
      </ul>
    </div>
    </form>
     </div>
    

    
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push({name:'login'})
    },
    home() {
      this.$router.push({name:'home'})
    }
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
    position: relative;
}
.contact-form{
    background-color: rgb(255, 255, 255, 0.7);
    padding-top: 125px ;
    padding-bottom: 50px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 10px;

}

body{
  padding: 0;
  margin: 0;
}
.img-box .logo{
   padding: 5px;
   position: relative;
  bottom: -100px;
   
} 

.logo{
    width: 200px
}
.login ul{
  list-style-type: none;
  
}

.login ul a{
  text-decoration: none;
  color: rgba(233, 112, 130, 0.9);
  position: relative;
  left: -17px;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; 
}

.login ul a::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: rgba(233, 112, 130, 0.9);
  bottom: -5px;
  left: 50%; 
  transform: translateX(-50%) scaleX(0); 
  transform-origin: center;
  transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.login ul a:hover {
  color: rgba(233, 112, 130, 1);
  transform: scale(1.1); 
  font-weight: bold; 
}

.login ul a:hover::before {
  width: 100%;
  transform: translateX(-50%) scaleX(1);
}

.login input{
    text-align: center;
    border: none;
	border-bottom: 1px solid #D1D1D4;
	background: none;
	padding: 10px;
    padding-bottom: 20px;
	padding-left: 24px;
	font-weight: 700;
	width: 70%;
	transition: .2s;
}
.login button{
    background: rgba(233, 112, 130, 0.9);
    text-align: center;
    font-size: 14px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #D4D3E8;
    text-transform: uppercase;
    font-weight: 700;
    align-items: center;
    justify-content: center; /* Added to horizontally center the button */
    width: 50%;
    color: #ffffff;
    cursor: pointer;
    transition: .2s;
}
</style>
