<template>
  <div class="map-container">
    <!-- <h2>Find Us Here</h2> -->
    <a
      :href="googleMapsLink"
      target="_blank"
      rel="noopener noreferrer"
      class="map-link"
    >
      Open in Google Maps
    </a>
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
      googleMapsLink: `https://www.google.com/maps/dir/?api=1&destination=${13.811543},${100.464257}&destination_place_id=YOUR_PLACE_ID`, // You can also include a place ID if available
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
  background-color: #4285F4; /* Google Maps blue */
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.map-link:hover {
  background-color: #357AE8;
}
</style>
