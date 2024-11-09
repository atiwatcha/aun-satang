// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components (views)
import Home from '../views/Home.vue';
import Map from '../views/Map.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home 
  },
  { 
    path: '/map', 
    name: 'map',
    component: Map 
  },
  { 
    path: '/gallery', 
    name: 'gallery',
    component: Gallery 
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
