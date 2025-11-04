import { defineStore } from 'pinia'

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    type: null as 'video' | 'image' | null,
    src: '',
  }),
  actions: {
    set(type: 'video' | 'image', src: string) {
      this.type = type
      this.src = src
    },
    clear() {
      this.type = null
      this.src = ''
    },
  },
})
