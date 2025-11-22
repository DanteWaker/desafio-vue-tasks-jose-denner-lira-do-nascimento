<script setup lang="ts">
import Button from "@/_shared/components/button/Button.vue";
import { FilterToggleViewModel } from "./FilterToggle.viewmodel";

const { filters, getButtonVariant, handleFilterClick } =
  FilterToggleViewModel();
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      v-for="filter in filters"
      :key="filter.value"
      :label="filter.label"
      :variant="getButtonVariant(filter.value)"
      class="flex-1 sm:flex-none"
      @click="handleFilterClick(filter.value)"
    />
  </div>
</template>
