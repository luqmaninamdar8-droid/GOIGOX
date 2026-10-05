export const homeIntro = {
  title: "Goa taxi service you can actually plan on",
  paragraphs: [
    "GOIGOX Cabs is based in Panaji and runs across North Goa, South Goa, and both airports — Dabolim (GOI) and Mopa (GOX). The name says it: airport runs are what we do best. Whether you land at midnight or leave after a beach day, you get a verified driver, an AC car, and a fare we confirm before the trip starts.",
    "Most guests book on WhatsApp: share pickup, drop, date, and passengers. We reply with the vehicle type, estimated price, and driver contact. You pay after the ride — cash or UPI.",
    "Use the pages below for services, fleet, fixed route prices, and Goa sightseeing ideas. Each section is separate so you are not scrolling one endless page.",
  ],
  bullets: [
    "24/7 dispatch from Panaji",
    "Police-verified, licensed drivers",
    "Sedan from ₹30/km • SUV from ₹40/km • Traveller from ₹80/km",
    "Airport meet & greet with flight tracking",
  ],
} as const;

export const pricingPolicy = {
  title: "How our pricing works",
  intro:
    "Rates are per kilometre for round-trip use within Goa unless we quote a fixed package (airport runs, full-day tours). We always confirm the total before you travel.",
  sections: [
    {
      heading: "Included in your fare",
      items: [
        "Driver and fuel for the agreed route",
        "AC vehicle as per your booking",
        "Normal luggage (no extra charge)",
        "Waiting at airport when your flight is delayed (within reason)",
      ],
    },
    {
      heading: "When the price may differ",
      items: [
        "Night trips between 10 PM and 6 AM (small surcharge — quoted upfront)",
        "Outstation trips to Mumbai, Pune, Bangalore, or Karnataka",
        "Multiple stops or route changes after the trip starts",
        "Parking or tolls on certain outstation highways (we tell you in advance)",
      ],
    },
    {
      heading: "Minimum charges",
      items: [
        "Short local hops may have a minimum km charge",
        "Full-day North or South Goa packages include 8 hours and a km limit — extra hours/km quoted if you extend",
      ],
    },
  ],
} as const;

export const fleetGuide = {
  title: "Which car should you pick?",
  paragraphs: [
    "For two travellers and an airport run, a sedan (Dzire, Amaze, Aura, or Ciaz) is usually enough — comfortable AC, space for 3 large bags, and ₹30/km.",
    "Families of five or six, or groups with extra luggage, do better in an Ertiga, Brezza, Innova, or Crysta at ₹40/km. Tempo Traveller fits 12–14 people for weddings, office outings, or big friend groups at ₹80/km.",
    "Hatchbacks (Swift, i20, Baleno, Tiago) suit budget city rides and short beach hops for up to four people.",
  ],
  tips: [
    "Book SUV or Traveller early in peak season (December–January).",
    "Tell us flight number for airport pickups so we track delays.",
    "For Dudhsagar or spice-farm days, SUV is recommended for rougher stretches.",
  ],
} as const;

export const routeTips = {
  title: "Planning your route in Goa",
  paragraphs: [
    "Distances on the map do not always match drive time — monsoon patches, market traffic in Mapusa, and weekend beach crowds can add time. We use live routes and suggest pickup times accordingly.",
    "North Goa (Calangute, Baga, Anjuna) pairs well with Mopa airport; South Goa (Palolem, Colva) is often closer from Dabolim. We quote both airports to your hotel when you are unsure.",
  ],
  popularStops: [
    "Dabolim → Calangute / Baga / Candolim",
    "Mopa → Anjuna / Vagator / Ashvem",
    "Panaji → Old Goa churches (half day)",
    "Margao → Palolem or Colva (South day trip)",
    "Full-day packages: North 80 km / South 90 km in 8 hours (SUV)",
  ],
} as const;

export const extraServiceDetails = [
  {
    title: "Corporate bookings",
    text: "Regular airport runs, hotel shuttles, and conference transfers for teams visiting Goa. Monthly billing can be arranged for repeat clients.",
  },
  {
    title: "Wedding transfers",
    text: "Guest pickups from airport and railway station, baraat cars, and multi-day family travel. Tempo Traveller and Innova fleet available.",
  },
  {
    title: "Full-day North Goa tours",
    text: "Fort Aguada, Candolim, Calangute, Baga, Anjuna flea market (Wed), and sunset at Chapora — route adjusted to your hotel start point.",
  },
  {
    title: "Full-day South Goa tours",
    text: "Colva, Benaulim, Palolem, Cabo de Rama, and optional spice plantation stop. Quieter beaches and longer drives — start early.",
  },
] as const;

export const goaGuide = {
  title: "Goa by taxi — practical notes",
  paragraphs: [
    "Goa is best explored in short hops: beaches in the morning, heritage or markets mid-day, dinner and nightlife when you are ready. Our drivers live here — they know which roads to avoid at rush hour and where parking is easier.",
    "Old Goa (Basilica, Sé Cathedral) is a half-day from Panaji. Dudhsagar and spice farms need a full day and are easiest from South Goa or Margao. Anjuna flea market runs Wednesday; Mapusa market is Friday morning.",
  ],
} as const;

export const bookingSteps = [
  "Message us on WhatsApp or call +91 80889 43818.",
  "Share pickup, drop, date, time, and number of passengers.",
  "We confirm vehicle type, estimated fare, and driver details.",
  "Pay after the trip — cash, Google Pay, PhonePe, or Paytm.",
] as const;
