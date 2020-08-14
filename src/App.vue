<template>
  <v-app>
    <!-- layout padrão com Header -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase" >
        <span>Sales Time</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
<!-- usando Vue Router para definir oque sera renderizado -->
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
<style>
span{
  color:#3a0ca3;
}
</style>
