// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components (views)
import Home  from '../views/Home.vue';
import Map  from '../views/Map.vue';
import Gallery  from '../views/Gallery.vue';

const routes = [
  { path: '/', component: Home  },
  { path: '/map', component: Map },
  { path: '/gallery', component: Gallery }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
