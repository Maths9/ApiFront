<template>
  <v-app id="inspire">
   
    <v-main>
      <v-container>
        <v-row id="cards">
          <v-card title="Rota Produtos" variant="outlined">
            <p>{{ produtos }}</p>
            <v-btn variant="tonal" @click="produtos_fetchData"
              >Carregar Produtos</v-btn
            >
          </v-card>
          <v-card title="Rota Mensagens" variant="outlined">
            <p>{{ mensagens }}</p>
            <v-btn variant="tonal" @click="mensagens_fetchData"
              >Carregar Mensagens</v-btn
            >
          </v-card>
          <v-card title="Rota Login" variant="outlined">
            <p>{{ login }}</p>
            <v-btn variant="tonal" @click="login_fetchData"
              >Carregar Logins</v-btn
            >
          </v-card>
          <v-card title="Rota Users" variant="outlined">
            <p>{{ usuarios }}</p>
            <v-btn variant="tonal" @click="usuarios_fetchData"
              >Carregar Users</v-btn
            >
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "../services/axiosConfig";

const produtos = ref("");
const produtos_fetchData = async () => {
  const response = await api.get("/produtos");
  produtos.value = response.data;
  console.log(response.data);
};

const mensagens = ref("");
const mensagens_fetchData = async () => {
  const response = await api.get("/mensagens");
  mensagens.value = response.data;
  console.log(response.data);
};

const usuarios = ref("");
const usuarios_fetchData = async () => {
  const response = await api.get("/usuarios");
  usuarios.value = response.data;
  console.log(response.data);
};

const login = ref("");
const login_fetchData = async () => {
  const response = await api.get("/login");
  login.value = response.data;
  console.log(response.data);
};
</script>

<style scoped>
#cards {
  
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  color: rgb(0, 24, 44);
}
.v-btn {
  background-color: rgb(12, 49, 72);
  color: white;
}
</style>
