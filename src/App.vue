<template>
  <div id="app">
    <WeddingNavbars class="fixed top-0 z-10 w-full w-[100%]"/>
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
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
.bodyShow {
  margin-top: 80px;
}
</style>
