import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";
import type { MainLayoutModel } from "./MainLayout.model";

export function useMainLayoutViewModel(): MainLayoutModel {
  const isTaskModalOpen = ref(false);

  const openTaskModal = () => {
    isTaskModalOpen.value = true;
  };

  const closeTaskModal = () => {
    isTaskModalOpen.value = false;
  };

  const globalStore = useGlobalStore();
  const { searchQuery } = storeToRefs(globalStore);

  const searchQueryModel = computed({
    get: () => searchQuery.value,
    set: (value: string) => {
      globalStore.setSearchQuery(value);
    },
  });

  return {
    isTaskModalOpen,
    searchQueryModel,
    openTaskModal,
    closeTaskModal,
  };
}
