import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMusicStore = defineStore('music', () => {
  const isMuted = ref(true)
  const playlist = ref<string[]>([
    '/music/dreadfulwhispers.mp3',
    '/music/solitude-dark-ambient-music-354468.mp3',
  ])
  const currentIndex = ref(0)
  let bgAudio: HTMLAudioElement | null = null

  function ensureAudio() {
    if (!bgAudio) {
      bgAudio = new Audio(playlist.value[currentIndex.value])
      bgAudio.loop = true
      bgAudio.volume = 0.5
      bgAudio.addEventListener('ended', () => {
        currentIndex.value = (currentIndex.value + 1) % playlist.value.length
        if (bgAudio) bgAudio.src = playlist.value[currentIndex.value] as string
        bgAudio?.play().catch(() => {})
      })
    }
  }

  async function play(): Promise<void> {
    ensureAudio()
    if (!bgAudio) return
    await bgAudio.play()
    isMuted.value = false
  }

  function pause() {
    bgAudio?.pause()
    isMuted.value = true
  }

  function toggle() {
    if (isMuted.value) {
      return play()
    } else {
      pause()
    }
  }

  async function tryAutoStart(): Promise<boolean> {
    try {
      await play()
      return true
    } catch {
      return false
    }
  }

  function unlockOnFirstInteraction() {
    const once = async () => {
      try {
        await play()
      } catch {}
      window.removeEventListener('pointerdown', once)
      window.removeEventListener('keydown', once)
    }
    window.addEventListener('pointerdown', once, { once: true })
    window.addEventListener('keydown', once, { once: true })
  }

  return {
    isMuted,
    playlist,
    currentIndex,
    play,
    pause,
    toggle,
    tryAutoStart,
    unlockOnFirstInteraction,
  }
})
