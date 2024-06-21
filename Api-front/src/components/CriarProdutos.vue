<template>
    <form @submit.prevent="submit"  >
      <v-text-field 
        v-model="nome.value"
        :counter="10"
        :error-messages="nome.errorMessage"
        label="Nome"
      ></v-text-field>
  
      <v-text-field
        v-model="id.value"
        :counter="3"
        :error-messages="id.errorMessage"
        label="id Number"
      ></v-text-field>
  
      <v-text-field
        v-model="detalhes.value"
        :error-messages="detalhes.errorMessage"
        label="detalhes"
      ></v-text-field>
  
      <v-text-field
        v-model="preco.value"
        :error-messages="preco.errorMessage"
        :items="items"
        label="preco"
      ></v-text-field>
  
      <v-btn class="me-4" type="submit">CriarProdutos</v-btn>
  
      <v-btn @click="handleReset">clear</v-btn>
    </form>
  </template>
  
  <script>
 
  import { ref } from 'vue';
  import api from '../services/axiosConfig';
  
  export default {
    nome: 'FormComponent',
    setup() {
      const nome = ref({
        value: '',
        errorMessage: '',
      });
  
      const id = ref({
        value: '',
        errorMessage: '',
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
        id.value.value = '';
        detalhes.value.value = '';
        preco.value.value = null;
        
        clearErrors();
      };
  
      const clearErrors = () => {
        nome.value.errorMessage = '';
        id.value.errorMessage = '';
        detalhes.value.errorMessage = '';
        preco.value.errorMessage = '';
       
      };
  
      const submit = async () => {
        clearErrors();
  
        const data = {
          nome: nome.value.value,
          id: id.value.value,
          detalhes: detalhes.value.value,
          preco: preco.value.value,
         
        };
  
        try {
          const response = await api.post('/produtos', data);
          console.log(response.data);
          handleReset();
        } catch (error) {
          if (error.response) {
            console.error('Erro ao buscar produtos:', error.response.data);
            // Aqui você pode definir mensagens de erro específicas para cada campo
            const errors = error.response.data.errors;
            if (errors) {
              if (errors.nome) nome.value.errorMessage = errors.nome[0];
              if (errors.id) id.value.errorMessage = errors.id[0];
              if (errors.detalhes) detalhes.value.errorMessage = errors.detalhes[0];
              if (errors.preco) preco.value.errorMessage = errors.preco[0];
              
            }
          } else if (error.request) {
            console.error('Erro na requisição:', error.request);
          } else {
            console.error('Erro ao configurar a requisição:', error.message);
          }
        }
      };
  
      return {
        nome,
        id,
        detalhes,
        preco,
        submit,
        handleReset,
      };
    },
  };
  </script>
  
  <style scoped>
   form{
    margin-top: 5%;
    background-color: rgb(12, 114, 114),
    color(white)
    
   }
  </style>
  
  
