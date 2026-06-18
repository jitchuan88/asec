import { HeroSlide, Capability, WhyChooseItem, BrandPartner, SolutionCategory } from './types';
import bgNaval from './assets/images/naval_vessel_operations_1781783674796.jpg';
import bgAerospace from './assets/images/aerospace_electronics_1781783691785.jpg';
import bgManufacturing from './assets/images/clean_manufacturing_1781783709502.jpg';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "Naval & Defense Systems",
    subtitle: "Complete lifecycle support and critical systems engineering for elite naval fleet vessels including Formidable-class, Endurance-class, and responsive rescue units.",
    bgImage: bgNaval,
    topic: "Naval Operations"
  },
  {
    id: 2,
    title: "Aerospace & Mission-Critical Cabling",
    subtitle: "Premium material integration, high-screening electromagnetic shielding, and extreme military-standard wiring for harsh-environment aerospace operations.",
    bgImage: bgAerospace,
    topic: "Aerospace Electronics"
  },
  {
    id: 3,
    title: "Precision Engineering & System Integration",
    subtitle: "Underpinned by technical excellence, delivering specialized custom manufacturing, power solutions, and platform security integrations since 1981.",
    bgImage: bgManufacturing,
    topic: "Cleanroom Manufacturing"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 1,
    title: "Design & Manufacturing",
    description: "Custom, ruggedized defense and engineering solutions tailored to extreme operational requirements."
  },
  {
    id: 2,
    title: "System Integration",
    description: "Seamless execution and installation for turnkey project delivery."
  },
  {
    id: 3,
    title: "Regional Distribution",
    description: "Providing the Asian market with direct access to market-leading technologies through deep-rooted strategic partnerships."
  },
  {
    id: 4,
    title: "Spare Management",
    description: "Dedicated supply chain support and marine components to ensure long-term operational readiness."
  },
  {
    id: 5,
    title: "Enterprise IT & Platform Security",
    description: "Integrating advanced enterprise information technology and robust cyber resilience solutioning."
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 1,
    badge: "1981",
    title: "Established Heritage",
    description: "Driving engineering innovation and distribution value since 1981."
  },
  {
    id: 2,
    badge: "Trusted",
    title: "Defense & Maritime Trusted",
    description: "Decades of experience executing turnkey implementations for elite defense organizations including the Singapore Navy."
  },
  {
    id: 3,
    badge: "Exclusive",
    title: "Strategic Agency Alliances",
    description: "Serving as the sole or exclusive market partner for world-class global technology brands."
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "Habia Cable", logoText: "Habia Cable", description: "Premium military naval cabling infrastructure" },
  { name: "Eaton", logoText: "Eaton", description: "Naval uninterruptible power systems (UPS)" },
  { name: "Oxley", logoText: "Oxley", description: "Mil-grade tactical cockpit & deck status lighting" },
  { name: "DEF Marine", logoText: "DEF Marine", description: "Advanced false-alarm free marine fire detection" },
  { name: "Marinelec Technologies", logoText: "Marinelec", description: "High-spec marine alarms and safety systems" },
  { name: "Bosch", logoText: "Bosch", description: "High-tier optical surveillance & analytics" },
  { name: "ITW GSE", logoText: "ITW GSE", description: "Specialized 28V DC aviation ground power systems" },
  { name: "Fortinet", logoText: "Fortinet", description: "Advanced enterprise IT cyber resilience" },
  { name: "Shorelink", logoText: "Shorelink", description: "Fixed and telescopic cable management systems" }
];

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: 'marine-lighting',
    title: "Category A: Marine Lighting & Systems",
    description: "Tactical, high-spec, and fully certified lighting systems designed to excel in extreme conditions.",
    items: [
      {
        name: "Naval, Military & Aerospace Lighting (Oxley)",
        marketPosition: "Exclusive Asia Market distributor for military-grade tactical lighting.",
        keyProducts: [
          "Infrared Covert Lighting: High-spec stealth operations lighting.",
          "Flight Deck Safety Systems: LED Deck Status Lights, Deck Edge Lights, and Line Up Lights.",
          "Integrated Test Equipment: Purpose-built validation units for Oxley systems."
        ],
        keyFeatures: [
          "Ruggedized construction built under stringent testing procedures to thrive in hyper-harsh aerospace and oceanic states."
        ]
      }
    ]
  },
  {
    id: 'defense-cables',
    title: "Category B: Defense Cables & Materials",
    description: "Naval cables designed to satisfy high-level electromagnetics, lightweight footprints, and supreme safety guidelines.",
    items: [
      {
        name: "Defense Standard (Def-Std 61-12) Cabling (Habia Cable)",
        marketPosition: "Exclusive authorized distributor delivering premium naval cabling infrastructures.",
        keyApplications: [
          "Defense, marine, nuclear generation, industrial plants, transport infrastructure, telecommunications, control networks, and instrumentation systems."
        ],
        trackRecord: "Successfully managed turnkey implementation projects for high-end Navy Frigates and LSTs.",
        technicalRange: "Scalable architecture supporting small-signal wires up to high-capacity power distribution cables.",
        keyCharacteristics: [
          "Halogen-free, low-smoke, lightweight & compact profiles, with robust high-screening EMC coverage."
        ]
      },
      {
        name: "Raw Materials",
        description: "Premium supply channels for high-grade Enamel Copper optimized for heavy transformer and industrial winding applications."
      }
    ]
  },
  {
    id: 'mission-power',
    title: "Category C: Mission-Critical Power & Manufacturing",
    description: "Uninterruptible power and built-to-order safety transformers serving the elite fleet units directly on active duty.",
    items: [
      {
        name: "Naval Uninterruptible Power Supply (Eaton)",
        marketPosition: "Exclusive Eaton agent for specialized naval power requirements.",
        trackRecord: "Flawless turnkey delivery of 45 ruggedized units (ranging 8–30 KVA) onboard Formidable-class and Endurance-class vessels.",
        keyFeatures: [
          "Slim Design: Optimally shaped to overcome severe spatial restrictions onboard maritime platforms.",
          "Modular Architecture: Isolates specific blocks to prevent catastrophic system failures and allows rapid swap-outs.",
          "Operational Excellence: Fully certified marine reliability outputting low harmonic noise."
        ]
      },
      {
        name: "Custom Transformer Manufacturing",
        capabilities: [
          "Full design, winding, and enclosure building for marine-grade safety transformers engineered to individual site profiles."
        ],
        activeDeployment: [
          "Currently serving operational duty onboard Missile Corvettes (MCV), Endurance-Class Tank Landing Ships (LST), and Sentinel-Class Maritime Security and Response Vessels (MSRV)."
        ]
      }
    ]
  },
  {
    id: 'safety-surveillance',
    title: "Category D: Environmental Safety & Surveillance",
    description: "Robust early warning tracking systems, false-alarm immune sensor suites, and safety low-location pathways.",
    items: [
      {
        name: "Integrated Surveillance (Bosch)",
        marketPosition: "Exclusive Bosch agent for the Singapore Navy.",
        solutions: [
          "High-tier optical security platforms backed by integrated video analytics and automated fire alert triggers."
        ],
        projectFootprint: [
          "Formidable-class FFS, Endurance-Class LST, Sentinel-Class MSRV, and Specialized Marine Craft (SMC)."
        ],
        keyFeatures: [
          "Video analytics software acts as an automated early-warning tracking asset in control rooms (not a replacement for the primary Fire Detection System)."
        ]
      },
      {
        name: "Advanced Marine Fire Detection Systems (FDS)",
        marketPosition: "Exclusive DEF Marine and Marinelec agent for the Singapore Navy.",
        technology: "Modern sensor suites designed explicitly to cancel out false alarms across complex settings (Public Administration, Data Centers, Defense, and Higher Education).",
        projectFootprint: [
          "Formidable-class FFS, Victory-class MCV, Sentinel-Class MSRV, and Specialized Marine Craft (SMC)."
        ]
      },
      {
        name: "Safety, Escape, and Suppression Systems",
        keyFeatures: [
          "Low Location Lighting (LLL): Certified under Singapore Trade Mark Number 40201820006P (Republic of Singapore Trade Marks Act). Successfully integrated across Endurance-Class LSTs, Formidable-class FFS, and Multi-Role Combat Vessels (MRCV).",
          "Auto Fire Suppression Devices: Bespoke, form-fitted flexible fire suppression tubes (available in custom specifications like 8mm OD side or 18mm OD rear layouts) customized to fit sensitive server racks and electrical enclosures.",
          "Insulation Resistance Monitoring: High-safety electrical systems that constantly monitor the integrity of wire coatings inside ungrounded (IT) systems, identifying degradation and moisture long before short circuits manifest. Active on MCVs, LSTs, and MSRVs."
        ]
      }
    ]
  },
  {
    id: 'specialized-electronics',
    title: "Category E: Specialized Marine Electronics & Logistics",
    description: "Aviation ground power units, portside telescopics, smart battery chargers, and water storage pillow tanks.",
    items: [
      {
        name: "Specialized Electronics Integration",
        keyFeatures: [
          "BMS DC Chargers: Smart battery management systems engineered for heavy naval deployment cycles onboard Endurance-Class LSTs, Sentinel-Class MSRVs, and Littoral Mission Vessels (LMV).",
          "Aviation Ground Power: Exclusive regional agent for ITW GSE, delivering specialized 28V DC Aviation Converters supporting flight decks on Formidable-class FFS and Endurance-Class LST vessels.",
          "Cable Management Systems (CMS): Delivered in partnership with Shorelink. Provides architectural design and integration for Telescopic, Mobile, and Fixed CMS units across major port infrastructures and naval bases."
        ]
      },
      {
        name: "Maritime Logistics Solutioning",
        keyFeatures: [
          "WaterBladder Systems: Heavy-duty, high-capacity fuel and liquid water pillow tanks (10m³ base capacities) engineered for emergency base deployments. Systems feature fully integrated booster setups, rugged diesel-driven pump carts, and complete maintenance lifecycles."
        ]
      }
    ]
  }
];
