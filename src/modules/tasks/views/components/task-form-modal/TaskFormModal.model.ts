import type { ComputedRef, Ref } from "vue";

export type TaskFormModalEmit = (event: "close") => void;

export interface TaskFormModalProps {
  isOpen: boolean;
  taskId?: string | null;
}

export interface TaskFormModalModel {
  title: Ref<string>;
  description: Ref<string>;
  error: Ref<string>;
  isEditing: ComputedRef<boolean>;
  modalTitle: ComputedRef<string>;
  primaryButtonLabel: ComputedRef<string>;
  closeModal: () => void;
  handleSubmit: () => void;
}
