<template>
	<div>
		<Logo />
		<Voltar />
		<h1>Orientações</h1>
		<div class="orientacoes">	
			<p>Você precisa:</p>
			<p>Mesmo sem ver o fundo da piscina, aspirar o que conseguir para o esgoto (drenando);</p>
			<p>Ligar o motor com o filtro na posição RECIRCULAR;</p>
			<p>Adicionar algicida de choque - 7 ml/m³;</p>
			<p>Ajustar o pH em 7,2 com barrilha (para elevar) ou redutor (para reduzir);</p>
			<p>Dissolver em um balde 40 g/m³ de Sulfato de Alumínio e colocar na água da piscina;</p>
			<p>Imediatamente após colocar o sulfato, dissolver em um balde 18 g/m³ de barrilha leve e colocar na água da piscina;</p>
			<p>Desligar o motor e esperar 8 horas para decantar;</p>
			<p>Aspirar o lodo no fundo para o esgoto (drenando);</p>
			<p>Continuar o tratamento convencional.</p>
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
export default class VisibilidadeBaixa extends Vue {}
</script>