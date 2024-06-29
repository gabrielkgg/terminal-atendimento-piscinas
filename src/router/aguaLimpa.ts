import AguaLimpa from "@/components/AguaLimpa.vue";
import TeorCloroAlto from "@/components/TeorCloroAlto.vue";
import AlcalinidadeDesajustada from "@/components/aguaLimpa/AlcalinidadeDesajustada.vue";
import Orientacoes from "@/components/aguaLimpa/Orientacoes.vue";
import PiscinaSuja from "@/components/aguaLimpa/PiscinaSuja.vue";
import RejunteSoltando from "@/components/aguaLimpa/RejunteSoltando.vue";
import TeorCloroAltoConstante from "@/components/aguaLimpa/TeorCloroAlto.vue";
import { RouteConfig } from "vue-router";

export const aguaLimpa: Array<RouteConfig> = [
	{
		path: "/agua-limpa",
		name: "aguaLimpa",
		component: AguaLimpa,
		meta: {
			text: 'Minha piscina está com a água limpa'
		}
	},
	{
		path: "/agua-limpa/orientacoes",
		name: 'orientacoes',
		component: Orientacoes,
	},
	{
		path: "/agua-limpa/piscina-suja",
		name: 'piscinaSuja',
		component: PiscinaSuja,
	},
	{
		path: "/agua-limpa/alcalinidade",
		name: 'alcalinidade',
		component: AlcalinidadeDesajustada,
	},
	{
		path: "/agua-limpa/rejunte-soltando",
		name: 'rejunteSoltando',
		component: RejunteSoltando,
	},
	{
		path: "/agua-limpa/cloro-alto",
		name: 'cloroAlto',
		component: TeorCloroAltoConstante,
	},
]