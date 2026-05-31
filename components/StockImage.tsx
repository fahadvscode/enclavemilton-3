"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import styles from "./StockImage.module.css";

type StockImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
  fallbackLabel?: string;
};

export function StockImage({
  alt,
  className,
  priority,
  fallbackLabel,
  fill,
  ...props
}: StockImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${styles.fallback} ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <span>{fallbackLabel ?? alt}</span>
      </div>
    );
  }

  return (
    <div className={fill ? styles.fillWrap : styles.wrap}>
      <Image
        alt={alt}
        className={className}
        priority={priority}
        fill={fill}
        onError={() => setFailed(true)}
        {...props}
      />
    </div>
  );
}
