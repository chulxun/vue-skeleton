import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index.vue")
  },
  {
    path: "/demo-index",
    component: () => import("@/views/demoIndex.vue")
  },
  {
    path: "/demo-list",
    component: () => import("@/views/demoList.vue")
  },
  {
    path: "/demo-detail",
    component: () => import("@/views/demoDetail.vue")
  },
  {
    path: "/demo-picture",
    component: () => import("@/views/demoPicture.vue")
  },
  {
    path: "/demo-moudle",
    component: () => import("@/views/demoMoudle.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: '/works/skeleton_demo/',
  routes
});

export default router;
