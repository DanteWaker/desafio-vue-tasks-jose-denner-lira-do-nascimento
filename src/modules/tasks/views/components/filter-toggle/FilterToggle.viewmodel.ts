import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";
import type { TaskFilter } from "@/modules/tasks/models/TaskView.models";
import type { FilterToggleModel } from "./FilterToggle.model";

export function FilterToggleViewModel(): FilterToggleModel {
  const globalStore = useGlobalStore();
  const { currentFilter } = storeToRefs(globalStore);
  const { setFilter } = globalStore;

  const filters = [
    { label: "Todas", value: "all" as TaskFilter },
    { label: "Concluídas", value: "completed" as TaskFilter },
    { label: "Pendentes", value: "pending" as TaskFilter },
  ];

  const getButtonVariant = (filter: TaskFilter) => {
    return currentFilter.value === filter ? "primary" : "secondary";
  };

  const handleFilterClick = (filter: TaskFilter) => {
    if (currentFilter.value === filter) {
      return;
    }
    setFilter(filter);
  };

  return {
    filters,
    currentFilter,
    getButtonVariant,
    handleFilterClick,
  };
}
