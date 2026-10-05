export const images = {
  hero: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=80",
  airport: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  sightseeing: "/images/sightseeing.jpg",
  pricing: "/images/pricing.jpg",
  outstation: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
  booking: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  south: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  northGoa: "/images/north-goa-beaches.jpg",
  churches: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  nature: "/images/waterfalls-nature.jpg",
  markets: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
  nightlife: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  mopa: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80",
  dabolim: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80",
  fleet: {
    dzire: "/images/Maruti-Suzuki-Swift-Dzire.jpg.webp",
    amaze: "/images/Honda-Amaze.png.webp",
    aura: "/images/Hyundai-Aura-taxi-in-Goa.jpeg.webp",
    ciaz: "/images/Maruti-Suzuki-Ciaz.jpg.webp",
    ertiga: "/images/Maruti-Suzuki-Ertiga.jpg.webp",
    brezza: "/images/Maruti-Suzuki-Brezza.jpeg.webp",
    innova: "/images/Toyota-Innova.jpg.webp",
    innovaCrysta: "/images/toyota-innova-crysta.jpg.webp",
    swift: "/images/maruti-suzuki-swift.jpeg.webp",
    i20: "/images/Hyundai-i20.jpg.webp",
    baleno: "/images/Maruti-Baleno.jpg.webp",
    tiago: "/images/tata-tiago.jpg.webp",
    traveller: "/images/tempo-traveller.jpg",
  },
} as const;

export type VehicleCategory = "sedan" | "suv" | "hatchback" | "traveller";

export const rates = {
  hatchback: 30,
  sedan: 30,
  suv: 40,
  traveller: 80,
} as const;

export const services = [
  {
    slug: "airport",
    title: "Airport Transfers",
    text: "On-time pick-up and drop for Dabolim and Mopa. We track your flight, meet you at arrivals, and help with luggage.",
    long: "Land at Dabolim (GOI) or Mopa (GOX) and skip the queue. We track your flight, wait if it is delayed, and meet you at arrivals with your name on a board. Luggage help is included — no extra charge for normal bags.",
    points: ["Flight tracking", "Meet & greet", "Luggage assistance"],
    image: images.airport,
    href: "/services/airport",
    sections: [
      {
        heading: "Dabolim (GOI)",
        body: "South Goa and Panaji are closer from Dabolim. Typical transfers: Calangute (~42 km), Margao, Palolem. We monitor your flight and adjust pickup if you are delayed.",
      },
      {
        heading: "Mopa (GOX)",
        body: "North Goa beaches — Baga, Anjuna, Vagator, Ashvem — are quicker from Mopa. Share your terminal and we meet you at arrivals with a name board.",
      },
    ],
    itinerary: [
      "Land → WhatsApp driver when bags are ready",
      "Meet at arrivals (prepaid parking where allowed)",
      "Drop at hotel / homestay with help for luggage",
    ],
  },
  {
    slug: "sightseeing",
    title: "Local Sightseeing",
    text: "Beaches, churches, spice farms, and hidden corners of Goa — with local drivers who know the roads by heart.",
    long: "North Goa beaches in the morning, Old Goa in the afternoon, a spice farm or sunset point whenever you like. Drivers are local, so the route flexes with traffic, weather, and what you actually want to see.",
    points: ["Customized tours", "Experienced drivers", "Flexible timings"],
    image: images.sightseeing,
    href: "/services/sightseeing",
    sections: [
      {
        heading: "North Goa day",
        body: "Fort Aguada, Candolim, Calangute, Baga, Anjuna, Vagator viewpoint. Add Anjuna flea (Wed) or Mapusa market (Fri) if your dates match.",
      },
      {
        heading: "Heritage & culture",
        body: "Old Goa: Basilica of Bom Jesus, Sé Cathedral, Church of St. Francis of Assisi. Often combined with Panaji Miramar or Dona Paula in the same half-day.",
      },
      {
        heading: "South Goa day",
        body: "Colva, Benaulim, Palolem, Cabo de Rama fort. Slower pace, longer drives — ideal for couples and families who want quieter beaches.",
      },
    ],
    itinerary: [
      "Pick up from hotel at agreed time",
      "Stops as per your list (or our suggested route)",
      "Lunch break where you choose",
      "Return to hotel or drop at dinner spot",
    ],
  },
  {
    slug: "outstation",
    title: "Outstation Trips",
    text: "Heading to Mumbai, Pune, or Bangalore? Ride comfortably at honest prices, one-way or round trip.",
    long: "Long-distance from Goa without the overnight bus. Choose one-way or round trip in a sedan, SUV, or Tempo Traveller. Pricing is shared before you confirm — no surprises on the highway.",
    points: ["One-way & round trips", "Well-maintained cars", "Transparent pricing"],
    image: images.outstation,
    href: "/services/outstation",
    sections: [
      {
        heading: "Popular routes",
        body: "Goa to Mumbai, Pune, Belgaum, Hubli, and Bangalore are booked often. Distance and tolls are included in the quote we send on WhatsApp.",
      },
      {
        heading: "Comfort on long drives",
        body: "SUV or Innova recommended for 4+ passengers. Drivers take approved breaks; AC and clean cars throughout.",
      },
    ],
    itinerary: [
      "Early pickup from your Goa location",
      "Highway drive with scheduled rest stops",
      "Drop at address in destination city",
      "Round trip: return date and time fixed in advance",
    ],
  },
] as const;

export const extraServices = [
  "Corporate bookings",
  "Wedding transfers",
  "Full-day North Goa tours",
  "Full-day South Goa tours",
] as const;

export const vehicles: Array<{
  name: string;
  category: VehicleCategory;
  passengers: string;
  rate: number;
  image: string;
  note?: string;
}> = [
  {
    name: "Swift Dzire",
    category: "sedan",
    passengers: "4",
    rate: 30,
    image: images.fleet.dzire,
  },
  {
    name: "Honda Amaze",
    category: "sedan",
    passengers: "4",
    rate: 30,
    image: images.fleet.amaze,
  },
  {
    name: "Hyundai Aura",
    category: "sedan",
    passengers: "4",
    rate: 30,
    image: images.fleet.aura,
  },
  {
    name: "Maruti Ciaz",
    category: "sedan",
    passengers: "4",
    rate: 30,
    image: images.fleet.ciaz,
  },
  {
    name: "Maruti Ertiga",
    category: "suv",
    passengers: "6–7",
    rate: 40,
    image: images.fleet.ertiga,
  },
  {
    name: "Maruti Brezza",
    category: "suv",
    passengers: "5",
    rate: 40,
    image: images.fleet.brezza,
  },
  {
    name: "Toyota Innova",
    category: "suv",
    passengers: "7",
    rate: 40,
    image: images.fleet.innova,
  },
  {
    name: "Innova Crysta",
    category: "suv",
    passengers: "7",
    rate: 40,
    note: "Luxury SUV",
    image: images.fleet.innovaCrysta,
  },
  {
    name: "Maruti Swift",
    category: "hatchback",
    passengers: "4",
    rate: 30,
    image: images.fleet.swift,
  },
  {
    name: "Hyundai i20",
    category: "hatchback",
    passengers: "4",
    rate: 30,
    image: images.fleet.i20,
  },
  {
    name: "Maruti Baleno",
    category: "hatchback",
    passengers: "4",
    rate: 30,
    image: images.fleet.baleno,
  },
  {
    name: "Tata Tiago",
    category: "hatchback",
    passengers: "4",
    rate: 30,
    image: images.fleet.tiago,
  },
  {
    name: "Tempo Traveller",
    category: "traveller",
    passengers: "12–14",
    rate: 80,
    image: images.fleet.traveller,
  },
];

export const compare = [
  {
    name: "Hatchback",
    rate: 30,
    passengers: "4 passengers",
    luggage: "2 medium bags",
    bestFor: "Short trips, solo travellers",
    badge: "Budget",
    popular: false,
  },
  {
    name: "Sedan",
    rate: 30,
    passengers: "4 passengers",
    luggage: "3 large bags",
    bestFor: "Airport transfers, couples",
    badge: "Most popular",
    popular: true,
  },
  {
    name: "SUV",
    rate: 40,
    passengers: "6–7 passengers",
    luggage: "5 large bags",
    bestFor: "Families, group tours",
    badge: "Families",
    popular: false,
  },
  {
    name: "Tempo Traveller",
    rate: 80,
    passengers: "12–14 passengers",
    luggage: "10+ large bags",
    bestFor: "Large groups, events",
    badge: "Large groups",
    popular: false,
  },
] as const;

export const pricing = [
  {
    name: "Sedan",
    rate: 30,
    popular: false,
    points: ["4 passengers", "AC & comfortable", "Perfect for city rides", "Luggage space"],
  },
  {
    name: "SUV",
    rate: 40,
    popular: true,
    points: ["6–7 passengers", "Extra comfortable", "Great for families", "Extra luggage space"],
  },
  {
    name: "Tempo Traveller",
    rate: 80,
    popular: false,
    points: ["12–14 passengers", "Large groups", "Perfect for tours", "Maximum luggage"],
  },
] as const;

export const routes = [
  {
    from: "Dabolim Airport",
    to: "Calangute Beach",
    fare: 1260,
    km: 42,
  },
  {
    from: "Mopa Airport",
    to: "Baga Beach",
    fare: 1050,
    km: 35,
  },
  {
    from: "Panaji",
    to: "Anjuna Beach",
    fare: 540,
    km: 18,
  },
  {
    from: "Palolem Beach",
    to: "Colva Beach",
    fare: 1140,
    km: 38,
  },
  {
    from: "Full Day North Goa",
    to: "8 hours • 80 km",
    fare: 3200,
    km: 80,
    tag: "SUV",
    package: true,
  },
  {
    from: "Full Day South Goa",
    to: "8 hours • 90 km",
    fare: 3600,
    km: 90,
    tag: "SUV",
    package: true,
  },
  {
    from: "Dabolim Airport",
    to: "Panaji City",
    fare: 900,
    km: 30,
  },
  {
    from: "Mopa Airport",
    to: "Anjuna Beach",
    fare: 960,
    km: 32,
  },
  {
    from: "Margao Railway",
    to: "Palolem Beach",
    fare: 780,
    km: 26,
  },
] as const;

export const destinations = [
  {
    title: "Dabolim Airport",
    text: "Fast, comfortable airport rides",
    cta: "Book transfer",
    image: images.dabolim,
    href: "/book",
    detail:
      "Both terminals covered. Skip prepaid counter queues — we quote before you land. Child seats on request when available.",
  },
  {
    title: "Mopa Airport",
    text: "Easy access to North Goa hotels and beaches",
    cta: "Book transfer",
    image: images.mopa,
    href: "/book",
    detail:
      "Best for Baga, Calangute, Anjuna, Vagator, and Ashvem. Typical drive 30–45 minutes depending on traffic.",
  },
  {
    title: "North Goa beaches",
    text: "Calangute, Baga, Anjuna, Vagator",
    cta: "View routes",
    image: images.northGoa,
    href: "/routes",
    detail:
      "Busy, lively beaches with shacks, water sports, and nightlife nearby. Good base for Fort Aguada and Chapora.",
  },
  {
    title: "South Goa beaches",
    text: "Palolem, Colva, Benaulim, Agonda",
    cta: "View routes",
    image: images.south,
    href: "/routes",
    detail:
      "Calmer sand and slower pace. Palolem and Agonda are favourites for longer stays.",
  },
  {
    title: "Churches & heritage",
    text: "Old Goa, Basilica, Sé Cathedral",
    cta: "Book tour",
    image: images.churches,
    href: "/book",
    detail:
      "Historic churches and museums. Modest dress recommended. Often combined with Panaji in a half-day.",
  },
  {
    title: "Waterfalls & nature",
    text: "Dudhsagar, spice plantations",
    cta: "Book tour",
    image: images.nature,
    href: "/book",
    detail:
      "Dudhsagar is a full-day trip; park rules vary by season. Spice farms include guided walks and lunch options.",
  },
  {
    title: "Markets & shopping",
    text: "Anjuna flea, Mapusa, Panaji",
    cta: "Book ride",
    image: images.markets,
    href: "/book",
    detail:
      "Anjuna flea on Wednesday; Mapusa market Friday morning. Panaji any day for cashew, spices, and snacks.",
  },
  {
    title: "Nightlife & casinos",
    text: "Clubs, beach shacks, casinos",
    cta: "Book ride",
    image: images.nightlife,
    href: "/book",
    detail:
      "Book a return pickup when you go out — we run 24/7 for safe late-night hotel drops.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Best taxi service in Goa! The driver was on time, friendly, and the car was super clean. Plus, the price was way better than others. Totally recommend!",
    name: "Rajesh Kumar",
    city: "Mumbai",
  },
  {
    quote:
      "We booked GOIGOX Cabs for our family trip to Goa. The SUV was super comfortable, and the driver took us to all the best spots. Great service at a fair price!",
    name: "Priya Sharma",
    city: "Delhi",
  },
  {
    quote:
      "Needed a late-night airport ride and GOIGOX Cabs helped me out! Quick response, good driver, and fair rates. Will definitely book again!",
    name: "Amit Patel",
    city: "Bangalore",
  },
  {
    quote:
      "Used them for Mopa to Anjuna and a full North Goa day. Driver knew shortcuts and never pushed extra stops. Fair price on WhatsApp before we started.",
    name: "Neha Desai",
    city: "Ahmedabad",
  },
  {
    quote:
      "Corporate team of eight — Tempo Traveller was clean and on time for three days of conference shuttles. Will use again.",
    name: "Karim Sheikh",
    city: "Pune",
  },
  {
    quote:
      "Booked Dzire from Dabolim to Palolem — driver was waiting with a name board, helped with bags, and the fare matched exactly what they quoted on WhatsApp. Smooth start to our holiday.",
    name: "Ananya Iyer",
    city: "Chennai",
  },
  {
    quote:
      "Our wedding guests needed airport and venue shuttles for two days. GOIGOX coordinated timings over WhatsApp and every car showed up on time. Stress-free for us.",
    name: "Rohan & Meera",
    city: "Goa",
  },
  {
    quote:
      "Did Old Goa churches plus spice farm in one day. Driver suggested a lunch spot locals use — not a tourist trap. Car was cool and spotless in the afternoon heat.",
    name: "James Wilson",
    city: "London",
  },
  {
    quote:
      "One-way Goa to Pune in Innova Crysta — comfortable seats, safe driving on the ghats, and clear breaks for food. Price was shared upfront with tolls included.",
    name: "Vikram Joshi",
    city: "Pune",
  },
] as const;

export const faqs = [
  {
    q: "How do I book a taxi with GOIGOX Cabs?",
    a: "Fill out the form on this website, call +91 80889 43818, or WhatsApp us. We confirm bookings right away.",
  },
  {
    q: "Are your drivers licensed and verified?",
    a: "Yes. All drivers are fully licensed and police-verified, with years of driving in Goa. They know the roads and will get you there safely.",
  },
  {
    q: "Do you charge extra for luggage or night trips?",
    a: "No extra charge for normal luggage. Night trips (10 PM to 6 AM) may have a small extra fee. We always share the full price before you book.",
  },
  {
    q: "Can I book a cab for outstation trips from Goa?",
    a: "Yes. We drive to Mumbai, Pune, Bangalore, and other cities. Choose one-way or round trip. Contact us for a quote.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfers. You pay after the ride.",
  },
  {
    q: "Are your vehicles AC and well-maintained?",
    a: "Yes. Every car has AC, is serviced regularly, and is cleaned before each trip.",
  },
  {
    q: "Do you provide airport pickup services?",
    a: "Yes — both Dabolim and Mopa. We track your flight, wait if you are delayed, and meet you at arrivals with your name on a board.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Yes. Let us know at least 2 hours before pickup and there is no cancellation fee. For last-minute changes, call us directly.",
  },
  {
    q: "Do you offer hourly or full-day hire?",
    a: "Yes. Full-day North and South Goa packages are 8 hours with a km limit. Extra hours or distance are quoted if you extend.",
  },
  {
    q: "Which airport is closer to my hotel?",
    a: "North Goa hotels are usually closer to Mopa (GOX). South Goa and Panaji are often closer to Dabolim (GOI). WhatsApp your hotel name and we suggest the best airport transfer.",
  },
  {
    q: "Can I stop for photos or lunch during a trip?",
    a: "Yes on sightseeing and package tours. Short stops are fine; long waits may add to the fare for point-to-point trips — we clarify when you book.",
  },
  {
    q: "Is Wi‑Fi or phone charging available in the car?",
    a: "Most cars have charging ports; ask when you book if you need a specific vehicle.",
  },
] as const;

export const marqueePlaces = [
  "Calangute",
  "Baga",
  "Anjuna",
  "Vagator",
  "Palolem",
  "Colva",
  "Panaji",
  "Old Goa",
  "Dabolim",
  "Mopa",
  "Agonda",
  "Benaulim",
] as const;
