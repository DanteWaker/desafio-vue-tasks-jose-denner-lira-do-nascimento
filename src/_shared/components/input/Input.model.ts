import type { Ref } from "vue";

export interface InputModel {
  searchQuery: Ref<string>;
  setSearchQuery: (value: string) => void;
}
