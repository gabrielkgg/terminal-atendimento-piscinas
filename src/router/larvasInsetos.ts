import LarvasInsetos from "@/components/LarvasInsetos.vue";
import { RouteConfig } from "vue-router";

export const larvasInsetos: Array<RouteConfig> = [
	{
		path: "/larvas-e-insetos",
		name: "larvasInsetos",
		component: LarvasInsetos,
		meta: {
			text: 'Minha piscina está com larvas e insetos'
		}
	}
]