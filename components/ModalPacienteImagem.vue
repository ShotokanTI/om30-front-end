<template>
  <c-modal
    :is-open="isOpen"
    :on-close="close"
    :block-scroll-on-mount="blockScrollOnMount"
  >
    <c-modal-content ref="content">
      <c-modal-header>Foto do Paciente</c-modal-header>
      <c-modal-close-button />
      <c-modal-body>
        <c-box display="flex" justify-content="center" w="sm">
          <c-image
            rounded="full"
            h="300px"
            w="100%"
            objectFit="cover"
            :src="No_Image"
            alt=""
          />
        </c-box>
      </c-modal-body>
      <c-modal-footer>
        <c-button @click="close" variant-color="blue" mr="3"> Fechar </c-button>
      </c-modal-footer>
    </c-modal-content>
    <c-modal-overlay />
  </c-modal>
</template>

<script>
export default {
    computed:{
        No_Image(){
            return this.Imagem == 'Paciente sem foto' ? require('@/assets/No_Image.png') : this.Imagem
        }
    },
  props: ["Imagem"],
  data() {
    return {
      isOpen: false,
      blockScrollOnMount: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
</style>