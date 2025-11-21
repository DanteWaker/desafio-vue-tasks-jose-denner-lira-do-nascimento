<script setup lang="ts">
import { ref } from "vue";
import { useGlobalStore } from "../stores/GlobalStore";

const searchQuery = ref("");

const { addTask } = useGlobalStore();

const handleAddTask = () => {
	addTask({
		description: `Nova tarefa criada em ${new Date().toLocaleString()}`,
		title: "Nova Tarefa",
	});
};
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    

    <div class="flex-1 flex flex-col">
      <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20">
        <div class="flex items-center">
          <div
            class="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mr-8">
            <span class="text-3xl">⚡</span> TaskMaster
          </div>
        </div>

        <div class="flex-1 max-w-lg mx-4">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <input v-model="searchQuery" type="text"
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Pesquisar tarefas..." />
          </div>
        </div>

        <div>
          <button @click="handleAddTask"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd" />
            </svg>
            Add Task
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-auto p-6">
        <slot>
          <RouterView />
        </slot>
      </main>
    </div>
  </div>
</template>
