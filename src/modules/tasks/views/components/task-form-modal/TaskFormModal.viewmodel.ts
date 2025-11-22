import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";
import type {
  TaskFormModalEmit,
  TaskFormModalModel,
  TaskFormModalProps,
} from "./TaskFormModal.model";

export function TaskFormModalViewModel(
  props: TaskFormModalProps,
  emit: TaskFormModalEmit
): TaskFormModalModel {
  const globalStore = useGlobalStore();
  const { tasks } = storeToRefs(globalStore);
  const { addTask, updateTask } = globalStore;

  const title = ref("");
  const description = ref("");
  const error = ref("");

  const isEditing = computed(() => Boolean(props.taskId));
  const modalTitle = computed(() =>
    isEditing.value ? "Editar tarefa" : "Nova tarefa"
  );
  const primaryButtonLabel = computed(() =>
    isEditing.value ? "Salvar alterações" : "Criar tarefa"
  );

  const resetForm = () => {
    title.value = "";
    description.value = "";
    error.value = "";
  };

  const loadTaskData = () => {
    if (!props.taskId) {
      resetForm();
      return;
    }

    const existingTask = tasks.value.find((task) => task.id === props.taskId);
    if (!existingTask) {
      error.value = "Tarefa não encontrada.";
      resetForm();
      return;
    }

    title.value = existingTask.title;
    description.value = existingTask.description ?? "";
    error.value = "";
  };

  watch(
    () => props.isOpen,
    (isOpen) => {
      if (isOpen) {
        loadTaskData();
      } else {
        resetForm();
      }
    }
  );

  watch(
    () => props.taskId,
    () => {
      if (props.isOpen) {
        loadTaskData();
      }
    }
  );

  const closeModal = () => {
    emit("close");
  };

  const handleSubmit = () => {
    if (!title.value.trim()) {
      error.value = "Informe um título para a tarefa.";
      return;
    }

    const normalizedDescription = description.value.trim();

    if (isEditing.value && props.taskId) {
      const existingTask = tasks.value.find((task) => task.id === props.taskId);
      if (!existingTask) {
        error.value = "Tarefa não encontrada.";
        return;
      }

      updateTask({
        ...existingTask,
        title: title.value.trim(),
        description: normalizedDescription || undefined,
        updated_at: new Date(),
      });
    } else {
      addTask({
        title: title.value.trim(),
        description: normalizedDescription || undefined,
      });
    }

    resetForm();
    emit("close");
  };

  return {
    title,
    description,
    error,
    isEditing,
    modalTitle,
    primaryButtonLabel,
    closeModal,
    handleSubmit,
  };
}
