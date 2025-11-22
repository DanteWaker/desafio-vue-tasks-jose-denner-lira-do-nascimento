<script setup lang="ts">
import TaskItem from "../task-item/TaskItem.vue";
import type { TaskListProps } from "./TaskList.model";
import { TaskListViewModel } from "./TaskList.viewmodel";

const props = defineProps<TaskListProps>();

const emit = defineEmits<{
  (e: "removeTask", id: string): void;
}>();

const { handleRemove } = TaskListViewModel(props, emit);
</script>

<template>
  <ul role="list" class="space-y-3 sm:space-y-4">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @remove="handleRemove"
    />
  </ul>
</template>
