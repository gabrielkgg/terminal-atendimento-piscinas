import PiscinaGordura from "@/components/PiscinaGordura.vue";
import { RouteConfig } from "vue-router";

export const piscinaGordura: Array<RouteConfig> = [
	{
		path: "/gordura-sobre-agua",
		name: "gordura",
		component: PiscinaGordura,
		meta: {
			text: 'Minha piscina tem gordura sobre a água'
		}
	},
]