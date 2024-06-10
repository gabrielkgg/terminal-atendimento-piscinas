<template>
	<div>
		<Logo />
		<p>Se sua piscina teve um uso elevado ultimamente, recomendamos
utilizar cloro granulado na proporção de 21 g/m³ ou Oxidante de
matéria orgânica um sache para até 30 m³.</p>
		<p>Se sua piscina não está em uso, pode ser que seu sistema de
filtração esteja comprometido e há a necessidade de
manutenção. Recomendamos utilizar clarificante na proporção de
6 ml/m³.</p>
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
export default class VejoFundo extends Vue {}
</script>