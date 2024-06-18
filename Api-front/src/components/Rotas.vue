<template>
    <div>
      <div id="cards">
      <v-card title="Rota Usuarios" variant="outlined">
        <p>{{ usuarios }}</p>
          <v-btn variant="tonal" @click="usuarios_fetchData">Carregar usuários</v-btn>
      </v-card>

      <v-card title="Rota Produtos" variant="outlined">
        <p>{{ produtos }}</p>
          <v-btn variant="tonal" @click="produtos_fetchData">Carregar Produtos</v-btn>
      </v-card>

      <v-card title="Rota Mensagens" variant="outlined">
        <p>{{ mensagens }}</p>
          <v-btn variant="tonal" @click="mensagens_fetchData">Carregar Mensagens</v-btn>
      </v-card>

      <v-card title="Rota Users" variant="outlined">
        <p>{{ login }}</p>
          <v-btn variant="tonal" @click="login_fetchData">Carregar Users</v-btn>
      </v-card>

      </div>
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

  const login = ref('');
  const login_fetchData = async () => {
      const response = await api.get('/login'); 
      login.value = response.data;
      console.log(response.data);
  }


  </script>
  
  <style scoped>
  
  #cards{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background-color: darkslategray;
    text-align: center;
    color: aliceblue
    
  
  }
 
  .v-btn{
    background-color: rgb(7, 18, 46);
    color: white;
  }
  </style>
  