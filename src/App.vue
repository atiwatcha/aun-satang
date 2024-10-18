<template>
  <div id="app">
    <WeddingHero />
    <StorySection />
    <DetailsSection />
    <WeddingGallery />
    <RSVPForm />
    <WeddingMap />
    <WeddingMapShow />
  </div>
</template>

<script>
import WeddingHero from './components/WeddingHero.vue';
import StorySection from './components/StorySection.vue';
import DetailsSection from './components/DetailsSection.vue';
import WeddingGallery from './components/WeddingGallery.vue';
import RSVPForm from './components/RSVPForm.vue';
import WeddingMap from './components/WeddingMap.vue';
import WeddingMapShow from './components/WeddingMapShow.vue';

export default {
  components: {
    WeddingHero,
    StorySection,
    DetailsSection,
    WeddingGallery,
    RSVPForm,
    WeddingMap,
    WeddingMapShow,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
