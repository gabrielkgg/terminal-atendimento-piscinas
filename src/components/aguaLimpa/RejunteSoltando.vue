<template>
	<div>
		<Logo />
		<p>Recomendamos fazer uma análise de dureza cálcica da sua água
e então adicionar Cloreto de Cálcio até a dureza atingir 250 ppm.</p>
		<p>Adicione aos poucos e vá medindo visualmente se os rejuntes
cessam o desgaste.</p>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from './../Logo.vue';


@Component({
	components: {
		Logo
	}
})
export default class RejunteSoltando extends Vue {}
</script>