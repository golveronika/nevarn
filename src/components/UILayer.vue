<template>
  <div class="ui-layer">
    <header class="ui-header">
      <div class="back-container">
        <button class="icon-btn" @click="() => router.push('/debug')">
          <img src="/icons/debug.svg" width="30" height="30" />
        </button>
        <button v-if="route.path !== '/'" class="icon-btn" @click="goToMenu">
          <img src="/icons/home.svg" width="30" height="30" />
          <span class="back">В главное меню</span>
        </button>
      </div>
      <button class="icon-btn" @click="toggleSound">
        <img src="/icons/volume-off.svg" v-if="music.isMuted" width="30" height="30" />
        <img src="/icons/volume-on.svg" v-else width="30" height="30" />
        <span class="music">{{ music.isMuted ? 'Включить атмосферный эмбиент' : 'Выключить атмосферный эмбиент' }}</span>
      </button>
    </header>
  </div>
</template>


<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useMusicStore } from '@/stores/music'

const music = useMusicStore()
const router = useRouter()
const route = useRoute()

function goToMenu() {
  router.push('/')
}

function toggleSound() {
  const p = music.toggle()
  if (p && typeof p.then === 'function') p.catch(() => { })
}

</script>

<style scoped>

.back-container {
  display: flex;
  gap: 12px;
}
.ui-layer {
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
}

.ui-header {
  pointer-events: auto;
  position: absolute;
  top: 0;
  right: 0;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  position: relative;

  .back {
    display: none;
    position: absolute;
    left: 50px;
    font-size: 14px;
    white-space: nowrap;
  }

  .music {
    display: none;
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    font-size: 14px;
    white-space: nowrap;
    padding-right: 8px;
  }
}

.icon-btn:hover {
  background: #343434;

  .back {
    display: block;
  }

  .music {
    display: block;
  }
}
</style>
