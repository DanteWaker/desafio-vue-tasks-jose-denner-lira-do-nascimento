<script setup lang="ts">
import Button from "../../components/button/Button.vue";
import Input from "../../components/input/Input.vue";
import Logo from "../../components/logo/Logo.vue";
import ToastContainer from "../../components/toast/ToastContainer.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <div class="flex-1 flex flex-col">
      <header
        class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20"
      >
        <Logo />
        <Input />
        <Button />
      </header>

      <main class="flex-1 overflow-auto p-6">
        <slot>
          <RouterView />
        </slot>
      </main>
    </div>
    <ToastContainer />
  </div>
</template>
