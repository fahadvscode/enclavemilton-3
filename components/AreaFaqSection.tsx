import { AREA_FAQ } from "@/data/area-faq";
import styles from "./FaqSection.module.css";

const GROUPS = [
  { id: "schools", title: "Schools & education", start: 0, end: 12 },
  { id: "commute", title: "Commute & highways", start: 12, end: 16 },
  { id: "amenities", title: "Amenities & lifestyle", start: 16, end: 21 },
  { id: "buying", title: "Buying & resale", start: 21, end: AREA_FAQ.length },
] as const;

export default function AreaFaqSection() {
  return (
    <section className="section" id="area-faq" aria-labelledby="area-faq-heading">
      <div className="container">
        <h2 id="area-faq-heading">Schools, commute, and area FAQs</h2>
        <p className="lead">
          Direct answers for buyers researching Milton schools, GO Transit, highways, and Britannia
          Road amenities near The Enclave.
        </p>
        {GROUPS.map((group) => (
          <div key={group.id} style={{ marginTop: "2rem" }}>
            <h3>{group.title}</h3>
            <div className={styles.list}>
              {AREA_FAQ.slice(group.start, group.end).map((item) => (
                <details key={item.question} className={styles.item}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
