import { createRouter, createWebHistory } from 'vue-router'

import Characters from '@/views/Characters.vue'
import Menu from '@/views/Menu.vue'
import Story from '@/views/Story.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '/story',
      name: 'story',
      component: Story,
    },
  ],
})

export default router
