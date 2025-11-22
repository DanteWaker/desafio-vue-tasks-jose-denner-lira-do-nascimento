import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";

export function useTasksView() {
  const globalStore = useGlobalStore();
  const { tasks } = storeToRefs(globalStore);
  const { removeTask } = globalStore;

  const hasTasks = computed(() => tasks.value.length > 0);

  return {
    tasks,
    hasTasks,
    removeTask,
  };
}
