<template>
  <v-app theme="dark">
   <v-main>
    <v-navigation-drawer v-model="drawer" id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Rotas"> Rotas</router-link>
      <router-link to="/CriarProdutos"> CriarProdutos</router-link>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
      <router-link to="/">Home</router-link>
      <router-link to="/Rotas"> Rotas</router-link>
      <router-link to="/CriarProdutos"> CriarProdutos</router-link>
    </v-app-bar>


  <router-view></router-view>
  </v-main>
</v-app>
</template>

<script setup lang="ts">
import "vuetify/styles";
import { ref } from "vue";
import axios from "./services/axiosConfig"; // Ajuste o caminho conforme necessário
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

</script>

<style scoped>


</style>
