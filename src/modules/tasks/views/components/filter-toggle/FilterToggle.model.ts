import type { Ref } from "vue";

export type TaskFilter = "all" | "completed" | "pending";

export interface FilterOption {
  label: string;
  value: TaskFilter;
}

export interface FilterToggleModel {
  filters: FilterOption[];
  currentFilter: Ref<TaskFilter>;
  getButtonClasses: (filter: TaskFilter) => string;
  handleFilterClick: (filter: TaskFilter) => void;
}
