<script setup lang="ts">
import { IconX } from "@tabler/icons-vue";
import Button from "@/_shared/components/button/Button.vue";
import Input from "@/_shared/components/input/Input.vue";
import type { TaskFormModalProps } from "./TaskFormModal.model";
import { TaskFormModalViewModel } from "./TaskFormModal.viewmodel";

const props = defineProps<TaskFormModalProps>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const {
  title,
  description,
  error,
  isEditing,
  modalTitle,
  primaryButtonLabel,
  closeModal,
  handleSubmit,
} = TaskFormModalViewModel(props, emit);
</script>

<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex min-h-screen items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-black opacity-70 z-40"
          aria-hidden="true"
          @click="closeModal"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        />

        <div
          class="relative inline-block w-full align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg z-50"
        >
          <form @submit.prevent="handleSubmit">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"
                >
                  <div class="flex justify-between items-center">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {{ modalTitle }}
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-600"
                      @click="closeModal"
                    >
                      <span class="sr-only">Fechar</span>
                      <IconX class="h-5 w-5" stroke-width="1.5" />
                    </button>
                  </div>

                  <div class="mt-4 space-y-4">
                    <Input
                      v-model="title"
                      label="Título"
                      placeholder="Ex.: Revisar código"
                      id="task-title"
                    />

                    <Input
                      v-model="description"
                      label="Descrição"
                      placeholder="Detalhes opcionais"
                      id="task-description"
                      textarea
                      :rows="3"
                    />

                    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:gap-3"
            >
              <Button
                :label="primaryButtonLabel"
                type="submit"
                :full-width="true"
                class="mt-3 sm:mt-0 sm:w-auto"
              />
              <Button
                label="Cancelar"
                variant="secondary"
                type="button"
                :full-width="true"
                class="mt-3 sm:mt-0 sm:w-auto"
                @click="closeModal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
</template>
