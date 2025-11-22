import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/_shared/stores/GlobalStore";
import type { InputModel } from "./Input.model";

export function InputViewModel(): InputModel {
  const globalStore = useGlobalStore();
  const { searchQuery } = storeToRefs(globalStore);
  const { setSearchQuery } = globalStore;

  return {
    searchQuery,
    setSearchQuery,
  };
}
