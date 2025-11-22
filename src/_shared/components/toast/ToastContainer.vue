<script setup lang="ts">
import { ToastContainerViewModel } from "./ToastContainer.viewmodel";

const { toasts, getVariantClasses, dismissToast } = ToastContainerViewModel();
</script>

<template>
  <teleport to="body">
    <div
      class="fixed bottom-4 right-4 z-[1000] space-y-3 w-full max-w-xs sm:right-6 sm:bottom-6"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="rounded-lg shadow-lg border-l-4 bg-white overflow-hidden"
        :class="getVariantClasses(toast.variant)"
      >
        <div class="px-4 py-3 flex items-start gap-3">
          <div class="flex-1">
            <p class="text-sm font-semibold">
              {{ toast.title }}
            </p>
            <p v-if="toast.description" class="text-sm mt-1 opacity-80">
              {{ toast.description }}
            </p>
          </div>
          <button
            type="button"
            class="text-sm font-medium opacity-70 hover:opacity-100"
            aria-label="Fechar notificação"
            @click="dismissToast(toast.id)"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>
