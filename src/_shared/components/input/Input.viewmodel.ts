import { ref } from "vue";
import type { InputModel } from "./Input.model";

export function InputViewModel(): InputModel {
  const searchQuery = ref("");

  const setSearchQuery = (value: string) => {
    searchQuery.value = value;
  };

  return {
    searchQuery,
    setSearchQuery,
  };
}
