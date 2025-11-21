<script setup lang="ts">
import type { Task } from "../../../models/TaskView.models";

defineProps<{
  isOpen: boolean;
  task: Task | null;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};
</script>

<template>
  <teleport to="body">
    <div
      v-if="isOpen && task"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex min-h-screen items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40"
          aria-hidden="true"
          @click="closeModal"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          class="relative inline-block w-full align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg z-50"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div class="flex justify-between items-center">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    {{ task.title }}
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-600"
                    @click="closeModal"
                  >
                    <span class="sr-only">Fechar</span>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ task.description }}
                  </p>
                  <div class="mt-4 flex items-center gap-2">
                    <span class="text-xs text-gray-400"
                      >Criado em:
                      {{ new Date(task.created_at).toLocaleDateString() }}</span
                    >
                    <span
                      :class="
                        task.is_completed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      "
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >
                      {{ task.is_completed ? "Concluída" : "Pendente" }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="closeModal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
