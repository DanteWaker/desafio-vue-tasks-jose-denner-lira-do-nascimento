import type { Ref } from "vue";
import type { ButtonVariant } from "@/_shared/components/button/Button.model";
import type { TaskFilter } from "@/modules/tasks/models/TaskView.models";

export interface FilterOption {
  label: string;
  value: TaskFilter;
}

export interface FilterToggleModel {
  filters: FilterOption[];
  currentFilter: Ref<TaskFilter>;
  getButtonVariant: (filter: TaskFilter) => ButtonVariant;
  handleFilterClick: (filter: TaskFilter) => void;
}
