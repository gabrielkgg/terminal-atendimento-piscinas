<template>
	<div>
		<Logo />
		<Voltar />
		<h1>Orientações</h1>
		<div class="orientacoes">
			<p>Primeiramente gostaríamos de lhe informar que isso é um processo
				natural da fibra e da tinta, mas caso não concordes com isto,
				recomendamos acionar a fábrica da sua piscina para que possa
				avaliar. De qualquer forma, existe um procedimento que consegue
				dar nova vida à cor da piscina, decapagem ácida:</p>
				<p>Recomendamos fazer este procedimento no final da temporada ou
					inverno.</p>
					<p>Desligue o sistema de filtração;</p>
					<p>Adicione 200 ml/m³ de redutor de pH;</p>
					<p>Deixe o sistema parado por, no mínimo 7 dias;</p>
					<p>Ajuste a <router-link :to="{ name: 'alcalinidade' }">alcalinidade entre 80 e 120 ppm</router-link> e o pH em 7,2.</p>
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
export default class FibraDesbotada extends Vue {}
</script>