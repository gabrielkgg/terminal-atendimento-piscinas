<template>
	<div>
		<Logo />
		<Voltar />
		<h1>{{ $route?.meta?.text }}</h1>
		<div class="orientacoes">
			<p>Isso com certeza não é uma experiência muito agradável, mas estamos aqui para lhe ajudar a tornar a água própria para banho novamente, fique tranquilo!</p>
			<p>Primeiramente, retire o animal de dentro da água</p>
			<p>Se ainda é possível ver o fundo da piscina, faça um tratamento de choque de cloro: ajuste o pH em 7,2 e adicione 30 g/m³ de cloro na piscina. Filtrar por 8h e, dentro de 24h poderá utilizar a piscina sem problemas</p>
			<p>Se não é mais possível ver o fundo da piscina, recomendamos seguir <router-link :to="{name:'animalMortoDecantacao'}">estes procedimentos</router-link></p>
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
export default class AnimalMorto extends Vue {}
</script>