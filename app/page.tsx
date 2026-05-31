import Link from "next/link";
import { siteData } from "@/lib/floor-plans";
import { projectOfferSchema } from "@/lib/schema";
import styles from "./page.module.css";

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
        <div className="container">
          <p className={styles.eyebrow}>{project.city} · By {project.builder}</p>
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

      <section className="section">
        <div className="container">
          <h2>Two collections. Fifteen models.</h2>
          <p className="lead">
            Explore every layout at The Enclave — from compact back-to-back townhomes to
            Milton&apos;s largest traditional townhome at 2,843 sq ft.
          </p>
          <div className={styles.collections}>
            {collections.map((c) => (
              <Link key={c.id} href={`/floor-plans#${c.id}`} className={styles.collectionCard}>
                <h3>{c.name}</h3>
                <p>{c.type}</p>
                <span>{c.models.length} models →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Why The Enclave</h2>
          <ul className={styles.features}>
            <li>Freehold ownership — no monthly maintenance fees</li>
            <li>Village Collection: back-to-back townhomes from 953 sq ft</li>
            <li>Park Collection: 2 &amp; 3 storey traditional townhomes up to 2,843 sq ft</li>
            <li>Southeast Milton location in Sundial Homes&apos; newest community</li>
            <li>Occupancy {project.occupancy}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
