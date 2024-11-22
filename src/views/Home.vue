<template>
    <div>
        <WeddingHero />
        <StorySection />
        <DetailsSection />
        <WeddingShowImages />
        <RSVPForm />
        <WeddingMap />
        <WeddingMapShow />
    </div>
  </template>
  
  <script>
  import WeddingHero from '../components/WeddingHero.vue';
  import StorySection from '../components/StorySection.vue';
  import DetailsSection from '../components/DetailsSection.vue';
  import WeddingShowImages from '../components/WeddingShowImages.vue';
  import RSVPForm from '../components/RSVPForm.vue';
  import WeddingMap from '../components/WeddingMap.vue';
  import WeddingMapShow from '../components/WeddingMapShow.vue';
  export default {
    components: {
        WeddingHero,
        StorySection,
        DetailsSection,
        WeddingShowImages,
        RSVPForm,
        WeddingMap,
        WeddingMapShow,
    },
  };
  </script>