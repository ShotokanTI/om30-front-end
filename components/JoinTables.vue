<template>
  <c-box align-items="center" display="flex" flex-direction="column" justify-content="center" w="100%" h="100vh" >
    <TablePaciente
      :dadosPaciente="dadosPaciente"
      :dadosJoin="dadosJoin"
      title="Lista de Pacientes"
      rota="/add/paciente"
    />
    <TableEndereco
      :dadoEndereco="dadosEndereco"
      title="Lista de Endereços"
      rota=""
    />
  </c-box>
</template>

<script>
export default {
  data() {
    return {
      dadosJoin:'',
      dadosPaciente: "",
      dadosEndereco:""
    };
  },
  created() {
    this.$axios({
      method: "GET",
      url: "http://localhost:8080/Main/getPaciente",
    }).then((resp) =>{
      this.dadosJoin = resp.data.dadosCompletos
      this.dadosPaciente = resp.data.onlyPaciente
      });

    this.$axios({
      method: "GET",
      url: "http://localhost:8080/Main/getEnderecos",
    }).then((resp) => (this.dadosEndereco = resp.data));
  },
};
</script>

<style>
</style>