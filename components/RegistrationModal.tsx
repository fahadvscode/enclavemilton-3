"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { siteData } from "@/lib/floor-plans";
import styles from "./RegistrationModal.module.css";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
  defaultModel?: string;
  defaultCollection?: string;
}

export function RegistrationModal({
  open,
  onClose,
  defaultModel = "",
  defaultCollection = "",
}: RegistrationModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const modelOptions = siteData.collections.flatMap((c) =>
    c.models.map((m) => ({
      value: m.model,
      label: `${m.model} — ${c.name}`,
      collection: c.name,
    }))
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          model: data.get("model"),
          collection: data.get("collection"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Registration failed. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      aria-labelledby="register-title"
    >
      <div className={styles.panel}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>

        {status === "success" ? (
          <div className={styles.success}>
            <h2 id="register-title">Thank you for registering</h2>
            <p>
              Your floor plan PDF and current pricing details will be emailed to you shortly.
              Check your inbox (and spam folder).
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="register-title">Register for floor plans &amp; pricing</h2>
            <p className={styles.intro}>
              Get the complete floor plan PDF and current model pricing for The Enclave Milton.
              Starting from {siteData.project.startingFrom}.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <label>
                  First name
                  <input name="firstName" type="text" required autoComplete="given-name" />
                </label>
                <label>
                  Last name
                  <input name="lastName" type="text" required autoComplete="family-name" />
                </label>
              </div>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                Model of interest
                <select
                  name="model"
                  defaultValue={defaultModel || ""}
                  required
                  onChange={(e) => {
                    const opt = modelOptions.find((o) => o.value === e.target.value);
                    const collectionInput = e.currentTarget.form?.querySelector<HTMLInputElement>(
                      'input[name="collection"]'
                    );
                    if (collectionInput && opt) collectionInput.value = opt.collection;
                  }}
                >
                  <option value="" disabled>
                    Select a model
                  </option>
                  {modelOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <input
                type="hidden"
                name="collection"
                defaultValue={
                  defaultCollection ||
                  modelOptions.find((o) => o.value === defaultModel)?.collection ||
                  ""
                }
              />

              {status === "error" && (
                <p className={styles.error} role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-gold btn-block"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Submitting…" : "Get floor plan & pricing"}
              </button>

              <p className={styles.privacy}>
                By registering, you agree to receive community updates about The Enclave Milton.
                Deposit schedules, lot numbers, and elevation details are shared only in your
                personalized follow-up materials.
              </p>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
