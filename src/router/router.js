import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home-View.vue'; // Modify the route as necessary.
import AboutView from '../views/About-View.vue'; //If necessary, adjust the route.


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

