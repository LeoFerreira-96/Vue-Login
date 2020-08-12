<template>
  <v-container>
    <v-layout
      class="background"
      layout
      align-center
      justify-center
      row
      fill-height
    >
      <v-flex xs4 class="text-center">
        <v-text-field
          v-model="User"
          :rules="userRules"
          label="Usuario"
          required
        />
        <v-text-field
          v-model="Password"
          :rules="passwordRules"
          label="Senha"
          required
        />
        <div class="text-xs-center">
          <v-btn outline color="indigo">LOGIN</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    User: "",
    userRules: [v => !!v || "Usuario é Obrigatório"],
    Password: "",
    passwordRules: [v => !!v || "Senha é Obrigatória"]
  })
};
</script>

<style>
.background {
  height: 60%;

  background-color: #9a9a9a;
}
</style>
