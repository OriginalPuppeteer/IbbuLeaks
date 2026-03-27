<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import PhotoGrid from './components/PhotoGrid.vue'
import Lightbox from './components/Lightbox.vue'
import AppFooter from './components/AppFooter.vue'
import photos from './photos.js'

const lightboxIndex = ref(null)

function openLightbox(index) {
  lightboxIndex.value = index
}

function closeLightbox() {
  lightboxIndex.value = null
}

function navigate(dir) {
  lightboxIndex.value = (lightboxIndex.value + dir + photos.length) % photos.length
}
</script>

<template>
  <AppHeader :count="photos.length" />

  <main>
    <PhotoGrid :photos="photos" @open="openLightbox" />
  </main>

  <AppFooter />

  <Lightbox
    v-if="lightboxIndex !== null"
    :photos="photos"
    :index="lightboxIndex"
    @close="closeLightbox"
    @navigate="navigate"
  />
</template>

<style scoped>
main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}
</style>
