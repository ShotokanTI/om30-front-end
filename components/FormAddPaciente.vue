<template>
  <c-grid justify-content="center" align-content="center" h="100vh">
    <c-box>
      <form id="form-data" method="POST">
        <c-tabs
          max-width="800px"
          border="1px"
          border-color="gray.200"
          variant="enclosed-colored"
          :default-index="0"
        >
          <c-tab-list>
            <c-tab :fontSize="['sm', 'md']">Dados Pessoais</c-tab>
            <c-tab :fontSize="['sm', 'md']">Endereço do paciente</c-tab>
          </c-tab-list>

          <c-tab-panels border-top="0px">
            <c-tab-panel p="20px">
              <c-grid
                template-columns="repeat(4,1fr)"
                rowGap="6"
                columnGap="4"
                w="100%"
              >
                <c-box :grid-column="['1/5', '1/5', '1/3']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="fname"
                      >Nome</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.Nome"
                      name="Nome"
                      variant="flushed"
                      h="6"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Nome
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '3/5']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="fname"
                      >Sobrenome</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.Sobrenome"
                      name="Sobrenome"
                      variant="flushed"
                      h="6"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Sobrenome
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '1/3']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="fname"
                      >Nome mãe</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.Nome_Mae"
                      variant="flushed"
                      h="6"
                      name="Nome_Mae"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Nome_Mae
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '3/5']">
                  <c-form-control>
                    <c-form-label
                      :fontSize="['sm', 'md']"
                      variant="flushed"
                      for="fname"
                      >Sobrenome mãe</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.Sobrenome_Mae"
                      variant="flushed"
                      h="6"
                      name="Sobrenome_Mae"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Sobrenome_Mae
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '1/2']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="fname"
                      >Data nascimento</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.Data_Nascimento"
                      name="Data_Nascimento"
                      type="date"
                      variant="flushed"
                      h="6"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Data_Nascimento
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box w="100%" :grid-column="['1/5', '1/5', '2/3']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="fname"
                      >CPF</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.Cpf"
                      name="Cpf"
                      variant="flushed"
                      h="6"
                      v-mask="['###.###.###-##']"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Cpf
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '3/5']" w="100%">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="fname"
                      >CNS</c-form-label
                    >
                    <c-input
                      :value="DadosUpdate.CNS"
                      name="CNS"
                      variant="flushed"
                      h="6"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.CNS
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box grid-column="1/5">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']" for="foto_paciente"
                      >Foto</c-form-label
                    >
                    <c-input
                      id="foto_paciente"
                      h="13"
                      name="Foto_Paciente"
                      type="file"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsPaciente.Foto_Paciente
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-tab :tabindex="-1" grid-column="4/5">Seguinte</c-tab>
              </c-grid>
            </c-tab-panel>
            <c-tab-panel>
              <c-grid
                template-columns="repeat(4,1fr)"
                rowGap="6"
                columnGap="4"
                w="100%"
                p="20px"
              >
                <c-box :grid-column="['1/5', '1/5', '1/3']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']">Cep</c-form-label>
                    <c-input
                      :value="DadosUpdate.Cep"
                      @blur="pesquisaCep()"
                      type="text"
                      id="cep"
                      name="Cep"
                      v-mask="['#####-###']"
                      variant="flushed"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsEndereco.Cep
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '3/5']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']">Rua</c-form-label>
                    <c-input
                      :value="DadosUpdate.Logradouro"
                      type="text"
                      id="rua"
                      name="Logradouro"
                      variant="flushed"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsEndereco.Logradouro
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '1/3']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']">Bairro</c-form-label>
                    <c-input
                      :value="DadosUpdate.Bairro"
                      type="text"
                      id="bairro"
                      name="Bairro"
                      variant="flushed"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsEndereco.Bairro
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '3/4']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']">Cidade</c-form-label>
                    <c-input
                      :value="DadosUpdate.Localidade"
                      type="text"
                      id="cidade"
                      name="Localidade"
                      variant="flushed"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsEndereco.Localidade
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-box :grid-column="['1/5', '1/5', '4/5']">
                  <c-form-control>
                    <c-form-label :fontSize="['sm', 'md']">Estado</c-form-label>
                    <c-input
                      :value="DadosUpdate.Uf"
                      type="text"
                      id="uf"
                      name="Uf"
                      variant="flushed"
                    />
                    <c-text color="red.200" :fontSize="['sm', 'md']">{{
                      errorsEndereco.Uf
                    }}</c-text>
                  </c-form-control>
                </c-box>
                <c-button
                  grid-column="1/5"
                  @click="addPaciente()"
                  type="button"
                  right-icon="arrow-forward"
                  variant-color="blue"
                  variant="outline"
                >
                  Enviar
                </c-button>
              </c-grid>
            </c-tab-panel>
          </c-tab-panels>
        </c-tabs>
      </form>
    </c-box>
    <Footer />
  </c-grid>
</template>

<script>
import {mask} from "vue-the-mask"
import { CInput } from "@chakra-ui/vue";
export default {
  components: { CInput },
   directives: {mask},
  data() {
    return {
      DadosUpdate: {},
      errorsPaciente: "",
      errorsEndereco: "",
      errors: "",
    };
  },
  created() {
    this.addUpdateData();
  },
  methods: {
    addUpdateData() {
      let data =
        this.$store.state.om30.Paciente != null
          ? this.$store.state.om30.Paciente[0]
          : null;
      if (data != null) {
        for (let [key, values] of Object.entries(data)) {
          this.DadosUpdate[key] = values;
        }
      }
    },
    errorEnd() {
      const {
        Nome,
        Sobrenome,
        Nome_Mae,
        Sobrenome_Mae,
        Data_Nascimento,
        Cpf,
        CNS,
        Foto_Paciente,
        ...newData
      } = this.errors ?? 0;
      return newData;
    },
    errorPac() {
      const { Cep, Logradouro, Bairro, Localidade, Uf, ...newData } =
        this.errors ?? 0;
      return newData;
    },
    limpa_formulário_cep() {
      //Limpa valores do formulário de cep.
      document.getElementById("rua").value = "";
      document.getElementById("bairro").value = "";
      document.getElementById("cidade").value = "";
      document.getElementById("uf").value = "";
    },
    pesquisaCep() {
      var cepDigitado = document.getElementById("cep").value;
      //Nova variável "cep" somente com dígitos.
      var cep = cepDigitado.replace(/\D/g, "");

      //Verifica se campo cep possui valor informado.
      if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
          //Preenche os campos com "..." enquanto consulta webservice.
          document.getElementById("rua").value = "...";
          document.getElementById("bairro").value = "...";
          document.getElementById("cidade").value = "...";
          document.getElementById("uf").value = "...";

          let url = "https://viacep.com.br/ws/" + cep + "/json/";

          this.$axios
            .$get(url)
            .then((resp) => resp)
            .then(function (data) {
              document.getElementById("rua").value = data.logradouro;
              document.getElementById("bairro").value = data.bairro;
              document.getElementById("cidade").value = data.localidade;
              document.getElementById("uf").value = data.uf;
            });
        } //end if.
        else {
          //cep é inválido.
          this.limpa_formulário_cep();
          alert("Formato de CEP inválido.");
        }
      } //end if.
      else {
        //cep sem valor, limpa formulário.
        this.limpa_formulário_cep();
      }
    },
    messageSucess(title, description, status) {
      return this.$toast({
        title: title,
        description: description,
        status: status,
        duration: 10000,
      });
    },
    errorMessage(title, description, status) {
      return this.$toast({
        title: title,
        description: description,
        status: status,
        duration: 10000,
      });
    },
    async Paciente() {
      let form = document.getElementById("form-data");
      const data = new FormData(form);
      await this.$axios({
        data: data,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        url: "http://localhost:8080/Main/addPaciente",
      })
        .then((resp) => resp.data.errors)
        .then((data) => {
          this.errors = data;
          if (this.errors == null) {
            this.messageSucess(
              "Paciente criado com sucesso!",
              "Dê uma olhada na lista de pacientes",
              "success"
            );
          } else {
            this.errorsPaciente = this.errorPac();
            this.errorsEndereco = this.errorEnd();
            this.errorMessage(
              "Paciente não foi criado",
              "Corrija os erros nos respectivos campos",
              "error"
            );
          }
        });
    },
    verifyIfChange(data) {
      let form = new FormData();
      // this.DadosUpdate
      for (let [a, i] of data.entries()) {
        if (!Object.values(this.DadosUpdate).includes(i)) {
          form.append(a, i);
        }
      }
      // form.delete("Foto_Paciente");
      return form;
    },
    async updatePaciente() {
      let form = document.getElementById("form-data");
      let data = new FormData(form);
      data = this.verifyIfChange(data);
      data.append("idUpdate", this.DadosUpdate.Client_ID);
      await this.$axios({
        data: data,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        url: "http://localhost:8080/Main/updatePaciente",
      })
        .then((resp) => resp.data)
        .then((data) => {
          this.errors = data.errors;
          if (data.errors == null && data.noData == null) {
            this.messageSucess(
              "Paciente Atualizado!",
              "Dê uma olhada nas informações na tabela de pacientes.",
              "success"
            );
          } else if (data.errors) {
            this.errorsPaciente = this.errorPac();
            this.errorsEndereco = this.errorEnd();
            this.errorMessage(
              "Paciente não foi atualizado",
              "Corrija os erros do formulário para a atualização.",
              "error"
            );
          } else if (data.noData) {
            this.errorMessage(
              "Não há nada para atualizar.",
              "Digite algo no formulario.",
              "warning"
            );
          }
        });
    },
    addPaciente() {
      if (Object.keys(this.DadosUpdate).length === 0) {
        this.Paciente();
      } else {
        this.updatePaciente();
      }
    },
  },
};
</script>

<style>
</style>