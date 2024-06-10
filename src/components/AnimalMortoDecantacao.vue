<template>
	<div>
		<Logo />
		<p>Retire o animal morto de dentro da piscina</p>
		<p>Ligue o sistema de filtração na posiçõa RECIRCULAR</p>
		<p>Adicione 30 g/m³ de cloro granulado</p>
		<p>Ajuste o pH em 7,2</p>
		<p>Adicione 40 g/m³ de sulfato de alumínio</p>
		<p>Adicione 18 g/m³ de barrilha leve</p>
		<p>Aguarde 8h para aspirar o fundo DRENANDO</p>
		<p>Após aspiração, se necessário, ajuste novamente o pH e o Cloro.</p>
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
export default class AnimalMortoDecantacao extends Vue {}
</script>