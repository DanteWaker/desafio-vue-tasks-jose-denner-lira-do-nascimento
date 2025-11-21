import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { Task } from "@/modules/tasks/models/TaskView.models";

export const useGlobalStore = defineStore("global", () => {
	const tasks = useLocalStorage<Task[]>("vue-tasks-db", []);

	const addTask = (
		task: Omit<Task, "id" | "created_at" | "updated_at" | "is_completed">,
	) => {
		const newTask: Task = {
			...task,
			id: crypto.randomUUID(),
			is_completed: false,
			created_at: new Date(),
			updated_at: new Date(),
		};
		tasks.value.push(newTask);
	};

	const removeTask = (id: string) => {
		tasks.value = tasks.value.filter((t) => t.id !== id);
	};

	const updateTask = (updatedTask: Task) => {
		const index = tasks.value.findIndex((t) => t.id === updatedTask.id);
		if (index !== -1) {
			tasks.value[index] = updatedTask;
		}
	};

	const toggleTask = (id: string) => {
		const task = tasks.value.find((t) => t.id === id);
		if (task) {
			task.is_completed = !task.is_completed;
		}
	};

	return {
		tasks,
		addTask,
		removeTask,
		updateTask,
		toggleTask,
	};
});
