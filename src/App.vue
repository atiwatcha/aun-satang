<template>
  <div id="app">
    <WeddingNavbars />
    <router-view class="bodyShow"></router-view> <!-- This is where the routed components will be displayed -->
    <!-- <WeddingHero />
    <StorySection />
    <DetailsSection />
    <WeddingGallery />
    <RSVPForm />
    <WeddingMap />
    <WeddingMapShow /> -->
  </div>
</template>

<script>
import WeddingNavbars from './components/WeddingNavbars.vue';
// import WeddingHero from './components/WeddingHero.vue';
// import StorySection from './components/StorySection.vue';
// import DetailsSection from './components/DetailsSection.vue';
// import WeddingGallery from './components/WeddingGallery.vue';
// import RSVPForm from './components/RSVPForm.vue';
// import WeddingMap from './components/WeddingMap.vue';
// import WeddingMapShow from './components/WeddingMapShow.vue';


export default {
  components: {
    WeddingNavbars,
    // WeddingHero,
    // StorySection,
    // DetailsSection,
    // WeddingGallery,
    // RSVPForm,
    // WeddingMap,
    // WeddingMapShow,
  },
};

console.log(process.env.NODE_ENV);
console.log(process.env.VUE_APP_BASE_URL);
</script>

<style>
/* #app {
  font-family: Arial, sans-serif;
}
.bodyShow {
  margin-top: 75px;
} */
 /* Global styles */
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

router-view {
  flex: 1; /* Makes router-view take up the remaining space */
  padding: 20px; /* Adds padding around the content */
}
</style>
