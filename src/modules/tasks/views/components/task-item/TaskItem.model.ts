import type { ComputedRef, Ref } from "vue";
import type { Task } from "@/modules/tasks/models/TaskView.models";

export type TaskItemEmit = (event: "remove", id: string) => void;

export interface TaskItemProps {
  task: Task;
}

export interface TaskItemModel {
  isEditModalOpen: Ref<boolean>;
  borderClass: ComputedRef<string>;
  handleToggle: () => void;
  handleEdit: () => void;
  closeEditModal: () => void;
  handleRemove: () => void;
}
