<template>
  <div>
    <v-content>
      <v-layout align-center justify-center row fill-height>
        <h1>Faça seu Login</h1>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-form v-model='valid'>
          <v-text-field
            v-model="user"
            :rules="userRules"
            label="USUARIO"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="SENHA"
            required
          ></v-text-field>
          <v-layout align-center justify-center row fill-height>
              <router-link  style="text-decoration: none" to='/Oportunity'>
                <v-btn outline color="#3a0ca3">Login</v-btn>
              </router-link>
          </v-layout>
        </v-form>
      </v-layout>
    </v-content>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      user: '',
      userRules: [
        v => !!v || 'Usuario é Obrigatório'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Senha é Obrigatória'
      ]
    })
  }
</script>
<style>
h1{
  color:#3a0ca3;
}
</style>