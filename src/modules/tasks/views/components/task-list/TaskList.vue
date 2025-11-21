<script setup lang="ts">
import type { Task } from "@/modules/tasks/models/TaskView.models";

import TaskItem from "../task-item/TaskItem.vue";

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: "removeTask", id: string): void;
  (e: "editTask", task: Task): void;
}>();
</script>

<template>
  <ul role="list" class="space-y-3">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @remove="emit('removeTask', $event)"
      @edit="emit('editTask', $event)"
    />
  </ul>
</template>
