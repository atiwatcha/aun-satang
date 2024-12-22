<template>
    <div class="justify-center items-center">
        <WeddingHero />
        
        <!-- Use the CountdownTimer component -->
        <CountdownTimer />
        <!-- <StorySection /> -->
        <!-- <DetailsSection /> -->
       
        <RSVPForm />
        <WeddingMap />
        <WeddingMapShow />
        <WeddingShowImages />
    </div>
  </template>
  
  <script>
  import WeddingHero from '../components/WeddingHero.vue';
  import CountdownTimer from '../components/CountdownTimer.vue';
  import StorySection from '../components/StorySection.vue';
  import DetailsSection from '../components/DetailsSection.vue';
  import WeddingShowImages from '../components/WeddingShowImages.vue';
  import RSVPForm from '../components/RSVPForm.vue';
  import WeddingMap from '../components/WeddingMap.vue';
  import WeddingMapShow from '../components/WeddingMapShow.vue';
  export default {
    components: {
        WeddingHero,
        CountdownTimer,
        StorySection,
        DetailsSection,
        WeddingShowImages,
        RSVPForm,
        WeddingMap,
        WeddingMapShow,
    }

  };
  </script>