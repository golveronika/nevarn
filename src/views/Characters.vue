<template>
  <div class="characters-page">
    <h1>Здесь будет список персонажей ✨</h1>
    <div class="chapters">
    <div class="chapter available effect--vhs">
      <img src="/images/image1.png" alt="👁" width="250" height="250" />
    </div>
    <div class="chapter locked">
      <img src="/images/image2.png" alt="👁" width="250" height="250" />
    </div>
    <div class="chapter locked">
      <img src="/images/image3.png" alt="👁" width="250" height="250" />
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useBackgroundStore } from '@/stores/background'

const bg = useBackgroundStore()

onMounted(() => {
  bg.clear()
})
</script>

<style scoped>
.characters-page {
  padding: 16px;
  padding-top: 80px;
  color: white;
}

.chapters {
  display: flex;
  gap: 2rem;
}

.chapter {
  color: #aaa;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: default;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  height: 250px;

  img {
    object-fit: cover;
  }
}

.chapter.available {
  color: #f0f0f0;
  text-shadow: 0 0 10px rgba(255, 180, 80, 0.6);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.chapter.locked {
  opacity: 0.4;
  filter: grayscale(0.8);
}
</style>
