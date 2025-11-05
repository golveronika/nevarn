<template>
  <div class="debug-page">

    <div class="container">

      <div class="terminal" id="terminal">
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useBackgroundStore } from '@/stores/background'
import { typewriter } from '@/utils/typewriter'

const bg = useBackgroundStore()

onMounted(() => {
  bg.set('video', '/video/screen.mp4')

  typewriter({
    target: '#terminal',
    lines: [
      '> Debug terminal',
      '> Accessing files'
    ],
    speed: 10,
    delayBetween: 10,
    withDots: true
  })

})
</script>

<style scoped>


.debug-page {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: "Overpass Mono", monospace !important;
  color: #fff;
  padding-top: 120px;

  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    position: relative;
  }
}

.terminal {
  color: #9A8282;
  width: 100%;
  width: 730px;
  height: 100px;
}

</style>
