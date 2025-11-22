import { createRouter, createWebHistory } from "vue-router";
import TasksView from "@/modules/tasks/views/TasksView.vue";
import MainLayout from "@/_shared/layouts/main-layout/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: TasksView,
        },
      ],
    },
  ],
});

export default router;
