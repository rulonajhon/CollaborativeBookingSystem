<template>
  <div class="img-box">
    <img class="logo" src="../assets/uiclogo.png" />
  </div>
  <div class="contact-form">
    <form class="form">
      <div class="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button @click.prevent="login">Login</button>
        <ul>
          <!-- Call showAlert method when "Forgot Password?" link is clicked -->
          <li><a href="#" @click.prevent="showAlert">Forgot Password?</a></li>
        </ul>
        <div>
          <ul>
            <li><router-link to="/signup">Sign up</router-link></li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Define reactive variables
const username = ref('')
const password = ref('')

// Use useRouter to access the router instance
const router = useRouter()

// Define login function
const login = async () => {
  if (!username.value || !password.value) {
    window.alert("Username and password are required.");
    return;
  }
  try {
    let response = await axios.post(
      'http://127.0.0.1:8000/users/student/login',
      { username: username.value, password: password.value }
    );
    console.log('Login response:', response);

    if (response.status === 200) {
      console.log('Login successful');
      // Redirect to home page if login is successful
      router.push('/studenthome');
    } else {
      // Handle invalid login
      console.error('Invalid username or password');
    }
  } catch (error) {
    // Handle request error
    console.error('Error during login:', error);
  }
};

// Define showAlert function
const showAlert = () => {
  window.alert("You need to go to the library to ask for a new password.");
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

.contact-form {
  background-color: rgb(255, 255, 255, 0.7);
  padding-top: 125px;
  padding-bottom: 50px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;

}

body {
  padding: 0;
  margin: 0;
}

.img-box .logo {
  padding: 5px;
  position: relative;
  bottom: -100px;

}

.logo {
  width: 200px
}

.login ul {
  list-style-type: none;

}

.login ul a {
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

.login input {
  color: #556371;
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

.login button {
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
  justify-content: center;
  /* Added to horizontally center the button */
  width: 50%;
  color: #ffffff;
  cursor: pointer;
  transition: .2s;
}
</style>