<template>
  <div class="bg-white dark:bg-stone-50 p-6 rounded-lg shadow-lg">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <h2 class="text-neutral-content text-xl font-semibold text-lime-500 mb-4">สถานที่จัดงาน</h2>
        <p>Location: Sherlyn : Glass House & Garden </p>
      </div>
    </div>
    <div class="map-container">
      <a :href="googleMapsLink" target="_blank" rel="noopener noreferrer" class="map-link bg-lime-500 hover:bg-lime-600">
        Open in Google Maps
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WeddingMap',
  data() {
    return {
      // Replace with your venue coordinates
      venueLatitude: 13.811543,
      venueLongitude: 100.464257,
      // googleMapsLink: `https://www.google.com/maps/dir/?api=1&destination=${13.811543},${100.464257}&destination_place_id=YOUR_PLACE_ID`, // You can also include a place ID if available
       googleMapsLink: `https://maps.app.goo.gl/9NvXMwL8dqKfU9zD7`,
    };
  },
};
</script>

<style scoped>
.map-container {
  margin: 20px 0;
  text-align: center;
}

.map-link {
  display: inline-block;
  padding: 10px 20px;
  /* background-color: #4285F4; */
  /* Google Maps blue */
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.map-link:hover {
  /* background-color: #357AE8; */
}
</style>
