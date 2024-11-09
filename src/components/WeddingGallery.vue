<template>
  <div class="relative w-full max-w-lg mx-auto overflow-hidden">
    <!-- Slider container -->
    <div class="flex transition-transform duration-500" :style="sliderStyle">
      <!-- Image items -->
      <div
        v-for="(image, index) in photos"
        :key="index"
        class="w-full h-100 flex-shrink-0"
      >
        <img :src="image" alt="Slider Image" class="object-cover w-full h-full" />
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="prevImage"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
    >
      &lt;
    </button>
    <button
      @click="nextImage"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
    >
      &gt;
    </button>
  </div>

  <!-- <section class="gallery">
    <div class="photos">
      <img v-for="photo in photos" :src="photo" :key="photo" alt="Wedding Photo" />
    </div>
  </section> -->
</template>

<script>
export default {
  name: 'WeddingGallery',
  data() {
    return {
      currentIndex: 0,
      photos: [
        require('@/assets/photos/aun-satang1.jpg'),
        require('@/assets/photos/aun-satang2.jpg'),
        require('@/assets/photos/aun-satang3.jpg'),
        require('@/assets/photos/aun-satang4.jpg'),
        require('@/assets/photos/aun-satang5.jpg'),
      ]
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
  methods: {
    nextImage() {
      if (this.currentIndex < this.photos.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to the first image
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.photos.length - 1; // Loop back to the last image
      }
    },
  },
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
