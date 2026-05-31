import Link from "next/link";
import { StockImage } from "@/components/StockImage";
import { LocationSection } from "@/components/LocationSection";
import { siteData } from "@/lib/floor-plans";
import { IMAGES } from "@/lib/images";
import { projectOfferSchema } from "@/lib/schema";
import styles from "./page.module.css";

const highlights = [
  {
    title: "Freehold ownership",
    text: "No monthly maintenance fees on Village and Park collections.",
  },
  {
    title: "15 home designs",
    text: "From 953 sq ft back-to-back townhomes to 2,843 sq ft corner residences.",
  },
  {
    title: "Southeast Milton",
    text: "Britannia Road between James Snow Parkway & Fourth Line. Occupancy 2027.",
  },
];

export default function HomePage() {
  const { project, collections } = siteData;
  const totalModels = collections.reduce((n, c) => n + c.models.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectOfferSchema()) }}
      />

      <section className={styles.hero}>
        <StockImage
          src={IMAGES.hero}
          alt="The Enclave Milton — Sundial Homes community rendering"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
          fallbackLabel="The Enclave Milton"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>
            {project.city} · By {project.builder}
          </p>
          <h1>The Enclave</h1>
          <p className={styles.tagline}>
            Freehold townhomes in southeast Milton — no monthly maintenance fees
          </p>
          <p className={styles.from}>From {project.startingFrom}</p>
          <div className={styles.ctas}>
            <Link href="/floor-plans" className="btn btn-gold">
              View {totalModels} floor plans
            </Link>
            <Link href="/floor-plans#register" className="btn btn-outline">
              Register for pricing
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Community highlights">
        <div className="container">
          <ul className={styles.statsList}>
            <li>
              <strong>{totalModels}</strong>
              <span>Floor plans</span>
            </li>
            <li>
              <strong>{project.startingFrom}</strong>
              <span>Starting from</span>
            </li>
            <li>
              <strong>{project.occupancy}</strong>
              <span>Occupancy</span>
            </li>
            <li>
              <strong>$0</strong>
              <span>Maintenance fees</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Two collections. Fifteen models.</h2>
          <p className="lead">
            Explore every layout at The Enclave — from compact back-to-back townhomes to
            Milton&apos;s largest traditional townhome at 2,843 sq ft.
          </p>
          <div className={styles.collections}>
            {collections.map((c) => (
              <Link key={c.id} href={`/floor-plans#${c.id}`} className={styles.collectionCard}>
                <div className={styles.collectionIcon} aria-hidden="true">
                  {c.id === "village" ? "V" : "P"}
                </div>
                <div className={styles.collectionBody}>
                  <span className="badge">{c.tagline}</span>
                  <h3>{c.name}</h3>
                  <p>{c.type}</p>
                  <span className={styles.collectionCta}>{c.models.length} models →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why The Enclave</h2>
          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.whyCtas}>
            <Link href="/#location" className="btn btn-outline-dark">
              Schools &amp; amenities
            </Link>
            <Link href="/floor-plans#register" className="btn btn-primary">
              Register for pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
