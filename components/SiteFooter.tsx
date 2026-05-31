import { siteData } from "@/lib/floor-plans";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const { project } = siteData;
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>{project.name}</p>
            <p className={styles.meta}>{project.city}</p>
            <p className={styles.meta}>By {project.builder}</p>
          </div>
          <div>
            <p className={styles.label}>Community</p>
            <p className={styles.meta}>Freehold townhomes · No maintenance fees</p>
            <p className={styles.meta}>Occupancy {project.occupancy}</p>
          </div>
          <div>
            <p className={styles.label}>Pricing</p>
            <p className={styles.meta}>From {project.startingFrom}</p>
            <p className={styles.disclaimer}>
              Model pricing and floor plans provided upon registration. Not an offering for sale.
            </p>
          </div>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {project.name} · {project.city}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
