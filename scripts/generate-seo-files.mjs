/**
 * Prebuild: robots.txt (AI crawlers allowed), llms.txt, llms-full.txt
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SITE_URL = "https://www.theenclavemiltontowns.com";
const SITE_DOMAIN = "theenclavemiltontowns.com";

const data = JSON.parse(readFileSync(join(root, "data/floor-plans.json"), "utf8"));
const models = data.collections.flatMap((c) => c.models);
const lastUpdated = new Date().toISOString();

const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Applebot-Extended",
  "Bingbot",
  "cohere-ai",
  "Bytespider",
];

const robots = `# ${SITE_DOMAIN} — allow search and AI crawlers
User-agent: *
Allow: /

${aiBots.map((bot) => `User-agent: ${bot}\nAllow: /`).join("\n\n")}

Sitemap: ${SITE_URL}/sitemap.xml
`;

const llms = `# The Enclave Milton — AI-readable summary
# lastUpdated: ${lastUpdated}
# canonical: ${SITE_URL}

Project: The Enclave Milton
Builder: Sundial Homes
Location: Britannia Road, between James Snow Parkway & Fourth Line, Milton, Ontario, Canada
Property type: Freehold townhomes — Village Collection (back-to-back) + Park Collection (traditional 2 & 3 storey)
Price from: $599,990 CAD
Models: 15 floor plans across 2 collections
Monthly maintenance: $0 (freehold)
Occupancy: 2027
Status: Now selling
Registration: ${SITE_URL}

## Location summary
Located on Britannia Road between James Snow Parkway and Fourth Line, Milton, Ontario. Highway 401 approximately 3–5 minutes via James Snow Parkway. Milton GO Station approximately 8–10 minutes. Served by Halton District School Board and Halton Catholic District School Board. Adjacent to the planned 162-hectare Milton Education Village. Near Niagara Escarpment UNESCO World Biosphere Reserve conservation areas (Rattlesnake Point, Crawford Lake, Kelso, Hilton Falls).
`;

const modelUrls = models
  .map((m) => `- ${m.model}: ${SITE_URL}/floor-plans/${m.slug}`)
  .join("\n");

const llmsFull = `${llms}

## Collections
- Village Collection: 5 back-to-back freehold townhomes (953–1,732 sq ft approx.)
- Park Collection: 10 traditional 2 & 3 storey freehold townhomes (1,240–2,843 sq ft approx.)

## All models
${modelUrls}

## Schools & area (full guide)
${SITE_URL}/schools-and-area

Nearest secondary: Craig Kielburger Secondary School (~8 min, IB program)
Catholic secondary: Bishop P.F. Reding Catholic Secondary (~10 min)
Planned: Milton SE #13 Public School (HDSB, southeast Milton / Britannia plan)
Verify catchment: schoollocator.hdsb.ca and hcdsb.ca/schools/school-finder/

## Commute (approximate, traffic-dependent)
- Highway 401: ~3–5 min via James Snow Parkway
- Milton GO to Toronto Union: ~8–10 min drive to station; train ~55–65 min
- Pearson Airport (YYZ): ~25–30 min
- Downtown Toronto by car: ~45–55 min (~55 km)

## Recreation
- Mattamy National Cycling Centre: ~5–8 min (UCI Class 1 velodrome)
- Milton Education Village: 162 ha planned adjacent to Britannia Road
- Conservation Halton: Hilton Falls (33.5 km trails), Kelso (22+ km), Rattlesnake Point, Crawford Lake
`;

mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(join(root, "public/robots.txt"), robots, "utf8");
writeFileSync(join(root, "public/llms.txt"), llms, "utf8");
writeFileSync(join(root, "public/llms-full.txt"), llmsFull, "utf8");

console.log("Generated public/robots.txt, llms.txt, llms-full.txt");
