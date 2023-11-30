import { createRouter, createWebHistory } from 'vue-router';
import Landing from './components/Landing.vue';
import Login from './components/Login.vue';


const routes = [
    { path: '/', component: Landing, name: 'landing' },
    { path: '/login', component: Login, name: 'login' },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;