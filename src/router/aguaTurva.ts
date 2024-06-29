import AguaTurva from "@/components/AguaTurva.vue";
import AguaTurvaGordura from "@/components/aguaTurva/AguaTurvaGordura.vue";
import NaoVejoFundo from "@/components/aguaTurva/NaoVejoFundo.vue";
import VejoFundo from "@/components/aguaTurva/VejoFundo.vue";
import { RouteConfig } from "vue-router";

export const aguaTurva: Array<RouteConfig> = [
	{
		path: "/agua-turva",
		name: "aguaTurva",
		component: AguaTurva,
		meta: {
			text: 'Minha piscina está com a água turva (mas não verde)'
		}
	},
	{
		path: "/agua-turva/vejo-o-fundo",
		name: "vejoFundo",
		component: VejoFundo,
	},
	{
		path: "/agua-turva/nao-vejo-o-fundo",
		name: "naoVejoFundo",
		component: NaoVejoFundo,
	},
	{
		path: "/agua-turva/gordura",
		name: "aguaTurvaGordura",
		component: AguaTurvaGordura,
	},
]