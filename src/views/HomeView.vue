<template>
  <div class="home">
    <Logo />
    <h1>Olá, como posso ajudar?</h1>
    <Pergunta />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pergunta from "@/components/Pergunta.vue";
import Logo from "@/components/Logo.vue";

@Component({
  components: {
    Pergunta,
	Logo,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss">
ul li{
	list-style-type: none;
}
</style>
