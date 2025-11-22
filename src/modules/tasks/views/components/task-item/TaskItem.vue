<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "@/modules/tasks/models/TaskView.models";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";
import TaskFormModal from "../task-form-modal/TaskFormModal.vue";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "remove", id: string): void;
}>();

const { toggleTask } = useGlobalStore();
const isEditModalOpen = ref(false);

const handleToggle = () => {
  toggleTask(props.task.id);
};

const handleEdit = () => {
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
};

const handleRemove = () => {
  emit("remove", props.task.id);
};
</script>

<template>
  <li
    class="bg-white shadow overflow-hidden sm:rounded-md border"
    :class="task.is_completed ? 'border-green-500' : 'border-transparent'"
  >
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-start justify-between gap-6">
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

        <div class="flex items-center gap-2">
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
