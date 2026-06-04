import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

const ANSWER_SUMMARY =
  "Freehold townhomes on Britannia Road between James Snow Parkway and Fourth Line in Milton, Ontario — minutes from Highway 401, served by Halton's top-rated public and Catholic schools, from $599,990 with $0 monthly maintenance. Now selling for 2027 occupancy.";

const FACT_CHIPS = [
  { label: "Highway 401", value: "~3–5 min" },
  { label: "Craig Kielburger SS", value: "~8 min" },
  { label: "From", value: "$599,990" },
];

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media}>
        <Image
          src={IMAGES.hero}
          alt="The Enclave Milton community rendering by Sundial Homes"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <Image
            src={IMAGES.logo}
            alt="The Enclave — Townhomes and Detached Homes"
            width={280}
            height={72}
            className={styles.logo}
            priority
          />
          <p className={styles.locationLine}>
            Britannia Road · James Snow Parkway &amp; Fourth Line · Milton, ON
          </p>
          <p className={styles.badge}>Now selling · 2027 occupancy</p>
          <h1 id="hero-heading">
            The Enclave Milton — freehold townhomes in southeast Milton
          </h1>
          <p className={styles.answer}>{ANSWER_SUMMARY}</p>
          <ul className={styles.chips} aria-label="Location and pricing highlights">
            {FACT_CHIPS.map((chip) => (
              <li key={chip.label}>
                <span className={styles.chipLabel}>{chip.label}</span>
                <span className={styles.chipValue}>{chip.value}</span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href="#register" className="btn btn--primary">
              Get floor plans &amp; pricing
            </a>
            <Link href="/schools-and-area" className="btn btn--ghost">
              Schools &amp; area guide
            </Link>
            <Link href="/floor-plans" className="btn btn--ghost">
              All 15 layouts
            </Link>
          </div>
        </div>
        <aside id="register" className={styles.card} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.cardTitle}>
            Register for floor plans &amp; pricing
          </h2>
          <LeadForm idPrefix="hero" />
        </aside>
      </div>
    </section>
  );
}
