<template>
  <div  class="content">
    <div v-if="dadosPaciente.length > 0" class="title">{{ title }}</div>
    <c-box :fontSize="['sm', 'md','lg','xl']"  v-else>Não encontramos nenhuma informação!</c-box>
    <table class="table table-responsive">
      <thead class="thead-light">
        <tr>
          <th
            scope="col"
            v-for="(values, keys) in dadosPaciente[0]"
            :key="values.id"
          >
            {{ keys }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value) in dadosPaciente" :key="value.id">
          <td>
            <nuxt-link :to="rota">
              <button
                @click="filterPaciente(value.editar)"
                :value="value.editar"
              >
                <font-awesome-icon icon="edit" size="lg" />
              </button>
            </nuxt-link>
            <button @click="deletePaciente(value.editar)" :value="value.editar">
              <font-awesome-icon icon="trash-alt" size="lg" />
            </button>
          </td>
          <td>{{value.id}}</td>
          <td>
            {{ value.Nome }}
          </td>
          <td>
            {{ value.Sobrenome }}
          </td>
          <td>
            {{ value.Data_Nascimento }}
          </td>
          <td>
            <c-button
              variant-color="green"
              h="19px"
              @click="
                open();
                sendImg(value.Foto_Paciente);
              "
              >Exibir imagem</c-button
            >
          </td>
          <td>
            {{ value.Nome_Mae }}
          </td>
          <td>
            {{ value.Sobrenome_Mae }}
          </td>
          <td>
            {{ value.Cpf }}
          </td>
          <td>
            {{ value.CNS }}
          </td>
        </tr>
      </tbody>
    </table>
    <modal-paciente-imagem ref="call" :Imagem="nameImg" />
    <modal-deletar-paciente :idPaciente="deletePacienteId" ref="delete" />
  </div>
</template>

<script>
import ModalPacienteImagem from "./ModalPacienteImagem.vue";
export default {
  components: { ModalPacienteImagem },
  props: ["dadosPaciente", "title", "rota", "dadosJoin"],
  methods: {
    sendImg(name) {
      this.nameImg = name;
    },
    open() {
      this.$refs.call.open();
    },
    deletePaciente(ValorClicked){
      this.deletePacienteId = ValorClicked
      this.$refs.delete.openDialog()
    },
    showEdit(column, choose) {
      return column === choose ? true : false;
    },
    sendDataPaciente(data) {
      this.$store.commit("om30/updatePaciente", data);
    },
    filterPaciente(ValorClicked) {
      this.dadosUpdate = this.dadosJoin.filter(
        (data) => data.Client_ID == ValorClicked
      );
      this.sendDataPaciente(this.dadosUpdate);
    },
  },
  computed: {
    dado() {
      let tamanho = this.dadosPaciente.length;
      return tamanho;
    },
  },
  mounted() {
    this.abrirImg = this.dadosPaciente.Foto_Paciente;
  },
  data() {
    return {
      deletePacienteId:'',
      nameImg: "",
      isOpen: false,
      blockScrollOnMount: false,
      abrirImg: "",
      filtrar: ["editar", "Foto_Paciente"],
      dadosUpdate: "",
    };
  },
};
</script>

<style>
.editar {
  background-color: aquamarine;
  border-radius: 9999px;
}
.title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.content {
}
table {
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: arial;
}

.table {
  border-bottom: #999999 solid 1px;
  width: 100%;
  margin-bottom: 20px;
}

.table th,
.table td {
  border-right: #999999 solid 1px;
  font-size: 12px;
  padding: 8px;
  line-height: 20px;
  text-align: left;
  vertical-align: middle;
}

.table td:last-child {
  border-right: 0;
}

.table thead th {
  font-weight: normal;
  background-color: #f7fafc;
  font-weight: 600;
  color: gray;
  font-size: 15px;
}

.table tbody > tr:nth-child(odd) > td,
.table tbody > tr:nth-child(odd) > th {
  background-color: #f8f8f8;
}

/* Small Sizes */
@media (max-width: 926px) {
  /* Responsive Table */
  .table-responsive {
    display: block;
    position: relative;
    width: 100%;
  }

  .table-responsive thead,
  .table-responsive tbody,
  .table-responsive th,
  .table-responsive td,
  .table-responsive tr {
    display: block;
  }
  .table-responsive td,
  .table-responsive th {
    height: 35px;
  }

  .table-responsive thead {
    float: left;
  }

  .table-responsive tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
  }

  .table-responsive tbody tr {
    display: inline-block;
  }

  .table td:last-child {
    border-right: #999999 solid 1px;
  }
}
</style>