<template>
	<div>
		<Logo />
		<Voltar />
		<h1>{{ $route?.meta?.text }}</h1>
		<ul>
			<li>
				<router-link :to="{name:'visibilidadeAlta'}">
					Vejo claramente o fundo da piscina
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'visibilidadeMedia'}">
					Vejo o fundo da piscina, mas com dificuldade
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'visibilidadeBaixa'}">
					Não consigo ver o fundo da piscina
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'verdeAposCloro'}">
					Minha piscina ficou verde imediatamente depois de ter colocado cloro
				</router-link>
			</li>
		</ul>
		<router-view></router-view>
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
export default class AguaVerde extends Vue {}
</script>