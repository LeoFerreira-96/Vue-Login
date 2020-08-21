<template>
  <div>
    <v-content>
      <v-snackbar v-model="snackbar" top>
        {{ error }}
        <v-btn color="Red" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <v-layout align-center justify-center row fill-height>
        <h1>Activity</h1>
      </v-layout>
      <v-layout justify-center row>
        <!-- tabela para receber os dados da Api -->
        <v-data-table
        :headers="headers"
        :items="desserts"
        :loading="true"
        class="tableActivity"
      >
        <v-progress-linear v-show="onLoading" color="#3a0ca3" indeterminate></v-progress-linear>
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item }}</td>
          <td class="text-xs-right">{{ props.item }}</td>
          <td class="text-xs-right">{{ props.item }}</td>
          <td class="text-xs-right">{{ props.item }}</td>
          <td class="text-xs-right">{{ props.item }}</td>
        </template>
      </v-data-table>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
          <router-link  style="text-decoration: none" to='/'>
            <v-btn outline color="#3a0ca3">VOLTAR</v-btn>
          </router-link>
      </v-layout>
    </v-content>
  </div>
</template>
<script>
import Auth from "../../services/auth";
export default {
  data: () => ({
    snackbar: false,
    error: undefined,
    onLoading: false,
    ActivityTableInput:{
      //setar valores padrão por enquanto.
    }
  }),
  methods: {
  async onload() {
      this.onLoading = true;
      try {
        await Auth.activity(this.ActivityTableInput);
      } catch (error) {
        this.snackbar = true;
      } finally {
        this.onLoading = false;
      }
    }
  }
}
</script>
<style>

.tableActivity{
    width: 80%;
    height: auto;
}
h1{
  color:#3a0ca3;
}
</style>