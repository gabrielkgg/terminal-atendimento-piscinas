import AguaVerde from "@/components/AguaVerde.vue";
import VerdeAposCloro from "@/components/aguaVerde/VerdeAposCloro.vue";
import VisibilidadeAlta from "@/components/aguaVerde/VisibilidadeAlta.vue";
import VisibilidadeBaixa from "@/components/aguaVerde/VisibilidadeBaixa.vue";
import VisibilidadeMedia from "@/components/aguaVerde/VisibilidadeMedia.vue";
import { RouteConfig } from "vue-router";

export const aguaVerde: Array<RouteConfig> = [
	{
		path: "/agua-verde",
		name: "aguaVerde",
		component: AguaVerde,
	},
	{
		path: "/agua-verde/visibilidade-alta",
		name: "visibilidadeAlta",
		component: VisibilidadeAlta,
	},
	{
		path: "/agua-verde/visibilidade-media",
		name: "visibilidadeMedia",
		component: VisibilidadeMedia,
	},
	{
		path: "/agua-verde/visibilidade-baixa",
		name: "visibilidadeBaixa",
		component: VisibilidadeBaixa,
	},
	{
		path: "/agua-verde/verde-apos-cloro",
		name: "verdeAposCloro",
		component: VerdeAposCloro,
	},
]