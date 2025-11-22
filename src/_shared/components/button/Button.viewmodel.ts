import { computed } from "vue";
import type { ButtonEmits, ButtonModel, ButtonProps } from "./Button.model";
import { VARIANT_CLASSES } from "@/_shared/consts/Button.constants";

export function ButtonViewModel(
  props: ButtonProps,
  emit: ButtonEmits
): ButtonModel {
  const classes = computed(() => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 px-3 py-2 text-xs font-semibold sm:px-4 sm:py-2.5 sm:text-sm";
    const variant = props.variant ?? "primary";
    const stateClasses = props.disabled
      ? "opacity-50 cursor-not-allowed"
      : "cursor-pointer";
    const widthClasses = props.fullWidth ? "w-full" : "";

    return [baseClasses, VARIANT_CLASSES[variant], stateClasses, widthClasses]
      .filter(Boolean)
      .join(" ");
  });

  const iconClasses = computed(() => "-ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5");

  const handleClick = (event: MouseEvent) => {
    if (props.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    emit("click", event);
  };

  return {
    classes,
    iconClasses,
    handleClick,
  };
}
