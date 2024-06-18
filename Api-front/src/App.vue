<template>
 
    <v-toolbar id="toolbar" border title="Application">
      <div> 
        <router-link to="/">Home</router-link>
        <router-link to="/Rotas"> Rotas</router-link>
        <router-link to="/Criar"> Criar</router-link>
      </div>
      
    </v-toolbar>
  
    <router-view></router-view> 

    
 
</template>

<script setup lang="ts">

import { ref } from 'vue';
import api from './services/axiosConfig'; // Ajuste o caminho conforme necessário



</script>

<style scoped>

</style>
