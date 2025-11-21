<script setup lang="ts">
import { ref } from "vue";
import { useGlobalStore } from "../../../_shared/stores/GlobalStore";
import type { Task } from "../models/TaskView.models";

import TaskEmpty from "./components/task-empty/TaskEmpty.vue";
import TaskList from "./components/task-list/TaskList.vue";
import TaskFormModal from "./components/task-form-modal/TaskFormModal.vue";

const { tasks, removeTask } = useGlobalStore();

const selectedTask = ref<Task | null>(null);
const isModalOpen = ref(false);

const openModal = (task: Task) => {
  console.log("Abrindo modal para a task:", task);
  selectedTask.value = task;
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
  selectedTask.value = null;
};
</script>

<template>
  <div class="space-y-6">
    <TaskEmpty v-if="tasks.length === 0" />
    <TaskList
      v-else
      :tasks="tasks"
      @remove-task="removeTask"
      @select-task="openModal"
    />

    <TaskFormModal
      :is-open="isModalOpen"
      :task="selectedTask"
      @close="closeModal"
    />
  </div>
</template>
