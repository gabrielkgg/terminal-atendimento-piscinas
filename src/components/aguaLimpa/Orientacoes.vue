<template>
	<div>
		<Logo />
		<div>
			<img src="../../assets/img/tratamento-verao.png" alt="Tratamento de verão">
		</div>
		<div>
			<img src="../../assets/img/tratamento-inverno.png" alt="Tratamento de inverno">
		</div>
		<p>A dosagem é proporcional ao produto que você está utilizando, ou seja, cada fabricante/produto demanda uma dosagem específica. Para encontrar a dosagem
ideal do produto verifique no rótulo do mesmo. Se você utiliza algicida de manutenção da HTH, por exemplo, deverá dosar 6 ml para cada m³, portanto se sua piscina
tem 8 m de comprimento por 4 m de largura e 1,4 m de profundidade, deverá realizar o cálculo do volume e multiplicar pela dosagem:
8,00 m x 4,00 m x 1,40 m = 44,8 m³ x 6 ml/m³ = 268 ml.</p>
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
export default class Orientacoes extends Vue {}
</script>