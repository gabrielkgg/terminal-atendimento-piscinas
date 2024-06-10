<template>
	<div>
		<Logo />
		<p>Recomendamos aspirar o fundo da piscina drenando e escovar as laterais</p>
		<p>Ajustar o pH em 7,2;</p>
		<p>Dosar cloro granulado na proporção de 21 g/m³ na sua piscina;</p>
		<p>Retrolavar o filtro e ligar a filtração por 8 horas.</p>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from "@/components/Logo.vue";


@Component({
	components: {
		Logo
	}
})
export default class LarvasInsetos extends Vue {}
</script>