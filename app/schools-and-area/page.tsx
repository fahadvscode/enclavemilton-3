import type { Metadata } from "next";
import Link from "next/link";
import AreaAmenitiesSection from "@/components/AreaAmenitiesSection";
import AreaBuyerGuide from "@/components/AreaBuyerGuide";
import AreaCommuteSection from "@/components/AreaCommuteSection";
import AreaFaqSection from "@/components/AreaFaqSection";
import AreaSchoolsSection from "@/components/AreaSchoolsSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { communityLocation } from "@/data/location";
import { buildMetadata } from "@/lib/seo";
import { areaPageGraph, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  path: "/schools-and-area",
  pageTitle: "Schools, Commute & Amenities",
  description:
    "Schools near The Enclave Milton on Britannia Road — HDSB and HCDSB catchments, Milton GO, Highways 401/407, parks, shopping, and area FAQs. Verify catchment before you buy.",
});

export default function SchoolsAndAreaPage() {
  return (
    <>
      <JsonLd
        data={[
          areaPageGraph(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Schools & area", path: "/schools-and-area" },
          ]),
        ]}
      />
      <div className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden> / </span>
            <span>Schools &amp; area</span>
          </nav>
          <h1>Schools, commute, and amenities near The Enclave Milton</h1>
          <p className="lead">
            {communityLocation.address} in {communityLocation.area} — research Halton schools,
            Milton GO, highways, shopping, and recreation before you register for floor plans at The
            Enclave by Sundial Homes.
          </p>
          <p>
            <Link href="/floor-plans">View all 15 floor plans</Link>
            {" · "}
            <a href="#register-area">Register for pricing</a>
          </p>
        </div>
      </div>
      <AreaBuyerGuide />
      <AreaSchoolsSection />
      <AreaCommuteSection />
      <AreaAmenitiesSection />
      <AreaFaqSection />
      <CtaBand id="register-area" title="Register for The Enclave Milton floor plans & pricing" />
    </>
  );
}
