import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ModelDetail } from "@/components/ModelDetail";
import {
  getAllModels,
  getModelBySlug,
  formatSqft,
  formatModelType,
  SITE_URL,
} from "@/lib/floor-plans";
import { residenceSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllModels().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = getModelBySlug(slug);
  if (!found) return {};

  const { model, collection } = found;
  const sqft = formatSqft(model);
  const typeLabel = formatModelType(model, collection.id);
  const title = `${model.model} Floor Plan`;
  const description = `${model.model} at The Enclave Milton — ${collection.name}. ${typeLabel}. ${sqft}. Register for the full floor plan PDF and current pricing.`;

  return {
    title,
    description,
    keywords: [
      `the enclave milton ${slug.replace("the-", "")} floor plan`,
      `the enclave milton ${collection.id} collection`,
      "the enclave milton townhomes",
      typeLabel.toLowerCase(),
      sqft,
    ],
    alternates: { canonical: `/floor-plans/${slug}` },
    openGraph: { title, description, url: `${SITE_URL}/floor-plans/${slug}` },
  };
}

export default async function ModelFloorPlanPage({ params }: PageProps) {
  const { slug } = await params;
  const found = getModelBySlug(slug);
  if (!found) notFound();

  const { model, collection } = found;
  const sqft = formatSqft(model);
  const typeLabel = formatModelType(model, collection.id);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            residenceSchema(model.model, model.slug, collection.name, sqft)
          ),
        }}
      />
      <div className="container" style={{ paddingTop: "2rem" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>
          <Link href="/">Home</Link>
          {" / "}
          <Link href="/floor-plans">Floor Plans</Link>
          {" / "}
          <Link href={`/floor-plans#${collection.id}`}>{collection.name}</Link>
          {" / "}
          <span>{model.model}</span>
        </nav>
      </div>
      <ModelDetail model={model} collection={collection} typeLabel={typeLabel} sqftLabel={sqft} />
    </>
  );
}
