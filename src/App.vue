<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SALES TIME</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="mr-2">Pagina de Login</span>
    </v-toolbar>

    <v-content>
      <FormLogin />
      <Button />
    </v-content>
  </v-app>
</template>

<script>
import Button from "./components/Button";
import FormLogin from "./components/FormLogin"

export default {
  name: "App",
  components: {
    Button,
    FormLogin
  },
  data() {
    return {
      //
    };
  }
};
</script>
