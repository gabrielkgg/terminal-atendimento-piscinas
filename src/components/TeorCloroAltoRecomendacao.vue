<template>
	<div>
		<Logo />
		<p>Recomendamos utilizar Peróxido de Hidrogênio para reduzir o ácido cianúrico e, imediatamente, cessar o uso de cloros estabilizados (dicloro e tricloro) migrando para hipoclorito de cálcio</p>
		<p>O ácido cianúrico é um estabilizador de cloro evitando que este se torne volátil, o problema é quando a concentração fica muito alta e então todo o cloro fica preso, sem conseguir fazer efeito na piscina</p>
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
export default class TeorCloroAltoRecomendacao extends Vue {}
</script>