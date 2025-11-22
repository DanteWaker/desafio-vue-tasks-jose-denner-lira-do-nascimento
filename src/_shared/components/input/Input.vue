<script setup lang="ts">
import type { InputProps } from "./Input.model";
import { InputViewModel } from "./Input.viewmodel";

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  textarea: false,
  rows: 3,
  disabled: false,
  modelValue: "",
});

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const { inputClasses, resolvedId } = InputViewModel(props);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="resolvedId"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <div :class="['relative', label ? 'mt-1' : '']">
      <span
        v-if="icon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <component
          :is="icon"
          class="h-5 w-5 text-gray-400"
          stroke-width="1.5"
          aria-hidden="true"
        />
      </span>
      <component
        :is="textarea ? 'textarea' : 'input'"
        :id="resolvedId"
        :name="name"
        :type="textarea ? undefined : type"
        :rows="textarea ? rows : undefined"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :class="inputClasses"
        @input="handleInput"
      />
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>
