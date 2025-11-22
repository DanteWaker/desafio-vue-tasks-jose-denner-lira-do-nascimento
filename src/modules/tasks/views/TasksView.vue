<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "../../../_shared/stores/GlobalStore";

import TaskEmpty from "./components/task-empty/TaskEmpty.vue";
import TaskList from "./components/task-list/TaskList.vue";

const globalStore = useGlobalStore();
const { tasks } = storeToRefs(globalStore);
const { removeTask } = globalStore;
</script>

<template>
  <div class="space-y-6">
    <TaskEmpty v-if="tasks.length === 0" />
    <TaskList v-else :tasks="tasks" @remove-task="removeTask" />
  </div>
</template>
