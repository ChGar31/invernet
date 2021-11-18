import { createRouter, createWebHashHistory } from 'vue-router'
import Espirulina from '../views/Espirulina.vue'
import Lechuga from '../views/Lechuga.vue'
import Germinados from '../views/Germinados.vue'


const routes = [
  {
    path: '/espirulina',
    name: 'Espirulina',
    component: Espirulina
  },
  {
    path: '/lechuga',
    name: 'Lechuga',
    component: Lechuga
  },
  {
    path: '/germinados',
    name: 'Germinados',
    component: Germinados
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
