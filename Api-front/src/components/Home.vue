<template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Email"
            clearable
          ></v-text-field>
  
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            label="Password"
            placeholder="Enter your password"
            clearable
          ></v-text-field>
  
          <br>
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const form = ref(false);
  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  
  const onSubmit = () => {
    if (!form.value) return;
  
    loading.value = true;
  
    setTimeout(() => (loading.value = false), 2000);
  };
  
  const required = (v: any) => {
    return !!v || 'Field is required';
  };
  </script>
  
  <style scoped>
  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: darkslategray;
    width: 100%;
  }
  
  .bg-deep-purple.pa-12 {
    background-color: darkslategrey;
  }
  </style>
  