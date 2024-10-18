<template>
    <div class="map-container">
      <iframe
        :src="mapSrc"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeddingMapShow',
    data() {
      return {
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.457660704678!2d100.46148867691818!3d13.811535086586685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b316fd903f1%3A0x61a51a4a10d1564a!2sSherlyn%20%3A%20Glass%20House%20%26%20Garden!5e0!3m2!1sth!2sth!4v1729255446534!5m2!1sth!2sth', // Replace with your embed link
        //<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1369.8377241437943!2d100.46538325503342!3d13.809819705469842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d13.837926399999999!2d100.51911679999999!4m3!3m2!1d13.811542999999999!2d100.46425699999999!5e0!3m2!1sen!2sth!4v1729010032739!5m2!1sen!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      };
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    margin: 20px 0;
  }
  </style>
  