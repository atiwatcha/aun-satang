// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';

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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
// const router = createRouter({
//   history: createWebHistory(process.env.VUE_APP_BASE_URL),
//   routes,
// });

export default router;

router.beforeEach((to, from, next) => {
  // Example: Check if route exists (you can implement a more sophisticated logic here)
  if (to.matched.length === 0) {
    // Redirect to a custom error page (404)
    next({ name: 'NotFound' });
  } else {
    // Proceed with the navigation
    next();
  }
});
