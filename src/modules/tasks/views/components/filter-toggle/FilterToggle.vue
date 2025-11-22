<script setup lang="ts">
import { FilterToggleViewModel } from "./FilterToggle.viewmodel";

const { filters, getButtonClasses, handleFilterClick } =
  FilterToggleViewModel();
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="filter in filters"
      :key="filter.value"
      type="button"
      :class="getButtonClasses(filter.value)"
      @click="handleFilterClick(filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>
