import { areaHighlights, communityLocation, nearbyAmenities } from "@/data/location";
import styles from "./AreaGuide.module.css";

export default function AreaAmenitiesSection() {
  return (
    <section className={styles.section} aria-labelledby="amenities-heading">
      <div className="container">
        <h2 id="amenities-heading">What amenities are near The Enclave Milton?</h2>
        <p className="lead">
          {communityLocation.description.split(".")[0]} — everyday shopping, healthcare, recreation,
          and escarpment greenspace are within Milton, with more services planned under the Town&apos;s
          Britannia Secondary Plan.
        </p>
        <ul className={styles.strip} aria-label="Area highlights">
          {areaHighlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className={styles.cardGrid}>
          {nearbyAmenities.map((a) => (
            <article key={`${a.category}-${a.name}`} className={styles.card}>
              <p className={styles.meta}>{a.category}</p>
              <h3>{a.name}</h3>
              <p className={styles.note}>{a.description}</p>
              {a.typicalAccess && <p className={styles.buyerNote}>{a.typicalAccess}</p>}
            </article>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Drive times and retail tenants change. Visit the area and confirm locations on a map before
          you purchase.
        </p>
      </div>
    </section>
  );
}
