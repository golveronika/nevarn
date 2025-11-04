<template>
  <div class="menu-page">
    <nav class="menu">
      <button class="btn" @click="() => goToPage('/story')">
        История
      </button>

      <button class="btn" @click="() => goToPage('/characters')">
        <!-- <img src="/icons/new.svg" width="17" height="17" class="icon" /> -->
        Персонажи
      </button>

      <button class="btn">
        Очистить прогресс
      </button>
    </nav>

  </div>
</template>


<script lang="ts" setup>
import { onMounted } from 'vue'
import { useBackgroundStore } from '@/stores/background'
import { useRouter } from 'vue-router'

const bg = useBackgroundStore()
const router = useRouter()

onMounted(() => {
  console.log('menu mounted')
  bg.set('video', '/video/nevarn-intro.mp4')
})

function goToPage(page: string) {
  router.push(page)
}

</script>


<style scoped>
.menu-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  margin-right: 0.2rem;
  margin-bottom: 2px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: #fff2e5;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    cursor: default;
    border-radius: 8px;
    overflow: hidden;
    width: 250px;
    height: 50px;
    text-decoration: none;
    box-shadow: 0px 0px 12px 4px rgb(0 0 0 / 14%);
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &:hover {
      transition: all 0.3s ease;
      color: #ffb500;
      text-shadow: 0 0 10px rgb(255 145 0);
    }
  }
}
</style>
