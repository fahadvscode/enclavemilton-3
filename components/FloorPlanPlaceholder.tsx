import styles from "./FloorPlanPlaceholder.module.css";

interface FloorPlanPlaceholderProps {
  modelName: string;
  seed: number;
  variant?: "card" | "detail";
}

/** SVG floor plan teaser — no home photography */
export function FloorPlanPlaceholder({
  modelName,
  seed,
  variant = "card",
}: FloorPlanPlaceholderProps) {
  const rooms = 4 + (seed % 3);
  const shortName = modelName.replace("The ", "");

  return (
    <div className={`${styles.wrap} ${variant === "detail" ? styles.detail : ""}`}>
      <svg viewBox="0 0 200 160" className={styles.svg} aria-hidden="true">
        <rect width="200" height="160" fill="#e8ece9" />
        {Array.from({ length: rooms }).map((_, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          return (
            <rect
              key={i}
              x={12 + col * 92}
              y={12 + row * 68}
              width={84}
              height={60}
              fill="#b8cfc4"
              stroke="#1a3d2e"
              strokeWidth="1.5"
              opacity={0.75 + (seed % 3) * 0.08}
            />
          );
        })}
      </svg>
      <span className={styles.badge}>{shortName}</span>
      <span className={styles.overlay}>Register for full plan</span>
    </div>
  );
}
