<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from "./Button.model";
import { ButtonViewModel } from "./Button.viewmodel";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  type: "button",
  fullWidth: false,
  disabled: false,
});

const emit = defineEmits<ButtonEmits>();

const { classes, iconClasses, handleClick } = ButtonViewModel(props, emit);
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <component
      v-if="icon"
      :is="icon"
      :class="iconClasses"
      stroke-width="1.5"
      aria-hidden="true"
    />
    <span>{{ label }}</span>
  </button>
</template>
