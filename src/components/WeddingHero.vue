<template>
  <div class="hero size-full max-[550px]:h-[40%] min-[1220px]:h-[150%]" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <h1 class="title text-amber-200">Join Us for Our Wedding</h1>
    <!-- <p class="date text-purple-300">Date: March 1st, 2025</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: require('@/assets/photos/aun-satang-wedding1.jpg') // Add your photo path
    };
  }
};
</script>

<style scoped>
.hero {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-size: cover;
  background-position: center;
  text-align: center;
}
.title {
  font-size: 4em;
  font-weight: bold;
}
.date {
  font-size: 3em;
}
</style>
