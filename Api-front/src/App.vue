<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Rotas"> Rotas</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> 
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from './services/axiosConfig'; // Ajuste o caminho conforme necessário



</script>

<style scoped>

</style>
