<template>
  <div v-if="dadoEndereco.length > 0" class="content">
    <div class="title">{{ title }}</div>
    <table class="table table-responsive">
      <thead class="thead-light">
        <tr>
          <th
            scope="col"
            v-for="(values, keys) in dadoEndereco[0]"
            :key="values.id"
          >
            {{ keys }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(valores, index) in dadoEndereco.length" :key="valores.id">
          <td v-for="dadosEndereco in dadoEndereco[index]" :key="dadosEndereco.id">
            {{ dadosEndereco }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["dadoEndereco", "title", "rota", "dadosJoin"],
};
</script>

<style>
</style>