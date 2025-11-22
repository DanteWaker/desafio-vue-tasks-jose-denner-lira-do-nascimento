import type { Component, ComputedRef } from "vue";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps {
  label: string;
  icon?: Component;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
}

export interface ButtonModel {
  classes: ComputedRef<string>;
  iconClasses: ComputedRef<string>;
}
