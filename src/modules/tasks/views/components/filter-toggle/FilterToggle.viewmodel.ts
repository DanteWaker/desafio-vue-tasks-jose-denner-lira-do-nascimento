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

  const getButtonClasses = (filter: TaskFilter) => {
    const isActive = currentFilter.value === filter;
    if (isActive) {
      return "px-4 py-2 text-sm font-medium rounded-md border transition-colors bg-blue-600 text-white border-blue-600";
    }
    return "px-4 py-2 text-sm font-medium rounded-md border transition-colors bg-white text-gray-700 border-gray-200 hover:bg-gray-50";
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
    getButtonClasses,
    handleFilterClick,
  };
}
