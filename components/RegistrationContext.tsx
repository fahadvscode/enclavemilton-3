"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { RegistrationModal } from "./RegistrationModal";

interface RegistrationContextValue {
  openRegistration: (model?: string, collection?: string) => void;
  closeRegistration: () => void;
}

const RegistrationContext = createContext<RegistrationContextValue | null>(null);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefillModel, setPrefillModel] = useState<string>("");
  const [prefillCollection, setPrefillCollection] = useState<string>("");

  const openRegistration = useCallback((model?: string, collection?: string) => {
    setPrefillModel(model ?? "");
    setPrefillCollection(collection ?? "");
    setOpen(true);
  }, []);

  const closeRegistration = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openRegistration, closeRegistration }),
    [openRegistration, closeRegistration]
  );

  return (
    <RegistrationContext.Provider value={value}>
      {children}
      <RegistrationModal
        open={open}
        onClose={closeRegistration}
        defaultModel={prefillModel}
        defaultCollection={prefillCollection}
      />
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const ctx = useContext(RegistrationContext);
  if (!ctx) {
    throw new Error("useRegistration must be used within RegistrationProvider");
  }
  return ctx;
}
