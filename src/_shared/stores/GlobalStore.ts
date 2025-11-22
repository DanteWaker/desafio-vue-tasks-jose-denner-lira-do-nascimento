import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Task, TaskFilter } from "@/modules/tasks/models/TaskView.models";
import { useToastStore } from "./ToastStore";
import { createTaskNotifier } from "@/_shared/utils/TaskNotifier";

export const useGlobalStore = defineStore("global", () => {
  const tasks = useLocalStorage<Task[]>("vue-tasks-db", []);

  const currentFilter = ref<TaskFilter>("all");
  const searchQuery = ref("");
  const toastStore = useToastStore();
  const taskNotifier = createTaskNotifier(toastStore);

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

    taskNotifier.notifyTaskAdded(newTask.title);
  };

  const removeTask = (id: string) => {
    tasks.value = tasks.value.filter((t) => t.id !== id);

    taskNotifier.notifyTaskRemoved();
  };

  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;

      taskNotifier.notifyTaskUpdated(updatedTask.title);
      return;
    }

    taskNotifier.notifyTaskUpdateFailed();
  };

  const toggleTask = (id: string) => {
    const task = tasks.value.find((t) => t.id === id);
    if (task) {
      task.is_completed = !task.is_completed;

      taskNotifier.notifyTaskStatusChanged(task.title, task.is_completed);
      return;
    }

    taskNotifier.notifyTaskStatusFailed();
  };

  const completedTasks = computed(() =>
    tasks.value.filter((t) => t.is_completed)
  );
  const pendingTasks = computed(() =>
    tasks.value.filter((t) => !t.is_completed)
  );
  const totalTasks = computed(() => tasks.value.length);

  const filteredTasks = computed(() => {
    let baseTasks = tasks.value;
    if (currentFilter.value === "completed") {
      baseTasks = completedTasks.value;
    } else if (currentFilter.value === "pending") {
      baseTasks = pendingTasks.value;
    }

    const normalizedQuery = searchQuery.value.trim().toLowerCase();
    if (!normalizedQuery) {
      return baseTasks;
    }

    return baseTasks.filter((task) =>
      task.title.toLowerCase().includes(normalizedQuery)
    );
  });

  const setFilter = (filter: TaskFilter) => {
    currentFilter.value = filter;

    taskNotifier.notifyFilterChanged(filter);
  };

  const setSearchQuery = (value: string) => {
    searchQuery.value = value;
  };

  return {
    tasks,
    currentFilter,
    searchQuery,
    filteredTasks,
    completedTasks,
    pendingTasks,
    totalTasks,
    addTask,
    removeTask,
    updateTask,
    toggleTask,
    setFilter,
    setSearchQuery,
  };
});
