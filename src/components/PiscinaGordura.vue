<template>
	<div>
		<Logo />
		<p>Não só parece como realmente é gordura! Nossa pele solta muita oleosidade na água e, quando não há a coadeira ou o uso da piscina foi intenso, é recomendado utilizar o Eliminador de Oleosidade na proporção de XX ml/m³</p>
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
export default class PiscinaGordura extends Vue {}
</script>