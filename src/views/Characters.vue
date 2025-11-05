<template>
  <div class="characters-page">

    <div class="container">

      <div class="terminal" id="terminal">
      </div>

      <div class="characters">

        <!--  <div class="character-wrapper">
          <button class="character-btn">
            <div class="character available frame">
              <img src="/images/image1.png" width="300" height="250" />
              <span></span>
            </div>
          </button>

          <div class="character-description">
            <span>Субъект 469. Мирослав Вейдис </span>
            <span>Статус: <span class="status stable">Стабильный</span></span>
            <span class="new-info"><img src="/icons/new.svg" width="17" height="17" class="icon" />Открыт доступ к следующей записи</span>
          </div>
        </div> -->

        <div class="character-wrapper">
          <button class="character-btn">
            <div class="character locked frame">
              <img src="/images/image1.png" width="300" height="250" />
              <span></span>
            </div>
            <div class="locked-title">ДОСТУП ЗАКРЫТ</div>
          </button>
        </div>

        <div class="character-wrapper">
          <button class="character-btn">
            <div class="character locked frame">
              <img src="/images/image2.png" width="300" height="250" />
              <span></span>
            </div>
            <div class="locked-title">ДОСТУП ЗАКРЫТ</div>
          </button>
        </div>

        <div class="character-wrapper">
          <button class="character-btn">
            <div class="character locked frame">
              <img src="/images/image3.png" width="300" height="250" />
              <span></span>
            </div>
            <div class="locked-title">ДОСТУП ЗАКРЫТ</div>
          </button>
        </div>

      </div>

      <div id="toast-container">
        <div class="toast error">
          <img src="/icons/error.svg" width="17" height="17" class="icon" />
          <span>Ошибка синхронизации. Кто Вы?</span>
        </div>

         <!--<div class="toast warning">
          <img src="/icons/warning.svg" width="17" height="17" class="icon" />
          <span>Предупреждение: Досье просматривались неизвестным пользователем.
            <br>
            Последний вход: {{ lastLoginDate }}.
          </span>
        </div>-->
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useBackgroundStore } from '@/stores/background'
import { typewriter } from '@/utils/typewriter'

const bg = useBackgroundStore()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lastLoginDate = computed(() => {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = '2031'
  return `${day}.${month}.${year}`
})

function showToastsSequentially() {
  const toasts = document.querySelectorAll('.toast');
  let delay = 0;

  toasts.forEach((toast) => {
    setTimeout(() => {
      toast.classList.add('show');
    }, delay);

    delay += 1000;
  });
}

onMounted(() => {
  bg.set('video', '/video/screen.mp4')

  typewriter({
    target: '#terminal',
    lines: [
      '> Opening directory: /root/system/archive/N_EVARN/subjects_of_observation/',
      '> Accessing files'
    ],
    speed: 10,
    delayBetween: 10,
    withDots: true
  })

  setTimeout(() => {
    showToastsSequentially();

  }, 2000)

})
</script>

<style scoped>


#toast-container {
  position: absolute;
  left: 0;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.toast {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  min-width: 320px;
  backdrop-filter: blur(6px);
}

.toast img {
  margin-right: 8px;
  margin-top: -2px;
}

.toast.error {
  color: #ff4c4c;
  background: #ff000022;
  border: 1px solid #ff4c4c33;
}

.toast.warning {
  color: #ffcc33;
  background: #ffaa0022;
  border: 1px solid #ffaa0040;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}


.characters-page {
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

.characters {
  display: flex;
  gap: 70px;
  margin-top: 20px;
  position: relative;

  .character-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  .character-description {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    white-space: nowrap;
    color: #c2c2c2;

    .status {
      &.stable {
        color: #0b8b0b;
      }
    }

    .new-info {
      img {
        margin-right: 5px;
        margin-bottom: -3px;
      }

      gap: 4px;
      line-height: 0;
    }
  }

  .locked-title {
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ac0a0a;
    font-size: 16px;
  }

  .character-btn {
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      transform: scale(1.03);
      transition: all 0.2s ease;
    }
  }

  .character {
    img {
      object-fit: cover;
    }

    &.locked {
      opacity: 0.4;
      filter: grayscale(0.8);
    }
  }

  .frame {
    position: relative;
    width: 300px;
    height: 250px;
  }

  .frame::before,
  .frame::after,
  .frame span::before,
  .frame span::after {
    border: 1px solid #9b9b9b;
  }

  .frame::before,
  .frame::after,
  .frame span::before,
  .frame span::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border: 1px solid #535353;
  }

  .frame::before {
    top: -5px;
    left: -5px;
    border-right: none;
    border-bottom: none;
  }

  .frame::after {
    top: -5px;
    right: -5px;
    border-left: none;
    border-bottom: none;
  }

  .frame span::before {
    bottom: -5px;
    left: -5px;
    border-right: none;
    border-top: none;
  }

  .frame span::after {
    bottom: -5px;
    right: -5px;
    border-left: none;
    border-top: none;
  }

}

</style>
