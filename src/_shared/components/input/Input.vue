<script setup lang="ts">
import { IconSearch } from "@tabler/icons-vue";
import { InputViewModel } from "./Input.viewmodel";

const { searchQuery, setSearchQuery } = InputViewModel();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  setSearchQuery(target.value);
};
</script>

<template>
  <div class="flex-1 max-w-lg mx-4">
    <div class="relative">
      <span
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <IconSearch class="h-5 w-5 text-gray-400" stroke-width="1.5" />
      </span>
      <input
        :value="searchQuery"
        @input="handleInput"
        type="text"
        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition duration-150 ease-in-out"
        placeholder="Pesquisar tarefas..."
      />
    </div>
  </div>
</template>
