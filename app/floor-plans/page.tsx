import type { Metadata } from "next";
import Link from "next/link";
import { CollectionSection } from "@/components/CollectionSection";
import { RegisterBanner } from "@/components/RegisterBanner";
import { siteData } from "@/lib/floor-plans";
import { floorPlansItemListSchema } from "@/lib/schema";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Floor Plans",
  description:
    "The Enclave Milton floor plans: Village Collection back-to-back townhomes (953–1,732 sq ft) and Park Collection 2 & 3 storey traditional townhomes (1,240–2,843 sq ft). Register for pricing.",
  keywords: [
    "the enclave milton floor plans",
    "the enclave milton village collection",
    "the enclave milton park collection",
    "the enclave milton back to back townhomes",
    "the enclave milton 2 storey townhomes",
    "the enclave milton 3 storey townhomes",
    "milton townhomes sundial homes",
  ],
  alternates: { canonical: "/floor-plans" },
};

export default function FloorPlansPage() {
  const { project, collections } = siteData;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floorPlansItemListSchema()) }}
      />

      <header className={styles.pageHeader}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Floor Plans</span>
          </nav>
          <h1>The Enclave Milton Floor Plans</h1>
          <p className="lead">
            {project.name} by {project.builder} — {collections.length} collections,{" "}
            {collections.reduce((n, c) => n + c.models.length, 0)} home designs in{" "}
            {project.city}. Public details show model name, type, and square footage only.
            Register for full PDF floor plans and current pricing.
          </p>
          <p className={styles.anchor}>Homes from {project.startingFrom}</p>
          <div className={styles.jump}>
            <a href="#village">Village Collection</a>
            <a href="#park">Park Collection</a>
            <a href="#register">Register</a>
          </div>
        </div>
      </header>

      {collections.map((collection) => (
        <CollectionSection key={collection.id} collection={collection} />
      ))}

      <RegisterBanner />
    </>
  );
}
