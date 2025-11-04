<template>
  <div class="app-wrapper">
    <BackgroundLayer />
    <div class="content-wrapper">
      <router-view />
    </div>
    <UILayer />
  </div>
</template>

<script setup lang="ts">
import BackgroundLayer from '@/components/BackgroundLayer.vue'
import UILayer from '@/components/UILayer.vue'
import { useMusicStore } from '@/stores/music'
import { onMounted } from 'vue'

const music = useMusicStore()

onMounted(async () => {
  const ok = await music.tryAutoStart()
  if (!ok) {
    music.unlockOnFirstInteraction()
  }
})


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Overpass", sans-serif;
}

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
