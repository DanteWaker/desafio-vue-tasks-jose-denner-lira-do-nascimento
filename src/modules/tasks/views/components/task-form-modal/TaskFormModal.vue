<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "submit", payload: { title: string; description: string }): void;
}>();

const title = ref("");
const description = ref("");
const error = ref("");

const resetForm = () => {
  title.value = "";
  description.value = "";
  error.value = "";
};

watch(
  () => props.isOpen,
  (isOpen) => {
    if (!isOpen) {
      resetForm();
    }
  }
);

const closeModal = () => {
  emit("close");
};

const handleSubmit = () => {
  if (!title.value.trim()) {
    error.value = "Informe um título para a tarefa.";
    return;
  }

  emit("submit", {
    title: title.value.trim(),
    description: description.value.trim(),
  });

  resetForm();
  emit("close");
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="closeModal"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <form @submit.prevent="handleSubmit">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div class="flex justify-between items-center">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Nova tarefa
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

                <div class="mt-4 space-y-4">
                  <div>
                    <label
                      for="task-title"
                      class="block text-sm font-medium text-gray-700"
                      >Título</label
                    >
                    <input
                      id="task-title"
                      v-model="title"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Ex.: Revisar código"
                    />
                  </div>

                  <div>
                    <label
                      for="task-description"
                      class="block text-sm font-medium text-gray-700"
                      >Descrição</label
                    >
                    <textarea
                      id="task-description"
                      v-model="description"
                      rows="3"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Detalhes opcionais"
                    ></textarea>
                  </div>

                  <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Criar tarefa
            </button>
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="closeModal"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
