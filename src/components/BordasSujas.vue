<template>
	<div>
		<Logo />
		<p>A nossa pele libera muita oleosidade na água da piscina e, para resolver este problema, recomendamos utilizar Eliminador de Oleosidade na proporção XX ml/m³ semanalmente.</p>
		<p>Para retirar a sujidade já existente, utilize uma esponja no lado amarelo com limpa bordas e, para facilitar mais o trabalho, podes colocar uma pitada de barrilha na esponja</p>
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
export default class BordasSujas extends Vue {}
</script>