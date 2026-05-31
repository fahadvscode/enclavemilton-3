import { StockImage } from "@/components/StockImage";
import {
  communityLocation,
  locationDisclaimer,
  nearbyAmenities,
  nearbySchools,
} from "@/data/location";
import { IMAGES } from "@/lib/images";
import styles from "./LocationSection.module.css";

const amenityIcons: Record<string, string> = {
  Transit: "🚆",
  Recreation: "🏃",
  "Parks & trails": "🌲",
  Parks: "🌳",
  Shopping: "🛒",
  Dining: "🍽️",
  Community: "🏘️",
  Connectivity: "🚴",
};

export function LocationSection() {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.banner}>
        <StockImage
          src={IMAGES.trails}
          alt="Trails and green space near Milton, Ontario"
          fill
          className={styles.bannerImg}
          sizes="100vw"
          fallbackLabel="Southeast Milton trails & parks"
        />
        <div className={styles.bannerOverlay} aria-hidden="true" />
        <div className={`container ${styles.bannerContent}`}>
          <h2 className="section-title">Southeast Milton location</h2>
          <p className={styles.address}>{communityLocation.address}</p>
          <p className={styles.areaDesc}>{communityLocation.description}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>Nearby schools</h3>
            <p className={styles.intro}>
              Milton offers strong public and Catholic options. A future elementary school is
              planned within The Enclave development area.
            </p>
            <ul className={styles.list}>
              {nearbySchools.map((school) => (
                <li key={school.name} className={styles.listItem}>
                  <div>
                    <strong>{school.name}</strong>
                    <span className={styles.meta}>
                      {school.type} · {school.board}
                    </span>
                  </div>
                  <p>{school.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3>Nearby amenities</h3>
            <p className={styles.intro}>
              Everyday convenience, recreation, and transit — plus on-site community features as
              the neighbourhood grows.
            </p>
            <ul className={styles.amenityGrid}>
              {nearbyAmenities.map((item) => (
                <li key={item.name} className={styles.amenityCard}>
                  <span className={styles.amenityIcon} aria-hidden="true">
                    {amenityIcons[item.category] ?? "📍"}
                  </span>
                  <div>
                    <span className={styles.amenityCat}>{item.category}</span>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.photoStrip}>
          <figure className={styles.photoCard}>
            <div className={styles.photoFrame}>
              <StockImage
                src={IMAGES.recreation}
                alt="Community recreation near Milton"
                fill
                className={styles.stripImg}
                sizes="(max-width: 768px) 100vw, 33vw"
                fallbackLabel="Recreation"
              />
            </div>
            <figcaption>Recreation &amp; sports</figcaption>
          </figure>
          <figure className={styles.photoCard}>
            <div className={styles.photoFrame}>
              <StockImage
                src={IMAGES.cycling}
                alt="Cycling paths and active transportation in Milton area"
                fill
                className={styles.stripImg}
                sizes="(max-width: 768px) 100vw, 33vw"
                fallbackLabel="Cycling"
              />
            </div>
            <figcaption>Trails &amp; cycling</figcaption>
          </figure>
          <figure className={styles.photoCard}>
            <div className={styles.photoFrame}>
              <StockImage
                src={IMAGES.transit}
                alt="Highway and transit access from Milton"
                fill
                className={styles.stripImg}
                sizes="(max-width: 768px) 100vw, 33vw"
                fallbackLabel="Transit"
              />
            </div>
            <figcaption>Transit &amp; connectivity</figcaption>
          </figure>
        </div>

        <p className={styles.disclaimer}>{locationDisclaimer}</p>
      </div>
    </section>
  );
}
