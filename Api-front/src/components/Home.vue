<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <router-link to="/">Home</router-link>
      <router-link to="/Rotas"> Rotas</router-link>
      <router-link to="/CriarProdutos"> CriarProdutos</router-link>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
      <router-link to="/">Home</router-link>
      <router-link to="/Rotas"> Rotas</router-link>
      <router-link to="/CriarProdutos"> CriarProdutos</router-link>
    </v-app-bar>

    <v-main>
      <v-form @submit.prevent="cadastro">
        <v-text-field
          v-model="nome.value"
          :rules="nomeRules"
          label="Nome"
          
        ></v-text-field>
        <v-text-field
          v-model="senha.value"
          :rules="senhaRules"
          label="Senha"
          
          type="password"
        ></v-text-field>
        <v-btn type="submit">Cadastrar</v-btn>
      </v-form>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/axiosConfig";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const nome = ref({
  value: "",
  errorMessage: "",
});

const senha = ref({
  value: "",
  errorMessage: "",
});

const nomeRules = [
  (v: any) => !!v || "Nome é obrigatório",
  (v: string | any[]) =>
    (v && v.length >= 3) || "Nome deve ter pelo menos 3 caracteres",
];

const senhaRules = [
  (v: any) => !!v || "Senha é obrigatória",
  (v: string | any[]) =>
    (v && v.length >= 6) || "Senha deve ter pelo menos 6 caracteres",
];

const clearErrors = () => {
  nome.value.errorMessage = "";
  senha.value.errorMessage = "";
};

const router = useRouter();

const cadastro = async () => {
  clearErrors();

  const data = {
    nome: nome.value.value,
    senha: senha.value.value,
  };

  
    const response = await api.post("/login", data); // Ajuste o endpoint conforme necessário
    console.log("cadastro bem-sucedido:", response.data);
    alert("cadastro bem-sucedido");

    localStorage.setItem("token", response.data.token);
    router.push("/Rotas");
  
    
  }

</script>

<style scoped>
div.card-cadastro {
  padding-top: 15%;
}
.v-form {
  margin-top: 10%;
  padding-left: 20%;
  padding-right: 20%;
}
.v-btn {
  background-color: rgb(12, 49, 72);
  color: white;
}
</style>
