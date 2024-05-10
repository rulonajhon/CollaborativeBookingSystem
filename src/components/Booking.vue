<template>
  <div class="img-box">
    <img class="logo" src="../assets/uiclogo.png" />
  </div>
  <div class="contact-form">
    <form class="form">
      <div class="login">
        <input type="text" v-model="Name" placeholder="Full Name" />
        <input type="text" v-model="StudentID" placeholder="Student ID" />
        <input type="text" v-model="Username" placeholder="Username" />
        <input type="text" v-model="Email" placeholder="UIC Email" />
        <input type="password" v-model="Password" placeholder="Password" />
        <button @click.prevent="signup">Sign Up</button>
        <ul>
          <router-link to="/login">Log in</router-link>
        </ul>
        <!-- Display registration status message -->
        <ul v-if="registrationStatus.length">
          <li v-for="(message, index) in registrationStatus" :key="index">{{ message }}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Define reactive variables within the setup function
const Name = ref('');
const StudentID = ref('');
const Username = ref('');
const Email = ref('');
const Password = ref('');
const registrationStatus = ref([]);

// Use useRouter to access the router instance
const router = useRouter();

// Define the signup method
const signup = async () => {
  const params = new URLSearchParams();
  params.append('studentID', StudentID.value);
  params.append('username', Username.value);
  params.append('password', Password.value);
  params.append('name', Name.value);
  params.append('email', Email.value);

  try {
    const apiUrl = 'http://127.0.0.1:8000/users/student/create';
    const response = await axios.post(apiUrl + '?' + params.toString());
    console.log('User registered successfully:', response.data);
    // Redirect the user to the login page
    router.push({ name: 'login' });
    // Add registration success message
    registrationStatus.value.push('Registration successful.');
  } catch (error) {
    console.error('Error registering user:', error);
    // Handle the error and provide feedback to the user
    // Add registration error message
    if (error.response && error.response.data && error.response.data.detail) {
      registrationStatus.value.push('Error registering user: ' + error.response.data.detail);
    } else {
      registrationStatus.value.push('Error registering user: Network Error');
    }
  }
};

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
