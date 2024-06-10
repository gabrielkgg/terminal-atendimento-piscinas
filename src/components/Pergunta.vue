<template>
	<div>
		<ul>
			<li>
				<router-link :to="{name: 'aguaLimpa'}">
					Minha piscina está com a água limpa.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'aguaVerde'}">
					Minha piscina está com a água verde.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'aguaTurva'}">
					Minha piscina está com a água turva (mas não verde).
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'piscinaManchada'}">
					Minha piscina está com manchas.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'cheiroCloro'}">
					Minha piscina tem cheiro de cloro.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'gordura'}">
					Minha piscina tem gordura sobre a água
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'animalMorto'}">
					Encontrei um animal morto dentro da minha piscina.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'larvasInsetos'}">
					Minha piscina está com larvas e insetos.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'teorCloroAlto'}">
					Minha piscina está com teor de cloro muito alto e tende a ficar turva e/ou verde.
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'bordasSujas'}">
					Minha piscina está sempre com as bordas manchadas/sujas no nível da água
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Pergunta extends Vue {}
</script>
