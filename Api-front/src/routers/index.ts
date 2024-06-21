import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Rotas from '../components/Rotas.vue';
import CriarProdutos from '../components/CriarProdutos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Rotas',
    name: 'Rotas',
    component: Rotas
  },
  {
    path: '/CriarProdutos',
    name: 'CriarProdutos',
    component: CriarProdutos
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
