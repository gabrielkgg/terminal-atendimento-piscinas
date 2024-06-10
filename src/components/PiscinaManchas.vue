<template>
	<div>
		<Logo />
		<ul>
			<li>
				<router-link :to="{name:'fibraDesbotada'}">
					Minha piscina é de fibra e está desbotada e/ou amarelada.
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'manchasEscuras'}">
					Minha piscina está com manchas escuras nas paredes e/ou fundo.
				</router-link>
			</li>
		</ul>
		<router-view></router-view>
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
export default class PiscinaManchas extends Vue {}
</script>