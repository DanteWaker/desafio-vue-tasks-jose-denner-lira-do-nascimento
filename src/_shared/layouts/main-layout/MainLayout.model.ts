import type { Ref, WritableComputedRef } from "vue";

export interface MainLayoutModel {
  isTaskModalOpen: Ref<boolean>;
  searchQueryModel: WritableComputedRef<string>;
  openTaskModal: () => void;
  closeTaskModal: () => void;
}
