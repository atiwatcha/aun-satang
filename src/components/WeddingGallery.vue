<template>
  <section class="gallery">
    <h2>Gallery</h2>
    <div class="photos">
      <img v-for="photo in photos" :src="photo" :key="photo" alt="Wedding Photo" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'WeddingGallery',
  data() {
    return {
      photos: [
        require('../assets/photos/aun-satang1.jpg'),
        require('../assets/photos/aun-satang2.jpg'),
        require('../assets/photos/aun-satang3.jpg'),
        require('../assets/photos/aun-satang4.jpg'),
        require('../assets/photos/aun-satang5.jpg'),
      ]
    };
  }
};
</script>

<style scoped>
.gallery {
  padding: 40px;
  text-align: center;
}
.photos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.photos img {
  margin: 10px;
  max-width: 100%; /* Make image responsive */
  height: auto;    /* Maintain aspect ratio */
  border-radius: 8px; /* Optional: Add some styling */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Optional: Add a shadow effect */
}
</style>
