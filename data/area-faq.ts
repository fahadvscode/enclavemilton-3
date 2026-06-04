import {
  HCDSB_SCHOOL_FINDER,
  HDSB_FIND_SCHOOL,
  HDSB_SCHOOL_LOCATOR,
} from "./location";

export type FaqItem = {
  question: string;
  answer: string;
};

export const AREA_FAQ: FaqItem[] = [
  {
    question: "What schools are near The Enclave Milton?",
    answer:
      "Homes at The Enclave fall under both Halton District School Board (public English) and Halton Catholic District School Board. Craig Kielburger Secondary School — about eight minutes by car — is the closest public high school and runs an International Baccalaureate Diploma program for 2,000+ students. Bishop P.F. Reding Catholic Secondary, Milton's top-scoring Catholic high school, is roughly ten minutes away. Numerous elementary schools from each board sit within a five- to ten-minute drive.",
  },
  {
    question: "Does The Enclave Milton have access to French Immersion programs?",
    answer:
      "French Immersion is available through Craig Kielburger Secondary School on the public side. On the Catholic side, Holy Rosary Catholic Elementary offers Extended French Immersion starting in Grade 5. Program entry grades and seat availability change — confirm eligibility for your address on HDSB and HCDSB websites.",
  },
  {
    question: "Are there plans for new schools near The Enclave Milton?",
    answer:
      "HDSB's accommodation planning includes future schools for southeast Milton, including the Britannia Secondary Plan area where The Enclave is located. Milton SE #13 Public School is planned for the growth corridor. Milton's school-age population rose about 185% between 2011 and 2021, which continues to drive new school construction.",
  },
  {
    question: "How far is The Enclave Milton from Highway 401?",
    answer:
      "Highway 401 is roughly three to five minutes by car from The Enclave using the James Snow Parkway interchange immediately south of the community, or via Britannia Road connections.",
  },
  {
    question: "Can I take the GO Train from The Enclave Milton to Toronto?",
    answer:
      "Milton GO Station at 780 Main Street East is about eight to ten minutes by car. The Milton GO line runs direct trains to Toronto Union Station during peak periods, with GO bus service available through the day.",
  },
  {
    question: "What's the commute from The Enclave Milton to downtown Toronto?",
    answer:
      "Driving downtown via Highway 401 typically takes about 45 to 55 minutes (roughly 55 km), depending on traffic. From Milton GO Station, the train to Union Station is often about 55 to 65 minutes — check current GO schedules before you buy.",
  },
  {
    question: "How far is Pearson Airport from The Enclave Milton?",
    answer:
      "Toronto Pearson International Airport (YYZ) is approximately 25 to 30 minutes by car (about 35 km) via Highway 401 and connecting routes.",
  },
  {
    question: "Is there local public transit near The Enclave Milton?",
    answer:
      "Milton Transit operates routes linking southeast Milton to Milton GO Station, schools, shopping centres, and recreation facilities across town, including Route 21 toward the Steeles/Trafalgar area.",
  },
  {
    question: "What shopping is near The Enclave Milton?",
    answer:
      "Toronto Premium Outlets — 100+ stores — is about ten minutes away. Milton Crossroads (Walmart, Canadian Tire, Staples, Indigo) is a similar drive. Downtown Milton's Main Street offers local retail and a seasonal farmers' market. Grocery chains including Metro, Sobeys, FreshCo, and Food Basics are within five to ten minutes.",
  },
  {
    question: "Is Toronto Premium Outlets near The Enclave Milton?",
    answer:
      "Yes. Toronto Premium Outlets at Steeles Avenue and Trafalgar Road is one of Ontario's largest outlet destinations — approximately ten minutes by car (about 9 km) from Britannia Road at James Snow Parkway.",
  },
  {
    question: "What parks and trails are near The Enclave Milton?",
    answer:
      "Milton borders Conservation Halton lands on the Niagara Escarpment UNESCO World Biosphere Reserve. Hilton Falls offers 33.5 km of trails (~10 min). Kelso has 22+ km of trails and a beach (~12 min). Rattlesnake Point and Crawford Lake are each about 15 minutes. The Bruce Trail — Canada's oldest marked footpath — has multiple Milton access points.",
  },
  {
    question: "What is the Mattamy National Cycling Centre?",
    answer:
      "About five minutes from The Enclave, the Mattamy National Cycling Centre is Canada's only UCI-regulated Class 1 indoor velodrome and the second of its kind in North America. Built for the 2015 Pan American Games (~$63 million), it also operates as a community centre with three gymnasiums, an indoor walking/running track, and fitness studios.",
  },
  {
    question: "What is the Milton Education Village?",
    answer:
      "The Milton Education Village (MEV) is a planned 162-hectare (400-acre) mixed-use district centred on the Mattamy National Cycling Centre, with Britannia Road forming its southern edge — beside The Enclave's neighbourhood. Approved in 2024, the MEV is intended to integrate education, healthcare, recreation, and transit as part of Milton's 2051 growth strategy.",
  },
  {
    question: "Is The Enclave Milton near the Niagara Escarpment?",
    answer:
      "Yes. Milton lies at the base of the Niagara Escarpment UNESCO World Biosphere Reserve. Conservation areas including Rattlesnake Point, Crawford Lake, Kelso, and Hilton Falls are within a ten- to fifteen-minute drive.",
  },
  {
    question: "Is there a hospital near The Enclave Milton?",
    answer:
      "Milton District Hospital — operated by Halton Healthcare — is about ten minutes by car. The 129-bed acute care site includes emergency services, diagnostic imaging, and specialized care, with a major expansion completed in 2017.",
  },
  {
    question: "Why is Milton a good place to buy a home?",
    answer:
      "Milton's population grew 57.6% between 2011 and 2021 (84,362 to 132,979), making it one of Ontario's fastest-growing towns. Buyers gain strong Halton schools, recreation anchored by the Mattamy National Cycling Centre, Highway 401 access, GO Transit to Toronto, and a historic Main Street — often at price points below Oakville and Mississauga.",
  },
  {
    question: "How does The Enclave Milton compare to other Milton townhome developments?",
    answer:
      "The Enclave is among the few active freehold townhome projects in Milton marketed with $0 monthly maintenance fees. Starting from $599,990, it sits below the February 2026 Milton townhome resale average of roughly $826,848. Fifteen floor plans across Village back-to-back and Park traditional collections, with 2027 occupancy, offer more layout choice than many competing projects.",
  },
  {
    question: "Is Milton close to universities?",
    answer:
      "University of Toronto Mississauga (UTM) is about 20 to 25 minutes by car. McMaster University in Hamilton is roughly 30 to 35 minutes. The planned Milton Education Village adjacent to southeast Milton is expected to include post-secondary facilities in its long-term vision.",
  },
  {
    question: "Which school will my child attend if I buy at The Enclave Milton?",
    answer: `Assignment depends on your exact home address. Use the HDSB school locator (${HDSB_SCHOOL_LOCATOR}), HDSB find local school (${HDSB_FIND_SCHOOL}), and HCDSB school finder (${HCDSB_SCHOOL_FINDER}) before you firm. Catchments in growing Milton can change as new schools open.`,
  },
];
