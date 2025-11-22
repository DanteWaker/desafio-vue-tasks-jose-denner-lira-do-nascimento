import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";

export function useTasksView() {
  const globalStore = useGlobalStore();
  const { filteredTasks } = storeToRefs(globalStore);
  const { removeTask } = globalStore;

  const hasTasks = computed(() => filteredTasks.value.length > 0);

  return {
    tasks: filteredTasks,
    hasTasks,
    removeTask,
  };
}
