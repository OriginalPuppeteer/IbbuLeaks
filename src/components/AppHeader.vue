<script setup>
defineProps({
  count: Number,
})
</script>

<template>
  <header>
    <h1>Ibbu Leaks</h1>
    <p>The world's largest repository of leaked Ibrahim Hameed photos</p>
    <span class="badge">{{ count }} photos</span>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(135deg, #0d2e22 0%, #0a3d2e 100%);
  border-bottom: 2px solid #2ecc8a;
  padding: 40px 24px 32px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 24px rgba(46, 204, 138, 0.15);
}

h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 800;
  color: #3dffa0;
  letter-spacing: -0.5px;
  text-shadow: 0 0 30px rgba(61, 255, 160, 0.4);
}

p {
  margin-top: 8px;
  font-size: 1rem;
  color: #7dddaa;
  letter-spacing: 0.5px;
}

.badge {
  display: inline-block;
  margin-top: 14px;
  background: rgba(46, 204, 138, 0.15);
  border: 1px solid #2ecc8a;
  color: #3dffa0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 999px;
}
</style>
