<template>
	<div>
		<Logo />
		<p>Pode ser alguns problemas:</p>
		<p><router-link :to="{name:'teorCloroAltoRecomendacao'}">Excesso de cloro estabilizado, ou seja, concentração ácido cianúrico muito alto</router-link></p>
		<p>Está na hora de trocar o elemento filtrante da sua piscina.</p>
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
export default class TeorCloroAlto extends Vue {}
</script>