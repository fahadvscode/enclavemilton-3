export const SITE_DOMAIN = "theenclavemiltontowns.com";
export const SITE_URL = `https://www.${SITE_DOMAIN}`;
export const SITE_B_SOURCE = SITE_DOMAIN;
export const SITE_NAME = "The Enclave Milton";
export const BUILD_DATE = process.env.BUILD_DATE ?? new Date().toISOString().split("T")[0];

export const DEVELOPMENT_GEO = {
  latitude: 43.5085,
  longitude: -79.8628,
} as const;
