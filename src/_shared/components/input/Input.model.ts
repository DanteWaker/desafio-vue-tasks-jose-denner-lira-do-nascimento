import type { Component, ComputedRef } from "vue";

export type InputEmits = (event: "update:modelValue", value: string) => void;

export interface InputProps {
  modelValue?: string;
  label?: string;
  placeholder?: string;
  icon?: Component;
  type?: string;
  textarea?: boolean;
  rows?: number;
  id?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
  autocomplete?: string;
}

export interface InputModel {
  inputClasses: ComputedRef<string>;
  resolvedId: ComputedRef<string>;
  handleInput: (event: Event) => void;
}
