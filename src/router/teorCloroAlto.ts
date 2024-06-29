import TeorCloroAlto from "@/components/TeorCloroAlto.vue";
import TeorCloroAltoRecomendacao from "@/components/TeorCloroAltoRecomendacao.vue";
import { RouteConfig } from "vue-router";

export const teorCloroAlto: Array<RouteConfig> = [
	{
		path: "/teor-de-cloro-alto",
		name: "teorCloroAlto",
		component: TeorCloroAlto,
		meta: {
			text: 'Teor de cloro muito alto e tende a ficar turva/verde'
		}
	},
	{
		path: "/teor-de-cloro-alto/recomendacao",
		name: "teorCloroAltoRecomendacao",
		component: TeorCloroAltoRecomendacao,
	},
]