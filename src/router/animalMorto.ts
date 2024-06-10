import AnimalMorto from "@/components/AnimalMorto.vue";
import AnimalMortoDecantacao from "@/components/AnimalMortoDecantacao.vue";
import { RouteConfig } from "vue-router";

export const animalMorto: Array<RouteConfig> = [
	{
		path: "/animal-morto",
		name: "animalMorto",
		component: AnimalMorto,
	},
	{
		path: "/animal-morto/decantacao",
		name: "animalMortoDecantacao",
		component: AnimalMortoDecantacao,
	},
]