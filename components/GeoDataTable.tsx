import type { CommuteDestination, GeoRow, GeoSchoolRow } from "@/data/location";
import styles from "./GeoDataTable.module.css";

type SchoolProps = {
  variant: "school";
  rows: GeoSchoolRow[];
  caption: string;
};

type SimpleProps = {
  variant: "simple";
  rows: GeoRow[];
  caption: string;
};

type CommuteProps = {
  variant: "commute";
  rows: CommuteDestination[];
  caption: string;
};

type GeoDataTableProps = SchoolProps | SimpleProps | CommuteProps;

export default function GeoDataTable(props: GeoDataTableProps) {
  if (props.variant === "school") {
    return (
      <div className={styles.wrap}>
        <table className={styles.table}>
          <caption className="sr-only">{props.caption}</caption>
          <thead>
            <tr>
              <th scope="col">School</th>
              <th scope="col">Grades</th>
              <th scope="col">Approx. drive</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.grades}</td>
                <td>{row.driveTime}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (props.variant === "commute") {
    return (
      <div className={styles.wrap}>
        <table className={styles.table}>
          <caption className="sr-only">{props.caption}</caption>
          <thead>
            <tr>
              <th scope="col">Destination</th>
              <th scope="col">Drive time (non-peak)</th>
              <th scope="col">Distance</th>
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row) => (
              <tr key={row.destination}>
                <td>{row.destination}</td>
                <td>{row.driveTime}</td>
                <td>{row.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <caption className="sr-only">{props.caption}</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Approx. access</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.driveTime}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
