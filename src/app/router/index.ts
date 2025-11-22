import { createRouter, createWebHistory } from "vue-router";
import TasksView from "@/modules/tasks/views/TasksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/tasks",
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TasksView,
    },
  ],
});

export default router;
