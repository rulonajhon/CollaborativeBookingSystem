<script setup>

</script>

<template>



     <div class="contact-form">
      <div class="container">
        <h1>UIC Library Collaborative<br>Learning Room Booking System</h1>
        <p>TIME TO FOCUS, TIME TO LEARN.</p>
      </div>

                    <form class="form">
    
                  <div class="container">
    <div class="login">
        <ul>
        <router-link to="/picker"><button>
            RESERVE NOW
        </button></router-link>
        
      </ul>
    </div>
    </div>
    </form>
     </div>
    

    
</template>

<script>

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
.contact-form .container h1{
  margin-top: -200px;
  font-size: 60px;
}
.contact-form .container P{
  font-size: 30px;
  font-weight:600;
}


.login button{
    background: rgba(233, 112, 130, 0.9);
    text-align: center;
    font-size: 25px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 700;
    align-items: center;
    justify-content: center; /* Added to horizontally center the button */
    width: 300px;
    height: 65px;
    color: #ffffff;
    cursor: pointer;
    transition: .2s;
    
}
</style>
