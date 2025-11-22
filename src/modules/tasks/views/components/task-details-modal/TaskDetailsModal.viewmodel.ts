import { computed } from "vue";
import type {
  TaskDetailsModalEmit,
  TaskDetailsModalModel,
  TaskDetailsModalProps,
} from "./TaskDetailsModal.model";

export function TaskDetailsModalViewModel(
  props: TaskDetailsModalProps,
  emit: TaskDetailsModalEmit
): TaskDetailsModalModel {
  const isVisible = computed(() => props.isOpen && Boolean(props.task));

  const formattedDate = computed(() => {
    if (!props.task) {
      return null;
    }
    return new Date(props.task.created_at).toLocaleDateString();
  });

  const statusClasses = computed(() => {
    if (!props.task) {
      return "";
    }

    return props.task.is_completed
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  });

  const statusLabel = computed(() =>
    props.task?.is_completed ? "Concluída" : "Pendente"
  );

  const closeModal = () => {
    emit("close");
  };

  return {
    isVisible,
    formattedDate,
    statusClasses,
    statusLabel,
    closeModal,
  };
}
