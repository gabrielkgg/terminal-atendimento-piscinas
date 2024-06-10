import TeorCloroAlto from "@/components/TeorCloroAlto.vue";
import TeorCloroAltoRecomendacao from "@/components/TeorCloroAltoRecomendacao.vue";
import { RouteConfig } from "vue-router";

export const teorCloroAlto: Array<RouteConfig> = [
	{
		path: "/teor-de-cloro-alto",
		name: "teorCloroAlto",
		component: TeorCloroAlto,
	},
	{
		path: "/teor-de-cloro-alto/recomendacao",
		name: "teorCloroAltoRecomendacao",
		component: TeorCloroAltoRecomendacao,
	},
]