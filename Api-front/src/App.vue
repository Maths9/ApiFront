<template>
  <div>
    <button type="button" @click="fetchMensagens">Get Mensagens</button>
      <h1>Mensagens</h1>

    <button type="button" @click="fetchUsuarios">Get Usuarios</button>
      <h1>Usuarios</h1>

    <button type="button" @click="fetchProdutos">Get Produtos</button>
      <h1>Produtos</h1>
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import axios from './services/axiosConfig';

const mensagens = ref([]); 
  
const usuarios = ref([]); 

const produtos = ref([]);
 

async function fetchMensagens() {
    const response = await axios.get('/mensagens');
    mensagens.value = response.data;
    console.log(mensagens.value);
}
async function fetchUsuarios() {
    const response = await axios.get('/usuarios');
    usuarios.value = response.data;
    console.log(usuarios.value);
}
async function fetchProdutos() {
    const response = await axios.get('/produtos');
    produtos.value = response.data;
    console.log(produtos.value);
}


</script>

<style scoped>
/* Adicione seu estilo aqui, se necessário */
</style>
