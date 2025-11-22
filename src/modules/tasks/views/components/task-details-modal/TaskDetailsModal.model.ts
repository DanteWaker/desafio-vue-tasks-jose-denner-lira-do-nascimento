import type { ComputedRef } from "vue";
import type { Task } from "@/modules/tasks/models/TaskView.models";

export type TaskDetailsModalEmit = (event: "close") => void;

export interface TaskDetailsModalProps {
  isOpen: boolean;
  task: Task | null;
}

export interface TaskDetailsModalModel {
  isVisible: ComputedRef<boolean>;
  formattedDate: ComputedRef<string | null>;
  statusClasses: ComputedRef<string>;
  statusLabel: ComputedRef<string>;
  closeModal: () => void;
}
