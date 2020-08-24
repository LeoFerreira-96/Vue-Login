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
        :headers="table.id"
        :items="table"
        :loading="true"
        class="tableActivity"
      >
        <v-progress-linear color="#3a0ca3" indeterminate></v-progress-linear>
        <template v-slot:items="props">
          <td>{{ props.type }}</td>
          <td class="text-xs-right">{{ props.subject }}</td>
          
        </template>
      </v-data-table>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
          <router-link  style="text-decoration: none" to='/'>
            <v-btn outline color="#3a0ca3">VOLTAR</v-btn>
          </router-link>
            <router-link  style="text-decoration: none" to="logout">
            <v-btn outline color="#3a0ca3" @click="logout">SAIR</v-btn>
          </router-link>
      </v-layout>
    </v-content>
  </div>
</template>
<script>
import Auth from "../../services/auth";
import apollo, {onLogout} from "../../plugins/apollo"
export default {
  data: () => ({
    snackbar: false,
    error: undefined,
    onLoading: false,
    ActivityTableInput:{
      descending: false,
      limit: 100,
      page: 1,
      period: null,
      situation: 1,
      sortBy: "datetime"
    },
    table: {}
  }),
  async created() {
    this.table = await Auth.activity()
  },
  methods: {
  async logout() {
    this.$router.push('/login')
    await onLogout(apollo)
  },
  async tableActivity() {
      try {
        await Auth.activity(this.ActivityTableInput);
      } catch (error) {
        this.snackbar = true;
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