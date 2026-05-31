import styles from "./PlanThumbnail.module.css";

interface PlanThumbnailProps {
  modelName: string;
  seed: number;
}

export function PlanThumbnail({ modelName, seed }: PlanThumbnailProps) {
  const rooms = 4 + (seed % 3);
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.blurLayer}>
        <svg viewBox="0 0 200 160" className={styles.svg} role="img">
          <title>Floor plan preview — register to view full plan</title>
          <rect width="200" height="160" fill="#e8e4dc" />
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
                fill="#c5d4c8"
                stroke="#1a3d2e"
                strokeWidth="1.5"
                opacity={0.7 + (seed % 3) * 0.1}
              />
            );
          })}
          <text x="100" y="148" textAnchor="middle" fontSize="8" fill="#5c5a56">
            {modelName.replace("The ", "")}
          </text>
        </svg>
      </div>
      <span className={styles.overlay}>Register for full plan</span>
    </div>
  );
}
