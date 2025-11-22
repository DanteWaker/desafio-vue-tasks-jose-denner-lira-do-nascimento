import type { ToastOptions } from "../interfaces/Toast.interfaces";
import { useToastStore } from "../stores/ToastStore";

export function useToast() {
  const toastStore = useToastStore();

  const showToast = (options: ToastOptions) => {
    toastStore.showToast(options);
  };

  return {
    showToast,
  };
}
