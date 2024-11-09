<template>
    <div>
      <WeddingMap />
      <WeddingMapShow />
    </div>
  </template>
  
  <script>
import WeddingMap from '../components/WeddingMap.vue';
import WeddingMapShow from '../components/WeddingMapShow.vue';
  export default {
    components: {
      WeddingMap,
      WeddingMapShow
  },
  };
  </script>