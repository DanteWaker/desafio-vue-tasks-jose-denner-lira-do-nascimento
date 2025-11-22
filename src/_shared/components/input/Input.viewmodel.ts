import { computed } from "vue";
import type { InputModel, InputProps } from "./Input.model";

let inputIdCounter = 0;
const createFallbackId = () => {
  inputIdCounter += 1;
  return `input-${inputIdCounter}`;
};

export function InputViewModel(props: InputProps): InputModel {
  const fallbackId = createFallbackId();

  const inputClasses = computed(() => {
    const paddingClass = props.icon ? "pl-10" : "pl-3";
    const stateClasses = props.error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500";
    const disabledClasses = props.disabled
      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
      : "bg-gray-50 placeholder-gray-500 focus:placeholder-gray-400";

    return [
      "block w-full pr-3 py-2 rounded-md leading-5 sm:text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none",
      paddingClass,
      stateClasses,
      disabledClasses,
    ].join(" ");
  });

  const resolvedId = computed(() => props.id ?? fallbackId);

  return {
    inputClasses,
    resolvedId,
  };
}
