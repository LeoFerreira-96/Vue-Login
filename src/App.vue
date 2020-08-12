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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      //
    };
  }
};
</script>
