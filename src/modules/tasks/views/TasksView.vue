<script setup lang="ts">
import FilterToggle from "./components/filter-toggle/FilterToggle.vue";
import TaskEmpty from "./components/task-empty/TaskEmpty.vue";
import TaskList from "./components/task-list/TaskList.vue";
import { useTasksView } from "../view-models/useTasksView";

const { tasks, hasTasks, removeTask } = useTasksView();
</script>

<template>
  <div class="space-y-5 sm:space-y-6">
    <FilterToggle />
    <TaskEmpty v-if="!hasTasks" />
    <TaskList v-else :tasks="tasks" @remove-task="removeTask" />
  </div>
</template>
