<template>
  <v-app id="inspire">

    <v-main>
      <form @submit.prevent="submit"  >
      <v-text-field 
        v-model="nome.value"
        :counter="10"
        :error-messages="nome.errorMessage"
        label="Nome"
        required
      ></v-text-field>

      <v-select
        v-model="disponivel.value"
        :error-messages="disponivel.errorMessage"
        label="Disponivel"
        :items="disponivel.items"
        required
      ></v-select>

      <v-text-field
        v-model="detalhes.value"
        :error-messages="detalhes.errorMessage"
        label="Detalhes"
      ></v-text-field>

      <v-text-field
        v-model="preco.value"
        :error-messages="preco.errorMessage"
        label="Preco"
        required
      ></v-text-field>

      <v-btn class="me-4" type="submit">Criar Produto</v-btn>

      <v-btn @click="handleReset">Limpar</v-btn>
    </form>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/axiosConfig';


const nome = ref({
        value: '',
        errorMessage: '',
      });
  
      const disponivel = ref({
        value: '',
        errorMessage: '',
        items: ['true', 'false'],
      });
  
      const detalhes = ref({
        value: '',
        errorMessage: '',
      });
  
      const preco = ref({
        value: null,
        errorMessage: '',
      });
  
      const handleReset = () => {
        nome.value.value = '';
        disponivel.value.value = '';
        detalhes.value.value = '';
        preco.value.value = null;
        
        clearErrors();
      };
  
      const clearErrors = () => {
        nome.value.errorMessage = '';
        disponivel.value.errorMessage = '';
        detalhes.value.errorMessage = '';
        preco.value.errorMessage = '';
       
      };
  
      const submit = async () => {
        clearErrors();
        nome.value.errorMessage = '';
        disponivel.value.errorMessage = '';
        detalhes.value.errorMessage = '';
        preco.value.errorMessage = '';
  
        const data = {
          nome: nome.value.value,
          disponivel: disponivel.value.value,
          detalhes: detalhes.value.value,
          preco: preco.value.value,
         
        };
      
          const response = await api.post('/produtos', data);
          console.log(response.data);
          handleReset();
      }
      
            </script>

  
  <style scoped>
   .v-btn {
  background-color: rgb(12, 49, 72);
  color: white;
}
 
  </style>
  
  
