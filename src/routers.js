import { createRouter, createWebHistory } from 'vue-router';
import Landing from './components/Landing.vue';
import Login from './components/Login.vue';
import Picker from  './components/Picker.vue';
import Signup from  './components/Signup.vue';


const routes = [
    { path: '/', component: Landing, name: 'landing' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Signup, name: 'signup'},
    { path: '/picker', component: Picker, name: 'picker' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;