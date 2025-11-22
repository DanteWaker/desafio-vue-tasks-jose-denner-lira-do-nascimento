import { computed, ref } from "vue";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";
import type {
  TaskItemEmit,
  TaskItemModel,
  TaskItemProps,
} from "./TaskItem.model";

export function TaskItemViewModel(
  props: TaskItemProps,
  emit: TaskItemEmit
): TaskItemModel {
  const { toggleTask } = useGlobalStore();
  const isEditModalOpen = ref(false);

  const borderClass = computed(() =>
    props.task.is_completed ? "border-green-500" : "border-transparent"
  );

  const handleToggle = () => {
    toggleTask(props.task.id);
  };

  const handleEdit = () => {
    isEditModalOpen.value = true;
  };

  const closeEditModal = () => {
    isEditModalOpen.value = false;
  };

  const handleRemove = () => {
    emit("remove", props.task.id);
  };

  return {
    isEditModalOpen,
    borderClass,
    handleToggle,
    handleEdit,
    closeEditModal,
    handleRemove,
  };
}
