<template>
	<div>
		<Logo />
		<Voltar />
		<h1>{{ $route?.meta?.text }}</h1>
		<div class="orientacoes">
			<p>Este é um problema causado principalmente pela falta de cloro e/ou grande uso da piscina</p>
			<p>Recomendamos utilizar cloro granulado não estabilizado (hipoclorito de cálcio) na proporção 21 g/m³</p>
			<p>Ajustar o pH em 7,2</p>
			<p>Retrolavar o filtro e filtrar por no mínimo 8h seguidas.</p>
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
export default class CheiroCloro extends Vue {}
</script>