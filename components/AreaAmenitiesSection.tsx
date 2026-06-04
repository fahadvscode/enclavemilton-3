import Image from "next/image";
import {
  areaHighlights,
  communityLocation,
  healthcareAmenities,
  recreationAmenities,
  shoppingAmenities,
} from "@/data/location";
import { DISTANCE_DISCLAIMER } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import GeoDataTable from "./GeoDataTable";
import styles from "./AreaGuide.module.css";

export default function AreaAmenitiesSection() {
  return (
    <>
      <section className={styles.section} aria-labelledby="shopping-heading">
        <div className="container">
          <h2 id="shopping-heading">What shopping is near The Enclave Milton?</h2>
          <p className="lead">
            Toronto Premium Outlets, Milton Crossroads, downtown Main Street, and everyday grocery
            chains sit within a short drive of Britannia Road at James Snow Parkway.
          </p>
          <div className={styles.mediaRow}>
            <GeoDataTable variant="simple" rows={shoppingAmenities} caption="Shopping near The Enclave" />
            <Image
              src={IMAGES.shopping}
              alt="Retail and shopping near Milton, Ontario"
              width={480}
              height={320}
              className={styles.sideImage}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} aria-labelledby="recreation-heading">
        <div className="container">
          <h2 id="recreation-heading">What parks and trails are near The Enclave Milton?</h2>
          <p className="lead">
            Mattamy National Cycling Centre, the planned Milton Education Village (162 hectares), and
            Conservation Halton parks on the Niagara Escarpment UNESCO World Biosphere Reserve define
            outdoor life in southeast Milton.
          </p>
          <div className={styles.mediaRow}>
            <GeoDataTable variant="simple" rows={recreationAmenities} caption="Recreation near The Enclave" />
            <Image
              src={IMAGES.cycling}
              alt="Mattamy National Cycling Centre and recreation near Milton"
              width={480}
              height={320}
              className={styles.sideImage}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <ul className={styles.strip} aria-label="Area highlights">
            {areaHighlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="healthcare-heading">
        <div className="container">
          <h2 id="healthcare-heading">Is there a hospital near The Enclave Milton?</h2>
          <p className="lead">
            {communityLocation.description.split(".")[0]}. Milton District Hospital and regional
            Halton Healthcare sites serve acute and community care needs.
          </p>
          <GeoDataTable variant="simple" rows={healthcareAmenities} caption="Healthcare near The Enclave" />
          <p className={styles.disclaimer}>{DISTANCE_DISCLAIMER}</p>
        </div>
      </section>
    </>
  );
}
