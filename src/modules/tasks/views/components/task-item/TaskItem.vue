<script setup lang="ts">
import type { Task } from "@/modules/tasks/models/TaskView.models";

defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "remove", id: string): void;
  (e: "click", task: Task): void;
}>();
</script>

<template>
  <li class="bg-white shadow overflow-hidden sm:rounded-md">
    <div
      class="block hover:bg-gray-50 cursor-pointer"
      @click="emit('click', task)"
    >
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-indigo-600 truncate">
            {{ task.title }}
          </p>
          <div class="ml-2 flex-shrink-0 flex items-center gap-2">
            <p
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >
              {{ task.is_completed ? "Completa" : "Pendente" }}
            </p>
            <button
              @click.stop="emit('remove', task.id)"
              class="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
              title="Excluir task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="sm:flex">
            <p class="flex items-center text-sm text-gray-500">
              {{ task.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
