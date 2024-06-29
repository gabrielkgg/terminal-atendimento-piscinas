<template>
	<div>
		<Logo />
		<Voltar />
		<h1>{{ $route?.meta?.text }}</h1>
		<ul>
			<li>
				<router-link :to="{name:'vejoFundo'}">
					Vejo o fundo da piscina
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'naoVejoFundo'}">
					Não vejo mais o fundo da minha piscina
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'aguaTurvaGordura'}">
					Parece que há gordura sobre a água
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
export default class AguaTurva extends Vue {}
</script>