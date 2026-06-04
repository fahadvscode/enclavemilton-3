import Image from "next/image";
import Link from "next/link";
import {
  commuteDestinations,
  communityLocation,
  GEO_REFERENCE_LABEL,
  HCDSB_SCHOOL_FINDER,
  hcdsbElementarySchools,
  hcdsbSecondarySchools,
  healthcareAmenities,
  hdsbElementarySchools,
  hdsbSecondarySchools,
  highwayAccess,
  HDSB_FIND_SCHOOL,
  HDSB_SCHOOL_LOCATOR,
  publicTransit,
  recreationAmenities,
  shoppingAmenities,
} from "@/data/location";
import { DISTANCE_DISCLAIMER } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import GeoDataTable from "./GeoDataTable";
import styles from "./GeoLocationHub.module.css";

export default function GeoLocationHub() {
  const hdsbElemCompact = hdsbElementarySchools.slice(0, 5);
  const hdsbSecCompact = hdsbSecondarySchools.slice(0, 2);
  const hcdsbElemCompact = hcdsbElementarySchools.slice(0, 3);
  const hcdsbSecCompact = hcdsbSecondarySchools;
  const shopCompact = shoppingAmenities.slice(0, 4);
  const recCompact = recreationAmenities.slice(0, 5);
  const healthCompact = healthcareAmenities;

  return (
    <section className="section" aria-labelledby="geo-hub-heading">
      <div className="container">
        <p className={styles.eyebrow}>Southeast Milton · Britannia Road</p>
        <h2 id="geo-hub-heading">Living at The Enclave — schools, commute, and everyday life</h2>
        <p className="lead">
          {communityLocation.address} in {communityLocation.area}. Reference point for distances:{" "}
          {GEO_REFERENCE_LABEL}.
        </p>

        <article className={styles.block} aria-labelledby="geo-schools">
          <h3 id="geo-schools">What schools are near The Enclave Milton?</h3>
          <p>
            Halton District School Board (public) and Halton Catholic District School Board (Catholic)
            both serve Milton. The nearest secondary is Craig Kielburger Secondary School (~8 min) with
            IB programming; Bishop P.F. Reding Catholic Secondary (~10 min) leads Milton Catholic
            secondary scores. HDSB plans Milton SE #13 Public School for southeast growth in the Britannia
            plan area.
          </p>
          <div className={styles.boardLinks}>
            <a href={HDSB_SCHOOL_LOCATOR} rel="noopener noreferrer">
              HDSB school locator
            </a>
            <a href={HDSB_FIND_SCHOOL} rel="noopener noreferrer">
              HDSB find local school
            </a>
            <a href={HCDSB_SCHOOL_FINDER} rel="noopener noreferrer">
              HCDSB school finder
            </a>
          </div>
          <h4 className={styles.subhead}>Halton District School Board — elementary (JK–8)</h4>
          <GeoDataTable variant="school" rows={hdsbElemCompact} caption="HDSB elementary schools near The Enclave" />
          <h4 className={styles.subhead}>Halton District School Board — secondary (9–12)</h4>
          <GeoDataTable variant="school" rows={hdsbSecCompact} caption="HDSB secondary schools near The Enclave" />
          <h4 className={styles.subhead}>Halton Catholic — elementary (JK–8)</h4>
          <GeoDataTable variant="school" rows={hcdsbElemCompact} caption="HCDSB elementary schools near The Enclave" />
          <h4 className={styles.subhead}>Halton Catholic — secondary (9–12)</h4>
          <GeoDataTable variant="school" rows={hcdsbSecCompact} caption="HCDSB secondary schools near The Enclave" />
        </article>

        <article className={styles.block} aria-labelledby="geo-transit">
          <div className={styles.split}>
            <div>
              <h3 id="geo-transit">How far is The Enclave Milton from Highway 401?</h3>
              <p>
                Highway 401 is about three to five minutes via James Snow Parkway — the interchange sits
                immediately south of the community. Milton GO Station is roughly eight to ten minutes for
                direct peak trains to Toronto Union.
              </p>
              <GeoDataTable variant="simple" rows={highwayAccess} caption="Highway access from The Enclave" />
              <GeoDataTable variant="simple" rows={publicTransit} caption="Public transit near The Enclave" />
            </div>
            <div className={styles.media}>
              <Image
                src={IMAGES.transit}
                alt="Highway and transit connectivity near Milton, Ontario"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.image}
              />
            </div>
          </div>
          <h4 className={styles.subhead}>What&apos;s the commute from Milton to Toronto and the GTA?</h4>
          <GeoDataTable
            variant="commute"
            rows={commuteDestinations}
            caption="Approximate commute times from The Enclave Milton"
          />
        </article>

        <article className={styles.block} aria-labelledby="geo-shopping">
          <h3 id="geo-shopping">What shopping is near The Enclave Milton?</h3>
          <p>
            Toronto Premium Outlets, Milton Crossroads, downtown Main Street, and multiple grocery
            chains are within a short drive of Britannia Road.
          </p>
          <GeoDataTable variant="simple" rows={shopCompact} caption="Shopping near The Enclave Milton" />
        </article>

        <article className={styles.block} aria-labelledby="geo-recreation">
          <div className={styles.split}>
            <div>
              <h3 id="geo-recreation">What parks and trails are near The Enclave Milton?</h3>
              <p>
                The Mattamy National Cycling Centre (~5–8 min) anchors recreation. The planned Milton
                Education Village (162 ha) borders Britannia Road. Conservation Halton parks on the
                Niagara Escarpment UNESCO World Biosphere Reserve are ten to fifteen minutes away.
              </p>
              <GeoDataTable variant="simple" rows={recCompact} caption="Recreation near The Enclave Milton" />
            </div>
            <div className={styles.media}>
              <Image
                src={IMAGES.nature}
                alt="Niagara Escarpment conservation and trails near Milton"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.image}
              />
            </div>
          </div>
        </article>

        <article className={styles.block} aria-labelledby="geo-healthcare">
          <h3 id="geo-healthcare">Is there a hospital near The Enclave Milton?</h3>
          <p>
            Milton District Hospital (Halton Healthcare) provides emergency and acute care about ten
            minutes from the community.
          </p>
          <GeoDataTable variant="simple" rows={healthCompact} caption="Healthcare near The Enclave Milton" />
        </article>

        <p className={styles.disclaimer}>{DISTANCE_DISCLAIMER}</p>
        <p className={styles.cta}>
          <Link href="/schools-and-area" className="btn btn--primary">
            Full schools &amp; area guide with all tables
          </Link>
        </p>
      </div>
    </section>
  );
}
