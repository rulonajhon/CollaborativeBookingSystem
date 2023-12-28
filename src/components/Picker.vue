<script setup>

</script>

<template>
    <div class="img-box">
        <img class="logo" src="../assets/uiclogo.png" />
    </div>
     <div class="contact-form">
                    <form class="form">
                      <p>Choose an Account to Log in</p>
   
    <div class="login">
        <div class="btn1"><button v-on:click="adminlogin">Admin</button></div>
      
        <button v-on:click="login">Student</button>
 
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
    adminlogin() {
      this.$router.push({name:'adminlogin'})
    },
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
    padding-top: 80px ;
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
.form p{
  font-size: 35px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 60px;
  margin-top: -40px;
  color: rgba(233, 112, 130, 0.9);
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
