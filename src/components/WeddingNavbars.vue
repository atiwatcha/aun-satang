<template>
    <header class="bg-red-200 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
           <!-- Logo -->
          <div class="flex-shrink-0 text-xl font-semibold">
            <router-link to="/" class="text-white">Aun-Satang</router-link>
          </div>

          <!-- Logo Section -->
          <div class=" inset-y-0 left-0 flex items-center sm:hidden">
            <button @click="toggleMobileMenu" class="text-white hover:text-gray-300 focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <!-- Mobile menu icon (hamburger) -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
  
         
  
          <!-- Navigation Links for Desktop -->
          <div class="hidden sm:flex space-x-4">
            <router-link to="/" class="text-white hover:text-rose-500 font-bold">Home</router-link>
            <router-link to="/map" class="text-white hover:text-rose-500 font-bold">Map</router-link>
            <router-link to="/gallery" class="text-white hover:text-rose-500 font-bold">Gallery</router-link>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu (hidden by default) -->
      <div v-show="isMobileMenuOpen" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" class="block text-white hover:bg-red-200 hover:text-rose-500 font-bold">Home</router-link>
          <router-link to="/map" class="block text-white hover:bg-red-200 hover:text-rose-500 font-bold">Map</router-link>
          <router-link to="/gallery" class="block text-white hover:bg-red-200 hover:text-rose-500 font-bold">Gallery</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Customize navbar styling here */
  </style>
  