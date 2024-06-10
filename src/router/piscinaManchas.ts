import PiscinaManchas from "@/components/PiscinaManchas.vue";
import FibraDesbotada from "@/components/piscinaManchas/FibraDesbotada.vue";
import ManchasEscuras from "@/components/piscinaManchas/ManchasEscuras.vue";
import { RouteConfig } from "vue-router";

export const piscinasManchas: Array<RouteConfig> = [
	{
		path: "/piscina-manchada",
		name: "piscinaManchada",
		component: PiscinaManchas,
	},
	{
		path: "/piscina-manchada/fibra-desbotada",
		name: "fibraDesbotada",
		component: FibraDesbotada,
	},
	{
		path: "/piscina-manchada/manchas-escuras",
		name: "manchasEscuras",
		component: ManchasEscuras,
	},
]