<script setup lang="ts">
import Button from "../../components/button/Button.vue";
import Input from "../../components/input/Input.vue";
import Logo from "../../components/logo/Logo.vue";
import ToastContainer from "../../components/toast/ToastContainer.vue";
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
            <Button />
          </div>
        </div>
        <div class="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Input />
          <div class="hidden md:block">
            <Button />
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
  </div>
</template>
