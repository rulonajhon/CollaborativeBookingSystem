import { createRouter, createWebHistory } from 'vue-router';
import Landing from './components/Landing.vue';
import Login from './components/Login.vue';
import Picker from  './components/Picker.vue';
import Signup from  './components/Signup.vue';
import Home from './components/Home.vue';
import AdminLogin from './components/AdminLogin.vue';


const routes = [
    { path: '/', component: Landing, name: 'landing' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Signup, name: 'signup'},
    { path: '/picker', component: Picker, name: 'picker' },
    { path: '/home', component: Home, name: 'home' },
    { path: '/adminlogin', component: AdminLogin, name: 'adminlogin' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;