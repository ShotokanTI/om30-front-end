<template>
  <div>
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="row"
      justify-content="center"
    >
      <CFlex
        :flex-direction="['column', 'row']"
        cursor="pointer"
        align="center"
        justify-items="center"
        justify="center"
      >
        <CFlex
          maxW="sm"
          border-width="1px"
          rounded="lg"
          overflow="hidden"
          bg="blue.100"
          w="100%"
          h="350"
        >
          <CFlex flex-dir="column" align="center">
            <nuxt-link to="/add/paciente">
            <CImage h="300px" :src="require('@/assets/paciente.svg')"></CImage>
            </nuxt-link>
            <CText  py="20px" color="white" :fontSize="['sm', 'md', 'lg', 'xl']"
              >Adicionar Paciente</CText
            >
          </CFlex>
        </CFlex>
        <CFlex
          :mt="['20px', '0px']"
          :ml="['0px', '20px']"
          maxW="sm"
          border-width="1px"
          rounded="lg"
          overflow="hidden"
          bg="vue.300"
          w="100%"
          h="350"
        >
          <CFlex flex-dir="column" align="center">
            <nuxt-link to="/listar/pacientes">
            <CImage
              h="300px"
              :src="require('@/assets/lista-de-afazeres.svg')"
            ></CImage>
            </nuxt-link>
            <CText py="20px" color="white" :fontSize="['sm', 'md', 'lg', 'xl']"
              >Listar Pacientes</CText
            >
          </CFlex>
        </CFlex>
      </CFlex>
    </CBox>
    <Footer/>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CIconButton,
  CFlex,
  CHeading
} from '@chakra-ui/vue'
export default {
  name: 'App',
  components: {
    CBox,
    CButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CIconButton,
    CFlex,
    CHeading
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>

<style>
</style>
