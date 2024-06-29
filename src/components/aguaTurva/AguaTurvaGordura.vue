<template>
	<div>
		<Logo />
		<Voltar />
		<h1>Orientações</h1>
		<div class="orientacoes">
			<p>Não só parece como realmente é gordura! Nossa pele solta muita
				oleosidade na água e, quando não há a coadeira ou o uso da
				piscina foi intenso, é recomendado utilizar o Eliminador de
				Oleosidade na proporção de xx ml/m³.</p>
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
export default class AguaTurvaGordura extends Vue {}
</script>