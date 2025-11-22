import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  ShowToastPayload,
  ToastMessage,
} from "../interfaces/Toast.interfaces";

export const useToastStore = defineStore("toast", () => {
  const toasts = ref<ToastMessage[]>([]);

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  };

  const showToast = ({
    title,
    description,
    variant = "info",
    duration = 4000,
  }: ShowToastPayload) => {
    const toast: ToastMessage = {
      id: crypto.randomUUID(),
      title,
      description,
      variant,
      duration,
    };

    toasts.value.push(toast);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(toast.id);
      }, duration);
    }
  };

  return {
    toasts,
    showToast,
    removeToast,
  };
});
