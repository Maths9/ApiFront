import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Rotas from '../components/Rotas.vue';
import Criar from '../components/CriarProdutos.vue';

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
    component: Criar
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
