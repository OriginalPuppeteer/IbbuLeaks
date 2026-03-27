<script setup>
defineProps({
  filename: String,
})
</script>

<template>
  <div class="card">
    <img :src="`/photos/${filename}`" :alt="filename" loading="lazy" />
    <div class="label">{{ filename }}</div>
  </div>
</template>

<style scoped>
.card {
  background: #0d2e22;
  border: 1px solid #1a5c3f;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(46, 204, 138, 0.2);
  border-color: #2ecc8a;
}

.card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  background: #0a1f18;
}

.label {
  padding: 10px 14px;
  font-size: 0.75rem;
  color: #5ec99a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-top: 1px solid #1a5c3f;
}
</style>
