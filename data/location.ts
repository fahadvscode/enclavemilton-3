export const HDSB_SCHOOL_LOCATOR = "https://schoollocator.hdsb.ca/";
export const HDSB_FIND_SCHOOL = "https://www.hdsb.ca/schools/find-local-school/";
export const HCDSB_SCHOOL_FINDER = "https://hcdsb.ca/schools/school-finder/";
export const HDSB_PLANNING_EMAIL = "planhalton@hdsb.ca";

export const communityLocation = {
  address: "Britannia Road, between James Snow Parkway & Fourth Line",
  area: "Southeast Milton, Ontario (Halton Region)",
  postalContext: "Milton, Ontario, Canada",
  description:
    "The Enclave sits in Milton's southeast growth corridor on Britannia Road between James Snow Parkway (Neyagawa Boulevard) and Fourth Line — part of the broader Britannia Secondary Plan area the Town of Milton is developing as a complete, walkable community with housing, parks, schools, and services. Sundial Homes' master plan for this site includes freehold townhomes, a planned village square, trail and cycling connections, and a future elementary school site coordinated with the Halton District School Board. Per local reporting, the broader southeast Milton allocation can include on the order of 1,000+ new homes across phases, with the first builder permits targeted from 2026 onward.",
  britanniaPlanUrl: "https://www.letstalkmilton.ca/britannia",
};

export const areaHighlights = [
  "Halton Region, Ontario — not Milton, Georgia (US)",
  "Britannia Road between James Snow Parkway & Fourth Line",
  "Planned village square, trails, and cycling network on-site",
  "Future elementary school site in the master plan (HDSB coordination)",
  "Access to Highway 401, Highway 407, and Milton GO (Kitchener line)",
  "Established Milton schools, retail, recreation, and escarpment greenspace nearby",
];

export const commuteFacts = [
  {
    name: "Milton GO Station",
    line: "Kitchener line (GO Transit)",
    typicalDrive: "Roughly 10–20 minutes by car from Britannia Road area, traffic-dependent",
    typicalTrainUnion:
      "GO train to Toronto Union often cited in the 45–65 minute range; schedules vary — check GO Transit",
    note: "Park-and-ride commuter access to the GTA core without driving downtown daily.",
  },
  {
    name: "Highway 401",
    typicalDrive: "Often reachable in roughly 10–20 minutes via regional roads, traffic-dependent",
    note: "Primary east–west corridor for Mississauga, Toronto, and western GTA connections.",
  },
  {
    name: "Highway 407 ETR",
    typicalDrive: "Often reachable in roughly 15–25 minutes, traffic-dependent",
    note: "Toll highway option for faster cross-regional trips when time matters more than toll cost.",
  },
  {
    name: "James Snow Parkway / Britannia Road",
    typicalDrive: "Direct local connectors at the community front door",
    note: "Links the site into Milton's arterial network toward shopping, employment, and highways.",
  },
];

export type NearbySchool = {
  name: string;
  type: string;
  grades: string;
  board: "Halton District School Board" | "Halton Catholic District School Board";
  note: string;
  buyerNote: string;
  website?: string;
};

export const futureOnSiteSchool: NearbySchool = {
  name: "Future on-site elementary school (planned)",
  type: "Elementary (planned)",
  grades: "Elementary (grades TBD by HDSB)",
  board: "Halton District School Board",
  note: "Identified in The Enclave / southeast Milton master plan; timing and boundaries subject to HDSB and Town approval.",
  buyerNote:
    "Pre-construction buyers should not assume this school will be open by your occupancy date. When built, it could change walk-to-school convenience for the neighbourhood — but catchment maps are set by the school board, not the builder.",
};

export const nearbySchools: NearbySchool[] = [
  futureOnSiteSchool,
  {
    name: "Boyne Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Serves the adjacent Boyne / southeast Milton growth area — confirm your address in the HDSB locator.",
    buyerNote:
      "Often relevant for families comparing new communities along Britannia and James Snow; boundary reviews are common as Milton grows.",
    website: "https://boyne.hdsb.ca/",
  },
  {
    name: "Viola Desmond Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Modern Milton elementary — verify catchment for your specific lot before you buy.",
    buyerNote:
      "Families moving from Toronto or Mississauga often research newer Milton schools alongside commute time; assignment is address-based only.",
    website: "https://violadesmond.hdsb.ca/",
  },
  {
    name: "Ethel Gardiner Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Established Milton elementary — confirm assignment with HDSB.",
    buyerNote:
      "Useful comparison point for buyers who want an established school community versus waiting for the planned on-site school.",
    website: "https://ethelgardiner.hdsb.ca/",
  },
  {
    name: "Hawthorne Village Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Serves growing Milton neighbourhoods — boundaries may shift with new development.",
    buyerNote:
      "Illustrates why Halton publishes boundary review pages: new housing can redistribute enrolment across nearby elementaries.",
    website: "https://hawthorneyvillage.hdsb.ca/",
  },
  {
    name: "E. J. James Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Milton elementary option — confirm catchment via HDSB school locator.",
    buyerNote:
      "One of several HDSB elementaries Milton families evaluate when moving for space and relative value versus inner-GTA pricing.",
    website: "https://ejjames.hdsb.ca/",
  },
  {
    name: "Sam Sherratt Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Milton public elementary — verify for your address.",
    buyerNote:
      "Included because buyers frequently search by school name when comparing Milton communities; only the locator confirms eligibility.",
    website: "https://samsherratt.hdsb.ca/",
  },
  {
    name: "Tiger Jeet Singh Public School",
    type: "Elementary (public)",
    grades: "K–8",
    board: "Halton District School Board",
    note: "Milton public elementary — confirm catchment before purchase.",
    buyerNote:
      "Represents the breadth of HDSB options across Milton — important for families who want choice among public English programs.",
    website: "https://tigerjeetsingh.hdsb.ca/",
  },
  {
    name: "Lumen Christi Catholic Elementary School",
    type: "Elementary (Catholic)",
    grades: "K–8",
    board: "Halton Catholic District School Board",
    note: "Separate school system — registration and catchment use HCDSB tools, not HDSB.",
    buyerNote:
      "Catholic elementary requires separate board registration and may require baptism documentation — confirm HCDSB policy before you buy.",
    website: "https://lumen.hcdsb.org/",
  },
  {
    name: "St. Peter Catholic Elementary School",
    type: "Elementary (Catholic)",
    grades: "K–8",
    board: "Halton Catholic District School Board",
    note: "Milton Catholic elementary — verify address in HCDSB school finder.",
    buyerNote:
      "Families choosing Catholic education should map both elementary and secondary pathways in HCDSB at the same time.",
    website: "https://stpeter.hcdsb.org/",
  },
  {
    name: "Guardian Angels Catholic Elementary School",
    type: "Elementary (Catholic)",
    grades: "K–8",
    board: "Halton Catholic District School Board",
    note: "Halton Catholic option in Milton — confirm catchment.",
    buyerNote:
      "Highlights that Milton offers parallel public systems; your home address determines Catholic eligibility, not proximity alone.",
    website: "https://gace.hcdsb.org/",
  },
  {
    name: "Craig Kielburger Secondary School",
    type: "Secondary (public)",
    grades: "9–12",
    board: "Halton District School Board",
    note: "Milton public high school — secondary assignment is address-specific.",
    buyerNote:
      "Buyers with teens should verify secondary catchment early; moving one kilometre can change high school assignment in growing areas.",
    website: "https://craigkielburger.hdsb.ca/",
  },
  {
    name: "Milton District High School",
    type: "Secondary (public)",
    grades: "9–12",
    board: "Halton District School Board",
    note: "Long-established Milton secondary school — confirm via HDSB locator.",
    buyerNote:
      "Often compared with Craig Kielburger for course offerings and extracurriculars — only your address determines which applies.",
    website: "https://miltondistrict.hdsb.ca/",
  },
  {
    name: "Bishop Reding Catholic Secondary School",
    type: "Secondary (Catholic)",
    grades: "9–12",
    board: "Halton Catholic District School Board",
    note: "Halton Catholic secondary in Milton — use HCDSB finder.",
    buyerNote:
      "Catholic secondary pathway planning should align with your elementary feeder expectations under HCDSB policies.",
    website: "https://bishopreding.hcdsb.org/",
  },
  {
    name: "St. Benedict Catholic Secondary School",
    type: "Secondary (Catholic)",
    grades: "9–12",
    board: "Halton Catholic District School Board",
    note: "Milton Catholic high school option — verify catchment.",
    buyerNote:
      "Families prioritizing Catholic 9–12 education should confirm both elementary feeder schools and secondary destination before firming a lot.",
    website: "https://stbenedict.hcdsb.org/",
  },
  {
    name: "Jean Vanier Catholic Secondary School",
    type: "Secondary (Catholic)",
    grades: "9–12",
    board: "Halton Catholic District School Board",
    note: "Halton Catholic secondary serving Milton families — confirm address.",
    buyerNote:
      "Included for comprehensive Catholic secondary research; assignment rules differ from the public board.",
    website: "https://jeanvanier.hcdsb.org/",
  },
];

export const schoolBuyerGuide = {
  title: "How schools affect your purchase at The Enclave Milton",
  sections: [
    {
      heading: "Catchments are address-based, not marketing promises",
      body: "Halton school assignment is determined by the Halton District School Board and Halton Catholic District School Board using your home address — not sales centre materials. Before you firm a purchase, enter your exact lot or nearest intersection into the official HDSB school locator and HCDSB school finder. Boundaries change as Milton grows.",
    },
    {
      heading: "Growing Milton means boundary reviews",
      body: "The Britannia Secondary Plan and southeast Milton developments add housing quickly. HDSB publishes accommodation planning and boundary review updates that can shift which elementary or secondary school serves a street. Pre-construction buyers should budget time to monitor HDSB planning announcements through occupancy.",
    },
    {
      heading: "The planned on-site elementary school",
      body: "Town and media reporting describe coordination between Sundial Homes, the Town of Milton, and HDSB on a future elementary school within the southeast Milton allocation. That can improve neighbourhood convenience when it opens — but opening dates, grades offered, and catchment maps are board decisions. Do not buy assuming your child will attend it on day one.",
    },
    {
      heading: "Public English vs Catholic vs French immersion",
      body: "Most listings reference HDSB English schools. Catholic education is a separate system (HCDSB) with its own registration requirements. French immersion pathways exist within HDSB but use dedicated entry rules and capacity limits — confirm program availability on the board website, not third-party listing sites.",
    },
    {
      heading: "Registering before 2027 occupancy",
      body: "You generally need a Milton address to register for school. Pre-construction buyers can research pathways now but final registration happens closer to move-in. If you have school-age children, align your closing timeline with the academic year and contact boards early when your address is assigned.",
    },
    {
      heading: "Resale and family appeal",
      body: "Even without school-age children, school proximity and reputation influence resale interest in family-oriented Milton townhome communities. Verify facts with official board tools rather than social media rankings, which are often outdated or incorrect for new addresses.",
    },
  ],
};

export type NearbyAmenity = {
  category: string;
  name: string;
  description: string;
  typicalAccess?: string;
};

export const nearbyAmenities: NearbyAmenity[] = [
  {
    category: "Transit",
    name: "Milton GO Station",
    description: "Kitchener line service toward Toronto Union — core option for commuters.",
    typicalAccess: "Roughly 10–20 minutes by car from Britannia Road area, traffic-dependent",
  },
  {
    category: "Highways",
    name: "Highway 401 & Highway 407",
    description: "Regional highway access via James Snow Parkway, Britannia Road, and Derry Road corridors.",
    typicalAccess: "Often 10–25 minutes to highway ramps depending on route and traffic",
  },
  {
    category: "Shopping",
    name: "Derry Road & Hwy 401 retail corridor",
    description: "Big-box, grocery, home improvement, and everyday retail clusters along Milton's main commercial arteries.",
    typicalAccess: "Typically within a short drive of southeast Milton",
  },
  {
    category: "Shopping",
    name: "Costco / major retail (Milton)",
    description: "Warehouse and power-centre shopping serving Milton and west GTA families.",
    typicalAccess: "Short drive via Derry Road or regional connectors",
  },
  {
    category: "Shopping",
    name: "Downtown Milton (Main Street)",
    description: "Local shops, restaurants, farmers' market culture, and community events.",
    typicalAccess: "Roughly 15–25 minutes by car, traffic-dependent",
  },
  {
    category: "Healthcare",
    name: "Milton District Hospital area",
    description: "Hospital and medical services cluster serving Milton and Halton Hills residents.",
    typicalAccess: "Short drive within Milton",
  },
  {
    category: "Recreation",
    name: "Milton Sports Centre",
    description: "Arena, fitness, and registered community programs.",
    typicalAccess: "Within Milton — typically under 20 minutes by car",
  },
  {
    category: "Recreation",
    name: "Mattamy National Cycling Centre / Milton sports precinct",
    description: "Major recreation and event facilities associated with Milton's sports tourism profile.",
    typicalAccess: "Short drive within town",
  },
  {
    category: "Parks & trails",
    name: "Niagara Escarpment & valley trails",
    description: "Hiking, cycling, and outdoor recreation along Halton's escarpment landscape.",
    typicalAccess: "Several trailheads within Milton and Halton Region",
  },
  {
    category: "Parks",
    name: "Mohawk Park & neighbourhood parks",
    description: "Local park space for playgrounds, sports fields, and everyday outdoor time.",
    typicalAccess: "Distributed across Milton neighbourhoods",
  },
  {
    category: "Community",
    name: "Planned village square (The Enclave)",
    description: "On-site gathering space envisioned in the Sundial master plan for the Britannia Road community.",
    typicalAccess: "Within the development as phases mature",
  },
  {
    category: "Connectivity",
    name: "Trail & cycling network (planned)",
    description: "Pedestrian and cycling connections described in southeast Milton planning documents.",
    typicalAccess: "On-site and linking to broader Milton active-transportation routes over time",
  },
  {
    category: "Future retail",
    name: "Britannia Secondary Plan commercial areas",
    description: "The Town's Britannia plan envisions mixed uses and services as the corridor builds out — timing varies by phase.",
    typicalAccess: "Walkable amenities expected to grow with population; confirm current retail on visit",
  },
];

export const locationDisclaimer =
  "School catchments, program availability (including French immersion), travel times, and amenities change. This page is for general research only — confirm schools with HDSB and HCDSB using your exact address before you buy. Visit the community and verify distances in person.";

/** Featured on homepage teaser (subset) */
export const featuredSchoolNames = [
  "Future on-site elementary (planned)",
  "Boyne Public School",
  "Viola Desmond Public School",
  "Craig Kielburger Secondary School",
  "Bishop Reding Catholic Secondary School",
];
