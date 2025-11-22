<script setup lang="ts">
import { computed, ref } from "vue";
import { IconPlus, IconSearch } from "@tabler/icons-vue";
import { storeToRefs } from "pinia";
import Button from "../../components/button/Button.vue";
import Input from "../../components/input/Input.vue";
import Logo from "../../components/logo/Logo.vue";
import ToastContainer from "../../components/toast/ToastContainer.vue";
import TaskFormModal from "@/modules/tasks/views/components/task-form-modal/TaskFormModal.vue";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";

const isTaskModalOpen = ref(false);
const openTaskModal = () => {
  isTaskModalOpen.value = true;
};
const closeTaskModal = () => {
  isTaskModalOpen.value = false;
};

const globalStore = useGlobalStore();
const { searchQuery } = storeToRefs(globalStore);

const searchQueryModel = computed({
  get: () => searchQuery.value,
  set: (value: string) => {
    globalStore.setSearchQuery(value);
  },
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <header
      class="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-20 shadow-sm"
    >
      <div
        class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex items-center justify-between gap-4">
          <Logo />
          <div class="md:hidden">
            <Button label="Add Task" :icon="IconPlus" @click="openTaskModal" />
          </div>
        </div>
        <div
          class="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 w-full"
        >
          <div class="flex-1 w-full md:w-auto">
            <Input
              v-model="searchQueryModel"
              placeholder="Pesquisar tarefas..."
              :icon="IconSearch"
            />
          </div>
          <div class="hidden md:block">
            <Button label="Add Task" :icon="IconPlus" @click="openTaskModal" />
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-auto px-4 py-6 sm:px-6">
      <slot>
        <RouterView />
      </slot>
    </main>

    <ToastContainer />
    <TaskFormModal :is-open="isTaskModalOpen" @close="closeTaskModal" />
  </div>
</template>
