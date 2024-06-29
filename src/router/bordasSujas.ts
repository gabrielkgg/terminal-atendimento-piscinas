import BordasSujas from "@/components/BordasSujas.vue";
import { RouteConfig } from "vue-router";

export const bordasSujas: Array<RouteConfig> = [
	{
		path: "/bordas-sujas",
		name: "bordasSujas",
		component: BordasSujas,
		meta: {
			text: 'Bordas manchadas ou sujas no nível da água'
		}
	},
]