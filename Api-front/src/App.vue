<template>
  <div>
    <button type="button" @click="fetchMensagens">Get Mensagens</button>
    <h1>Mensagens</h1>
    <ul>
      <li v-for="mensagem in mensagens" :key="mensagem">{{ mensagem.mensagem }}</li>
    </ul>

    <h1>Usuários</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario">{{ usuario.id }} - {{ usuario.nome }}</li>
    </ul>

    <h1>Produtos</h1>
    <ul>
      <li v-for="produto in produtos" :key="produto">{{ produto.nome }} - {{ produto.detalhes }}</li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const mensagens = ref([]); 
  
const usuarios = ref([]); 
  fetchUsuarios();
const produtos = ref([]);
  fetchProdutos();  

async function fetchMensagens() {
    const response = await axios.get('http://127.0.0.1:8000/mensagens/');
    mensagens.value = response.data;
}
async function fetchUsuarios() {
    const response = await axios.get('http://127.0.0.1:8000/usuarios/');
    usuarios.value = response.data;
}
async function fetchProdutos() {
    const response = await axios.get('http://127.0.0.1:8000/produtos/');
    produtos.value = response.data;
}


</script>

<style scoped>
/* Adicione seu estilo aqui, se necessário */
</style>
