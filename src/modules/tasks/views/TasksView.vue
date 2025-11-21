<script setup lang="ts">
import { ref } from "vue";
import { useGlobalStore } from "../../../_shared/stores/GlobalStore";
import type { Task } from "../models/TaskView.models";

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

      <div v-if="tasks.length === 0" class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">Não existem tasks cadastradas</h3>
      </div>

      <div v-else>
        <ul role="list" class="space-y-3">
          <li v-for="task in tasks" :key="task.id" class="bg-white shadow overflow-hidden sm:rounded-md">
            <div class="block hover:bg-gray-50 cursor-pointer" @click="openModal(task)">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-indigo-600 truncate">{{ task.title }}</p>
                  <div class="ml-2 flex-shrink-0 flex items-center gap-2">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {{ task.is_completed ? 'Completa' : 'Pendente' }}
                    </p>
                    <button 
                      @click.stop="removeTask(task.id)"
                      class="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
                      title="Excluir task"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
        </ul>
      </div>

      <!-- Modal -->
      <div v-if="isModalOpen && selectedTask" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeModal"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {{ selectedTask.title }}
                    </h3>
                    <button type="button" class="text-indigo-600 hover:text-indigo-900">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      {{ selectedTask.description }}
                    </p>
                    <div class="mt-4 flex items-center gap-2">
                      <span class="text-xs text-gray-400">Criado em: {{ new Date(selectedTask.created_at).toLocaleDateString() }}</span>
                      <span :class="selectedTask.is_completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        {{ selectedTask.is_completed ? 'Concluída' : 'Pendente' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
