import type { Ref } from "vue";
import type { TaskFilter } from "@/modules/tasks/models/TaskView.models";

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
