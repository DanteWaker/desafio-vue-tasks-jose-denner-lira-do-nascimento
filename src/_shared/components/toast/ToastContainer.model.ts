import type {
  ToastMessage,
  ToastVariant,
} from "@/_shared/interfaces/Toast.interfaces";
import type { Ref } from "vue";

export interface ToastContainerModel {
  toasts: Ref<ToastMessage[]>;
  getVariantClasses: (variant: ToastVariant) => string;
  dismissToast: (id: string) => void;
}
