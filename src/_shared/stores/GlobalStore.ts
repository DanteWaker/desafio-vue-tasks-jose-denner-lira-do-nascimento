import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue"; // Adicione ref
import type { Task } from "@/modules/tasks/models/TaskView.models";
import { useToastStore } from "./ToastStore";

export const useGlobalStore = defineStore("global", () => {
  const tasks = useLocalStorage<Task[]>("vue-tasks-db", []);

  const currentFilter = ref<"all" | "completed" | "pending">("all");

  const addTask = (
    task: Omit<Task, "id" | "created_at" | "updated_at" | "is_completed">
  ) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      is_completed: false,
      created_at: new Date(),
      updated_at: new Date(),
    };
    tasks.value.push(newTask);

    const toastStore = useToastStore();
    toastStore.showToast({
      title: "Tarefa adicionada",
      description: `A tarefa "${newTask.title}" foi adicionada com sucesso.`,
      variant: "success",
    });
  };

  const removeTask = (id: string) => {
    tasks.value = tasks.value.filter((t) => t.id !== id);
  };

  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
    }
  };

  const toggleTask = (id: string) => {
    const task = tasks.value.find((t) => t.id === id);
    if (task) {
      task.is_completed = !task.is_completed;
    }
  };

  const completedTasks = computed(() =>
    tasks.value.filter((t) => t.is_completed)
  );
  const pendingTasks = computed(() =>
    tasks.value.filter((t) => !t.is_completed)
  );
  const totalTasks = computed(() => tasks.value.length);

  const filteredTasks = computed(() => {
    if (currentFilter.value === "completed") return completedTasks.value;
    if (currentFilter.value === "pending") return pendingTasks.value;
    return tasks.value;
  });

  const setFilter = (filter: "all" | "completed" | "pending") => {
    currentFilter.value = filter;
  };

  return {
    tasks,
    currentFilter,
    filteredTasks,
    completedTasks,
    pendingTasks,
    totalTasks,
    addTask,
    removeTask,
    updateTask,
    toggleTask,
    setFilter,
  };
});
