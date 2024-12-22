<template>
  <div class="relative w-full overflow-hidden">
    <!-- Slider container -->
    <div class="flex transition-transform duration-500" :style="sliderStyle">
      <!-- Image items -->
      <div
        v-for="(image, index) in photos"
        :key="index"
        class="w-full h-100 flex-shrink-0"
      >
      <div ref="swipeArea" class="swipe-area" 
      @touchstart="handleTouchStart" 
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
      >
        <img :src="image" alt="Slider Image" class="object-cover w-full h-full" />
      </div>
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
        require('@/assets/photos/aun-satang6.jpg'),
        require('@/assets/photos/aun-satang7.jpg'),
        require('@/assets/photos/aun-satang8.jpg'),
        require('@/assets/photos/aun-satang9.jpg'),
        require('@/assets/photos/aun-satang10.jpg'),
        require('@/assets/photos/aun-satang11.jpg'),
        require('@/assets/photos/aun-satang12.jpg'),
      ],
      touchStartX: 0,
      touchEndX: 0,
      swipeDirection: '',
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

    // Handle the touch start event
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX; // Get the initial X position
      this.swipeDirection = ''; // Reset swipe direction
    },

    // Handle the touch move event
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX; // Get the current X position
    },

    // Handle the touch end event
    handleTouchEnd() {
      if (this.touchStartX - this.touchEndX > 50) {
        this.nextImage();
      } else if (this.touchEndX - this.touchStartX > 50) {
        this.prevImage();
      } else {
        this.swipeDirection = 'No swipe detected';
      }
    },
  },
  
};
</script>

<style scoped>

</style>
