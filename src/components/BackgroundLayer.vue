<template>
  <div class="background-layer">
    <transition name="fade" mode="out-in">
      <video
        v-if="type === 'video'"
        key="video"
        :src="src"
        autoplay
        muted
        loop
        playsinline
        class="background-media"
      />
      <img
        v-else-if="type === 'image'"
        key="image"
        :src="src"
        alt=""
        class="background-media"
      />
      <div v-else key="empty" class="background-empty"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBackgroundStore } from '@/stores/background'

const bg = useBackgroundStore()
const { type, src } = storeToRefs(bg)

</script>

<style scoped>
.background-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #000000;
}

.background-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background-empty {
  width: 100%;
  height: 100%;
  background: #000000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
