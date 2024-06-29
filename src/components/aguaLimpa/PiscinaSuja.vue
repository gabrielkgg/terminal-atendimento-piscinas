<template>
	<div>
		<Logo />
		<Voltar />
		<h1>Orientações</h1>
		<div class="orientacoes">
			<p>Se a sua piscina está suja com folhas, poeira, lodo, a
	recomendação é realizar a aspiração dessa sujeira direcionando
	para o esgoto (aspirar drenando). Posteriormente, <router-link :to="{ name:'orientacoes' }">siga com o
	tratamento comum.</router-link></p>
			<p>Se a sua piscina está com manchas verdes, por menor que sejam, a
	recomendação é utilizar o tratamento de choque.</p>
			<p>Se sua piscina está com manchas escuras, marrons ou até mesmo
	pretas, a recomendação é utilizar o tratamento para água com
	metais.</p>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from './../Logo.vue';
import Voltar from '../Voltar.vue';


@Component({
	components: {
		Logo,
		Voltar
	}
})
export default class PiscinaSuja extends Vue {}
</script>