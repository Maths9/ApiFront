<template>
    <div class="card-cadastro">
    <v-sheet class="mx-auto" width="400"> 
      <v-form ref="form" @submit.prevent="cadastro">
        <v-text-field
          v-model="nome.value"
          :rules="nomeRules"
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="senha.value"
          :rules="senhaRules"
          label="Senha"
          type="password"
          required
        ></v-text-field>
  
        <v-btn class="mt-2" type="submit" block>Criar Cadastro</v-btn>
      </v-form>
    </v-sheet>
</div>
  </template>
  
  <script lang="ts">
    import router from '@/routers';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/axiosConfig';

export default {
  name: 'cadastroComponent',
  setup() {
    const nome = ref({
      value: '',
      errorMessage: '',
    });

    const senha = ref({
      value: '',
      errorMessage: '',
    });

    const nomeRules = [
      (      v: any) => !!v || 'Nome é obrigatório',
      (      v: string | any[]) => (v && v.length >= 3) || 'Nome deve ter pelo menos 3 caracteres',
    ];

    const senhaRules = [
      (      v: any) => !!v || 'Senha é obrigatória',
      (      v: string | any[]) => (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres',
    ];

    const clearErrors = () => {
      nome.value.errorMessage = '';
      senha.value.errorMessage = '';
    };

    const router = useRouter(); // Usa o hook useRouter para obter a instância do roteador

    const cadastro = async () => {
      clearErrors();

      const data = {
        nome: nome.value.value,
        senha: senha.value.value,
      };

      try {
        const response = await api.post('/login', data); // Ajuste o endpoint conforme necessário
        console.log('cadastro bem-sucedido:', response.data);
        alert('cadastro bem-sucedido');
        
        // Exemplo de armazenamento de token de autenticação
        localStorage.setItem('token', response.data.token);

        // Redirecionar o usuário para a página inicial ou para a página protegida
        router.push('/Rotas');
      } catch (err) {
        const error = err as { response?: any; request?: any; message?: string }; // Afirmação de tipo
        if (error.response) {
          console.error('Erro ao fazer login:', error.response.data);
          if (error.response.status === 401) {
            senha.value.errorMessage = 'Credenciais inválidas';
          } else {
            const errors = error.response.data.errors;
            if (errors) {
              if (errors.nome) nome.value.errorMessage = errors.nome[0];
              if (errors.senha) senha.value.errorMessage = errors.senha[0];
            }
          }
        } else if (error.request) {
          console.error('Erro na requisição:', error.request);
        } else {
          console.error('Erro ao configurar a requisição:', error.message);
        }
      }
    }

    return {
      nome,
      senha,
      nomeRules,
      senhaRules,
      cadastro,
    };
  },
};
  </script>
  
  
  <style scoped>
  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: darkslategray;
  }
  
  .bg-deep-purple.pa-12 {
    background-color: darkslategrey;
  }

  div.card-cadastro {
    padding-top: 15%
  }
    
  </style>
  