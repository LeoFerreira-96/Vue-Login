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
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="SENHA"
            type="password"
          ></v-text-field>
          <v-layout align-center justify-center row fill-height>
              <!-- <router-link  style="text-decoration: none" to='/Oportunity'> -->
                <v-btn @click="submit" outline color="#3a0ca3">Login</v-btn>
              <!-- </router-link> -->
          </v-layout>
        </v-form>
      </v-layout>
    </v-content>
  </div>
</template>
<script>
import Auth from '../../services/auth'
  export default {
    data: () => ({
      // validação input Usuario
      valid: false,
      user: '',
      userRules: [
        v => !!v || 'Usuario é Obrigatório'
      ],
      // validação input Senha
      password: '',
      passwordRules: [
        v => !!v || 'Senha é Obrigatória'
      ]
    }),
    methods: {
      async submit(){
        console.log(this.user, this.password)
        const authData = await Auth.login(this.user, this.password)
        console.log('AuthData:', authData)
        // const variable = await action
        
        this.$router.push('/oportunity')
      }
    }
  }
</script>
<style>
h1{
  color:#3a0ca3;
}
</style>