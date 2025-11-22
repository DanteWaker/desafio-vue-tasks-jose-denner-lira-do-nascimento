import type {
  TaskListEmit,
  TaskListModel,
  TaskListProps,
} from "./TaskList.model";

export function TaskListViewModel(
  _props: TaskListProps,
  emit: TaskListEmit
): TaskListModel {
  const handleRemove = (id: string) => {
    emit("removeTask", id);
  };

  return {
    handleRemove,
  };
}
