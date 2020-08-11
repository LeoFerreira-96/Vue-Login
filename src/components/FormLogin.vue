<template>
  <v-container>
      <v-layout layout align-center justify-center row fill-height>
        <v-flex xs4 class="text-center">
            <v-text-field v-model="User" :rules="userRules" label="Usuario" required />
            <v-text-field v-model="Password" :rules="passwordRules" label="Senha" required />
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      User: '',
      userRules: [
        v => !!v || 'Usuario é Obrigatório'
      ],
      Password: '',
      passwordRules: [
        v => !!v || 'Senha é Obrigatória'
      ]
    })
  }
</script>

<style></style>