"use client";

import { RegistrationProvider } from "./RegistrationContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <RegistrationProvider>{children}</RegistrationProvider>;
}
