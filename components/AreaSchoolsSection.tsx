import {
  HCDSB_SCHOOL_FINDER,
  HDSB_FIND_SCHOOL,
  HDSB_SCHOOL_LOCATOR,
  hcdsbElementarySchools,
  hcdsbSecondarySchools,
  hdsbElementarySchools,
  hdsbSecondarySchools,
} from "@/data/location";
import { DISTANCE_DISCLAIMER } from "@/lib/site";
import GeoDataTable from "./GeoDataTable";
import styles from "./AreaGuide.module.css";

export default function AreaSchoolsSection() {
  return (
    <section className={styles.section} aria-labelledby="schools-heading">
      <div className="container">
        <h2 id="schools-heading">What schools are near The Enclave Milton?</h2>
        <p className="lead">
          Both Halton District School Board (public English) and Halton Catholic District School Board
          serve Milton families. Craig Kielburger Secondary (~8 min) is the nearest public high school
          with IB programming. Bishop P.F. Reding Catholic Secondary (~10 min) is Milton&apos;s
          highest-scoring Catholic secondary. HDSB plans Milton SE #13 Public School for southeast
          Milton growth in the Britannia Secondary Plan.
        </p>
        <div className={styles.links}>
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

        <h3 className={styles.boardTitle}>Halton District School Board — elementary (JK–8)</h3>
        <GeoDataTable
          variant="school"
          rows={hdsbElementarySchools}
          caption="HDSB elementary schools near The Enclave Milton"
        />

        <h3 className={styles.boardTitle}>Halton District School Board — secondary (9–12)</h3>
        <GeoDataTable
          variant="school"
          rows={hdsbSecondarySchools}
          caption="HDSB secondary schools near The Enclave Milton"
        />

        <h3 className={styles.boardTitle}>Halton Catholic District School Board — elementary (JK–8)</h3>
        <GeoDataTable
          variant="school"
          rows={hcdsbElementarySchools}
          caption="HCDSB elementary schools near The Enclave Milton"
        />

        <h3 className={styles.boardTitle}>Halton Catholic District School Board — secondary (9–12)</h3>
        <GeoDataTable
          variant="school"
          rows={hcdsbSecondarySchools}
          caption="HCDSB secondary schools near The Enclave Milton"
        />

        <p className={styles.disclaimer}>{DISTANCE_DISCLAIMER}</p>
      </div>
    </section>
  );
}
