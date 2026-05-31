"use client";

import Link from "next/link";
import type { Collection, FloorPlanModel } from "@/lib/types";
import { formatModelType, formatSqft } from "@/lib/floor-plans";
import { useRegistration } from "./RegistrationContext";
import { PlanThumbnail } from "./PlanThumbnail";
import styles from "./ModelCard.module.css";

interface ModelCardProps {
  model: FloorPlanModel;
  collection: Collection;
  index: number;
}

export function ModelCard({ model, collection, index }: ModelCardProps) {
  const { openRegistration } = useRegistration();
  const typeLabel = formatModelType(model, collection.id);
  const sqftLabel = formatSqft(model);
  const shortName = model.model.replace("The ", "");

  return (
    <article className={styles.card}>
      <Link href={`/floor-plans/${model.slug}`} className={styles.thumbLink}>
        <PlanThumbnail
          modelName={model.model}
          seed={index + (model.sqft ?? model.sqftMin ?? 0)}
        />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={`/floor-plans/${model.slug}`}>{model.model}</Link>
        </h3>
        <p className={styles.type}>{typeLabel}</p>
        <p className={styles.sqft}>{sqftLabel}</p>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => openRegistration(model.model, collection.name)}
        >
          Get {shortName} Floor Plan &amp; Price
        </button>
      </div>
    </article>
  );
}
