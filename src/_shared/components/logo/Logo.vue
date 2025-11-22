<script setup lang="ts">
import { LogoViewModel } from "./Logo.viewmodel";

const { logoText, logoIcon } = LogoViewModel();
</script>

<template>
  <div class="flex items-center">
    <div
      class="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mr-8"
    >
      <span class="text-3xl">{{ logoIcon }}</span> {{ logoText }}
    </div>
  </div>
</template>
