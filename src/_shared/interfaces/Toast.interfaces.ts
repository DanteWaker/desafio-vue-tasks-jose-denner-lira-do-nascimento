export type ToastVariant = "success" | "warning" | "error" | "info";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  duration?: number;
}

export interface ShowToastPayload {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}
