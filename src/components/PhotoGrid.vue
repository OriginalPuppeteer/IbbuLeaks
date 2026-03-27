<script setup>
import PhotoCard from './PhotoCard.vue'

defineProps({
  photos: Array,
})

const emit = defineEmits(['open'])
</script>

<template>
  <div class="grid">
    <PhotoCard
      v-for="(photo, index) in photos"
      :key="photo"
      :filename="photo"
      @click="emit('open', index)"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
</style>
