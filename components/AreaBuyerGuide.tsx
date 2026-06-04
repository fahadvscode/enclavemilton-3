import { schoolBuyerGuide } from "@/data/location";
import styles from "./AreaGuide.module.css";

export default function AreaBuyerGuide() {
  return (
    <section className={styles.sectionAlt} aria-labelledby="buyer-guide-heading">
      <div className="container">
        <h2 id="buyer-guide-heading">{schoolBuyerGuide.title}</h2>
        <p className="lead">
          School assignment affects daily life, resale appeal, and pre-construction planning — here is
          how Milton and Halton boards work for buyers researching The Enclave.
        </p>
        <div className={styles.guideBlock}>
          {schoolBuyerGuide.sections.map((s) => (
            <article key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
