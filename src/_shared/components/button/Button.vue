<script setup lang="ts">
import type { ButtonProps } from "./Button.model";
import { ButtonViewModel } from "./Button.viewmodel";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  type: "button",
  fullWidth: false,
  disabled: false,
});

const emit = defineEmits<{ (e: "click", event: MouseEvent): void }>();

const { classes, iconClasses } = ButtonViewModel(props);

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  emit("click", event);
};
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
