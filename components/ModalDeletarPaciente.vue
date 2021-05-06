<template>
  <div>
    <c-alert-dialog
      :is-open="isOpen"
      :least-destructive-ref="$refs.cancelRef"
      :on-close="closeDialog"
    >
      <c-alert-dialog-overlay />
      <c-alert-dialog-content>
        <c-alert-dialog-header font-size="lg" font-weight="bold">
          Deletar paciente
        </c-alert-dialog-header>
        <c-alert-dialog-body>
          Tem certeza que deseja excluir este paciente?
        </c-alert-dialog-body>
        <c-alert-dialog-footer>
          <c-button ref="cancelRef" @click="closeDialog"> Cancelar </c-button>
          <c-button variantColor="red" @click="closeAndDelete" ml="3">
            Deletar
          </c-button>
        </c-alert-dialog-footer>
      </c-alert-dialog-content>
    </c-alert-dialog>
  </div>
</template>
<script>
export default {
  props: ["idPaciente"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closeAndDelete() {
      this.isOpen = false;
      this.$axios({
        data: JSON.stringify({ id: this.idPaciente }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
        url: "http://localhost:8080/Main/deletarPaciente",
      }).then( () => {
        this.$toast({
        title: 'O paciente foi excluido.',
        description: "Atualize a pagina para ver o resultado.",
        status: 'success',
        duration: 10000
      })
      });
    },
    closeDialog() {
      this.isOpen = false;
    },
    openDialog() {
      this.isOpen = true;
    },
  },
};
</script>