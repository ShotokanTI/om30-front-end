<template>
  <c-box class="header" >
      <c-box class="content-header" display="flex"  align-items="center">
        <c-box class="logo"  align-items="center" w="100%" flex="1">
          <c-image w="40px" :src="require('@/assets/saude_om30.svg')"></c-image>
          <c-text>OM30</c-text>
        </c-box>
        <c-box class="content-links">
          <c-breadcrumb font-weight="medium" font-size="sm">
            <c-breadcrumb-item color="white">
              <c-breadcrumb-link as="nuxt-link" to="/add/paciente"
                >Adicionar pacientes</c-breadcrumb-link
              >
            </c-breadcrumb-item>

            <c-breadcrumb-item color="white">
              <c-breadcrumb-link as="nuxt-link" to="/listar/pacientes"
                >Listagem de pacientes</c-breadcrumb-link
              >
            </c-breadcrumb-item>

            <c-breadcrumb-item color="white">
              <c-breadcrumb-link color="white" as="nuxt-link" to="/"
                >Inicio</c-breadcrumb-link
              >
            </c-breadcrumb-item>
          </c-breadcrumb>
        </c-box>
      </c-box>
    </c-box>
</template>

<script>
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbLink,
  CBreadcrumbSeparator,
} from "@chakra-ui/vue";
export default {
  name: "App",
  components: {
    CBreadcrumb,
    CBreadcrumbItem,
    CBreadcrumbLink,
    CBreadcrumbSeparator,
  },
};
</script>

<style>
.content-links{
  padding-right: 20px;
}
.content-header{
  padding-top: 20px;
  padding-bottom: 20px;
}
.logo{
  padding-left: 20px;
}
@media (max-width:467px) {
  .content-header{
    flex-direction: column;
    padding-top: 0;
  padding-bottom: 0;
  }
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
.header {
  background: #afd0ff;
  width: 100%;
  position: fixed;
}
</style>