import type { LogoModel } from "./Logo.model";

export function LogoViewModel(): LogoModel {
  const logoText = "TaskMaster";
  const logoIcon = "⚡";

  return {
    logoText,
    logoIcon,
  };
}
