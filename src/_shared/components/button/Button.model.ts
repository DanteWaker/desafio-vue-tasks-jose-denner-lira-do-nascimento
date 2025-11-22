import type { Ref } from "vue";

export interface ButtonModel {
  isModalOpen: Ref<boolean>;
  openModal: () => void;
  closeModal: () => void;
}
