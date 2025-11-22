<script setup lang="ts">
import TaskFormModal from "../task-form-modal/TaskFormModal.vue";
import type { TaskItemProps } from "./TaskItem.model";
import { TaskItemViewModel } from "./TaskItem.viewmodel";

const props = defineProps<TaskItemProps>();

const emit = defineEmits<{
  (e: "remove", id: string): void;
}>();

const {
  isEditModalOpen,
  borderClass,
  handleToggle,
  handleEdit,
  closeEditModal,
  handleRemove,
} = TaskItemViewModel(props, emit);
</script>

<template>
  <li
    class="bg-white shadow overflow-hidden sm:rounded-md border"
    :class="borderClass"
  >
    <div class="px-4 py-4 sm:px-6">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
      >
        <label class="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            :checked="task.is_completed"
            class="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            @change="handleToggle"
          />
          <div>
            <p
              class="text-sm font-semibold"
              :class="
                task.is_completed
                  ? 'text-gray-400 line-through'
                  : 'text-gray-900'
              "
            >
              {{ task.title }}
            </p>
            <p class="text-sm text-gray-500">
              {{ task.description || "Sem descrição" }}
            </p>
          </div>
        </label>

        <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
            @click="handleEdit"
          >
            Editar
          </button>
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-transparent px-3 py-1 text-xs font-medium text-white bg-red-600 hover:bg-red-700"
            @click="handleRemove"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
    <TaskFormModal
      :is-open="isEditModalOpen"
      :task-id="task.id"
      @close="closeEditModal"
    />
  </li>
</template>
