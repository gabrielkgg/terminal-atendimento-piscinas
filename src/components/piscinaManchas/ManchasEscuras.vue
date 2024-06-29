<template>
	<div>
		<Logo />
		<Voltar />
		<h1>Orientações</h1>
		<div class="orientacoes">
			<p>Estas manchas são características de metais na água. Há algumas
				coisas que podem ter acontecido como ter abastecido com água
				de fonte que tenha metal (normalmente poços) ou utilização de
				algicida com base em sulfato de cobre.</p>
				<p>O cloro é um oxidante de metais, logo quando há metal na água,
					sofre oxidação e acaba manchando as paredes, fundo e, em
					casos de concentração alta, deixa a água turva.</p>
					<p>Recomendamos ajustar o pH em 7,2 e adicionar 50 ml/m³ de
						Solução Água de Poço.</p>
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
export default class ManchasEscuras extends Vue {}
</script>