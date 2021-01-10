import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Input from "../views/Input.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/input/:s",
    name: "Input",
    component: Input,
    props: (r) => ({ s: parseInt(r.params.s) }),
  },
  {
    path: "/result/",
    name: "Result",
    component: Result,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
