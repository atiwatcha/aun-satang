<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="@/assets/photos/wedding.png" class="h-8" alt="Wedding Logo" />
        <span
          class="text-rose-300 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Aun-Satang</span>
      </router-link>

      <button
        @click="toggleMobileMenu"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 rounded-lg md:hidden hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-amber-300 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/map"
              class="block py-2 px-3 text-amber-300 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Map</router-link
            >
          </li>
          <li>
            <router-link
              to="/gallery"
              class="block py-2 px-3 text-amber-300 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Gallery</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile Menu (hidden by default) -->
    <div v-show="isMobileMenuOpen" class="sm:hidden" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <router-link
            @click="clickMenu"
            to="/"
            class="block py-2 px-3 text-amber-300 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            @click="clickMenu"
            to="/map"
            class="block py-2 px-3 text-amber-300 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Map</router-link
          >
        </li>
        <li>
          <router-link
            @click="clickMenu"
            to="/gallery"
            class="block py-2 px-3 text-amber-300 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Gallery</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
  
  <script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    clickMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>
  
  <style scoped>
/* Optional: Customize navbar styling here */
</style>
  