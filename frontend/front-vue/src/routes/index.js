import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddData from "../views/AddData.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/add", name: "AddData", component: AddData },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
