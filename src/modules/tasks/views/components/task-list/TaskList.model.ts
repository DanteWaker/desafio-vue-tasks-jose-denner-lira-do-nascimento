import type { Task } from "@/modules/tasks/models/TaskView.models";

export type TaskListEmit = (event: "removeTask", id: string) => void;

export interface TaskListProps {
  tasks: Task[];
}

export interface TaskListModel {
  handleRemove: (id: string) => void;
}
