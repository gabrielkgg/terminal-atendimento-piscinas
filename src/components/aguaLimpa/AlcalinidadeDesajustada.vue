<template>
	<div>
		<Logo />
		<p>A alcalinidade serve basicamente para evitar flutuação no valor
do pH, servindo como um estabilizador deste parâmetro.</p>
		<p> A recomendação é que se ajuste a alcalinidade, dureza e
concentração de ácido cianúrico uma vez por ano no início da
temporada.</p>
		<p> Para ajustar a alcalinidade você deve medi-la e adicionar 1,7 g/m³
para elevar a alcalinidade em 10 ppm, ou seja: se a alcalinidade está
em 20 ppm, quer elevá-la até 100 ppm e tem 30 m³: <br>
(100-20)*30*1,7 = 4.080 g de elevador de alcalinidade.</p>
		<p> Nossa recomendação é aumentar a alcalinidade com o pH levemente
baixo, em 6,8 e dosar inicialmente 75% do elevador e então medir
novamente.</p>
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
export default class AlcalinidadeDesajustada extends Vue {}
</script>