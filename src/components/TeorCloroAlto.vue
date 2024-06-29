<template>
	<div>
		<Logo />
		<Voltar />
		<h1>{{ $route?.meta?.text }}</h1>
		<div class="orientacoes">
			<p>Pode ser alguns problemas:</p>
			<p><router-link :to="{name:'teorCloroAltoRecomendacao'}">Excesso de cloro estabilizado, ou seja, concentração ácido cianúrico muito alto</router-link></p>
			<p>Está na hora de trocar o elemento filtrante da sua piscina.</p>
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
export default class TeorCloroAlto extends Vue {}
</script>