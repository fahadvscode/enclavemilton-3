export const GEO_REFERENCE_LABEL =
  "Britannia Road at James Snow Parkway, The Enclave Milton (between James Snow Parkway & Fourth Line)";

export const HDSB_SCHOOL_LOCATOR = "https://schoollocator.hdsb.ca/";
export const HDSB_FIND_SCHOOL = "https://www.hdsb.ca/schools/find-local-school/";
export const HCDSB_SCHOOL_FINDER = "https://hcdsb.ca/schools/school-finder/";

export const communityLocation = {
  address: "Britannia Road, between James Snow Parkway & Fourth Line",
  area: "Southeast Milton, Ontario (Halton Region)",
  postalContext: "Milton, Ontario, Canada",
  description:
    "The Enclave occupies Britannia Road between James Snow Parkway and Fourth Line in Milton's southeast growth corridor — within the Town of Milton's Britannia Secondary Plan. Sundial Homes' master plan includes freehold townhomes, trail connections, a village square, and coordination with the Halton District School Board on a future elementary site. The broader southeast Milton allocation supports long-term schools, parks, and services as the community matures toward a 2051 vision.",
  britanniaPlanUrl: "https://www.letstalkmilton.ca/britannia",
};

export const areaHighlights = [
  "Halton Region, Ontario — not Milton, Georgia (United States)",
  "Britannia Road between James Snow Parkway & Fourth Line",
  "Highway 401 approximately 3–5 minutes via James Snow Parkway",
  "Milton GO Station approximately 8–10 minutes by car",
  "Halton District School Board (public) and Halton Catholic District School Board",
  "Adjacent to the planned 162-hectare Milton Education Village",
  "Niagara Escarpment UNESCO World Biosphere Reserve conservation areas nearby",
];

export type GeoRow = {
  name: string;
  driveTime: string;
  notes: string;
};

export type GeoSchoolRow = GeoRow & {
  grades: string;
};

export const hdsbElementarySchools: GeoSchoolRow[] = [
  { name: "Sam Sherratt Public School", grades: "JK–8", driveTime: "~5 min", notes: "Established community school in southeast Milton" },
  { name: "Hawthorne Village Public School", grades: "JK–8", driveTime: "~5–8 min", notes: "Newer school serving growing neighbourhoods" },
  { name: "Tiger Jeet Singh Public School", grades: "JK–8", driveTime: "~8 min", notes: "Named after Canadian wrestling icon Tiger Jeet Singh" },
  { name: "Viola Desmond Public School", grades: "JK–8", driveTime: "~8 min", notes: "Named after Canadian civil rights pioneer Viola Desmond" },
  { name: "Irma Coulson Public School", grades: "JK–8", driveTime: "~8 min", notes: "Public elementary in Milton" },
  { name: "P.L. Robertson Public School", grades: "JK–8", driveTime: "~10 min", notes: "Serves Milton families — verify catchment" },
  { name: "Chris Hadfield Public School", grades: "JK–8", driveTime: "~10 min", notes: "Named after Canadian astronaut Chris Hadfield" },
  { name: "Rattlesnake Point Public School", grades: "JK–8", driveTime: "~10 min", notes: "Elementary in Milton's west/southwest area" },
  { name: "Milton SE #13 PS", grades: "JK–8 (planned)", driveTime: "Planned", notes: "Future school for southeast Milton growth — directly relevant to Britannia Secondary Plan" },
];

export const hdsbSecondarySchools: GeoSchoolRow[] = [
  {
    name: "Craig Kielburger Secondary School",
    grades: "9–12",
    driveTime: "~8 min",
    notes:
      "Nearest secondary. 2,000+ students. International Baccalaureate (IB) Diploma, French Immersion, SHSM, cooperative education, arts and athletics. Opened 2012.",
  },
  { name: "Elsie MacGill Secondary School", grades: "9–12", driveTime: "~10 min", notes: "Newer secondary serving east Milton" },
  { name: "Milton District High School", grades: "9–12", driveTime: "~12 min", notes: "Milton's established public secondary school" },
];

export const hcdsbElementarySchools: GeoSchoolRow[] = [
  { name: "St. Peter Catholic Elementary", grades: "JK–8", driveTime: "~5–8 min", notes: "Halton Catholic elementary" },
  { name: "St. Benedict Catholic Elementary", grades: "JK–8", driveTime: "~8 min", notes: "Catholic elementary in Milton" },
  { name: "St. Scholastica Catholic Elementary", grades: "JK–8", driveTime: "~8 min", notes: "Halton Catholic District School Board" },
  { name: "St. Anthony of Padua Catholic Elementary", grades: "JK–8", driveTime: "~10 min", notes: "Verify assignment in HCDSB school finder" },
  {
    name: "Holy Rosary Catholic Elementary",
    grades: "JK–8",
    driveTime: "~12 min",
    notes: "Strong EQAO results in Milton. Extended French Immersion from Grade 5.",
  },
];

export const hcdsbSecondarySchools: GeoSchoolRow[] = [
  {
    name: "Bishop P.F. Reding Catholic Secondary",
    grades: "9–12",
    driveTime: "~10 min",
    notes: "Highest-scoring secondary school in Milton (Catholic board).",
  },
  { name: "St. Francis Xavier Catholic Secondary", grades: "9–12", driveTime: "~12 min", notes: "Halton Catholic secondary option" },
];

export const highwayAccess: GeoRow[] = [
  { name: "Highway 401", driveTime: "~3–5 min", notes: "Via James Snow Parkway interchange (immediately south) or Britannia Road" },
  { name: "Highway 407 ETR", driveTime: "~8–10 min", notes: "Toll highway east to Mississauga/Toronto, west to Hamilton" },
  { name: "Britannia Road", driveTime: "Direct frontage", notes: "East–west arterial to Trafalgar Road and Regional Road 25" },
  { name: "James Snow Parkway", driveTime: "Direct access", notes: "North–south arterial to Highway 401" },
  { name: "Fourth Line", driveTime: "Adjacent", notes: "Connects north to Derry Road and Milton's east side" },
];

export const publicTransit: GeoRow[] = [
  {
    name: "Milton GO Station",
    driveTime: "~8–10 min",
    notes:
      "780 Main Street East. Western terminus of GO Transit Milton line. Direct train to Toronto Union Station at peak hours; GO bus service throughout the day.",
  },
  {
    name: "Milton Transit",
    driveTime: "Local routes",
    notes: "Connects to GO Station, schools, shopping, and recreation. Route 21 links GO Station to Steeles/Trafalgar area.",
  },
];

export type CommuteDestination = {
  destination: string;
  driveTime: string;
  distance: string;
};

export const commuteDestinations: CommuteDestination[] = [
  { destination: "Downtown Toronto (Union Station)", driveTime: "~45–55 min", distance: "~55 km" },
  { destination: "Mississauga City Centre", driveTime: "~25–30 min", distance: "~30 km" },
  { destination: "Pearson International Airport (YYZ)", driveTime: "~25–30 min", distance: "~35 km" },
  { destination: "Oakville (downtown)", driveTime: "~20–25 min", distance: "~25 km" },
  { destination: "Hamilton (McMaster University)", driveTime: "~30–35 min", distance: "~40 km" },
  { destination: "University of Toronto Mississauga (UTM)", driveTime: "~20–25 min", distance: "~25 km" },
  { destination: "Brampton", driveTime: "~20–25 min", distance: "~25 km" },
  { destination: "Square One Shopping Centre", driveTime: "~20–25 min", distance: "~28 km" },
];

export const shoppingAmenities: GeoRow[] = [
  { name: "Toronto Premium Outlets", driveTime: "~10 min / 9.3 km", notes: "100+ outlet stores at Steeles Avenue & Trafalgar Road" },
  { name: "Milton Crossroads", driveTime: "~10 min", notes: "Walmart, Canadian Tire, Staples, Indigo, Marks, restaurants" },
  { name: "Milton Marketplace", driveTime: "~10–12 min", notes: "Additional retail and grocery" },
  { name: "Downtown Milton (Main Street)", driveTime: "~10 min", notes: "Historic Main Street, cafés, seasonal farmers' market" },
  { name: "Grocery (multiple chains)", driveTime: "~5–10 min", notes: "FreshCo, Food Basics, Metro, Sobeys, Walmart Supercentre" },
  { name: "Costco", driveTime: "~12–15 min", notes: "Milton-area warehouse club" },
];

export const recreationAmenities: GeoRow[] = [
  {
    name: "Mattamy National Cycling Centre",
    driveTime: "~5–8 min",
    notes:
      "Canada's only UCI-regulated Class 1 indoor velodrome (2015 Pan Am Games, ~$63M). Three gymnasiums, indoor track, fitness studio on Tremaine Road near Britannia.",
  },
  {
    name: "Milton Education Village (MEV)",
    driveTime: "Adjacent / ~5 min",
    notes: "162 hectares (400 acres) planned mixed-use centred on the Cycling Centre; Britannia Road south boundary. 2051 long-term vision.",
  },
  { name: "Milton Leisure Centre", driveTime: "~10 min", notes: "Lap pool, play pool, waterslide, fitness" },
  { name: "Milton Sports Centre", driveTime: "~10 min", notes: "Fitness studio, pools, community programs" },
  { name: "John Tonelli Sports Centre", driveTime: "~12 min", notes: "Ice rink and meeting rooms" },
  { name: "Rattlesnake Point Conservation Area", driveTime: "~15 min", notes: "Escarpment lookouts, hiking, rock climbing — Conservation Halton" },
  { name: "Crawford Lake Conservation Area", driveTime: "~15 min", notes: "Meromictic lake, 19 km trails, Iroquoian longhouse village" },
  { name: "Kelso Conservation Area", driveTime: "~12 min", notes: "22+ km trails, beach, ski/snowboard hill (winter)" },
  { name: "Hilton Falls Conservation Area", driveTime: "~10 min", notes: "33.5 km trails, waterfall, Escarpment forest" },
  { name: "Area 8 (Conservation Halton)", driveTime: "~12 min", notes: "3 trails, 4 lookouts, fire pit, boat rentals" },
  { name: "Bruce Trail", driveTime: "Nearby access", notes: "Canada's oldest marked footpath — 900+ km along the Escarpment" },
  {
    name: "Niagara Escarpment UNESCO World Biosphere Reserve",
    driveTime: "Nearby",
    notes: "Milton sits at the base of the Escarpment — regional conservation and trail network",
  },
];

export const healthcareAmenities: GeoRow[] = [
  {
    name: "Milton District Hospital",
    driveTime: "~10 min",
    notes: "129-bed acute care, Halton Healthcare. Emergency, imaging, mental health on Derry Road. Expanded 2017.",
  },
  { name: "Halton Healthcare network", driveTime: "Regional", notes: "Oakville Trafalgar Memorial, Georgetown Hospital" },
  { name: "Walk-in clinics & family practices", driveTime: "~5–10 min", notes: "Multiple clinics throughout Milton" },
];

export const schoolBuyerGuide = {
  title: "School research checklist for Britannia Road buyers",
  sections: [
    {
      heading: "Catchment follows your address, not the development name",
      body: "Halton District School Board and Halton Catholic District School Board assign schools by home address. Enter your lot or nearest intersection in the official locators before you firm — proximity does not guarantee assignment.",
    },
    {
      heading: "Southeast Milton is still adding schools",
      body: "Milton's school-age population grew sharply between 2011 and 2021, driving new construction. HDSB's long-term plan includes Milton SE #13 Public School for southeast growth in the Britannia Secondary Plan zone. Opening dates and boundaries are board decisions.",
    },
    {
      heading: "Lead with Craig Kielburger and Bishop P.F. Reding for secondary planning",
      body: "Craig Kielburger Secondary School (~8 min) is the nearest public high school with IB Diploma programming. Bishop P.F. Reding Catholic Secondary (~10 min) is Milton's highest-scoring Catholic secondary. Verify both pathways if you have teens.",
    },
    {
      heading: "French Immersion requires program checks",
      body: "Craig Kielburger offers French Immersion at secondary level. Holy Rosary Catholic Elementary offers Extended French Immersion from Grade 5. Program entry rules and capacity limits apply — confirm on board websites.",
    },
    {
      heading: "Register children after you have a Milton address",
      body: "Pre-construction buyers can research catchments now but typically complete registration after closing. Align occupancy with the school year if children are transferring mid-year.",
    },
    {
      heading: "Resale value and accurate school facts",
      body: "Family buyers filter by school reputation and commute together. Cite only board-verified school names in listings and include a catchment disclaimer for tenants and future buyers.",
    },
  ],
};

/** @deprecated Use geo school tables — kept for any legacy imports */
export const locationDisclaimer =
  "Distances and drive times are approximate and may vary with traffic conditions. School assignment is address-based — verify with HDSB and HCDSB for your lot.";

export const featuredSchoolNames = [
  "Craig Kielburger Secondary School",
  "Bishop P.F. Reding Catholic Secondary",
  "Milton SE #13 PS (planned)",
  "Sam Sherratt Public School",
  "Holy Rosary Catholic Elementary",
];
