<template>
	<div>
		<Logo />
		<Voltar />
		<h1>{{ $route?.meta?.text }}</h1>
		<div class="orientacoes">
			<p>A nossa pele libera muita oleosidade na água da piscina e, para resolver este problema, recomendamos utilizar Eliminador de Oleosidade na proporção XX ml/m³ semanalmente.</p>
			<p>Para retirar a sujidade já existente, utilize uma esponja no lado amarelo com limpa bordas e, para facilitar mais o trabalho, podes colocar uma pitada de barrilha na esponja</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from "@/components/Logo.vue";
import Voltar from './Voltar.vue';


@Component({
	components: {
		Logo,
		Voltar
	}
})
export default class BordasSujas extends Vue {}
</script>