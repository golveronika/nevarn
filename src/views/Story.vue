<template>
  <div class="story-page">
    <h1>Здесь будет история ✨</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useBackgroundStore } from '@/stores/background'

const bg = useBackgroundStore()

onMounted(() => {
  bg.clear()
})
</script>

<style scoped>

.story-page {
  padding: 16px;
  padding-top: 80px;
  color: white;
}
</style>
