<template>
	<div>
		<Logo />
		<Voltar />
		<h1>Orientações</h1>
		<div class="orientacoes">
			<p>Você precisa:</p>
			<p>Ligar o sistema de filtração na posição FILTRAR;</p>
			<p>Ajustar o pH em 7,2 com barrilha (para elevar) ou redutor (para reduzir);</p>
			<p>Adicionar controlador de metais - 50 ml/m³;</p>
			<p>Procurar uma fonte alternativa de água (que não contenha metais),
				caso não seja possível, adicionar 25 ml/m³ ANTES de adicionar cloro.</p>
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
export default class VerdeAposCloro extends Vue {}
</script>