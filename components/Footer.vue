<template>
      <c-flex class="footer">
      <c-text flex="1" pl="20px" py="20px" color="White" :fontSize="['sm', 'md',]">
      Sistema da Saúde OM30 - Matheus Barbosa 2021
      </c-text>
      <c-box cursor="pointer" color="White" py="20px" pr="20px">
        <a target="_blank" href="https://www.linkedin.com/in/matheus-barbosa-b5a5b0154/">
            <font-awesome-icon class="iconsPosition" :icon="['fab','linkedin']" size="lg" />
        </a>
        <a target="_blank" href="https://github.com/ShotokanTI">
            <font-awesome-icon class="iconsPosition" :icon="['fab','github']" size="lg" />
        </a>
      </c-box>
      </c-flex>
</template>

<script>
export default {

}
</script>

<style>
.iconsPosition{
    margin-right: 20px;
}
.footer{
    position: fixed;
    bottom: 0;
    background: #AFD0FF;
    width: 100%;
    z-index: 999
}
</style>