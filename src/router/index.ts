import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { aguaLimpa } from "./aguaLimpa";
import { aguaVerde } from "./aguaVerde";
import { aguaTurva } from "./aguaTurva";
import { piscinasManchas } from "./piscinaManchas";
import { cheiroCloro } from "./cheiroCloro";
import { piscinaGordura } from "./piscinaGordura";
import { animalMorto } from "./animalMorto";
import { larvasInsetos } from "./larvasInsetos";
import { teorCloroAlto } from "./teorCloroAlto";
import { bordasSujas } from "./bordasSujas";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	...aguaLimpa,
	...aguaVerde,
	...aguaTurva,
	...piscinasManchas,
	...cheiroCloro,
	...piscinaGordura,
	...animalMorto,
	...larvasInsetos,
	...teorCloroAlto,
	...bordasSujas
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
