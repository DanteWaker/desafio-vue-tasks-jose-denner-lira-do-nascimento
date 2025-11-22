import { ref } from "vue";
import type { ButtonModel } from "./Button.model";

export function ButtonViewModel(): ButtonModel {
  const isModalOpen = ref<boolean>(false);

  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
}
