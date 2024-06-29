<template>
	<div class="voltar" @click="voltar()">
		<span class="voltar-span">
			<img src="../assets/icons/arrow-left-solid.svg"/> Voltar
		</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';


export default class Voltar extends Vue {
	public voltar() {
		history.back()
	}
}
</script>
<style lang="scss" scoped>
.voltar {
	margin-bottom: 2em;
}
.voltar-span {
	display: flex;
	cursor: pointer;
	background: #fbfbfb;
	border-radius: 0.5em;
	width: fit-content;
	color: #263e69;
	padding: 0.4em;
	img {
		width: 14px;
		margin-right: 0.5em;
	}
}
</style>