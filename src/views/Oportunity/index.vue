<template>
  <div>
    <v-content>
      <v-layout align-center justify-center row fill-height>
        <h1>Oportunity</h1>
      </v-layout>
      <v-layout justify-center row>
        <!-- tabela para receber os dados da Api -->
        <v-data-table
        :headers="headers"
        :items="desserts"
        :loading="true"
        class="tableOportunity"
      >
        <v-progress-linear v-slot:progress color=":#3a0ca3" indeterminate></v-progress-linear>
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
export default {
  
}
</script>
<style>

.tableOportunity{
    width: 80%;
    height: auto;
}
h1{
  color:#3a0ca3;
}
</style>