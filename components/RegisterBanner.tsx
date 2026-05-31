"use client";

import { siteData } from "@/lib/floor-plans";
import { useRegistration } from "./RegistrationContext";
import styles from "./RegisterBanner.module.css";

export function RegisterBanner() {
  const { openRegistration } = useRegistration();

  return (
    <section id="register" className={styles.banner}>
      <div className="container">
        <h2>Get full floor plans &amp; pricing</h2>
        <p>
          Register once for PDF floor plans and current model pricing across all{" "}
          {siteData.collections.reduce((n, c) => n + c.models.length, 0)} homes at The Enclave
          Milton — Village and Park collections.
        </p>
        <p className={styles.price}>Homes from {siteData.project.startingFrom}</p>
        <button type="button" className="btn btn-gold" onClick={() => openRegistration()}>
          Register now
        </button>
      </div>
    </section>
  );
}
