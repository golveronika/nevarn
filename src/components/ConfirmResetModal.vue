<template>
  <transition name="fade">
    <div v-if="show" class="modal-backdrop" @click.self="() => {$emit('close'); deleted = false}">
      <div class="modal" v-if="!deleted">
        <h2> <img src="/icons/alert.svg" width="30" height="30" class="icon" /> ВНИМАНИЕ</h2>
        <p>
          Это действие <strong>необратимо</strong>.<br />
          Все сохранённые данные, журналы наблюдений и прогресс будут УНИЧТОЖЕНЫ.<br />
          Вы уверены, что хотите этого?
        </p>

        <div class="actions">
          <button class="cancel-btn" @click="$emit('close')">Отмена</button>
          <button class="delete-btn" @click="handleDelete">Удалить всё</button>
        </div>
      </div>
      <div class="modal" v-else>
        <p>
          Данные были стерты.
        </p>

        <div class="actions">
          <button class="cancel-btn" @click="() => {$emit('close'); deleted = false}">Закрыть</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'

 defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])

const deleted = ref(false)

function handleDelete() {
  localStorage.clear()
  deleted.value = true
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: #1a0000;
  border: 1px solid #ff000044;
  box-shadow: 0 0 25px #ff000055;
  padding: 30px;
  max-width: 420px;
  text-align: center;
  color: #ffdddd;
  font-family: 'Courier New', monospace;
  animation: pulse 1.5s infinite alternate;

  img {
    margin-bottom: -8px;
  }
}

.modal h2 {
  color: #ff4444;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.modal p {
  line-height: 1.5;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.cancel-btn,
.delete-btn {
  flex: 1;
  padding: 10px;
  font-family: 'Courier New', monospace;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s;
}

.cancel-btn {
  background: transparent;
  border-color: #555;
  color: #bbb;
}

.cancel-btn:hover {
  background: #333;
}

.delete-btn {
  background: #ff000022;
  border-color: #ff0000;
  color: #ff6666;
}

.delete-btn:hover {
  background: #ff000044;
  box-shadow: 0 0 10px #ff0000aa;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  from {
    box-shadow: 0 0 15px #ff000055;
  }
  to {
    box-shadow: 0 0 30px #ff0000aa;
  }
}
</style>
