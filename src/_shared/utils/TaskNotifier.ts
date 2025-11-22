import type { TaskFilter } from "@/modules/tasks/models/TaskView.models";
import type { ToastOptions } from "@/_shared/interfaces/Toast.interfaces";
import type { useToastStore } from "@/_shared/stores/ToastStore";

export type ToastStore = ReturnType<typeof useToastStore>;

export function createTaskNotifier(toastStore: ToastStore) {
  const show = (options: ToastOptions) => {
    toastStore.showToast(options);
  };

  const notifyTaskAdded = (title: string) => {
    show({
      title: "Tarefa adicionada",
      description: `A tarefa "${title}" foi adicionada com sucesso.`,
      variant: "success",
    });
  };

  const notifyTaskRemoved = () => {
    show({
      title: "Tarefa removida",
      description: "A tarefa selecionada foi removida.",
      variant: "warning",
    });
  };

  const notifyTaskUpdated = (title: string) => {
    show({
      title: "Tarefa atualizada",
      description: `A tarefa "${title}" foi atualizada com sucesso.`,
      variant: "info",
    });
  };

  const notifyTaskUpdateFailed = () => {
    show({
      title: "Tarefa não encontrada",
      description: "Não foi possível atualizar a tarefa informada.",
      variant: "error",
    });
  };

  const notifyTaskStatusChanged = (title: string, isCompleted: boolean) => {
    show({
      title: isCompleted ? "Tarefa concluída" : "Tarefa reaberta",

      description: `A tarefa "${title}" foi ${
        isCompleted ? "marcada como concluída" : "movida para pendentes"
      }.`,
      variant: isCompleted ? "success" : "info",
    });
  };
  const notifyTaskStatusFailed = () => {
    show({
      title: "Tarefa não encontrada",
      description: "Não foi possível atualizar o status da tarefa.",
      variant: "error",
    });
  };

  const filterDescriptions: Record<TaskFilter, string> = {
    all: "Mostrando todas as tarefas.",
    completed: "Mostrando apenas tarefas concluídas.",
    pending: "Mostrando apenas tarefas pendentes.",
  };

  const notifyFilterChanged = (filter: TaskFilter) => {
    show({
      title: "Filtro atualizado",
      description: filterDescriptions[filter],
      variant: "info",
    });
  };

  return {
    notifyTaskAdded,
    notifyTaskRemoved,
    notifyTaskUpdated,
    notifyTaskUpdateFailed,
    notifyTaskStatusChanged,
    notifyTaskStatusFailed,
    notifyFilterChanged,
  };
}
