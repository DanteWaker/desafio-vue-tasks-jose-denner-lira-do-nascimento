<script setup lang="ts">
import { IconClipboardList } from "@tabler/icons-vue";
</script>

<template>
  <div class="text-center py-12">
    <IconClipboardList
      class="mx-auto h-12 w-12 text-gray-400"
      stroke-width="1.5"
      aria-hidden="true"
    />
    <h3 class="mt-2 text-sm font-medium text-gray-900">
      Não existem tasks cadastradas
    </h3>
  </div>
</template>
