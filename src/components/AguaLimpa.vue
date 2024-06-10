<template>
	<div>
		<Logo />
		<ul>
			<li>
				<router-link :to="{name:'orientacoes'}">
					Preciso de orientações para manter a água limpa.
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'piscinaSuja'}">
					A água está limpa mas a piscina está suja.
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'alcalinidade'}">
					Minha alcalinidade está desajustada.
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'rejunteSoltando'}">
					O rejunte (fuga) da minha piscina está se soltando (piscinas de alvenaria).
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'cloroAlto'}">
					Teor de cloro alto o tempo todo, mesmo que eu não coloco cloro.
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
export default class AguaLimpa extends Vue {}
</script>