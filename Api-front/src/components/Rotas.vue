<template>
    <div>
      <h1>Rotas</h1>
      <p>{{ mensagens }}</p>
      <button @click="mensagens_fetchData">Carregar Mensagens</button>

      <p>{{ usuarios }}</p>
      <button @click="usuarios_fetchData">Carregar Usuários</button>

      <p>{{ produtos }}</p>
      <button @click="produtos_fetchData">Carregar Produtos</button>

    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import api from '../services/axiosConfig';


  const produtos = ref('');
  const produtos_fetchData = async () => {
      const response = await api.get('/produtos'); 
      produtos.value = response.data;
      console.log(response.data);
  }

  const usuarios = ref('');
  const usuarios_fetchData = async () => {
      const response = await api.get('/usuarios'); 
      usuarios.value = response.data;
      console.log(response.data);
  }  

  const mensagens = ref('');
  const mensagens_fetchData = async () => {
      const response = await api.get('/mensagens'); 
      mensagens.value = response.data;
      console.log(response.data);
  }

  </script>
  
  <style scoped>
  /* Adicione seu estilo aqui, se necessário */
  </style>
  