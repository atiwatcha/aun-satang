<template>
  <div class="bg-white dark:bg-stone-100 p-6 rounded-lg shadow-lg m-1">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <section class="WeddingShowImages">
          <div
            class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14"
          >
            <div
              v-for="(image, index) in images"
              :key="index"
              class="snap-always snap-center shrink-0 first:pl-8 last:pr-8"
            >
              <div class="bg-indigo-300">
                <img
                  class="object-cover object-cover h-88 w-96 rounded-xl"
                  :src="image.src"
                  :alt="image.alt"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeddingShowImages",
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: require("@/assets/photos/aun-satang1.jpg"), alt: "Image 1" },
        { src: require("@/assets/photos/aun-satang2.jpg"), alt: "Image 2" },
        { src: require("@/assets/photos/aun-satang3.jpg"), alt: "Image 3" },
        { src: require("@/assets/photos/aun-satang4.jpg"), alt: "Image 4" },
        { src: require("@/assets/photos/aun-satang5.jpg"), alt: "Image 5" },
        { src: require("@/assets/photos/aun-satang6.jpg"), alt: "Image 6" },
        { src: require("@/assets/photos/aun-satang7.jpg"), alt: "Image 7" },
        { src: require("@/assets/photos/aun-satang8.jpg"), alt: "Image 8" },
        { src: require("@/assets/photos/aun-satang9.jpg"), alt: "Image 9" },
        { src: require("@/assets/photos/aun-satang10.jpg"), alt: "Image 10" },
        { src: require("@/assets/photos/aun-satang11.jpg"), alt: "Image 11" },
        { src: require("@/assets/photos/aun-satang12.jpg"), alt: "Image 12" },
      ],
    };
  },
  methods: {
    scrollTo(index) {
      const container = this.$el.querySelector(".overflow-x-auto");
      const item = container.children[index];
      item.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },

    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to the first image
      }
      this.scrollTo(this.currentIndex);
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1; // Loop back to the last image
      }
      this.scrollTo(this.currentIndex);
    },
    // Handle the touch start event
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX; // Get the initial X position
      this.swipeDirection = ""; // Reset swipe direction
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
        this.swipeDirection = "No swipe detected";
      }
    },
  },
};
</script>
