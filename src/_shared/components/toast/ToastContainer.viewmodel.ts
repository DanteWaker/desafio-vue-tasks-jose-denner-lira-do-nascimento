import { storeToRefs } from "pinia";
import { useToastStore } from "@/_shared/stores/ToastStore";
import type { ToastContainerModel } from "./ToastContainer.model";
import type { ToastVariant } from "@/_shared/interfaces/Toast.interfaces";

export function ToastContainerViewModel(): ToastContainerModel {
  const toastStore = useToastStore();
  const { toasts } = storeToRefs(toastStore);
  const { removeToast } = toastStore;

  const getVariantClasses = (variant: ToastVariant) => {
    switch (variant) {
      case "success":
        return "border-green-500 bg-green-50 text-green-800";
      case "warning":
        return "border-yellow-500 bg-yellow-50 text-yellow-800";
      case "error":
        return "border-red-500 bg-red-50 text-red-800";
      case "info":
      default:
        return "border-blue-500 bg-blue-50 text-blue-800";
    }
  };

  const dismissToast = (id: string) => {
    removeToast(id);
  };

  return {
    toasts,
    getVariantClasses,
    dismissToast,
  };
}
