import {
  commuteDestinations,
  communityLocation,
  highwayAccess,
  publicTransit,
} from "@/data/location";
import { DISTANCE_DISCLAIMER } from "@/lib/site";
import GeoDataTable from "./GeoDataTable";
import styles from "./AreaGuide.module.css";

export default function AreaCommuteSection() {
  return (
    <section className={styles.sectionAlt} aria-labelledby="commute-heading">
      <div className="container">
        <h2 id="commute-heading">How far is The Enclave Milton from Highway 401?</h2>
        <p className="lead">
          The Enclave on {communityLocation.address} reaches Highway 401 in roughly three to five
          minutes via James Snow Parkway. Milton GO Station is about eight to ten minutes for peak
          trains to Toronto Union.
        </p>

        <h3 className={styles.boardTitle}>Highway access</h3>
        <GeoDataTable variant="simple" rows={highwayAccess} caption="Highway access from The Enclave" />

        <h3 className={styles.boardTitle}>Public transit</h3>
        <GeoDataTable variant="simple" rows={publicTransit} caption="Public transit near The Enclave" />

        <h3 className={styles.boardTitle}>What&apos;s the commute from Milton to Toronto and the GTA?</h3>
        <p className={styles.note}>
          Approximate by car, non-peak conditions. GO train times to Union Station are often 55–65
          minutes from Milton GO — verify schedules on GO Transit.
        </p>
        <GeoDataTable
          variant="commute"
          rows={commuteDestinations}
          caption="Commute destinations from The Enclave Milton"
        />

        <p className={styles.disclaimer}>{DISTANCE_DISCLAIMER}</p>
      </div>
    </section>
  );
}
