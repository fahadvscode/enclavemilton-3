import type { Collection } from "@/lib/types";
import { ModelCard } from "./ModelCard";
import styles from "./CollectionSection.module.css";

interface CollectionSectionProps {
  collection: Collection;
}

export function CollectionSection({ collection }: CollectionSectionProps) {
  return (
    <section
      id={collection.id}
      className={`section ${collection.id === "park" ? "section-alt" : ""}`}
    >
      <div className="container">
        <div className={styles.header}>
          <span className="badge">{collection.tagline}</span>
          <h2 className="section-title">{collection.name}</h2>
          <p className={styles.subtitle}>{collection.type}</p>
          <blockquote className={styles.copy}>{collection.description}</blockquote>
          {collection.footnote && (
            <p className={styles.footnote}>
              <em>{collection.footnote}</em>
            </p>
          )}
        </div>
        <div className={styles.grid}>
          {collection.models.map((model) => (
            <ModelCard key={model.slug} model={model} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
