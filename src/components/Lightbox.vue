<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  photos: Array,
  index: Number,
})

const emit = defineEmits(['close', 'navigate'])
const baseUrl = import.meta.env.BASE_URL

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') emit('navigate', 1)
  if (e.key === 'ArrowLeft') emit('navigate', -1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="lightbox" @click.self="emit('close')">
    <button class="close" @click="emit('close')">&times;</button>
    <button class="nav prev" @click="emit('navigate', -1)">&#8249;</button>
    <img :src="`${baseUrl}photos/${photos[index]}`" :alt="photos[index]" />
    <button class="nav next" @click="emit('navigate', 1)">&#8250;</button>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(6px);
}

.lightbox img {
  max-width: 90vw;
  max-height: 88vh;
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(46, 204, 138, 0.25);
  border: 1px solid #2ecc8a;
}

.close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: 1px solid #2ecc8a;
  color: #3dffa0;
  font-size: 1.4rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.close:hover {
  background: rgba(46, 204, 138, 0.15);
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(13, 46, 34, 0.8);
  border: 1px solid #2ecc8a;
  color: #3dffa0;
  font-size: 1.6rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.nav:hover {
  background: rgba(46, 204, 138, 0.2);
}

.prev { left: 20px; }
.next { right: 20px; }
</style>
