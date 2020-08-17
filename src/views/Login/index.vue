<template>
  <div>
    <v-content>
      <v-layout align-center justify-center row fill-height>
        <h1>Faça seu Login</h1>
        <v-progress-circular v-show="onLoading" indeterminate color="#3a0ca3" width="2"></v-progress-circular>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-form v-model='user.valid'>
          <v-text-field
            v-model="user.email"
            :rules="user.emailRules"
            label="EMAIL"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="user.passwordRules"
            label="SENHA"
            type="password"
          ></v-text-field>
          <v-layout align-center justify-center row fill-height>
              <!-- <router-link  style="text-decoration: none" to='/activity'> -->
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
      onLoading: false,
      user: {
        // validação input Usuario
        valid: false,
        email: '',
        emailRules: [
          v => !!v || 'Email é Obrigatório'
        ],
        // validação input Senha
        password: '',
        passwordRules: [
          v => !!v || 'Senha é Obrigatória'
        ]
      },
    }),
    methods: {
      async submit(){
        this.onLoading = true
        try {
          await new Promise(resolve => setTimeout(resolve, 3000))
          await Auth.login(this.user)
          this.$router.push('/activity')
        } catch(error) {
          console.log(error)
        }finally {
          this.isLoading = false
        }

      }
    }
  }
</script>
<style>
h1{
  color:#3a0ca3;
}
</style>