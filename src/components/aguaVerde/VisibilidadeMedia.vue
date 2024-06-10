<template>
	<div>
		<Logo />
		<p>Você precisa:</p>
		<p> Aspirar o fundo da piscina para o esgoto (drenando);</p>
		<p> Ligar o sistema de filtração na posição FILTRAR;</p>
		<p> Ajustar o pH em 7,2 com barrilha (para elevar) ou redutor (para reduzir);</p>
		<p> Algicida de choque sem cobre - 7 ml/m³;</p>
		<p> Cloro granulado - 21 g/m³;</p>
		<p> Filtrar por 8 horas seguidas, retrolavar e filtrar por mais 8 horas;</p>
		<p> Se necessário, aspirar novamente a piscina para o esgoto (drenando);</p>
		<p> Continuar o tratamento convencional.</p>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from './../Logo.vue';


@Component({
	components: {
		Logo
	}
})
export default class VisibilidadeMedia extends Vue {}
</script>