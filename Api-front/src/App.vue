<template>
    <v-container>
      
        <router-link to="/">Home</router-link>
        <router-link to="/Rotas"> Rotas</router-link>
        <router-link to="/Criar"> Criar</router-link>
     
  </v-container>

    <router-view></router-view> 
 
</template>


<script setup lang="ts">
import 'vuetify/styles'
import { ref } from 'vue';
import api from './services/axiosConfig'; // Ajuste o caminho conforme necessário

</script>

<style scoped>

</style>
