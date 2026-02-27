const GUIDE_DATA = {

  sao_tome: {
    country: "São Tomé & Príncipe",
    heroEyebrow: "Gulf of Guinea - Africa's Chocolate Islands",
    heroTitleHtml: "São Tomé &amp; <em>Prín</em>cipe",
    heroTagline:
      "Two volcanic islands rising from the Gulf of Guinea just north of the Equator — ancient Portuguese colonial fazendas, world-class cacao, primary rainforest descending to black sand beaches, humpback whales offshore, and a pace of life that feels entirely removed from the rest of the world.",
    heroStats: [
      { label: "Capital", value: "São Tomé City" },
      { label: "Currency", value: "STN (Dobra)" },
      { label: "Language", value: "Portuguese" },
      { label: "Time Zone", value: "UTC+0" },
    ],
    knowSubtitle:
      "São Tomé & Príncipe is a small-island paradise that rewards slow travel — the archipelago's extraordinary biodiversity, colonial heritage, and chocolate culture are best appreciated over at least a week.",
    know: [
      {
        icon: "🛂",
        title: "Visa",
        text: "São Tomé & Príncipe offers visa-free or visa-on-arrival entry for most nationalities. Confirm current requirements for your passport — the process is generally straightforward and tourist-friendly.",
      },
      {
        icon: "🍫",
        title: "Cacao and Chocolate",
        text: "The islands were once the world's largest cacao producer. The fazenda (plantation) culture is central to any visit — tour working plantations, taste raw cacao, and bring home Claudio Corallo chocolate, considered among the world's finest.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Malaria prophylaxis is essential — the islands are in a malaria zone. Yellow fever vaccination is required if arriving from a yellow fever country. Bring repellent and cover up at dusk.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs exist in São Tomé City but can be unreliable. Bring euros as backup — they are widely accepted. Card payments work at larger hotels and restaurants. Carry cash for markets and smaller towns.",
      },
      {
        icon: "🌿",
        title: "Biodiversity",
        text: "Both islands are classified as a global biodiversity hotspot — the Obô Natural Park covers the interior of São Tomé with primary rainforest, endemic birds, and rare flora. Príncipe's forest is even more intact.",
      },
      {
        icon: "🐋",
        title: "Humpback Whales",
        text: "Between June and September, humpback whales pass through the Gulf of Guinea waters around the islands — boat-based whale watching is available from both islands.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "The islands have a tropical climate with two dry seasons: the main gravana (June–September) and a shorter dry spell (December–February). The wet season (October–May) brings heavy rain to the interior but the coast often stays sunny.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "São Tomé island has a network of paved and dirt roads accessible by taxi and rental car. Príncipe is reached by a short domestic flight from São Tomé. Both islands are small — no location is more than a few hours' drive.",
      },
      {
        icon: "🏝️",
        title: "Príncipe",
        text: "The smaller island of Príncipe is a UNESCO Biosphere Reserve — wilder, more forested, and even less visited than São Tomé. Bom Bom Island Resort is the primary base, with extraordinary beaches and forest.",
      },
      {
        icon: "📶",
        title: "Connectivity",
        text: "Mobile coverage and internet are available in São Tomé City and along main roads. Coverage weakens in the Obô interior. Príncipe has limited connectivity outside the resort. Embrace being off-grid.",
      },
    ],
    seeSubtitle:
      "Colonial fazendas draped in jungle, the volcanic Pico de São Tomé, black sand beaches, Príncipe's intact rainforest, the Rolas Equator crossing, and the extraordinary endemic bird life.",
    see: [
      {
        name: "Obô Natural Park",
        title: "Primary Rainforest of the Gulf of Guinea",
        desc: "The forested interior of São Tomé — primary equatorial rainforest covering the slopes of Pico de São Tomé, sheltering endemic sunbirds, ibis, giant tree ferns, and orchids found nowhere else on Earth.",
        tag: "Nature - Rainforest",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Obô Natural Park rainforest São Tomé",
      },
      {
        name: "Roça Sundy, Príncipe",
        title: "The Fazenda Where Einstein Was Proved Right",
        desc: "A historic plantation on Príncipe where the 1919 solar eclipse expedition confirmed Einstein's theory of general relativity. Now a luxury heritage property in the forest — extraordinary history in an extraordinary setting.",
        tag: "Heritage - Historic Fazenda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Volubilis_Longshot_II.jpg/1280px-Volubilis_Longshot_II.jpg",
        alt: "Roça Sundy Príncipe plantation Einstein eclipse",
      },
      {
        name: "Pico de São Tomé",
        title: "Roof of the Archipelago",
        desc: "The highest point in the Gulf of Guinea at 2,024m — a challenging two-day guided trek through cloudforest, past giant tree ferns and endemic flora, to a peak frequently shrouded in mist.",
        tag: "Hiking - Volcano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Pico de São Tomé summit cloudforest hike",
      },
      {
        name: "Praia Jalé",
        title: "Leatherback Turtle Nesting Beach",
        desc: "One of the most important leatherback sea turtle nesting beaches in the eastern Atlantic — a long, remote black sand beach where turtles come ashore at night between September and March.",
        tag: "Wildlife - Turtles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Praia Jalé leatherback turtle nesting São Tomé",
      },
      {
        name: "São Tomé City",
        title: "Colonial Capital on the Equatorial Gulf",
        desc: "A compact colonial city of Portuguese-African architecture — the cathedral, the fort, the central market, and the waterfront lined with brightly painted buildings and fishing pirogues.",
        tag: "Capital - Colonial",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Asmara_City_Center.jpg/1280px-Asmara_City_Center.jpg",
        alt: "São Tomé city colonial capital Gulf of Guinea",
      },
      {
        name: "Príncipe Island",
        title: "UNESCO Biosphere and Last Eden",
        desc: "The smaller, wilder sibling — a UNESCO Biosphere Reserve of extraordinary intact rainforest, deserted beaches, crystal water, and a forest that has barely changed since the Portuguese landed in 1471.",
        tag: "Island - UNESCO",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Príncipe island UNESCO biosphere rainforest",
      },
      {
        name: "Ilhéu das Rolas",
        title: "The Equator Island",
        desc: "A tiny island just south of São Tomé where the Equator marker stands — swim in two hemispheres simultaneously and explore the small resort island's beaches and reef.",
        tag: "Geography - Equator",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Reef_snorkeler.jpg/1280px-Reef_snorkeler.jpg",
        alt: "Ilhéu das Rolas equator marker São Tomé",
      },
      {
        name: "Roça Monte Café",
        title: "The Great Coffee Plantation",
        desc: "One of the islands' most atmospheric abandoned fazendas — a vast coffee and cacao estate deep in the forest interior, with crumbling colonial-era infrastructure and a living museum of plantation history.",
        tag: "Heritage - Fazenda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Volubilis_Longshot_II.jpg/1280px-Volubilis_Longshot_II.jpg",
        alt: "Roça Monte Café plantation heritage São Tomé",
      },
      {
        name: "Praia Pesqueira",
        title: "Black Sand and Fishing Culture",
        desc: "A black volcanic sand beach near São Tomé city where traditional dugout pirogues are launched at dawn — the most atmospheric morning scene on the island, with fresh fish sold at the water's edge.",
        tag: "Culture - Fishing",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Praia Pesqueira fishing pirogues black sand São Tomé",
      },
      {
        name: "Endemic Sunbirds",
        title: "The Island's Extraordinary Birdlife",
        desc: "São Tomé and Príncipe together hold 28 endemic bird species — the Newton's sunbird, São Tomé ibis, São Tomé fiscal, and Príncipe kingfisher are among the most sought-after island endemics in Africa.",
        tag: "Birding - Endemic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Endemic sunbird birdwatching São Tomé Príncipe",
      },
    ],
    doSubtitle:
      "Fazenda chocolate tastings, turtle night watches at Jalé, Pico de São Tomé summit, whale watching, endemic birding in Obô, and the Equator crossing at Ilhéu das Rolas.",
    do: [
      {
        title: "Claudio Corallo Chocolate Tour",
        desc: "Visit the Claudio Corallo plantation and factory in São Tomé — taste single-origin chocolate made on-site from cacao grown on the islands, considered by connoisseurs to be among the world's finest.",
        tag: "Culinary - Cacao",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Claudio Corallo chocolate cacao tour São Tomé",
      },
      {
        title: "Leatherback Turtle Night Watch",
        desc: "Join rangers on Praia Jalé at night to watch leatherback sea turtles come ashore, excavate their nest, and lay eggs — one of the Gulf of Guinea's most moving wildlife experiences.",
        tag: "Wildlife - Turtles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Leatherback turtle night watch Jalé beach",
      },
      {
        title: "Pico de São Tomé Summit Trek",
        desc: "A demanding two-day guided trek through the Obô primary forest to the 2,024m summit — endemic birds, giant ferns, and the extraordinary mossy cloudforest of the upper slopes.",
        tag: "Hiking - Summit",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Pico São Tomé summit trek cloudforest",
      },
      {
        title: "Humpback Whale Watching",
        desc: "Boat into the Gulf of Guinea between June and September to observe humpback whales — breaching, tail-slapping, and singing in waters that very few whale-watching boats share.",
        tag: "Marine - Whales",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Reef_snorkeler.jpg/1280px-Reef_snorkeler.jpg",
        alt: "Humpback whale watching Gulf of Guinea São Tomé",
      },
      {
        title: "Obô Forest Endemic Bird Walk",
        desc: "A guided dawn walk into the Obô Natural Park with a specialist birding guide — targeting the São Tomé ibis, Newton's sunbird, and giant weaver in their primary forest habitat.",
        tag: "Birding - Obô",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Obô forest birding endemic walk São Tomé",
      },
      {
        title: "Fazenda Trail Circuit",
        desc: "Cycle or walk the fazenda trail connecting Monte Café, Agostinho Neto, and other plantation ruins — a journey through the islands' colonial history in a landscape reclaimed by forest.",
        tag: "Heritage - Fazendas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Volubilis_Longshot_II.jpg/1280px-Volubilis_Longshot_II.jpg",
        alt: "Fazenda plantation trail heritage São Tomé",
      },
      {
        title: "Equator Crossing at Ilhéu das Rolas",
        desc: "Take a boat to the Equator island and stand astride 0° latitude — swim in the Atlantic simultaneously in the northern and southern hemispheres.",
        tag: "Geography - Equator",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Reef_snorkeler.jpg/1280px-Reef_snorkeler.jpg",
        alt: "Equator crossing Ilhéu das Rolas São Tomé",
      },
      {
        title: "Príncipe Island Explore",
        desc: "Take the short domestic flight to Príncipe — a UNESCO Biosphere island of extraordinary beaches, intact primary forest, and the extraordinary Roça Sundy where Einstein's relativity was confirmed.",
        tag: "Island - Príncipe",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Príncipe island explore biosphere UNESCO",
      },
      {
        title: "Snorkel the Gulf of Guinea Reefs",
        desc: "The waters around both islands hold healthy coral reefs with good visibility — mask and snorkel accessible from multiple beaches, with no crowds and exceptional marine life.",
        tag: "Marine - Snorkel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Reef_snorkeler.jpg/1280px-Reef_snorkeler.jpg",
        alt: "Snorkelling reef Gulf of Guinea São Tomé",
      },
      {
        title: "Tchiloli Performance",
        desc: "Watch a Tchiloli — the extraordinary Santomean masked theatre tradition, a Portuguese medieval drama reinterpreted through African performance, costume, and music unique to these islands.",
        tag: "Culture - Theatre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Tchiloli masked theatre tradition São Tomé",
      },
    ],
    eatSubtitle:
      "Santomean cuisine is a rich fusion of Portuguese and West African — fresh Atlantic seafood, calulu fish stew, cacao in every form, and the island's remarkable tropical fruit.",
    eat: [
      {
        category: "National Dish",
        name: "Calulu de Peixe",
        desc: "The soul of Santomean cooking — fresh Atlantic fish slow-cooked with palm oil, dried shrimp, okra, tomatoes, and breadfruit leaves. Rich, deeply flavoured, and unique to these islands.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Calulu de peixe fish stew São Tomé",
      },
      {
        category: "Plantation Legacy",
        name: "Raw Cacao and Claudio Corallo Chocolate",
        desc: "Crack open a fresh cacao pod and taste the sweet pulp around the bitter seeds — then follow with a square of Claudio Corallo single-origin dark chocolate, one of the world's great artisan chocolates.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Raw cacao Claudio Corallo chocolate São Tomé",
      },
      {
        category: "Street Classic",
        name: "Grilled Barracuda and Banana",
        desc: "Fresh barracuda, wahoo, or dorado grilled over charcoal and served with boiled green banana and malagueta pepper sauce — the definitive casual lunch of the island coast.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled barracuda fish banana São Tomé",
      },
      {
        category: "Tropical Fruit",
        name: "Jackfruit, Breadfruit and Papaya",
        desc: "The islands are draped in tropical fruit — jackfruit eaten ripe or cooked green, breadfruit boiled or roasted, papaya at every breakfast table. All available from roadside stalls at negligible cost.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Tropical fruit jackfruit breadfruit papaya São Tomé",
      },
      {
        category: "Drink",
        name: "Caipirinha de Cana and Sumo de Fruta",
        desc: "The local sugar cane spirit (cana) is the island's cachaca — drunk as caipirinha or neat. Fresh-pressed fruit juice of passion fruit, guava, and soursop is the perfect non-alcoholic alternative.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Cana caipirinha fruit juice drink São Tomé",
      },
    ],
    staySubtitle:
      "São Tomé City for arrivals; Praia Jalé for turtle beaches; Obô interior ecolodges; Príncipe's Bom Bom Resort for the second island.",
    stay: [
      {
        type: "Capital Base",
        area: "São Tomé City",
        desc: "The capital has the best range of accommodation — from the historic Pestana Equador to boutique guesthouses in the colonial quarter, all within walking distance of the waterfront.",
        picks: ["Pestana Equador", "Miramar by Pestana", "Colonial quarter guesthouses"],
      },
      {
        type: "Turtle Beach",
        area: "Praia Jalé",
        desc: "The Jalé Ecolodge sits directly on the turtle nesting beach — basic bungalows with nightly ranger-guided turtle watches between September and March.",
        picks: ["Jalé Ecolodge", "Beach bungalows", "Community eco-stay"],
      },
      {
        type: "Forest Interior",
        area: "Obô / Monte Café",
        desc: "Simple forest lodges and guesthouses near the Obô National Park boundary — ideal for early morning birding and fazenda trail access.",
        picks: ["Omali Lodge", "Fazenda ecolodges", "Monte Café guesthouses"],
      },
      {
        type: "Príncipe Island",
        area: "Príncipe",
        desc: "Bom Bom Island Resort is the primary accommodation on Príncipe — a small-scale luxury eco-lodge on its own island connected by footbridge to the main island.",
        picks: ["Bom Bom Island Resort", "Roça Sundy rooms", "Príncipe guesthouses"],
      },
      {
        type: "South Coast",
        area: "Praia Grande / Rolas",
        desc: "The south coast has several boutique properties with direct beach access — and the Ilhéu das Rolas resort sits directly on the Equator.",
        picks: ["Ilhéu das Rolas Resort", "Praia Grande lodge", "South coast eco-bungalows"],
      },
    ],
    map: {
      center: [0.3, 6.7],
      zoom: 10.5,
      seeSpots: [
        { lat: 0.2, lng: 6.56, name: "Obô Natural Park", desc: "Primary rainforest endemic birds" },
        { lat: 1.63, lng: 7.4, name: "Roça Sundy, Príncipe", desc: "Einstein eclipse fazenda" },
        { lat: 0.27, lng: 6.57, name: "Pico de São Tomé", desc: "2,024m cloudforest summit" },
        { lat: -0.07, lng: 6.47, name: "Praia Jalé", desc: "Leatherback turtle nesting" },
        { lat: 0.3366, lng: 6.7273, name: "São Tomé City", desc: "Colonial capital waterfront" },
        { lat: 1.6, lng: 7.4, name: "Príncipe Island", desc: "UNESCO biosphere rainforest" },
        { lat: 0.0, lng: 6.53, name: "Ilhéu das Rolas", desc: "Equator crossing island" },
        { lat: 0.28, lng: 6.62, name: "Roça Monte Café", desc: "Historic coffee plantation" },
      ],
      doSpots: [
        { lat: 0.33, lng: 6.72, name: "Chocolate Tour", desc: "Claudio Corallo fazenda" },
        { lat: -0.07, lng: 6.47, name: "Turtle Night Watch", desc: "Jalé ranger patrol" },
        { lat: 0.27, lng: 6.57, name: "Summit Trek", desc: "Pico 2-day hike" },
        { lat: 0.2, lng: 6.6, name: "Whale Watching", desc: "Gulf of Guinea Jun–Sep" },
        { lat: 0.2, lng: 6.56, name: "Birding Walk", desc: "Obô endemic species" },
        { lat: 0.0, lng: 6.53, name: "Equator Cross", desc: "Rolas island 0°" },
      ],
      staySpots: [
        { lat: 0.3366, lng: 6.7273, name: "São Tomé City", desc: "Capital hotels" },
        { lat: -0.07, lng: 6.47, name: "Praia Jalé", desc: "Jalé Ecolodge" },
        { lat: 0.28, lng: 6.62, name: "Obô Area", desc: "Forest lodges" },
        { lat: 1.6, lng: 7.4, name: "Príncipe", desc: "Bom Bom Resort" },
        { lat: 0.0, lng: 6.53, name: "Rolas / South", desc: "Equator resort" },
      ],
    },
    dayTrips: [
      {
        title: "Fazenda Circuit — Monte Café and Agostinho Neto",
        subtitle: "A half-day drive through the forested interior linking two of the island's most atmospheric abandoned plantation estates — colonial-era machinery, vast warehouses reclaimed by jungle, and the extraordinary plantation landscape of the Gulf of Guinea.",
        tag: "Heritage - São Tomé Half Day",
        distance: "~25km from São Tomé City",
        duration: "Half day (4–5 hours)",
        transport: "Taxi or rental car",
        steps: [
          { time: "7AM", text: "Depart São Tomé City heading northwest into the forest interior on the Monte Café road." },
          { time: "8AM", text: "Arrive Roça Monte Café — explore the vast coffee warehouse, colonial manager's house, and workers' quarters." },
          { time: "9AM", text: "Walk the plantation paths — coffee trees still fruit wild among the secondary forest." },
          { time: "10AM", text: "Continue to Roça Agostinho Neto — an even larger estate with a dramatic palm-lined avenue and hospital ruins." },
          { time: "11:30AM", text: "Return to São Tomé City via the coast road with a stop at Praia Pesqueira for fresh fish at the morning market." },
        ],
      },
      {
        title: "Praia Jalé Turtle Beach",
        subtitle: "The finest beach on São Tomé's south coast — a long arc of black volcanic sand backed by primary forest, with the Jalé Ecolodge, snorkelling on the reef, and leatherback turtle nesting (September to March).",
        tag: "Wildlife + Beach - São Tomé Full Day",
        distance: "~60km from São Tomé City",
        duration: "Full day (8 hours)",
        transport: "Taxi or rental car",
        steps: [
          { time: "7AM", text: "Drive south from São Tomé City through the forest toward the south coast." },
          { time: "9AM", text: "Arrive Praia Jalé — meet the ecolodge rangers and walk the length of the black sand beach." },
          { time: "10AM", text: "Snorkel the reef off the south end of the beach — good coral and fish life in clear water." },
          { time: "12PM", text: "Lunch at the Jalé Ecolodge — calulu or grilled fish under the palms." },
          { time: "2PM", text: "Afternoon swim and forest walk at the beach's northern end — look for São Tomé ibis in the canopy." },
          { time: "4PM", text: "Return to São Tomé City. (Sep–Mar: consider staying overnight for a turtle night watch with rangers.)" },
        ],
      },
      {
        title: "Ilhéu das Rolas — The Equator Island",
        subtitle: "A short boat ride to the tiny island that straddles 0° latitude — swim in two hemispheres, snorkel the surrounding reef, and stand at the exact geometric centre of Earth's geography in perfect Atlantic solitude.",
        tag: "Geography - Full Day Boat",
        distance: "~7km south of São Tomé main island",
        duration: "Full day (6–7 hours)",
        transport: "Boat from south coast",
        steps: [
          { time: "8AM", text: "Drive or taxi to Praia das Conchas on the south coast for the Rolas boat." },
          { time: "8:30AM", text: "Short boat crossing to Ilhéu das Rolas — the Equator marker visible from the dock." },
          { time: "9AM", text: "Stand astride the Equator — photograph the marker with one foot in each hemisphere." },
          { time: "10AM", text: "Snorkel the reef around the island — exceptional visibility and unspoiled coral heads." },
          { time: "12PM", text: "Lunch at the Rolas Resort restaurant — fresh seafood on the Equator." },
          { time: "2PM", text: "Afternoon on the beach before the return boat to the main island." },
        ],
      },
      {
        title: "Príncipe Island Day Flight",
        subtitle: "A full day on the wilder second island — land at the tiny airstrip, drive to the extraordinary Roça Sundy where Einstein's theory was proved, swim at Praia Banana, and return on the evening flight.",
        tag: "Island - Full Day Príncipe",
        distance: "45-minute domestic flight from São Tomé",
        duration: "Full day (10 hours on island)",
        transport: "STP Airways domestic flight",
        steps: [
          { time: "7AM", text: "Morning domestic flight from São Tomé to Príncipe airstrip — book via STP Airways or resort." },
          { time: "8AM", text: "Arrive Príncipe and begin the drive north to Roça Sundy — the plantation where the 1919 eclipse confirmed general relativity." },
          { time: "9:30AM", text: "Explore the fazenda, the eclipse plaque, and the surrounding primary forest." },
          { time: "11AM", text: "Drive to Praia Banana — one of the most photographed beaches in Africa, an arc of white sand and jungle." },
          { time: "12PM", text: "Swim and picnic on Praia Banana." },
          { time: "2PM", text: "Optional: Bom Bom Island Resort visit for a drink before the return drive to the airstrip." },
          { time: "5PM", text: "Evening flight back to São Tomé." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A one-week São Tomé route covering the city, fazenda heritage, Obô birding, Jalé turtle beach, and the Equator crossing.",
        arrival: {
          route: "Your City -> São Tomé (TMS) via Lisbon or Luanda",
          meta: "São Tomé connects via Lisbon (TAP Air Portugal), Luanda (TAAG), and Addis Ababa (Ethiopian Airlines). Most European travellers route through Lisbon.",
          sideTitle: "Airlines",
          sideCopy: "TAP Air Portugal, TAAG Angola, Ethiopian Airlines, Cabo Verde Airlines",
        },
        days: [
          {
            name: "Arrival",
            title: "São Tomé City Introduction",
            location: "São Tomé City",
            activities: [
              { time: "PM", text: "Arrive TMS, check into colonial quarter hotel." },
              { time: "Night", text: "Waterfront walk and first calulu de peixe dinner." },
            ],
          },
          {
            name: "City",
            title: "City Day and Cacao",
            location: "São Tomé City",
            activities: [
              { time: "AM", text: "Central market, fort, and colonial cathedral circuit." },
              { time: "PM", text: "Claudio Corallo chocolate tour and tasting." },
            ],
          },
          {
            name: "Fazendas",
            title: "Plantation Interior",
            location: "Monte Café / Agostinho Neto",
            activities: [
              { time: "AM", text: "Drive to Monte Café and Agostinho Neto fazendas." },
              { time: "PM", text: "Forest walk and return via Praia Pesqueira fishing beach." },
            ],
          },
          {
            name: "Birding",
            title: "Obô Forest and Endemic Birds",
            location: "Obô Natural Park",
            activities: [
              { time: "AM", text: "Pre-dawn birding walk in the Obô forest with specialist guide." },
              { time: "PM", text: "Afternoon rest and waterfront lunch." },
            ],
          },
          {
            name: "South",
            title: "Praia Jalé South Coast",
            location: "Praia Jalé",
            activities: [
              { time: "AM", text: "Drive to the south coast — Jalé beach, snorkel, and forest walk." },
              { time: "Night", text: "Overnight at Jalé Ecolodge for turtle night watch (Sep–Mar)." },
            ],
          },
          {
            name: "Equator",
            title: "Ilhéu das Rolas",
            location: "Equator Island",
            activities: [
              { time: "AM", text: "Boat to Rolas island — Equator crossing and reef snorkel." },
              { time: "PM", text: "Lunch on the Equator, afternoon return to São Tomé City." },
            ],
          },
          {
            name: "Departure",
            title: "Final Morning and Fly Out",
            location: "TMS",
            activities: [
              { time: "AM", text: "Final market walk and waterfront breakfast." },
              { time: "PM", text: "International departure from TMS." },
            ],
          },
        ],
        departure: {
          route: "São Tomé (TMS) -> Your City",
          meta: "Most connections route via Lisbon or Luanda. Evening departures are most common.",
          sideTitle: "Tip",
          sideCopy: "Visit between September and March for sea turtle nesting at Praia Jalé.",
        },
      },
      "10": {
        summary: "Ten days adding a Príncipe island visit, the Pico de São Tomé summit trek, and deeper plantation exploration.",
        arrival: {
          route: "Your City -> São Tomé (TMS)",
          meta: "Same routing as seven days — allocate two days for Príncipe and two days for the Pico trek.",
          sideTitle: "Route",
          sideCopy: "TMS -> City -> Fazendas -> Obô birding -> Pico trek (2 days) -> Jalé -> Rolas -> Príncipe (2 days) -> TMS",
        },
        days: [
          { name: "Arrival", title: "São Tomé City", location: "São Tomé City", activities: [{ time: "PM", text: "Arrive and check in." }, { time: "Night", text: "Waterfront and calulu dinner." }] },
          { name: "City", title: "City and Chocolate", location: "São Tomé City", activities: [{ time: "AM", text: "Fort, market, and cathedral." }, { time: "PM", text: "Claudio Corallo tour." }] },
          { name: "Fazendas", title: "Plantation Circuit", location: "Interior", activities: [{ time: "AM", text: "Monte Café and Agostinho Neto fazendas." }, { time: "PM", text: "Forest walk and fishing beach return." }] },
          { name: "Pico Day 1", title: "Pico Trek — Base Camp", location: "Obô Forest", activities: [{ time: "AM", text: "Begin guided two-day Pico ascent through Obô rainforest." }, { time: "PM", text: "Camp in forest clearing at altitude." }] },
          { name: "Pico Day 2", title: "Pico Summit and Descent", location: "Pico de São Tomé", activities: [{ time: "AM", text: "Summit at 2,024m — cloudforest endemic birds throughout." }, { time: "PM", text: "Descent and return to São Tomé City." }] },
          { name: "South", title: "Praia Jalé and Rolas", location: "South Coast", activities: [{ time: "AM", text: "Jalé beach, snorkel, and forest walk." }, { time: "PM", text: "Rolas equator crossing." }] },
          { name: "Rest", title: "Birding and Rest Day", location: "São Tomé", activities: [{ time: "AM", text: "Pre-dawn Obô birding session." }, { time: "PM", text: "Rest, beach, and local market." }] },
          { name: "Príncipe 1", title: "Fly to Príncipe", location: "Príncipe", activities: [{ time: "AM", text: "Domestic flight to Príncipe." }, { time: "PM", text: "Roça Sundy and Praia Banana." }] },
          { name: "Príncipe 2", title: "Príncipe Forest and Reefs", location: "Príncipe", activities: [{ time: "AM", text: "Forest endemic birding with Príncipe guide." }, { time: "PM", text: "Snorkel and return flight to São Tomé." }] },
          { name: "Departure", title: "Final Day and Fly Out", location: "TMS", activities: [{ time: "AM", text: "Market, cacao, and final waterfront." }, { time: "PM", text: "International departure." }] },
        ],
        departure: {
          route: "São Tomé (TMS) -> Your City",
          meta: "Allow buffer for the Príncipe domestic flight — occasional delays.",
          sideTitle: "Planning",
          sideCopy: "Pico trek permits and guides must be arranged in advance through the Obô Natural Park office or a specialist operator.",
        },
      },
    },
    footerLine1: "Discover São Tomé & Príncipe - Chocolate islands, turtle beaches, cloudforest, and the Equator in the Gulf of Guinea",
    footerLine2: "Malaria prophylaxis essential. Arrange Pico trek permits in advance. Visit Sep–Mar for sea turtle nesting.",
  },

  republic_congo: {
    country: "Republic of the Congo",
    heroEyebrow: "Central Africa - Heart of the Congo Basin",
    heroTitleHtml: "Republic of<br>the <em>Con</em>go",
    heroTagline:
      "Not to be confused with its vast neighbour across the river — the Republic of the Congo is a country of extraordinary wildlife, the western lowland gorilla heartland of Odzala-Kokoua, forest elephants, the Congo River at Brazzaville, and the wild beaches and lagoons of the Conkouati coast.",
    heroStats: [
      { label: "Capital", value: "Brazzaville" },
      { label: "Currency", value: "XAF (CFA Franc)" },
      { label: "Language", value: "French, Lingala, Kituba" },
      { label: "Time Zone", value: "UTC+1" },
    ],
    knowSubtitle:
      "The Republic of the Congo rewards those who seek genuine wilderness — Odzala-Kokoua is one of Africa's great gorilla destinations, and the country's forests hold some of the most intact Congo Basin habitat remaining on Earth.",
    know: [
      {
        icon: "🛂",
        title: "Visa",
        text: "A visa is required for most nationalities and should be obtained in advance from a Congolese embassy. Specialist operators can assist with arrangements. Allow adequate processing time.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever vaccination is required. Malaria prophylaxis is essential throughout. Typhoid, hepatitis A, and cholera vaccinations are strongly recommended. Medical evacuation cover is essential.",
      },
      {
        icon: "🦍",
        title: "Gorillas",
        text: "Odzala-Kokoua National Park holds one of the world's most important western lowland gorilla populations, with habituated family groups accessible through specialist lodges — among Africa's finest gorilla experiences.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs exist in Brazzaville and Pointe-Noire. Cash is essential outside the cities. USD and EUR can be exchanged at banks. Card payments work at major hotels but not elsewhere.",
      },
      {
        icon: "🌿",
        title: "Forest Cover",
        text: "Over 65% of the Republic of the Congo is covered in forest — much of it primary Congo Basin rainforest. The country forms the northern arc of the Congo Basin with Cameroon and Gabon to the west.",
      },
      {
        icon: "🐘",
        title: "Forest Elephants",
        text: "The country's forests hold significant forest elephant populations — Odzala, Nouabalé-Ndoki, and the Likouala swamp forests are key habitats. Bai clearings provide the best viewing opportunities.",
      },
      {
        icon: "🏙️",
        title: "Brazzaville",
        text: "Brazzaville is one of Africa's most interesting capitals — directly facing Kinshasa across the Congo River (the two closest capital cities on Earth), with a vibrant music scene, the famous Poto-Poto painters, and the Congo River.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Brazzaville and Pointe-Noire are the main entry airports. Odzala requires a charter flight from Brazzaville. Road infrastructure is variable — 4x4 is standard outside the cities.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "Two dry seasons (June–September and December–February). The long dry season is best for wildlife — forest is more passable and bais are most active. The wet season makes some areas inaccessible.",
      },
      {
        icon: "📶",
        title: "Connectivity",
        text: "Good mobile coverage in Brazzaville and Pointe-Noire. Very limited outside cities. Odzala and remote areas operate with satellite communications. Prepare to be off-grid for any wilderness visit.",
      },
    ],
    seeSubtitle:
      "Western lowland gorillas at Odzala's forest clearings, forest elephants at Mboko bai, Brazzaville across the Congo from Kinshasa, the wild Conkouati coast, and the extraordinary Likouala swamp forests.",
    see: [
      {
        name: "Odzala-Kokoua National Park",
        title: "Western Lowland Gorilla Heartland",
        desc: "One of Africa's most biodiverse national parks — habituated western lowland gorilla families, forest elephants at bai clearings, bongo, sitatunga, and an extraordinary birdlist in intact Congo Basin rainforest.",
        tag: "Wildlife - Premier",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Odzala-Kokoua western lowland gorilla Congo",
      },
      {
        name: "Mboko Bai Clearing",
        title: "Forest Elephants at the Mineral Lick",
        desc: "A natural forest clearing within Odzala where forest elephants, bongo, sitatunga, and forest buffalo gather to mineral-lick — watched from a raised platform in complete forest stillness.",
        tag: "Wildlife - Bai",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Mboko bai forest elephant clearing Odzala Congo",
      },
      {
        name: "Brazzaville",
        title: "The Two-Capital Congo River View",
        desc: "A surprisingly lively capital on the Congo River — Kinshasa visible across the water (the world's two closest capitals), the Poto-Poto School of Painters, the Basilique Sainte-Anne, and the extraordinary river life.",
        tag: "Capital - Congo River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Brazzaville Congo River capital Kinshasa view",
      },
      {
        name: "Conkouati-Douli National Park",
        title: "Atlantic Coast Wild Beaches and Lagoons",
        desc: "A remarkable coastal park south of Pointe-Noire — pristine Atlantic beaches, mangrove lagoons, chimpanzees, western lowland gorillas, leatherback turtle nesting, and hippos in the coastal streams.",
        tag: "Wildlife - Coastal",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Conkouati coast Atlantic wild beach Congo",
      },
      {
        name: "Nouabalé-Ndoki National Park",
        title: "The Last Place on Earth",
        desc: "A remote wilderness park in the far north — designated the 'Last Place on Earth' by conservationists, with chimpanzees that had never seen humans when first studied and an extraordinary intact forest ecosystem.",
        tag: "Wildlife - Remote",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Nouabalé-Ndoki last place earth Congo forest",
      },
      {
        name: "Pointe-Noire",
        title: "Atlantic Oil City and Beach Town",
        desc: "The country's second city and economic hub on the Atlantic — Côte Sauvage beaches, the Alliance Française arts scene, fresh Atlantic seafood, and the gateway to Conkouati.",
        tag: "City - Atlantic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dakar_from_above.jpg/1280px-Dakar_from_above.jpg",
        alt: "Pointe-Noire Atlantic city Congo coast",
      },
      {
        name: "Likouala Swamp Forests",
        title: "The World's Largest Tropical Swamp",
        desc: "The vast flooded forests of the Likouala — one of the world's largest tropical swamp systems, largely unexplored, sheltering forest elephants, hippos, and extraordinary aquatic diversity.",
        tag: "Nature - Swamp",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Likouala swamp forest Congo vast wetland",
      },
      {
        name: "Gorilla Habituation Programme",
        title: "Witnessing the Process of Trust",
        desc: "Odzala's Primate Habituation Experience allows visitors to observe the long-term process of habituating wild gorilla groups — a unique window into conservation science in action.",
        tag: "Wildlife - Habituation",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Gorilla habituation programme Odzala Congo",
      },
      {
        name: "Poto-Poto School of Painters",
        title: "Brazzaville's Living Art Tradition",
        desc: "Founded in 1951, the Poto-Poto School has shaped Central African visual art — living artists still paint in the original courtyard, producing vivid work rooted in Congolese daily life.",
        tag: "Culture - Art",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexandria%27s_Bibliotheca.jpg/1280px-Alexandria%27s_Bibliotheca.jpg",
        alt: "Poto-Poto painters school Brazzaville Congo art",
      },
      {
        name: "Djéké Triangle",
        title: "Forest Buffalo and Bongo Country",
        desc: "A remote forest zone within the Odzala ecosystem — one of the best places in Central Africa to see forest buffalo herds and the elusive bongo at forest clearings.",
        tag: "Wildlife - Forest",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Djéké triangle forest buffalo bongo Congo",
      },
    ],
    doSubtitle:
      "Tracking habituated gorilla families in Odzala, watching forest elephants at Mboko Bai, Congo River sunset from Brazzaville, Conkouati turtle beach patrol, and the Poto-Poto art quarter.",
    do: [
      {
        title: "Gorilla Family Trek, Odzala",
        desc: "Track habituated western lowland gorilla families through the Odzala forest with specialist guides — intimate family encounters in pristine Congo Basin rainforest, one of the finest gorilla experiences in Africa.",
        tag: "Wildlife - Gorillas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Gorilla family trek Odzala Congo lowland",
      },
      {
        title: "Mboko Bai Platform Watch",
        desc: "Spend the day on the observation platform above Mboko Bai — forest elephants, bongo, and sitatunga moving through the clearing in the extraordinary stillness of the Congo forest.",
        tag: "Wildlife - Bai",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Mboko bai platform elephant watch Odzala",
      },
      {
        title: "Congo River Sunset, Brazzaville",
        desc: "Watch the sun set over the Congo River from the Brazzaville waterfront — the vast river traffic, the Kinshasa skyline across the water, and the most powerful river in Africa at its most dramatic.",
        tag: "City - Brazzaville",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Congo River sunset Brazzaville waterfront",
      },
      {
        title: "Poto-Poto Painters Visit",
        desc: "Visit the Poto-Poto School of Painters in Brazzaville — one of Africa's most important living art institutions, where artists have painted in the same courtyard for over 70 years.",
        tag: "Culture - Art",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexandria%27s_Bibliotheca.jpg/1280px-Alexandria%27s_Bibliotheca.jpg",
        alt: "Poto-Poto school painters visit Brazzaville",
      },
      {
        title: "Conkouati Turtle Beach Patrol",
        desc: "Join rangers on Conkouati's pristine Atlantic beach at night for leatherback and olive ridley sea turtle nesting patrols — one of West-Central Africa's most important turtle coasts.",
        tag: "Wildlife - Turtles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Conkouati turtle beach patrol night Congo",
      },
      {
        title: "Chimpanzee Tracking, Odzala",
        desc: "Follow specialist trackers through Odzala's forest to locate chimpanzee communities — interpreting nest sites, calls, and tracks to understand these extraordinary primates in their natural habitat.",
        tag: "Wildlife - Chimpanzees",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Chimpanzee tracking Odzala Congo forest",
      },
      {
        title: "Sangha River Pirogue, Bomassa",
        desc: "A pirogue journey along the Sangha River at the gateway to Nouabalé-Ndoki — forest elephants at the river bank, grey-cheeked mangabeys overhead, and the extraordinary acoustic world of the Congo forest.",
        tag: "Nature - River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Sangha river pirogue Bomassa Congo forest",
      },
      {
        title: "Conkouati Lagoon Boat Trip",
        desc: "Explore the coastal lagoon system at Conkouati by motorised pirogue — hippos in the channels, sitatunga at the water's edge, and the extraordinary interface of Atlantic coast and Congo Basin forest.",
        tag: "Nature - Lagoon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Conkouati lagoon boat trip hippo Congo",
      },
      {
        title: "Brazzaville Music Scene",
        desc: "The Republic of the Congo has one of Africa's great music traditions — rumba congolaise, ndombolo, and soukous. Live music bars in the Poto-Poto and Bacongo districts on weekend nights are extraordinary.",
        tag: "Culture - Music",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg/960px-Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg",
        alt: "Brazzaville music rumba soukous live Congo",
      },
      {
        title: "Night Forest Walk, Odzala",
        desc: "A torch-lit walk through the Odzala forest at night — African golden cats, giant pangolins, pottos, and the extraordinary acoustic world of the Congo Basin after dark.",
        tag: "Wildlife - Night",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Night forest walk torch Odzala Congo",
      },
    ],
    eatSubtitle:
      "Congolese food is generous and forest-centred — poulet à la moambe, saka-saka leaf stews, fresh Congo River fish, smoked meats, and a French-influenced restaurant culture in Brazzaville.",
    eat: [
      {
        category: "National Dish",
        name: "Poulet à la Moambe",
        desc: "Chicken slow-cooked in a sauce of palm butter, garlic, and spices — the defining dish of the Congo Basin, served with rice or plantain. Rich, deeply aromatic, and found everywhere from family tables to restaurant menus.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Poulet moambe palm butter chicken Congo",
      },
      {
        category: "Forest Classic",
        name: "Saka-Saka",
        desc: "Pounded cassava leaves slow-cooked with palm oil, dried fish, and ground peanuts — a foundational dish of the Congo Basin, eaten daily across the country.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Saka-saka cassava leaf stew Congo forest",
      },
      {
        category: "River Fish",
        name: "Capitaine and Ndakala",
        desc: "Congo River capitaine (Nile perch) grilled whole over charcoal, and ndakala — tiny sun-dried river fish eaten with fufu — the two great river protein traditions of Brazzaville's waterfront restaurants.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Capitaine river fish Congo Brazzaville",
      },
      {
        category: "French Legacy",
        name: "Brazzaville French Bistro",
        desc: "Brazzaville has a genuine French restaurant culture — baguettes daily, steak and frites, wine lists, and the Café de la Paix tradition of long lunches on shaded terraces.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Brazzaville French bistro restaurant Congo",
      },
      {
        category: "Drink",
        name: "Primus and Ngok",
        desc: "Primus lager (shared with the DRC across the river) is the dominant beer. Ngok is homemade palm wine — fresh-tapped and consumed quickly before it ferments further, drunk from shared containers at local bars.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Primus beer palm wine ngok Congo drink",
      },
    ],
    staySubtitle:
      "Brazzaville for arrivals and Congo River access; Odzala lodges for gorillas; Pointe-Noire for the Atlantic; Conkouati for wild coast.",
    stay: [
      {
        type: "Capital",
        area: "Brazzaville",
        desc: "Good international hotels in the Plateau and Centre Ville districts — the Radisson Blu and Kintele Complex are the main business-class options, with smaller guesthouses throughout.",
        picks: ["Radisson Blu Brazzaville", "Hotel Olympic Palace", "Centre Ville guesthouses"],
      },
      {
        type: "Gorilla Heartland",
        area: "Odzala-Kokoua NP",
        desc: "African Parks' Odzala lodges — Ngaga Camp (gorilla specialist) and Lango Camp (bai and forest) — are the only permanent accommodation within the park. Book far in advance.",
        picks: ["Ngaga Camp (African Parks)", "Lango Camp (African Parks)", "Mboko research camp"],
      },
      {
        type: "Atlantic City",
        area: "Pointe-Noire",
        desc: "Business hotels and guesthouses in the Côte Sauvage and Centre Ville area — the gateway to Conkouati and the country's main Atlantic port.",
        picks: ["Atlantic Palace Hotel", "La Côte Sauvage hotels", "City centre guesthouses"],
      },
      {
        type: "Wild Coast",
        area: "Conkouati-Douli NP",
        desc: "Very basic eco-accommodation at Conkouati — simple lodge facilities managed by the park authority and NGO operators. Book through specialist contacts.",
        picks: ["Conkouati park ecolodge", "Operator-arranged beach camp", "Diosso gorge guesthouses"],
      },
      {
        type: "River North",
        area: "Bomassa / Sangha Region",
        desc: "Basic accommodation at Bomassa village on the Sangha River — the gateway to Nouabalé-Ndoki, accessed by light aircraft or very long road from Brazzaville.",
        picks: ["Bomassa camp accommodation", "Sangha river operator lodges", "WCS-supported camp"],
      },
    ],
    map: {
      center: [-1.0, 15.5],
      zoom: 5.8,
      seeSpots: [
        { lat: 0.5, lng: 14.8, name: "Odzala-Kokoua NP", desc: "Western lowland gorilla heartland" },
        { lat: 0.4, lng: 14.7, name: "Mboko Bai", desc: "Forest elephant clearing" },
        { lat: -4.2692, lng: 15.2714, name: "Brazzaville", desc: "Congo River capital" },
        { lat: -3.8, lng: 11.5, name: "Conkouati-Douli NP", desc: "Wild Atlantic coast" },
        { lat: 2.2, lng: 16.1, name: "Nouabalé-Ndoki NP", desc: "Last Place on Earth" },
        { lat: -4.779, lng: 11.866, name: "Pointe-Noire", desc: "Atlantic city gateway" },
        { lat: 1.5, lng: 15.5, name: "Likouala Swamps", desc: "World's largest tropical swamp" },
        { lat: 0.5, lng: 14.9, name: "Djéké Triangle", desc: "Forest buffalo and bongo" },
        { lat: -4.2, lng: 15.2, name: "Poto-Poto Quarter", desc: "Brazzaville painters school" },
      ],
      doSpots: [
        { lat: 0.5, lng: 14.8, name: "Gorilla Trek", desc: "Habituated family Odzala" },
        { lat: 0.4, lng: 14.7, name: "Mboko Bai Watch", desc: "Elephant platform Odzala" },
        { lat: -4.2692, lng: 15.2714, name: "Congo River Sunset", desc: "Brazzaville waterfront" },
        { lat: -4.2, lng: 15.2, name: "Poto-Poto Painters", desc: "Art school visit" },
        { lat: -3.8, lng: 11.5, name: "Turtle Patrol", desc: "Conkouati night beach" },
        { lat: 2.1, lng: 16.05, name: "Sangha Pirogue", desc: "Bomassa river journey" },
      ],
      staySpots: [
        { lat: -4.2692, lng: 15.2714, name: "Brazzaville", desc: "Capital hotels" },
        { lat: 0.5, lng: 14.8, name: "Odzala Camps", desc: "Ngaga and Lango" },
        { lat: -4.779, lng: 11.866, name: "Pointe-Noire", desc: "Atlantic hotels" },
        { lat: -3.8, lng: 11.5, name: "Conkouati", desc: "Wild coast ecolodge" },
        { lat: 2.1, lng: 16.05, name: "Bomassa", desc: "Sangha river camp" },
      ],
    },
    dayTrips: [
      {
        title: "Congo River and Kinshasa View",
        subtitle: "A half-day exploration of the Brazzaville waterfront — the most extraordinary urban river view in Africa, with the 12-million-person city of Kinshasa visible across the water, the Congo River beach life, and the historic ferry crossing.",
        tag: "City - Brazzaville Half Day",
        distance: "Brazzaville city",
        duration: "Half day (4 hours)",
        transport: "Walking and tuk-tuk within Brazzaville",
        steps: [
          { time: "8AM", text: "Begin at the Brazzaville waterfront — the full width of the Congo River and the Kinshasa skyline across." },
          { time: "8:30AM", text: "Walk the river beach — pirogues, fishermen, and the daily river commerce of Central Africa." },
          { time: "9:30AM", text: "Poto-Poto School of Painters — watch artists at work in the same courtyard since 1951." },
          { time: "11AM", text: "Congo River beach bar lunch — fresh capitaine fish and cold Primus with the river view." },
          { time: "12:30PM", text: "Optional: the Pool Malebo ferry crossing to Kinshasa (with DRC visa) — the world's closest capital-to-capital river crossing." },
        ],
      },
      {
        title: "Diosso Gorge and Loango Coast",
        subtitle: "A spectacular ravine of red laterite clay cut by the Loango River 30km north of Pointe-Noire — extraordinary geology, coastal forest, and the wild Atlantic beach of the Loango coast just below.",
        tag: "Nature - Pointe-Noire Day Trip",
        distance: "~30km north of Pointe-Noire",
        duration: "Half day (4–5 hours)",
        transport: "Taxi or rental car",
        steps: [
          { time: "7AM", text: "Drive north from Pointe-Noire toward the Loango coast." },
          { time: "8AM", text: "Arrive the Diosso Gorge — steep red laterite walls carved by the river into the coastal plateau." },
          { time: "8:30AM", text: "Walk along the gorge rim trail — views down to the river below and the Atlantic coast beyond." },
          { time: "10AM", text: "Descend to the coast at the Loango beach — pristine wild Atlantic surf with no development." },
          { time: "11AM", text: "Walk the Loango coastal forest edge — look for forest buffalo tracks on the beach sand." },
          { time: "12PM", text: "Return to Pointe-Noire for Atlantic seafood lunch." },
        ],
      },
      {
        title: "Odzala Bai Morning Watch",
        subtitle: "An early morning walk from Lango Camp to Mboko Bai — the forest clearing where forest elephants, bongo, and sitatunga gather at first light, watched from the platform as the mist lifts off the Congo forest.",
        tag: "Wildlife - Odzala Half Day",
        distance: "~2km walk from Lango Camp",
        duration: "Half day (4–5 hours)",
        transport: "On foot with guide from Lango Camp",
        steps: [
          { time: "5AM", text: "Pre-dawn departure from Lango Camp in complete silence — the forest waking around you." },
          { time: "5:30AM", text: "Arrive Mboko Bai platform before first light — settle and listen." },
          { time: "6AM", text: "First forest elephants emerge from the treeline into the clearing as dawn breaks." },
          { time: "7AM", text: "Peak activity — forest buffalo, sitatunga, and a family of forest elephants simultaneously in the bai." },
          { time: "8:30AM", text: "Animals return to the forest as the sun rises — walk back to Lango Camp for breakfast." },
          { time: "9AM", text: "Breakfast, then afternoon gorilla trek (full day activity combination)." },
        ],
      },
      {
        title: "Conkouati Hippo Lagoon Day",
        subtitle: "A full day at the wild Conkouati coast from Pointe-Noire — lagoon boat for hippos and sitatunga, pristine Atlantic beach walk, and the extraordinary forest-coast interface of this barely-visited park.",
        tag: "Wildlife - Pointe-Noire Full Day",
        distance: "~100km north of Pointe-Noire",
        duration: "Full day (9–10 hours)",
        transport: "4x4 with guide then motor-pirogue",
        steps: [
          { time: "5:30AM", text: "Very early departure from Pointe-Noire north toward Conkouati park boundary." },
          { time: "7:30AM", text: "Arrive lagoon entry point — board motor-pirogue for the lagoon circuit." },
          { time: "8AM", text: "Hippo pod in the lagoon shallows — approach quietly by paddle for close views." },
          { time: "9:30AM", text: "Sitatunga at the lagoon forest edge and pied kingfishers on the papyrus fringe." },
          { time: "11AM", text: "Cross to the Atlantic beach — walk the wild coast with fresh tracks of sea turtles and forest buffalo." },
          { time: "1PM", text: "Picnic lunch on the beach before afternoon return drive to Pointe-Noire." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A one-week Republic of the Congo route combining Brazzaville's Congo River, Pointe-Noire, Conkouati's coast, and Odzala gorillas.",
        arrival: {
          route: "Your City -> Brazzaville (BZV) or Pointe-Noire (PNR)",
          meta: "Brazzaville connects via Paris, Addis Ababa, Casablanca, and regional African hubs. Pointe-Noire has additional connections via Douala and Libreville.",
          sideTitle: "Airlines",
          sideCopy: "Air France, Ethiopian Airlines, Royal Air Maroc, Camair-Co, Congo Airways",
        },
        days: [
          {
            name: "Arrival",
            title: "Brazzaville Introduction",
            location: "Brazzaville",
            activities: [
              { time: "PM", text: "Arrive BZV, check in and Congo River waterfront walk." },
              { time: "Night", text: "Poto-Poto quarter music bar and first moambe dinner." },
            ],
          },
          {
            name: "City",
            title: "Brazzaville Full Day",
            location: "Brazzaville",
            activities: [
              { time: "AM", text: "Poto-Poto Painters School and waterfront market." },
              { time: "PM", text: "Basilique Sainte-Anne and Congo River sunset bar." },
            ],
          },
          {
            name: "Fly",
            title: "Fly to Odzala",
            location: "Odzala-Kokoua NP",
            activities: [
              { time: "AM", text: "Charter flight to Odzala — Ngaga or Lango Camp." },
              { time: "PM", text: "Arrival forest walk and orientation." },
            ],
          },
          {
            name: "Gorillas",
            title: "Odzala Gorilla Trek",
            location: "Odzala-Kokoua NP",
            activities: [
              { time: "AM", text: "Pre-dawn departure for habituated gorilla family trek." },
              { time: "PM", text: "Mboko Bai platform watch — elephants and bongo." },
            ],
          },
          {
            name: "Forest",
            title: "Chimpanzees and Night Walk",
            location: "Odzala-Kokoua NP",
            activities: [
              { time: "AM", text: "Chimpanzee tracking with specialist guide." },
              { time: "Night", text: "Torchlit night forest walk — pangolin and golden cat territory." },
            ],
          },
          {
            name: "Coast",
            title: "Fly to Pointe-Noire — Conkouati",
            location: "Pointe-Noire",
            activities: [
              { time: "AM", text: "Charter back to Brazzaville, then domestic to Pointe-Noire." },
              { time: "PM", text: "Conkouati lagoon hippo boat trip." },
            ],
          },
          {
            name: "Departure",
            title: "Côte Sauvage and Fly Out",
            location: "PNR",
            activities: [
              { time: "AM", text: "Diosso Gorge and Loango beach morning." },
              { time: "PM", text: "International departure from PNR." },
            ],
          },
        ],
        departure: {
          route: "Pointe-Noire (PNR) or Brazzaville (BZV) -> Your City",
          meta: "Pointe-Noire has good connections via Douala and Libreville. Brazzaville has broader intercontinental options.",
          sideTitle: "Booking",
          sideCopy: "Odzala camps must be booked through African Parks well in advance — availability is limited.",
        },
      },
      "10": {
        summary: "Ten days adding deeper Odzala time, the Sangha River in the north, and more of the Conkouati wild coast.",
        arrival: {
          route: "Your City -> Brazzaville (BZV)",
          meta: "Fly into Brazzaville and use charter flights to reach Odzala and Bomassa in the north.",
          sideTitle: "Route",
          sideCopy: "BZV -> Odzala (3 nights) -> Bomassa/Sangha -> BZV -> Pointe-Noire -> Conkouati -> PNR",
        },
        days: [
          { name: "Arrival", title: "Brazzaville", location: "Brazzaville", activities: [{ time: "PM", text: "Arrive and waterfront introduction." }, { time: "Night", text: "Poto-Poto music evening." }] },
          { name: "City", title: "Brazzaville Day", location: "Brazzaville", activities: [{ time: "AM", text: "Painters school and market." }, { time: "PM", text: "Congo River sunset and moambe dinner." }] },
          { name: "Odzala 1", title: "Fly to Odzala", location: "Odzala NP", activities: [{ time: "AM", text: "Charter to Odzala." }, { time: "PM", text: "Mboko Bai evening watch." }] },
          { name: "Odzala 2", title: "Gorilla Trek", location: "Odzala NP", activities: [{ time: "AM", text: "Habituated gorilla family visit." }, { time: "PM", text: "Forest birding and night walk." }] },
          { name: "Odzala 3", title: "Chimpanzees and Bai", location: "Odzala NP", activities: [{ time: "AM", text: "Chimpanzee tracking." }, { time: "PM", text: "Full day Mboko Bai platform." }] },
          { name: "Sangha", title: "Fly to Bomassa — Sangha", location: "Bomassa", activities: [{ time: "AM", text: "Charter to Bomassa on the Sangha River." }, { time: "PM", text: "Sangha River pirogue — forest elephants at bank." }] },
          { name: "Ndoki", title: "Nouabalé-Ndoki Access", location: "Nouabalé-Ndoki", activities: [{ time: "AM", text: "Enter Nouabalé-Ndoki forest edge with WCS guide." }, { time: "PM", text: "Return to Bomassa and charter to Brazzaville." }] },
          { name: "Coast", title: "Fly to Pointe-Noire", location: "Pointe-Noire", activities: [{ time: "AM", text: "Domestic flight to Pointe-Noire." }, { time: "PM", text: "Diosso Gorge afternoon." }] },
          { name: "Conkouati", title: "Conkouati Full Day", location: "Conkouati NP", activities: [{ time: "AM", text: "Lagoon hippo pirogue and beach walk." }, { time: "PM", text: "Return to Pointe-Noire." }] },
          { name: "Departure", title: "Final Morning and Fly Out", location: "PNR", activities: [{ time: "AM", text: "Côte Sauvage beach." }, { time: "PM", text: "International departure from PNR." }] },
        ],
        departure: {
          route: "Pointe-Noire (PNR) -> Your City",
          meta: "Pointe-Noire connects via Douala and Libreville. Allow 24-hour buffer for charter logistics.",
          sideTitle: "Planning",
          sideCopy: "Nouabalé-Ndoki access requires WCS permit — arrange 3+ months ahead through specialist operators.",
        },
      },
    },
    footerLine1: "Discover the Republic of the Congo - Odzala's gorillas, Mboko Bai elephants, the Congo River, and the wild Conkouati coast",
    footerLine2: "Yellow fever required. Odzala camps book via African Parks. Medical evacuation cover essential.",
  },

  rwanda: {
    country: "Rwanda",
    heroEyebrow: "East Africa — Land of a Thousand Hills, Mountain Gorillas and the New Africa",
    heroTitleHtml: "Rwan<em>da</em>",
    heroTagline:
      "One of Africa's most extraordinary transformations — from the darkest chapter in the continent's recent history to one of its best-governed, most beautiful, and most visited destinations. Mountain gorillas in Volcanoes National Park, golden monkeys, Akagera's restored big five safari, and a rolling highland landscape of incomparable green.",
    heroStats: [
      { label: "Capital", value: "Kigali" },
      { label: "Currency", value: "RWF (Rwandan Franc)" },
      { label: "Language", value: "Kinyarwanda, English, French" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "Rwanda is one of Africa's most visitor-ready countries — clean, safe, English-speaking, and exceptionally well-organised. Gorilla permits must be booked months in advance. The country repays careful, unhurried travel.",
    know: [
      {
        icon: "🦍",
        title: "Gorilla Permits",
        text: "Mountain gorilla trekking permits cost USD 1,500 per person and must be booked well in advance through the Rwanda Development Board — often 6–12 months ahead for peak season. This is non-negotiable: no permit, no trek.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Most nationalities can obtain a visa on arrival or via the e-visa portal (irembo.gov.rw). East African Community citizens do not require a visa. The process is smooth and Rwanda's border formalities are among the most efficient in Africa.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever vaccination is required if arriving from a yellow fever endemic country. Malaria risk is present — prophylaxis recommended, particularly in lower-altitude areas. Rwanda's healthcare infrastructure is among the best in the region.",
      },
      {
        icon: "🌿",
        title: "Environment",
        text: "Rwanda banned plastic bags in 2008 — do not bring plastic bags into the country. The country is extraordinarily clean and well-maintained; the monthly Umuganda community clean-up day (last Saturday of each month) closes some areas.",
      },
      {
        icon: "🏔️",
        title: "Altitude",
        text: "Rwanda sits at high altitude — Kigali at 1,567m, Volcanoes NP up to 4,507m at Karisimbi. Gorilla trekking involves strenuous hiking at altitude through dense vegetation; a reasonable level of fitness is important.",
      },
      {
        icon: "🌦️",
        title: "Climate",
        text: "Two dry seasons: June–September (long dry, best for gorillas) and December–February (short dry). The long rains (March–May) make some trails very muddy but the landscape is at its most extraordinarily green.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs are widely available in Kigali and major towns. USD is accepted alongside Rwandan Francs at most lodges and tourist operations. Rwanda is not a budget destination — gorilla trekking and quality lodges represent significant costs.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Rwanda is tiny — Kigali to Volcanoes NP is 2.5 hours, to Akagera 2.5 hours, to Nyungwe 5 hours. Well-paved roads make self-drive feasible, but most visitors use operator transfers. Motorcycles (motos) are everywhere.",
      },
      {
        icon: "🕯️",
        title: "The Genocide Memorial",
        text: "The Kigali Genocide Memorial is a deeply important and well-presented site — a visit is an essential part of understanding Rwanda. It is emotionally demanding; allow two hours and time to reflect afterwards.",
      },
      {
        icon: "🤝",
        title: "The Rwandan People",
        text: "Rwanda has rebuilt a national identity around reconciliation, community, and collective progress that is genuinely moving. The warmth of Rwandans, and the pride they take in their country's transformation, is palpable throughout.",
      },
    ],
    seeSubtitle:
      "Mountain gorilla families in the Virunga volcanoes, the Kigali Genocide Memorial, golden monkeys in the bamboo forest, Akagera's big five, chimpanzees in Nyungwe cloud forest, and the rolling thousand hills at sunset.",
    see: [
      {
        name: "Volcanoes National Park",
        title: "Mountain Gorillas in the Virunga",
        desc: "One of the greatest wildlife experiences on Earth — trekking through dense Afromontane forest to sit for one hour with a habituated mountain gorilla family. Ten families are available for trekking, each visited by a maximum of eight people per day.",
        tag: "Wildlife - Iconic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Mountain gorilla family Volcanoes National Park Rwanda",
      },
      {
        name: "Kigali Genocide Memorial",
        title: "Remembrance, Dignity, Education",
        desc: "The most important and best-presented genocide memorial in Africa — 250,000 people are buried here, and the exhibition traces the history, events, and aftermath of the 1994 genocide with extraordinary care and respect.",
        tag: "History - Essential",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Kigali Genocide Memorial Rwanda",
      },
      {
        name: "Nyungwe Forest National Park",
        title: "Ancient Cloud Forest and Chimpanzees",
        desc: "One of Africa's oldest and most biodiverse montane forests — chimpanzees, 13 primate species including Angola colobus troops of 400+, the extraordinary canopy walkway, and some of the finest Afromontane birding on the continent.",
        tag: "Wildlife - Primate",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Nyungwe cloud forest canopy walkway Rwanda",
      },
      {
        name: "Akagera National Park",
        title: "Big Five Restored — Rwanda's Savanna",
        desc: "A remarkable conservation story — African Parks took over Akagera in 2010 and reintroduced lion and rhino, restoring the big five. The park's lakes, papyrus swamps, and savanna are beautiful and increasingly wildlife-dense.",
        tag: "Wildlife - Big Five",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Akagera National Park savanna Rwanda big five",
      },
      {
        name: "Golden Monkey Trekking",
        title: "Bamboo Forest Primates",
        desc: "The Virunga bamboo zone holds habituated groups of golden monkeys — an endemic and spectacular primate whose bright orange-gold coat against the green bamboo is one of the visual highlights of Rwanda.",
        tag: "Wildlife - Primates",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Golden monkey bamboo Volcanoes Rwanda",
      },
      {
        name: "Kigali",
        title: "The Cleanest City in Africa",
        desc: "A remarkable capital — Kigali is consistently ranked among Africa's safest, cleanest, and best-governed cities. The Kimironko market, Nyamirambo neighbourhood, the growing restaurant and cafe scene, and the hilltop views.",
        tag: "Capital - Vibrant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Kigali city hills Rwanda capital",
      },
      {
        name: "Lake Kivu",
        title: "The Riviera of Central Africa",
        desc: "A vast, high-altitude lake on the DRC border — extraordinarily beautiful, with steep green hills falling to the water, the resort town of Gisenyi/Rubavu, kayaking, and the best swimming lake in East Africa.",
        tag: "Nature - Lake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Kivu Rwanda hills water",
      },
      {
        name: "Nyamirambo, Kigali",
        title: "The Soul of the Old City",
        desc: "The oldest and most lively neighbourhood in Kigali — a Muslim trading quarter with mosque, excellent street food, women's cooperative craft workshops, and a human warmth that the newer parts of the city are still developing.",
        tag: "Culture - Kigali",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Nyamirambo neighbourhood Kigali Rwanda",
      },
      {
        name: "Musanze (Ruhengeri)",
        title: "Gateway to the Volcanoes",
        desc: "The market town at the foot of the Virunga — base for gorilla trekking, with lively markets, the Musanze Caves, and the twin lakes of Burera and Ruhondo as beautiful excursions.",
        tag: "Town - Virunga Base",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Musanze Ruhengeri Rwanda Virunga base",
      },
      {
        name: "Lakes Burera and Ruhondo",
        title: "Twin Lakes of the Volcanoes",
        desc: "Two extraordinary crater lakes below the Virunga — terraced hillsides, dugout canoes, fishing communities, and among the most beautiful lake landscapes in all of Africa.",
        tag: "Nature - Lakes",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lakes Burera Ruhondo Volcanoes Rwanda",
      },
    ],
    doSubtitle:
      "Gorilla trekking in the Virunga, the Kigali Genocide Memorial, Nyungwe canopy walkway, Akagera game drive, golden monkey trek, kayaking Lake Kivu, and the Nyamirambo women's cooperative tour.",
    do: [
      {
        title: "Mountain Gorilla Trek",
        desc: "The flagship experience of East Africa — a strenuous hike through Afromontane forest to spend one transformative hour with a habituated gorilla family. Book 6–12 months ahead through the RDB. No experience in Africa compares.",
        tag: "Wildlife - Bucket List",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Mountain gorilla trek Volcanoes Rwanda",
      },
      {
        title: "Kigali Genocide Memorial Visit",
        desc: "An essential visit — the memorial is excellently curated and deeply affecting. Allow two hours for the full exhibition and gardens. The adjacent café and bookshop support ongoing memorial work.",
        tag: "History - Memorial",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Kigali genocide memorial visit Rwanda",
      },
      {
        title: "Nyungwe Canopy Walkway",
        desc: "A suspension walkway through the Nyungwe cloud forest canopy — extraordinary primate and bird viewing from above the forest, with Angola colobus troops often in the trees directly alongside the walkway.",
        tag: "Wildlife - Canopy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Nyungwe canopy walkway cloud forest Rwanda",
      },
      {
        title: "Akagera Game Drive",
        desc: "A morning game drive through Akagera's savanna-lake-papyrus landscape — lions that have been back since 2015, rhinos reintroduced in 2017, elephant herds, and hippo pods in the Akagera lakes.",
        tag: "Wildlife - Akagera",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Akagera game drive savanna Rwanda lion",
      },
      {
        title: "Golden Monkey Trek",
        desc: "A shorter, less strenuous alternative to gorilla trekking — the habituated golden monkey groups move through the bamboo zone of Volcanoes NP in spectacular displays of leaping and feeding.",
        tag: "Wildlife - Monkeys",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Golden monkey trek bamboo Rwanda",
      },
      {
        title: "Kayak Lake Kivu",
        desc: "Rent a kayak at Gisenyi/Rubavu and paddle along the Lake Kivu shoreline — passing fishing villages, papyrus bays, and the extraordinary hill-and-water landscape of the DRC border.",
        tag: "Activity - Lake Kivu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Kayak Lake Kivu Rwanda Gisenyi",
      },
      {
        title: "Nyamirambo Women's Cooperative Tour",
        desc: "A walking tour of Nyamirambo with a guide from the local women's cooperative — street food tastings, mosque visit, craft workshop, and an unfiltered encounter with Kigali's most characterful neighbourhood.",
        tag: "Culture - Kigali",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Nyamirambo women cooperative tour Kigali",
      },
      {
        title: "Kimironko Market",
        desc: "Kigali's largest and most vibrant market — wax print fabrics, fresh produce, second-hand clothes, and the extraordinary commercial energy of a city whose middle class is growing faster than almost anywhere in Africa.",
        tag: "Market - Kigali",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Kimironko market Kigali Rwanda fabrics",
      },
      {
        title: "Twin Lakes Burera and Ruhondo Boat",
        desc: "Take a dugout canoe on Lakes Burera or Ruhondo — the terraced hillsides of the Virunga foothills reflecting in the water, fishing communities, and some of Rwanda's most serene landscapes.",
        tag: "Nature - Lakes",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Burera Ruhondo lake boat canoe Rwanda",
      },
      {
        title: "Musanze Caves",
        desc: "A 2km lava tube cave system near Musanze — formed by ancient Virunga volcanic flows, used as shelter during the precolonial Rwandan wars, and still holding cultural and spiritual significance for local communities.",
        tag: "Nature - Caves",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Musanze caves lava tube Rwanda",
      },
    ],
    eatSubtitle:
      "Rwandan food is hearty, bean-centred, and deeply satisfying — brochettes, ubugali with isombe, grilled tilapia from Lake Kivu, and Kigali's excellent restaurant scene.",
    eat: [
      {
        category: "National Staple",
        name: "Ubugali with Isombe",
        desc: "Ubugali — a thick stiff paste of cassava flour — served with isombe, a rich stew of cassava leaves pounded with onion, garlic, and sometimes dried fish. The everyday food of Rwanda, eaten with the fingers from a shared plate.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Ubugali cassava isombe stew Rwanda",
      },
      {
        category: "Street Food",
        name: "Brochettes",
        desc: "Spiced goat, beef, or pork skewers grilled over charcoal — sold at every roadside in Rwanda, eaten with fried cassava chips and cold Primus or Mutzig beer. The universal Rwandan evening meal.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "Brochettes grilled skewers Rwanda street food",
      },
      {
        category: "Lake Fish",
        name: "Grilled Tilapia from Lake Kivu",
        desc: "Fresh tilapia from Lake Kivu grilled whole over charcoal and served with fried plantain, tomato salsa, and a cold Kivu beer overlooking the lake — the quintessential Gisenyi meal.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled tilapia Lake Kivu Rwanda",
      },
      {
        category: "Kigali Restaurant",
        name: "Ibirayi na Inyama",
        desc: "A hearty stew of Irish potatoes, goat or beef, and tomatoes — the comfort food of the highlands, served at local restaurants (inzu z'indaya) in generous clay pots with sides of beans and plantain.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Ibirayi inyama potato stew Rwanda",
      },
      {
        category: "Drink",
        name: "Primus, Urwagwa, and Ikivuguto",
        desc: "Primus and Mutzig are the national lagers — cold and excellent after a gorilla trek. Urwagwa is the traditional banana beer brewed in highland villages. Ikivuguto — fermented milk — is the daily dairy drink of rural Rwanda.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Primus beer urwagwa banana beer Rwanda",
      },
    ],
    staySubtitle:
      "Kigali for arrivals and history; Musanze for gorilla and golden monkey base; Gisenyi/Rubavu for Lake Kivu; Akagera for savanna safari; Nyungwe for cloud forest.",
    stay: [
      {
        type: "Capital",
        area: "Kigali",
        desc: "Kigali has excellent accommodation across all price points — the Kigali Serena, Radisson Blu, One&Only Nyungwe House are at the top; a range of mid-range guesthouses in Kacyiru and Kimihurura.",
        picks: ["Kigali Serena Hotel", "Radisson Blu Kigali", "Kacyiru guesthouses"],
      },
      {
        type: "Gorilla Base",
        area: "Musanze / Volcanoes NP",
        desc: "Several excellent lodges sit on the Volcanoes NP boundary — Bisate Lodge, Sabyinyo Silverback Lodge, and Five Volcanoes Boutique Hotel are the best-positioned for the trek.",
        picks: ["Bisate Lodge", "Sabyinyo Silverback Lodge", "Five Volcanoes Boutique Hotel"],
      },
      {
        type: "Lake",
        area: "Gisenyi / Rubavu (Lake Kivu)",
        desc: "Lake Kivu's resort shoreline has a range of hotels — the Serena Kivu, Paradise Malahide, and many simple guesthouses along the lake road.",
        picks: ["Serena Lake Kivu Hotel", "Paradise Malahide Hotel", "Cormoran Lodge"],
      },
      {
        type: "Savanna",
        area: "Akagera National Park",
        desc: "Akagera Bush Camp and Ruzizi Tented Lodge are the two excellent within-park lodges, both managed by African Parks.",
        picks: ["Akagera Bush Camp", "Ruzizi Tented Lodge", "Kigali day trip option"],
      },
      {
        type: "Cloud Forest",
        area: "Nyungwe National Park",
        desc: "One&Only Nyungwe House is the flagship — a spectacular property on the forest boundary. Nyungwe Top View Hill Hotel is the mid-range option.",
        picks: ["One&Only Nyungwe House", "Nyungwe Top View Hill Hotel", "Gisakura Guesthouse"],
      },
    ],
    map: {
      center: [-1.9, 29.9],
      zoom: 8.5,
      seeSpots: [
        { lat: -1.47, lng: 29.52, name: "Volcanoes National Park", desc: "Mountain gorilla trekking" },
        { lat: -1.9441, lng: 30.0619, name: "Kigali", desc: "Capital and genocide memorial" },
        { lat: -2.7, lng: 29.25, name: "Nyungwe Forest", desc: "Cloud forest and canopy walkway" },
        { lat: -1.6, lng: 30.75, name: "Akagera National Park", desc: "Big five restored savanna" },
        { lat: -1.47, lng: 29.52, name: "Golden Monkey Zone", desc: "Bamboo primate trekking" },
        { lat: -1.7, lng: 29.25, name: "Lake Kivu", desc: "Highland lake DRC border" },
        { lat: -1.48, lng: 29.64, name: "Musanze", desc: "Virunga gateway town" },
        { lat: -1.37, lng: 29.83, name: "Lakes Burera and Ruhondo", desc: "Twin crater lakes" },
      ],
      doSpots: [
        { lat: -1.47, lng: 29.52, name: "Gorilla Trek", desc: "Volcanoes NP families" },
        { lat: -1.9441, lng: 30.0619, name: "Genocide Memorial", desc: "Kigali essential visit" },
        { lat: -2.7, lng: 29.25, name: "Canopy Walkway", desc: "Nyungwe cloud forest" },
        { lat: -1.6, lng: 30.75, name: "Akagera Drive", desc: "Big five game drive" },
        { lat: -1.47, lng: 29.52, name: "Golden Monkey", desc: "Bamboo zone trek" },
        { lat: -1.7, lng: 29.25, name: "Kayak Kivu", desc: "Lake Kivu Gisenyi" },
        { lat: -1.93, lng: 30.08, name: "Nyamirambo Tour", desc: "Kigali neighbourhood walk" },
        { lat: -1.37, lng: 29.83, name: "Twin Lakes Boat", desc: "Burera Ruhondo canoe" },
      ],
      staySpots: [
        { lat: -1.9441, lng: 30.0619, name: "Kigali", desc: "Capital hotel hub" },
        { lat: -1.47, lng: 29.52, name: "Musanze", desc: "Gorilla trek base" },
        { lat: -1.7, lng: 29.25, name: "Gisenyi / Rubavu", desc: "Lake Kivu resort" },
        { lat: -1.6, lng: 30.75, name: "Akagera", desc: "Savanna safari lodge" },
        { lat: -2.7, lng: 29.25, name: "Nyungwe", desc: "Cloud forest lodge" },
      ],
    },
    dayTrips: [
      {
        title: "Twin Lakes Burera and Ruhondo",
        subtitle: "A stunning half-day from Musanze into the twin crater lakes below the Virunga — terrace-farmed hillsides, dugout canoe on the water, fishing communities, and the most serene lake landscape in Rwanda.",
        tag: "Nature - Musanze Day Trip",
        distance: "~25km from Musanze",
        duration: "Half day (4–5 hours)",
        transport: "Car or moto from Musanze",
        steps: [
          { time: "7AM", text: "Drive northeast from Musanze to the Lakes Burera and Ruhondo viewpoint — the Virunga volcanoes frame the scene." },
          { time: "8AM", text: "Walk down to the Lake Ruhondo shore and board a dugout canoe with a local fisherman." },
          { time: "9AM", text: "Paddle across to a small fishing island — watch net-casting and the morning catch." },
          { time: "10AM", text: "Walk the terraced hillside path between the two lakes with a local guide." },
          { time: "11AM", text: "Tea and local snacks at a hillside home before driving back to Musanze." },
        ],
      },
      {
        title: "Musanze Caves and Dian Fossey Grave",
        subtitle: "A morning exploring the lava tube caves under Musanze and an afternoon hike to the Karisoke research station ruins and Dian Fossey's grave on the slopes of Mount Bisoke — where modern gorilla conservation was born.",
        tag: "History & Nature - Musanze",
        distance: "Musanze town and Volcanoes NP lower slopes",
        duration: "Full day (7 hours)",
        transport: "Walking and 4x4 to trailhead",
        steps: [
          { time: "8AM", text: "Enter the Musanze Caves with a guide — a 2km lava tube system used as shelter in Rwanda's historical conflicts." },
          { time: "9:30AM", text: "Drive to the Volcanoes NP trailhead for the Karisoke hike." },
          { time: "10AM", text: "Hike through bamboo and hagenia forest to the Karisoke meadow — Dian Fossey's research station site." },
          { time: "12PM", text: "Reach Dian Fossey's grave and the gorilla graveyard — where many of the gorillas she studied are buried." },
          { time: "2PM", text: "Return hike to the trailhead and drive back to Musanze for lunch." },
        ],
      },
      {
        title: "Akagera Lake Circuit from Kigali",
        subtitle: "A full day from Kigali east to Akagera — the papyrus lake chain and savanna of Rwanda's big five park, with lions reintroduced since 2015 and rhinos since 2017, all within two and a half hours of the capital.",
        tag: "Wildlife - Kigali Day Trip",
        distance: "~110km east of Kigali",
        duration: "Full day (9–10 hours)",
        transport: "Car to Akagera, 4x4 game drive inside park",
        steps: [
          { time: "5AM", text: "Very early departure from Kigali east to reach Akagera for dawn opening." },
          { time: "7:30AM", text: "Enter the park and begin the lake circuit — hippos, crocodiles, and the dawn papyrus bird activity." },
          { time: "9AM", text: "Move to the savanna zone — elephant herds, giraffe, zebra, and the lion territory in the north." },
          { time: "11AM", text: "Rhino viewing area in the north park — the reintroduced southern white rhino population." },
          { time: "1PM", text: "Picnic lunch at the lake view site before the afternoon drive." },
          { time: "4PM", text: "Return to Kigali arriving early evening." },
        ],
      },
      {
        title: "Lake Kivu from Kigali via Thousand Hills Road",
        subtitle: "The most scenic drive in Rwanda — the RN1 west from Kigali over the spine of the thousand hills to Lake Kivu at Gisenyi, with a kayak on the lake and grilled tilapia lunch on the waterfront.",
        tag: "Scenic Drive - Lake Kivu",
        distance: "~160km west of Kigali",
        duration: "Full day (9 hours)",
        transport: "Car west from Kigali",
        steps: [
          { time: "6AM", text: "Depart Kigali west on the RN1 — the road climbs through rolling tea plantation highlands and terraced valleys." },
          { time: "8:30AM", text: "Stop at a roadside tea estate for a walking tour and fresh-brewed Rwandan tea." },
          { time: "10AM", text: "Descend to Lake Kivu and arrive Gisenyi/Rubavu — the lake appears suddenly below the final hills." },
          { time: "10:30AM", text: "Kayak hire at the waterfront — paddle along the Congolese border shoreline for one hour." },
          { time: "12PM", text: "Grilled whole tilapia lunch at a lakeside restaurant." },
          { time: "3PM", text: "Return drive over the thousand hills to Kigali." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week hitting Rwanda's essential trio — mountain gorillas, the Kigali memorial, and Akagera's big five, with Lake Kivu as a scenic add-on.",
        arrival: {
          route: "Your City -> Kigali (KGL)",
          meta: "Kigali connects well via Nairobi, Addis Ababa, Dubai, Brussels, Amsterdam, and London. RwandAir has a growing network. KGL is a modern, efficient airport.",
          sideTitle: "Gorilla Permits",
          sideCopy: "Book 6–12 months ahead via rdb.rw — USD 1,500 per person, limited slots per day",
        },
        days: [
          {
            name: "Arrival",
            title: "Kigali Introduction",
            location: "Kigali",
            activities: [
              { time: "PM", text: "Arrive KGL, hotel check-in in Kacyiru or Kimihurura." },
              { time: "Night", text: "Nyamirambo dinner walk — brochettes and cold Primus." },
            ],
          },
          {
            name: "Memorial",
            title: "Kigali Genocide Memorial",
            location: "Kigali",
            activities: [
              { time: "AM", text: "Kigali Genocide Memorial — allow two full hours." },
              { time: "PM", text: "Kimironko Market and Inema Arts Centre." },
            ],
          },
          {
            name: "Drive",
            title: "Kigali to Musanze",
            location: "Musanze",
            activities: [
              { time: "AM", text: "Drive 2.5 hours northwest to Musanze via the thousand hills." },
              { time: "PM", text: "Twin Lakes Burera and Ruhondo canoe afternoon." },
            ],
          },
          {
            name: "Gorillas",
            title: "Mountain Gorilla Trek",
            location: "Volcanoes NP",
            activities: [
              { time: "AM", text: "Pre-dawn briefing and assigned gorilla family trek." },
              { time: "PM", text: "Return to lodge — debrief over cold drinks." },
            ],
          },
          {
            name: "Monkeys",
            title: "Golden Monkey and Musanze Caves",
            location: "Musanze / Volcanoes NP",
            activities: [
              { time: "AM", text: "Golden monkey bamboo trek — easier and shorter than gorillas." },
              { time: "PM", text: "Musanze Caves exploration." },
            ],
          },
          {
            name: "Akagera",
            title: "Drive to Akagera Big Five",
            location: "Akagera NP",
            activities: [
              { time: "AM", text: "Drive east from Kigali to Akagera — dawn entry for best game." },
              { time: "PM", text: "Lake circuit and savanna big five drive." },
            ],
          },
          {
            name: "Departure",
            title: "Return to Kigali and Fly Out",
            location: "KGL",
            activities: [
              { time: "AM", text: "Return to Kigali, last market and restaurant." },
              { time: "PM", text: "International departure from KGL." },
            ],
          },
        ],
        departure: {
          route: "Kigali (KGL) -> Your City",
          meta: "Most connections via Nairobi or Addis Ababa. RwandAir flies direct to London, Brussels, and key African hubs.",
          sideTitle: "Best Time",
          sideCopy: "June–September for the long dry season — best gorilla trekking and Akagera game viewing.",
        },
      },
      "10": {
        summary: "Ten days adding Nyungwe cloud forest and chimpanzees, the Lake Kivu scenic drive, and a second gorilla trek.",
        arrival: {
          route: "Your City -> Kigali (KGL)",
          meta: "Same routing. Ten days allows Nyungwe in the southwest — a 5-hour drive from Kigali but worth every minute.",
          sideTitle: "Second Permit",
          sideCopy: "Book two gorilla permits if budget allows — the experience is different each time and each family has its own character",
        },
        days: [
          { name: "Arrival", title: "Kigali Arrival", location: "Kigali", activities: [{ time: "PM", text: "Arrive KGL and check in." }, { time: "Night", text: "Nyamirambo evening walk." }] },
          { name: "Memorial", title: "Memorial and Market", location: "Kigali", activities: [{ time: "AM", text: "Genocide Memorial and Nyamirambo tour." }, { time: "PM", text: "Kimironko Market." }] },
          { name: "Drive", title: "Kigali to Musanze", location: "Musanze", activities: [{ time: "AM", text: "Northwest drive to Musanze." }, { time: "PM", text: "Twin lakes canoe." }] },
          { name: "Gorillas", title: "Gorilla Trek Day One", location: "Volcanoes NP", activities: [{ time: "AM", text: "First mountain gorilla family trek." }, { time: "PM", text: "Rest and debrief at lodge." }] },
          { name: "Gorillas", title: "Golden Monkey and Gorilla Day Two", location: "Volcanoes NP", activities: [{ time: "AM", text: "Golden monkey bamboo trek." }, { time: "PM", text: "Optional second gorilla permit." }] },
          { name: "Kivu", title: "Lake Kivu Scenic Drive", location: "Gisenyi / Rubavu", activities: [{ time: "AM", text: "Drive over the thousand hills to Lake Kivu." }, { time: "PM", text: "Kayak and tilapia lunch." }] },
          { name: "South", title: "Drive to Nyungwe", location: "Nyungwe NP", activities: [{ time: "AM", text: "Long but beautiful drive south along Lake Kivu to Nyungwe." }, { time: "PM", text: "Arrive and forest orientation walk." }] },
          { name: "Canopy", title: "Nyungwe Canopy Walkway", location: "Nyungwe NP", activities: [{ time: "AM", text: "Canopy walkway and colobus monkey viewing." }, { time: "PM", text: "Chimpanzee tracking in the afternoon." }] },
          { name: "Return", title: "Return to Kigali via Tea Country", location: "Kigali", activities: [{ time: "AM", text: "Drive north through Huye (Butare) — National Museum stop." }, { time: "PM", text: "Return to Kigali." }] },
          { name: "Departure", title: "Akagera Day or Final Kigali", location: "KGL", activities: [{ time: "AM", text: "Optional Akagera morning drive or final Kigali visit." }, { time: "PM", text: "International departure from KGL." }] },
        ],
        departure: {
          route: "Kigali (KGL) -> Your City",
          meta: "Allow morning buffer before evening flights — traffic on the Kigali ring road can slow airport transfers.",
          sideTitle: "Nyungwe Tip",
          sideCopy: "Book the chimpanzee permit in advance — demand exceeds supply in dry season.",
        },
      },
    },
    footerLine1: "Discover Rwanda — mountain gorillas, a country reborn, the thousand hills, Lake Kivu, and one of Africa's most extraordinary transformations",
    footerLine2: "Gorilla permits USD 1,500 — book 6–12 months ahead via rdb.rw. Yellow fever required if arriving from endemic countries. No plastic bags.",
  },

  burundi: {
    country: "Burundi",
    heroEyebrow: "East Africa — Drumbeats on the Tanganyika Shore",
    heroTitleHtml: "Bu<em>run</em>di",
    heroTagline:
      "One of Africa's most overlooked destinations — a tiny, densely populated highland country on the Nile–Congo watershed, with the extraordinary chimpanzees of Kibira forest, the world's deepest lake at its feet, the UNESCO-recognised royal drumming tradition, and a shoreline on Lake Tanganyika of genuine beauty.",
    heroStats: [
      { label: "Capital", value: "Gitega (political) / Bujumbura (economic)" },
      { label: "Currency", value: "BIF (Burundian Franc)" },
      { label: "Language", value: "Kirundi, French, Swahili" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "Burundi is genuinely undervisited and genuinely rewarding — the country is stabilising and the people are welcoming. Chimpanzees in Kibira, hippos in Rusizi, the Tanganyika shoreline, and the royal Ingoma drumming are experiences found nowhere else.",
    know: [
      {
        icon: "🛡️",
        title: "Security",
        text: "Burundi has experienced political instability, but the situation has improved significantly since 2020. Bujumbura, Lake Tanganyika, and the main tourist areas are accessible. Always check current advisories before travel.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Visas are available on arrival at Bujumbura airport for most nationalities for a fee in USD. EAC citizens may have different arrangements. Bring passport photos and USD cash for the fee.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever vaccination required. Malaria prophylaxis is essential — Burundi has high year-round transmission. Typhoid, hepatitis A, and meningococcal vaccinations are recommended. Bujumbura has limited medical facilities.",
      },
      {
        icon: "🥁",
        title: "Royal Drumming — Ingoma",
        text: "The Burundian royal drumming tradition is UNESCO-listed as Intangible Cultural Heritage. The drummers of Gishora perform with extraordinary power and athleticism — a living connection to the ancient Burundian kingdom.",
      },
      {
        icon: "🦛",
        title: "Lake Tanganyika",
        text: "The second deepest lake on Earth — Lake Tanganyika is extraordinarily clear, warm, and biologically unique. Bujumbura's shore is sandy and swimmable; the lake holds 350+ endemic cichlid species found nowhere else.",
      },
      {
        icon: "🐒",
        title: "Kibira Chimpanzees",
        text: "Kibira National Park in the northwest holds one of East Africa's least-visited chimpanzee populations — in a vast, dark montane rainforest on the Congo-Nile watershed ridge.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "USD is the most useful foreign currency. ATMs are available in Bujumbura. Outside the capital, carry sufficient cash. Card payments are not widely available. Prices are very low by East African standards.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "Bujumbura on the lake shore is hot and humid year-round (altitude 774m). The highlands are cooler. Dry seasons are June–August and December–January. The long rains (March–May) can be heavy in the highlands.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Bujumbura is the hub — all major sites connect by reasonable road. Kibira requires a 4x4. The Tanganyika shore is accessible by boat from Bujumbura. Minibus and motorcycle taxis cover all main routes.",
      },
      {
        icon: "🎵",
        title: "Music Culture",
        text: "Beyond the royal drums, Burundi has a rich musical tradition — the inanga zither, ikembe thumb piano, and contemporary Burundian pop are all worth seeking out in Bujumbura's music bars.",
      },
    ],
    seeSubtitle:
      "The Gishora royal drummers, Kibira chimpanzee forest, Lake Tanganyika's crystalline shore, Rusizi wetlands and hippos, the source of the Nile pyramid at Rutovu, and Bujumbura's Tanganyika waterfront.",
    see: [
      {
        name: "Gishora Drum Sanctuary",
        title: "UNESCO Royal Drumming Tradition",
        desc: "The Gishora hill above Gitega holds the sacred royal drum sanctuary — Ingoma drummers perform in full ceremonial dress in a tradition dating to the Burundian kingdom, now UNESCO Intangible Cultural Heritage.",
        tag: "Culture - UNESCO Drums",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg/960px-Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg",
        alt: "Gishora royal drummers Ingoma UNESCO Burundi",
      },
      {
        name: "Lake Tanganyika",
        title: "The Second Deepest Lake on Earth",
        desc: "One of the world's great lakes — extraordinarily clear, biologically unique, and beautiful. Bujumbura's sandy shoreline, the snorkelling among endemic cichlids, and the sunset over the Congolese mountains make this one of East Africa's finest lake experiences.",
        tag: "Nature - Lake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Tanganyika shore Bujumbura Burundi",
      },
      {
        name: "Kibira National Park",
        title: "Congo-Nile Watershed Rainforest",
        desc: "Burundi's largest national park — a vast montane rainforest on the ridge between the Congo and Nile basins, holding chimpanzees, colobus monkeys, and extraordinary Afromontane birds.",
        tag: "Wildlife - Chimpanzees",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Kibira forest chimpanzees Congo-Nile Burundi",
      },
      {
        name: "Rusizi National Park",
        title: "Hippos and Papyrus at the River Mouth",
        desc: "Where the Rusizi River meets Lake Tanganyika — hippo pods in the papyrus channels, sitatunga, crocodiles, and extraordinary waterbirds in a small but wildlife-dense wetland just outside Bujumbura.",
        tag: "Wildlife - Hippos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Rusizi wetland hippos Lake Tanganyika Burundi",
      },
      {
        name: "Source of the Nile — Rutovu",
        title: "The Furthest Source of the World's Longest River",
        desc: "A pyramid monument in the mountains at Rutovu marks the furthest source of the Nile — a spring that feeds the Ruvyironza River, which joins the Kagera and eventually Lake Victoria and the Nile. A profound geographical landmark.",
        tag: "History - Geography",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Source of Nile Rutovu pyramid Burundi",
      },
      {
        name: "Bujumbura",
        title: "Lakeside Capital with Belgian Character",
        desc: "A compact, manageable city on the Lake Tanganyika shore — the palm-lined Boulevard du Japon, the lively central market, the Livingstone-Stanley Monument, and some of the best fresh fish in East Africa.",
        tag: "Capital - Lakeside",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Bujumbura lakeside capital Burundi",
      },
      {
        name: "Gitega National Museum",
        title: "Royal History and Material Culture",
        desc: "The national museum in Gitega (the new political capital) holds the finest collection of Burundian royal regalia, ethnographic material, and the story of the Ganwa dynasty — essential context for the drum tradition.",
        tag: "Culture - Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Gitega national museum Rwanda royal Burundi",
      },
      {
        name: "Livingstone-Stanley Monument",
        title: "Where Two Legends Met",
        desc: "A monument outside Bujumbura marks the site where Henry Morton Stanley met David Livingstone in 1871 — not the famous 'Dr. Livingstone, I presume?' meeting (that was Ujiji in Tanzania), but a historically significant subsequent encounter on the Tanganyika shore.",
        tag: "History - Explorer",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Livingstone Stanley monument Bujumbura Burundi",
      },
      {
        name: "Congo-Nile Trail",
        title: "Hiking the Watershed Ridge",
        desc: "A multi-day hiking trail along the Congo-Nile watershed — following the ridge that divides waters flowing to the Atlantic from those flowing to the Mediterranean, through highland villages, tea estates, and Kibira forest.",
        tag: "Adventure - Hiking",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Congo-Nile trail hiking watershed Burundi",
      },
      {
        name: "Tanganyika Beach Settlements",
        title: "The Fishing Communities of the Lake Shore",
        desc: "The small fishing communities south of Bujumbura along the Tanganyika shore — hand-built wooden boats, nets drying on the beach, and the daily rhythms of a lake-fishing culture that has sustained this coast for centuries.",
        tag: "Culture - Fishing",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Tanganyika fishing community shore Burundi",
      },
    ],
    doSubtitle:
      "Attending the Gishora royal drum ceremony, chimpanzee trekking in Kibira, snorkelling Lake Tanganyika cichlids, hippo boat on the Rusizi, hiking the Congo-Nile trail, and the Bujumbura central market.",
    do: [
      {
        title: "Gishora Royal Drum Performance",
        desc: "Watch the Ingoma royal drummers at Gishora — a performance of extraordinary power, the drummers dancing while playing enormous sacred drums in a tradition that connects directly to the Burundian kingdom.",
        tag: "Culture - Ingoma",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg/960px-Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg",
        alt: "Gishora royal drum performance Burundi",
      },
      {
        title: "Chimpanzee Trek in Kibira",
        desc: "Trek into the dark montane forest of Kibira NP with a guide to track chimpanzee groups — the forest is imposing and the experience raw compared to the polished gorilla industry across the border in Rwanda.",
        tag: "Wildlife - Chimpanzees",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Chimpanzee trek Kibira forest Burundi",
      },
      {
        title: "Snorkel Lake Tanganyika Cichlids",
        desc: "Jump off the Bujumbura beach into clear, warm Lake Tanganyika and snorkel above 350+ endemic cichlid species — extraordinary fish of every colour in water of remarkable clarity.",
        tag: "Nature - Snorkelling",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Snorkel Lake Tanganyika cichlids Burundi",
      },
      {
        title: "Rusizi Hippo Boat Trip",
        desc: "Take a motorised pirogue into the Rusizi papyrus channels — hippo pods surfacing within metres of the boat, sitatunga in the swamp margins, and the extraordinary birding of the Tanganyika delta.",
        tag: "Wildlife - Hippos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Rusizi hippo boat papyrus Burundi",
      },
      {
        title: "Congo-Nile Trail Day Hike",
        desc: "Walk a section of the Congo-Nile watershed trail — ridge-top paths through tea estates, subsistence farms, and highland villages with views west to the Congo Basin and east to the Burundian hills.",
        tag: "Hiking - Watershed",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Congo-Nile trail hike Burundi watershed",
      },
      {
        title: "Source of the Nile Pilgrimage",
        desc: "Drive south to Rutovu and stand at the furthest source of the world's longest river — a spring in the Burundian highlands from which water eventually reaches the Mediterranean, 6,650km away.",
        tag: "Geography - Nile Source",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Source of Nile Rutovu Burundi highlands",
      },
      {
        title: "Bujumbura Central Market",
        desc: "The central market of Bujumbura is one of East Africa's most colourful — dried fish from Tanganyika, highland produce, woven baskets, and the social commerce of a city that lives close to its lake.",
        tag: "Market - Bujumbura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Bujumbura central market Lake Tanganyika Burundi",
      },
      {
        title: "Sunset Swim at Tanganyika Beach",
        desc: "The beaches south of Bujumbura are warm, swimmable, and beautiful at sunset — the Congolese mountains across the water turn purple and gold as the lake calms in the evening.",
        tag: "Beach - Tanganyika",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Tanganyika beach sunset swim Burundi",
      },
      {
        title: "Gitega Royal Drums Museum and Gishora",
        desc: "Combine the Gitega National Museum — with its royal regalia collection — with the Gishora drum sanctuary on the same day: history, context, and then the living performance.",
        tag: "Culture - Full Day",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Gitega museum drums Gishora Burundi",
      },
      {
        title: "Inanga Zither Evening",
        desc: "Seek out a traditional inanga player in Bujumbura's music bars — the Burundian zither is a deeply beautiful instrument, played horizontally across the lap with a drone string technique found nowhere else in Africa.",
        tag: "Music - Inanga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg/960px-Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg",
        alt: "Inanga zither music Bujumbura Burundi",
      },
    ],
    eatSubtitle:
      "Burundian food is generous, starchy, and lake-rich — brochettes de capitaine, ubugali with beans, fresh Tanganyika tilapia, and the cold Primus that makes every lakeside meal perfect.",
    eat: [
      {
        category: "Lake Staple",
        name: "Grilled Capitaine from Tanganyika",
        desc: "Capitaine (Nile perch) or tilapia pulled from Lake Tanganyika and grilled whole over charcoal — served with fried plantain, tomato and onion salsa, and cold Primus at a Bujumbura beach restaurant.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled capitaine Tanganyika Burundi fish",
      },
      {
        category: "National Staple",
        name: "Ubugali and Ibiharage",
        desc: "Stiff cassava paste (ubugali) served with ibiharage — red kidney beans slow-cooked with onion, tomatoes, and palm oil. The fundamental daily food of highland Burundi, eaten from a shared plate.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Ubugali beans ibiharage Burundi highland",
      },
      {
        category: "Street Food",
        name: "Brochettes and Mandazi",
        desc: "Spiced beef or goat brochettes at roadside grills; mandazi (East African doughnuts fried in oil) sold at every market stall from dawn — the universal Burundian street breakfast.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "Brochettes mandazi street food Burundi",
      },
      {
        category: "Lakeside Treat",
        name: "Sambaza — Tanganyika Sardines",
        desc: "Sambaza are tiny fried sardines unique to Lake Tanganyika — crispy, salty, and eaten by the plateful as a bar snack with cold beer or fried and served over rice at lakeside restaurants.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Sambaza fried sardines Lake Tanganyika Burundi",
      },
      {
        category: "Drink",
        name: "Primus, Impala, and Urwarwa",
        desc: "Primus is the national lager, cold and excellent lakeside. Impala is the local alternative. Urwarwa — banana beer brewed in highland communities — is the traditional social drink of rural Burundi.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Primus beer urwarwa banana beer Burundi",
      },
    ],
    staySubtitle:
      "Bujumbura as the main hub and Tanganyika beach base; Gitega for the drums and museum; Kibira forest guesthouses for chimpanzees; Congo-Nile trail for multi-day hiking.",
    stay: [
      {
        type: "Capital Lakeside",
        area: "Bujumbura",
        desc: "Bujumbura's best hotels sit near the lake — the Hotel Club du Lac Tanganyika, Source du Nil Hotel, and a growing range of guesthouses in the Rohero and Kiriri neighbourhoods.",
        picks: ["Hotel Club du Lac Tanganyika", "Source du Nil Hotel", "Rohero neighbourhood guesthouses"],
      },
      {
        type: "Drum Country",
        area: "Gitega",
        desc: "Simple guesthouses in Gitega for the museum and Gishora — a one-night stop on the way to Kibira or the Nile source.",
        picks: ["Gitega Centre Hotel", "Simple mission guesthouses", "NGO district stays"],
      },
      {
        type: "Forest",
        area: "Kibira National Park",
        desc: "Basic community guesthouses at Rwegura or Teza near the Kibira boundary — the park itself has no formal lodge infrastructure.",
        picks: ["Rwegura community guesthouse", "Teza area guesthouses", "Muramvya basic hotels"],
      },
      {
        type: "Trail",
        area: "Congo-Nile Watershed",
        desc: "Community homestays and basic guesthouses along the Congo-Nile trail — the Burundi Tourism Board has developed a network of overnight points.",
        picks: ["Congo-Nile trail homestays", "Karongi/Cyangugu border guesthouses", "Tea estate community stays"],
      },
      {
        type: "Beach",
        area: "Tanganyika South Shore",
        desc: "Small beach guesthouses south of Bujumbura for direct lake access — quieter and cheaper than the city hotels, popular with resident expats.",
        picks: ["Saga Beach Hotel", "Tanganyika south shore guesthouses", "Rezo Beach camp"],
      },
    ],
    map: {
      center: [-3.5, 29.9],
      zoom: 8.5,
      seeSpots: [
        { lat: -3.43, lng: 29.92, name: "Gishora Drum Sanctuary", desc: "UNESCO royal drumming Gitega" },
        { lat: -3.38, lng: 29.35, name: "Lake Tanganyika Shore", desc: "World's second deepest lake" },
        { lat: -2.9, lng: 29.5, name: "Kibira National Park", desc: "Chimpanzees Congo-Nile forest" },
        { lat: -3.28, lng: 29.31, name: "Rusizi National Park", desc: "Hippos papyrus wetland" },
        { lat: -4.4, lng: 29.6, name: "Rutovu Nile Source", desc: "Furthest source of the Nile" },
        { lat: -3.3825, lng: 29.3613, name: "Bujumbura", desc: "Capital lakeside city" },
        { lat: -3.43, lng: 29.92, name: "Gitega Museum", desc: "Royal history and regalia" },
        { lat: -3.4, lng: 29.4, name: "Congo-Nile Trail", desc: "Watershed ridge hiking" },
      ],
      doSpots: [
        { lat: -3.43, lng: 29.92, name: "Gishora Drums", desc: "Ingoma royal performance" },
        { lat: -2.9, lng: 29.5, name: "Kibira Chimp Trek", desc: "Montane forest primates" },
        { lat: -3.38, lng: 29.35, name: "Tanganyika Snorkel", desc: "Cichlid fish beach swim" },
        { lat: -3.28, lng: 29.31, name: "Rusizi Hippo Boat", desc: "Papyrus channel pirogues" },
        { lat: -3.4, lng: 29.4, name: "Congo-Nile Hike", desc: "Watershed trail day walk" },
        { lat: -4.4, lng: 29.6, name: "Nile Source Drive", desc: "Rutovu highland spring" },
        { lat: -3.3825, lng: 29.3613, name: "Bujumbura Market", desc: "Central market fish stalls" },
      ],
      staySpots: [
        { lat: -3.3825, lng: 29.3613, name: "Bujumbura", desc: "Lakeside capital hotels" },
        { lat: -3.43, lng: 29.92, name: "Gitega", desc: "Drum country guesthouses" },
        { lat: -2.9, lng: 29.5, name: "Kibira Area", desc: "Forest community guesthouses" },
        { lat: -3.4, lng: 29.4, name: "Congo-Nile Trail", desc: "Watershed homestays" },
        { lat: -3.5, lng: 29.3, name: "Tanganyika South", desc: "Beach shore guesthouses" },
      ],
    },
    dayTrips: [
      {
        title: "Gishora Drums and Gitega Museum",
        subtitle: "The cultural centrepiece of Burundi — combine the Gitega National Museum's royal regalia collection with a performance by the Ingoma royal drummers at the Gishora sanctuary, for a full day of living Burundian history.",
        tag: "Culture - Full Day from Bujumbura",
        distance: "~100km east of Bujumbura",
        duration: "Full day (8 hours)",
        transport: "Car east from Bujumbura",
        steps: [
          { time: "6AM", text: "Depart Bujumbura east through the highland tea and coffee country." },
          { time: "8AM", text: "Arrive Gitega National Museum — royal drums, regalia, and the history of the Ganwa dynasty." },
          { time: "10AM", text: "Drive to Gishora hill above Gitega — the sacred royal drum sanctuary." },
          { time: "10:30AM", text: "The Ingoma drummers perform — ten drummers in ceremonial dress, dancing while playing the enormous sacred drums." },
          { time: "12PM", text: "Lunch in Gitega — grilled brochettes and cold Primus." },
          { time: "3PM", text: "Return drive to Bujumbura through the rolling highland dusk." },
        ],
      },
      {
        title: "Rusizi Hippo Boats and Tanganyika Beach",
        subtitle: "A classic Bujumbura half-day — an early morning hippo boat in the Rusizi papyrus channels, then a late morning swim and snorkel in Lake Tanganyika's extraordinary cichlid-rich clear water.",
        tag: "Wildlife & Beach - Bujumbura Half Day",
        distance: "~10km from Bujumbura",
        duration: "Half day (4–5 hours)",
        transport: "Car and motorised pirogue from Bujumbura",
        steps: [
          { time: "6AM", text: "Drive to Rusizi NP entrance before dawn — the hippos are most active at dawn." },
          { time: "6:30AM", text: "Board a motorised pirogue and enter the papyrus channels — hippo pods surfacing within metres." },
          { time: "8AM", text: "Sitatunga in the swamp margins, fish eagles overhead, and the extraordinary dawn light on the Tanganyika delta." },
          { time: "9:30AM", text: "Return to Bujumbura beach and change for swimming." },
          { time: "10AM", text: "Snorkel in clear Lake Tanganyika water — endemic cichlids in extraordinary variety." },
          { time: "12PM", text: "Grilled sambaza (Tanganyika sardines) and cold Primus at a lakeside restaurant." },
        ],
      },
      {
        title: "Congo-Nile Watershed Ridge Walk",
        subtitle: "Hike a section of the Congo-Nile watershed trail — the ridge that divides waters flowing west to the Atlantic from those flowing north to the Mediterranean, through tea estates, highland farms, and panoramic highland views.",
        tag: "Hiking - Watershed Day Trip",
        distance: "~80km north of Bujumbura into the highlands",
        duration: "Full day (8 hours with drive)",
        transport: "Car to trailhead, walking 10–15km",
        steps: [
          { time: "6AM", text: "Drive north from Bujumbura into the Kibira foothills to the trail access point." },
          { time: "8AM", text: "Begin the ridge walk north — the Congo basin drops away to the left, the Burundian highlands to the right." },
          { time: "10AM", text: "Pass through a highland tea estate — workers in the bright green rows and the smell of freshly cut leaves." },
          { time: "12PM", text: "Picnic at a ridge-top viewpoint — Congo forest in one direction, Burundian valley in the other." },
          { time: "2PM", text: "Return down the hillside path to the vehicle and drive back to Bujumbura." },
        ],
      },
      {
        title: "Source of the Nile at Rutovu",
        subtitle: "A full-day drive south through the highlands to Rutovu — where a spring feeds the furthest headwater of the world's longest river, marked by a pyramid monument in the Burundian hills 6,650km from the Mediterranean.",
        tag: "Geography - Nile Source Day Trip",
        distance: "~120km south of Bujumbura",
        duration: "Full day (8 hours with drive)",
        transport: "Car south from Bujumbura",
        steps: [
          { time: "6AM", text: "Depart Bujumbura south on the highland road through Bururi province." },
          { time: "8:30AM", text: "Stop at Bururi Forest Reserve — a brief forest walk and highland birding." },
          { time: "10AM", text: "Arrive Rutovu — the pyramid monument at the furthest source of the Nile." },
          { time: "10:30AM", text: "Walk to the spring itself — clear highland water that eventually reaches Alexandria." },
          { time: "12PM", text: "Lunch with a local family in Rutovu village." },
          { time: "3PM", text: "Return drive north to Bujumbura via the highland tea estates." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week in Burundi — Bujumbura's lake shore, the Gishora royal drums, Rusizi hippos, Kibira chimpanzees, and the Nile source.",
        arrival: {
          route: "Your City -> Bujumbura (BJM)",
          meta: "Bujumbura connects via Nairobi, Addis Ababa, Kigali, and Entebbe. Ethiopian Airlines and Kenya Airways are the main options. The airport is close to the city.",
          sideTitle: "Visa",
          sideCopy: "Visa on arrival in USD. Bring passport photos. EAC citizens check current arrangements.",
        },
        days: [
          {
            name: "Arrival",
            title: "Bujumbura and the Lake",
            location: "Bujumbura",
            activities: [
              { time: "PM", text: "Arrive BJM, hotel check-in near the lake shore." },
              { time: "Night", text: "Tanganyika beach sunset swim and grilled fish dinner." },
            ],
          },
          {
            name: "Hippos",
            title: "Rusizi Boats and Tanganyika Snorkel",
            location: "Rusizi / Bujumbura",
            activities: [
              { time: "AM", text: "Dawn hippo boat in the Rusizi papyrus channels." },
              { time: "PM", text: "Tanganyika snorkelling and sambaza lunch." },
            ],
          },
          {
            name: "Drums",
            title: "Gitega Museum and Gishora Drums",
            location: "Gitega",
            activities: [
              { time: "AM", text: "Drive east to Gitega National Museum." },
              { time: "PM", text: "Gishora royal drum performance and return." },
            ],
          },
          {
            name: "Nile",
            title: "Source of the Nile — Rutovu",
            location: "Rutovu",
            activities: [
              { time: "AM", text: "Drive south through Bururi highlands." },
              { time: "PM", text: "Rutovu pyramid and Nile spring — return to Bujumbura." },
            ],
          },
          {
            name: "Kibira",
            title: "Chimpanzee Trek in Kibira",
            location: "Kibira NP",
            activities: [
              { time: "AM", text: "Early drive north to Kibira — enter the Congo-Nile watershed forest." },
              { time: "PM", text: "Chimpanzee tracking with a park guide." },
            ],
          },
          {
            name: "Trail",
            title: "Congo-Nile Watershed Walk",
            location: "Highlands",
            activities: [
              { time: "AM", text: "Day hike on the Congo-Nile ridge trail through tea estates." },
              { time: "PM", text: "Return to Bujumbura." },
            ],
          },
          {
            name: "Departure",
            title: "Bujumbura Market and Fly Out",
            location: "BJM",
            activities: [
              { time: "AM", text: "Central market, Livingstone-Stanley Monument, and lakeside coffee." },
              { time: "PM", text: "International departure from BJM." },
            ],
          },
        ],
        departure: {
          route: "Bujumbura (BJM) -> Your City",
          meta: "Most connections via Nairobi or Addis. Allow buffer for potential delays.",
          sideTitle: "Combine",
          sideCopy: "Burundi pairs perfectly with Rwanda — Kigali is 3 hours by road and the contrast is instructive.",
        },
      },
      "10": {
        summary: "Ten days adding deeper Kibira forest time, multi-day Congo-Nile trail hiking, and a Rwanda combination.",
        arrival: {
          route: "Your City -> Bujumbura (BJM)",
          meta: "Consider flying into Kigali and traveling overland to Bujumbura — the 3-hour road crosses extraordinary highland landscape.",
          sideTitle: "Trail",
          sideCopy: "Book Congo-Nile trail homestays in advance — the trail office in Bujumbura coordinates accommodation",
        },
        days: [
          { name: "Arrival", title: "Bujumbura Arrival", location: "Bujumbura", activities: [{ time: "PM", text: "Arrive BJM, lake shore check-in." }, { time: "Night", text: "Beach sunset and fish dinner." }] },
          { name: "Lake", title: "Tanganyika Full Day", location: "Bujumbura", activities: [{ time: "AM", text: "Snorkelling and kayak on Tanganyika." }, { time: "PM", text: "Fishing community visit south shore." }] },
          { name: "Hippos", title: "Rusizi Wetland", location: "Rusizi NP", activities: [{ time: "AM", text: "Dawn hippo boat in the papyrus." }, { time: "PM", text: "Bujumbura market and inanga music bar." }] },
          { name: "Drums", title: "Gitega and Gishora", location: "Gitega", activities: [{ time: "AM", text: "Gitega National Museum." }, { time: "PM", text: "Gishora drum performance." }] },
          { name: "Nile", title: "Rutovu Nile Source", location: "Rutovu", activities: [{ time: "AM", text: "Highland drive south to Rutovu." }, { time: "PM", text: "Spring visit and highland village lunch." }] },
          { name: "Kibira 1", title: "Enter Kibira Forest", location: "Kibira NP", activities: [{ time: "AM", text: "Drive to Kibira and set up forest camp." }, { time: "PM", text: "Forest walk and colobus monkey sighting." }] },
          { name: "Kibira 2", title: "Chimpanzee Day in Kibira", location: "Kibira NP", activities: [{ time: "AM", text: "Pre-dawn chimp tracking with guide." }, { time: "PM", text: "Forest birding and camp evening." }] },
          { name: "Trail 1", title: "Congo-Nile Trail Day One", location: "Watershed Ridge", activities: [{ time: "AM", text: "Begin the ridge trail from northern Kibira." }, { time: "PM", text: "Tea estate homestay overnight." }] },
          { name: "Trail 2", title: "Congo-Nile Trail Day Two", location: "Watershed Ridge", activities: [{ time: "AM", text: "Continue the ridge trail south." }, { time: "PM", text: "Return to Bujumbura." }] },
          { name: "Departure", title: "Final Lake Morning and Fly Out", location: "BJM", activities: [{ time: "AM", text: "Last Tanganyika swim and central market." }, { time: "PM", text: "International departure from BJM." }] },
        ],
        departure: {
          route: "Bujumbura (BJM) -> Your City",
          meta: "Or cross overland to Kigali for onward connections — a beautiful final drive through highland Rwanda.",
          sideTitle: "Permit",
          sideCopy: "Kibira chimpanzee permits should be arranged in advance through the INECN (environment authority) in Bujumbura.",
        },
      },
    },
    footerLine1: "Discover Burundi — UNESCO royal drums at Gishora, chimpanzees in Kibira, hippos on the Rusizi, and the extraordinary shore of Lake Tanganyika",
    footerLine2: "Visa on arrival in USD. Yellow fever required. Check current advisories. Medical evacuation cover recommended.",
  },

  kenya: {
    country: "Kenya",
    heroEyebrow: "East Africa — The Great Migration, Swahili Coast, and the Roof of the Rift",
    heroTitleHtml: "Ken<em>ya</em>",
    heroTagline:
      "The country that defined the idea of African safari — the Masai Mara and the greatest wildlife spectacle on Earth, the Swahili coral towns of the Indian Ocean coast, Mount Kenya's snow-capped peaks above the equator, the flamingo lakes of the Rift Valley, and a people of extraordinary diversity from the Maasai plains to the Luo shores of Lake Victoria.",
    heroStats: [
      { label: "Capital", value: "Nairobi" },
      { label: "Currency", value: "KES (Kenyan Shilling)" },
      { label: "Language", value: "Swahili, English" },
      { label: "Time Zone", value: "UTC+3" },
    ],
    knowSubtitle:
      "Kenya is East Africa's most visitor-ready country — sophisticated infrastructure, excellent guides, and an unmatched concentration of wildlife experiences. The Mara migration (July–October) requires advance booking. The coast is year-round. Nairobi is a genuine world city.",
    know: [
      {
        icon: "🦁",
        title: "The Great Migration",
        text: "The annual wildebeest migration from the Serengeti into the Masai Mara peaks July–October — river crossings at the Mara River are the signature spectacle, but the Mara has exceptional wildlife year-round. Book lodges 6–12 months ahead for peak season.",
      },
      {
        icon: "🛂",
        title: "Visa — eTA",
        text: "Kenya replaced the visa with an Electronic Travel Authorisation (eTA) in 2024. Apply online at etakenya.go.ke before departure. Most nationalities are approved within 72 hours. The fee is USD 30.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever certificate required if arriving from an endemic country. Malaria prophylaxis essential for the coast, Maasai Mara, and Samburu — not needed for Nairobi. Typhoid and hepatitis A vaccinations recommended.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "Kenya has two rainy seasons: long rains March–May and short rains October–December. The best wildlife months are July–October (dry, peak migration) and January–February (dry, excellent game). The coast is good October–March.",
      },
      {
        icon: "🐘",
        title: "Conservation",
        text: "Kenya is a world leader in wildlife conservation — Amboseli, Tsavo, Samburu, Laikipia, and the Mara ecosystem are all exceptional. The country banned plastic bags in 2017. Conservation fees fund community and wildlife programmes.",
      },
      {
        icon: "🏖️",
        title: "The Swahili Coast",
        text: "Kenya's Indian Ocean coast is one of Africa's finest — Lamu's medieval Swahili town (UNESCO), the coral reefs of Watamu and Malindi, Diani Beach's white sand, and the dhow sailing culture that has connected Kenya to Arabia and India for 2,000 years.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs are widely available in Nairobi, Mombasa, and major towns. USD is accepted at most tourist lodges and parks. M-Pesa mobile money is universal for local transactions. Kenya is East Africa's most expensive safari destination.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Nairobi is the hub for everything. Domestic flights connect to the Mara, Amboseli, Samburu, Lamu, and Mombasa efficiently. Safari circuits use 4x4 vehicles. The SGR railway links Nairobi to Mombasa in 4.5 hours.",
      },
      {
        icon: "🌍",
        title: "Nairobi",
        text: "East Africa's most cosmopolitan city — excellent restaurants, a world-class contemporary art scene, the Karen Blixen Museum, Nairobi National Park (rhinos with city skyline backdrop), and the David Sheldrick Elephant Orphanage.",
      },
      {
        icon: "🤝",
        title: "Safari Guides",
        text: "Kenya's professional safari guides are among the finest in Africa — the Kenya Professional Safari Guides Association (KPSGA) has a rigorous certification system. A great guide makes the difference between a good safari and a transformative one.",
      },
    ],
    seeSubtitle:
      "The Masai Mara and wildebeest river crossings, Amboseli with Kilimanjaro, Lamu's medieval Swahili town, the flamingo lakes of the Rift Valley, Mount Kenya, Samburu's rare northern species, and Nairobi's elephant orphanage.",
    see: [
      {
        name: "Masai Mara National Reserve",
        title: "The Greatest Wildlife Spectacle on Earth",
        desc: "The Kenyan extension of the Serengeti ecosystem — extraordinary big cat concentrations year-round, and the annual wildebeest river crossings from July to October that represent the most dramatic wildlife event anywhere on the planet.",
        tag: "Wildlife - Iconic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Masai Mara wildebeest migration Kenya savanna",
      },
      {
        name: "Amboseli National Park",
        title: "Elephants Under Kilimanjaro",
        desc: "Africa's most iconic view — enormous elephant herds moving below the snow-capped summit of Kilimanjaro. Amboseli has some of the largest tuskers in Africa and extraordinarily well-studied elephant families.",
        tag: "Wildlife - Elephants",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Amboseli elephants Kilimanjaro Kenya",
      },
      {
        name: "Lamu Archipelago",
        title: "UNESCO Medieval Swahili Town",
        desc: "The best-preserved Swahili settlement in East Africa — a living medieval city of coral stone, carved doors, and donkey-narrow lanes, with no cars, extraordinary Swahili architecture, and a 700-year relationship with the Indian Ocean trade.",
        tag: "UNESCO - Swahili",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Lamu old town Swahili UNESCO Kenya coast",
      },
      {
        name: "Samburu National Reserve",
        title: "Northern Frontier Rare Species",
        desc: "The arid north of Kenya's special five — reticulated giraffe, Grevy's zebra, Somali ostrich, gerenuk, and Beisa oryx — found only in this semi-desert riverine ecosystem that the Ewaso Ng'iro River makes possible.",
        tag: "Wildlife - Northern Species",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Samburu reticulated giraffe Kenya northern",
      },
      {
        name: "Lake Nakuru and Lake Bogoria",
        title: "The Flamingo Lakes of the Rift",
        desc: "The Rift Valley soda lakes — Lake Nakuru with its rhino sanctuary and millions of flamingos, and Lake Bogoria's geysers and boiling hot springs with the continent's greatest flamingo concentrations.",
        tag: "Wildlife - Flamingo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Nakuru flamingos Rift Valley Kenya",
      },
      {
        name: "Mount Kenya",
        title: "The Equatorial Snowcap",
        desc: "Africa's second highest peak — a vast extinct volcano straddling the equator with permanent glaciers, Afroalpine moorlands, and forest zones holding elephant, buffalo, bongo, and colobus. Point Lenana (4,985m) is accessible without technical climbing.",
        tag: "Adventure - Mountain",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Mount Kenya glacier peak equatorial",
      },
      {
        name: "Diani Beach",
        title: "Kenya's Finest Indian Ocean Shore",
        desc: "A 17km arc of white coral sand backed by coastal forest south of Mombasa — warm Indian Ocean, excellent snorkelling and diving on the reef, the Colobus Conservation Centre, and the best beach infrastructure on the East African coast.",
        tag: "Beach - Indian Ocean",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Diani Beach white sand Indian Ocean Kenya",
      },
      {
        name: "Laikipia Plateau",
        title: "Community Conservancy Safari",
        desc: "Kenya's Laikipia plateau is the model for community-based conservation — a patchwork of private and community conservancies supporting the world's second largest black rhino population, wild dogs, and excellent walking and night safaris.",
        tag: "Wildlife - Conservancy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Laikipia plateau conservancy rhino Kenya",
      },
      {
        name: "Nairobi National Park",
        title: "Lions with a City Skyline",
        desc: "The world's only national park within a capital city — lions, rhinos, buffalo, giraffe, and cheetah roaming free against a backdrop of Nairobi's glass towers, just 7km from the CBD.",
        tag: "Wildlife - Nairobi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Nairobi National Park rhino city skyline",
      },
      {
        name: "Tsavo East and West",
        title: "Kenya's Largest Wilderness",
        desc: "The vast red-dust plains of Tsavo — Kenya's largest national park divided by the Nairobi–Mombasa highway. Red elephants, Mzima Springs, the Lugard Falls, and a raw, less-manicured wilderness that rewards patience.",
        tag: "Wildlife - Wilderness",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Tsavo red dust elephants Kenya wilderness",
      },
    ],
    doSubtitle:
      "Mara river crossing vigil, visiting the David Sheldrick elephant orphanage, dhow sailing from Lamu, walking safari in Laikipia, snorkelling Watamu reef, Maasai cultural village, and night game drives in the northern conservancies.",
    do: [
      {
        title: "Mara River Crossing Vigil",
        desc: "Position at a river crossing point on the Mara and wait — when a wildebeest column approaches the bank, the tension builds for minutes or hours before the chaos of thousands of animals plunging into crocodile-filled water.",
        tag: "Wildlife - Migration",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Mara river crossing wildebeest Kenya",
      },
      {
        title: "David Sheldrick Elephant Orphanage",
        desc: "Visit the Sheldrick Wildlife Trust orphanage in Nairobi National Park during the 11AM public hour — rescued elephant calves at mud wallows, explained by dedicated keepers. One of Africa's most moving conservation experiences.",
        tag: "Conservation - Nairobi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Sheldrick elephant orphanage Nairobi Kenya",
      },
      {
        title: "Dhow Sailing from Lamu",
        desc: "Hire a traditional wooden dhow with a Swahili captain for a day sail among the Lamu archipelago islands — stopping at Manda Island ruins, swimming in the Indian Ocean, and watching the coast that has looked like this for a thousand years.",
        tag: "Culture - Lamu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Dhow sailing Lamu archipelago Kenya coast",
      },
      {
        title: "Walking Safari, Laikipia",
        desc: "Walk the Laikipia conservancies with an armed professional guide — tracking rhino, encountering elephant on foot, and experiencing the savanna at ground level in a way that game vehicles simply cannot replicate.",
        tag: "Adventure - Walking Safari",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Walking safari Laikipia rhino Kenya",
      },
      {
        title: "Snorkelling Watamu Marine Park",
        desc: "The coral gardens of Watamu Marine National Park — among the best-preserved coral reefs on the East African coast, with sea turtles, rays, and extraordinary reef fish in warm, clear Indian Ocean water.",
        tag: "Marine - Watamu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Watamu snorkelling coral reef Kenya coast",
      },
      {
        title: "Hot Air Balloon over the Mara",
        desc: "An early morning balloon flight over the Masai Mara — launching at dawn, drifting above lion prides, elephant herds, and migrating wildebeest columns, before landing for a champagne bush breakfast.",
        tag: "Adventure - Balloon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Hot air balloon Masai Mara Kenya sunrise",
      },
      {
        title: "Maasai Cultural Village Visit",
        desc: "Visit a traditional Maasai enkiama — a community cultural experience with beading demonstrations, traditional dance, and insight into one of East Africa's most iconic pastoral cultures.",
        tag: "Culture - Maasai",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Maasai village cultural visit Kenya",
      },
      {
        title: "Karen Blixen Museum, Nairobi",
        desc: "The farm at the foot of the Ngong Hills where Isak Dinesen lived and wrote — beautifully preserved, with the Ngong Hills walking trails behind and the Giraffe Centre next door.",
        tag: "Culture - Nairobi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Karen Blixen museum Nairobi Ngong Hills",
      },
      {
        title: "Night Game Drive, Northern Conservancies",
        desc: "Night drives — not permitted in national parks but allowed in private conservancies around the Mara and Laikipia — reveal aardvark, porcupine, civets, genets, and occasionally leopard and serval.",
        tag: "Wildlife - Night Drive",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Night game drive conservancy Kenya leopard",
      },
      {
        title: "Giraffe Centre and Langata, Nairobi",
        desc: "Feed Rothschild giraffes at the African Fund for Endangered Wildlife centre in Langata — the giraffes lean down to take food pellets from your mouth, and the education programme is genuinely excellent.",
        tag: "Conservation - Nairobi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Giraffe Centre Langata Nairobi Kenya",
      },
    ],
    eatSubtitle:
      "Kenya's food is the most diverse in East Africa — Nairobi's world-class restaurant scene, coastal Swahili cuisine with coconut and tamarind, nyama choma at a roadside mbuzi centre, and the chai and mandazi of every Kenyan morning.",
    eat: [
      {
        category: "National Institution",
        name: "Nyama Choma",
        desc: "Roasted goat or beef — ordered by weight from a mbuzi (goat) centre, slow-roasted over charcoal and served with kachumbari (fresh tomato and onion salsa), ugali, and sukuma wiki (kale). The Kenyan social feast.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "Nyama choma roasted goat Kenya",
      },
      {
        category: "Swahili Coast",
        name: "Biryani and Pilau",
        desc: "The Swahili coast's spiced rice tradition — biryani with slow-cooked beef or chicken, scented with cardamom, cloves, and saffron; pilau Mombasa-style cooked in spiced stock with caramelised onions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Swahili biryani pilau Mombasa Kenya coast",
      },
      {
        category: "Street Staple",
        name: "Ugali with Sukuma Wiki",
        desc: "The Kenyan everyday — stiff white maize ugali served with sukuma wiki (braised kale with onion and tomato) and a piece of nyama (meat) or fish. Eaten with the right hand, from a plate shared across the table.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Ugali sukuma wiki Kenya staple food",
      },
      {
        category: "Coast Seafood",
        name: "Grilled Prawns and Coconut Fish",
        desc: "Malindi and Diani's beach restaurants serve whole grilled tiger prawns and fish cooked in coconut-tamarind sauce — the Indian Ocean's ingredients filtered through 2,000 years of Swahili coastal trade.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled prawns coconut fish Diani coast Kenya",
      },
      {
        category: "Morning Ritual",
        name: "Chai Tangawizi and Mandazi",
        desc: "Spiced ginger-milk tea (chai tangawizi) and deep-fried mandazi doughnuts — the universal Kenyan breakfast from Nairobi to the Mara, served at every roadside duka from first light.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Chai tangawizi mandazi Kenya breakfast",
      },
    ],
    staySubtitle:
      "Nairobi for arrivals and city visits; Mara lodges for migration; Amboseli for Kilimanjaro views; Lamu island guesthouses; Diani Beach for the coast; Laikipia conservancy camps for walking and night drives.",
    stay: [
      {
        type: "Capital",
        area: "Nairobi",
        desc: "Nairobi has excellent options — the Giraffe Hotel (Karen), Hemingways Nairobi (Karen), Fairmont Norfolk, and a full range of business hotels in Westlands and Upper Hill.",
        picks: ["Hemingways Nairobi", "Giraffe Hotel Karen", "Fairmont Norfolk Hotel"],
      },
      {
        type: "Migration",
        area: "Masai Mara",
        desc: "The Mara's top camps — Angama Mara, Mahali Mzuri, Sanctuary Olonana — are set in the conservancies north of the reserve for uncrowded game drives and night drives. Book a year ahead for July–October.",
        picks: ["Angama Mara", "Mahali Mzuri", "Sanctuary Olonana"],
      },
      {
        type: "Kilimanjaro Views",
        area: "Amboseli",
        desc: "Amboseli Serena, Tortilis Camp, and Ol Tukai Lodge all offer extraordinary sunrise views of Kilimanjaro from tent and room — the best backdrop in Kenya.",
        picks: ["Amboseli Serena Safari Lodge", "Tortilis Camp", "Ol Tukai Lodge"],
      },
      {
        type: "Swahili Coast",
        area: "Lamu and Diani",
        desc: "Lamu's Peponi Hotel and the stone-town guesthouses for culture; Alfajiri Villas and Almanara for Diani's finest beach experience.",
        picks: ["Peponi Hotel Lamu", "Alfajiri Villas Diani", "Almanara Boutique Hotel"],
      },
      {
        type: "Conservancy",
        area: "Laikipia",
        desc: "Borana Lodge, Ol Pejeta Bush Camp, and Segera Retreat — the Laikipia conservancy camps offer walking, night drives, and rhino tracking unavailable in national parks.",
        picks: ["Borana Lodge Laikipia", "Ol Pejeta Bush Camp", "Segera Retreat"],
      },
    ],
    map: {
      center: [0.5, 37.5],
      zoom: 6.2,
      seeSpots: [
        { lat: -1.5, lng: 35.15, name: "Masai Mara", desc: "Greatest wildlife spectacle" },
        { lat: -2.65, lng: 37.25, name: "Amboseli NP", desc: "Elephants under Kilimanjaro" },
        { lat: -2.27, lng: 40.9, name: "Lamu Archipelago", desc: "UNESCO Swahili town" },
        { lat: 0.58, lng: 37.53, name: "Samburu Reserve", desc: "Northern rare species" },
        { lat: -0.37, lng: 36.07, name: "Lake Nakuru", desc: "Flamingo Rift Valley lake" },
        { lat: -0.15, lng: 37.3, name: "Mount Kenya", desc: "Equatorial snowcap" },
        { lat: -4.28, lng: 39.59, name: "Diani Beach", desc: "Indian Ocean coral shore" },
        { lat: 0.3, lng: 36.9, name: "Laikipia Plateau", desc: "Rhino conservancy walking" },
        { lat: -1.2921, lng: 36.8219, name: "Nairobi", desc: "Capital park and orphanage" },
        { lat: -2.5, lng: 38.5, name: "Tsavo East and West", desc: "Kenya's vast red wilderness" },
      ],
      doSpots: [
        { lat: -1.5, lng: 35.15, name: "Mara River Crossing", desc: "Migration vigil" },
        { lat: -1.2921, lng: 36.8219, name: "Sheldrick Orphanage", desc: "Elephant calves Nairobi" },
        { lat: -2.27, lng: 40.9, name: "Lamu Dhow Sail", desc: "Archipelago day sailing" },
        { lat: 0.3, lng: 36.9, name: "Laikipia Walk", desc: "Walking rhino safari" },
        { lat: -3.35, lng: 40.0, name: "Watamu Snorkel", desc: "Coral marine park" },
        { lat: -1.5, lng: 35.15, name: "Mara Balloon", desc: "Dawn hot air balloon" },
        { lat: -1.34, lng: 36.75, name: "Karen Blixen Museum", desc: "Ngong Hills Nairobi" },
      ],
      staySpots: [
        { lat: -1.2921, lng: 36.8219, name: "Nairobi", desc: "Capital hotel base" },
        { lat: -1.5, lng: 35.15, name: "Masai Mara", desc: "Migration conservancy camps" },
        { lat: -2.65, lng: 37.25, name: "Amboseli", desc: "Kilimanjaro view lodges" },
        { lat: -2.27, lng: 40.9, name: "Lamu", desc: "Swahili island guesthouses" },
        { lat: 0.3, lng: 36.9, name: "Laikipia", desc: "Conservancy walking camps" },
      ],
    },
    dayTrips: [
      {
        title: "Nairobi National Park Dawn Drive",
        subtitle: "The only game drive in the world with a city skyline — enter Nairobi National Park at dawn for lions, rhinos, giraffes, and cheetahs roaming free with Nairobi's glass towers rising behind them, just 7km from the city centre.",
        tag: "Wildlife - Nairobi Half Day",
        distance: "7km from Nairobi CBD",
        duration: "Half day (4–5 hours)",
        transport: "4x4 from Nairobi",
        steps: [
          { time: "6AM", text: "Enter Nairobi National Park at the main gate — the city is already glowing behind you." },
          { time: "6:30AM", text: "First lion sighting — prides often rest in the open grassland at dawn, the Nairobi skyline visible beyond." },
          { time: "7:30AM", text: "Giraffe on the ridge and rhinos in the black cotton soil valley — the only free-ranging rhinos near any African capital." },
          { time: "9AM", text: "Hippo pool on the Athi River — a pool of thirty-plus hippos with baboons in the fig trees above." },
          { time: "10AM", text: "Exit and drive directly to the David Sheldrick Elephant Orphanage for the 11AM public hour." },
          { time: "11AM", text: "Watch elephant calves at the mud wallow — each keeper explains the rescue story of their orphan." },
        ],
      },
      {
        title: "Hell's Gate Cycling and Gorge Walk",
        subtitle: "Cycle through Hell's Gate National Park — the only Kenyan park where you ride among zebra, giraffe, and buffalo — then descend into the dramatic Fischer's Tower gorge where hot springs steam from the Rift Valley floor.",
        tag: "Adventure - Naivasha Day Trip",
        distance: "~90km northwest of Nairobi",
        duration: "Full day (8 hours)",
        transport: "Car to Naivasha, bicycle hire in park",
        steps: [
          { time: "6:30AM", text: "Depart Nairobi northwest to Naivasha — the road descends spectacularly into the Rift Valley." },
          { time: "8:30AM", text: "Hire bicycles at the Hell's Gate park gate." },
          { time: "9AM", text: "Cycle the main park circuit — zebra, giraffe, warthog, and buffalo pass within metres of your bike." },
          { time: "11AM", text: "Lock the bikes and descend into the Ol Njorowa gorge — geothermal hot springs, columnar basalt, and a canyon carved by the Rift Valley floor." },
          { time: "1PM", text: "Picnic by the springs before the return cycle to the gate." },
          { time: "3PM", text: "Optional stop at Lake Naivasha for hippo boat before the return to Nairobi." },
        ],
      },
      {
        title: "Lake Nakuru Flamingo and Rhino Day",
        subtitle: "Drive the Rift Valley to Lake Nakuru — millions of flamingos turning the soda lake pink, a thriving rhino sanctuary, and the extraordinary Rift Valley viewpoint at the escarpment above the lake.",
        tag: "Wildlife - Rift Valley Day Trip",
        distance: "~160km northwest of Nairobi",
        duration: "Full day (9 hours)",
        transport: "Car or driver from Nairobi",
        steps: [
          { time: "6AM", text: "Early departure from Nairobi up the Rift Valley escarpment — the valley view from the top is extraordinary." },
          { time: "8:30AM", text: "Enter Lake Nakuru NP — drive to the main flamingo shore for the pink horizon." },
          { time: "9:30AM", text: "Rhino search in the acacia forest — both black and white rhino are well-established here." },
          { time: "11AM", text: "Lion and leopard territory in the rocky southern hills." },
          { time: "1PM", text: "Lunch with lake view at Sarova Lion Hill before afternoon drive." },
          { time: "4PM", text: "Return to Nairobi via the escarpment viewpoint in the golden hour." },
        ],
      },
      {
        title: "Amboseli Day Trip — Elephants and Kilimanjaro",
        subtitle: "A long but spectacular day from Nairobi to Amboseli — the classic African view of enormous tuskers moving below Kilimanjaro's snow-capped summit, one of the most photographed scenes in all of East Africa.",
        tag: "Wildlife - Amboseli Day Trip",
        distance: "~240km southeast of Nairobi",
        duration: "Full day (11 hours — better as overnight)",
        transport: "Car or charter flight from Nairobi",
        steps: [
          { time: "5AM", text: "Very early departure from Nairobi south — arrive Amboseli for the morning game drive." },
          { time: "8AM", text: "Enter Amboseli — Kilimanjaro emerges above the clouds as the morning warms." },
          { time: "9AM", text: "Elephant herds in the swamp with the mountain behind — the iconic view is best before 10AM when clouds build." },
          { time: "11AM", text: "Lion and cheetah search on the open Amboseli plains." },
          { time: "1PM", text: "Lunch at the lodge with Kilimanjaro backdrop." },
          { time: "4PM", text: "Afternoon drive and return to Nairobi or overnight at lodge." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A classic Kenya week — Nairobi, the Masai Mara migration, Amboseli's elephants, and the Laikipia conservancies.",
        arrival: {
          route: "Your City -> Nairobi (NBO)",
          meta: "Nairobi Jomo Kenyatta International Airport connects to virtually every global hub. Kenya Airways, British Airways, Emirates, and Ethiopian Airlines all have excellent services.",
          sideTitle: "Mara Permits",
          sideCopy: "Book Mara lodges 6–12 months ahead for July–October migration season",
        },
        days: [
          {
            name: "Arrival",
            title: "Nairobi Introduction",
            location: "Nairobi",
            activities: [
              { time: "PM", text: "Arrive NBO, Karen or Westlands hotel check-in." },
              { time: "Night", text: "Karen Blixen Museum area dinner." },
            ],
          },
          {
            name: "Nairobi",
            title: "Elephant Orphanage and National Park",
            location: "Nairobi",
            activities: [
              { time: "AM", text: "Dawn Nairobi National Park drive — lions with the city skyline." },
              { time: "PM", text: "Sheldrick Elephant Orphanage 11AM public hour, then Giraffe Centre." },
            ],
          },
          {
            name: "Fly",
            title: "Fly to the Masai Mara",
            location: "Masai Mara",
            activities: [
              { time: "AM", text: "Domestic flight from Wilson Airport to Mara airstrip." },
              { time: "PM", text: "Afternoon game drive — first big cat sightings." },
            ],
          },
          {
            name: "Mara",
            title: "Mara Full Day — Migration",
            location: "Masai Mara",
            activities: [
              { time: "AM", text: "Dawn drive to Mara River crossing vigil." },
              { time: "PM", text: "Big cat tracking — cheetah, lion, and leopard." },
            ],
          },
          {
            name: "Balloon",
            title: "Balloon and Maasai Village",
            location: "Masai Mara",
            activities: [
              { time: "AM", text: "Pre-dawn balloon launch and champagne bush breakfast." },
              { time: "PM", text: "Maasai cultural village visit." },
            ],
          },
          {
            name: "Amboseli",
            title: "Fly to Amboseli",
            location: "Amboseli NP",
            activities: [
              { time: "AM", text: "Charter flight to Amboseli — arrive for the Kilimanjaro morning." },
              { time: "PM", text: "Elephant herds under the mountain — afternoon drive." },
            ],
          },
          {
            name: "Departure",
            title: "Amboseli Morning and Fly to Nairobi",
            location: "NBO",
            activities: [
              { time: "AM", text: "Final game drive — tuskers at sunrise below Kilimanjaro." },
              { time: "PM", text: "Charter back to NBO and international departure." },
            ],
          },
        ],
        departure: {
          route: "Nairobi (NBO) -> Your City",
          meta: "NBO is a major hub — most international departures are in the evening. Time a final Nairobi afternoon well.",
          sideTitle: "Best Time",
          sideCopy: "July–October for the migration. January–February for dry season game and fewer crowds.",
        },
      },
      "10": {
        summary: "Ten days adding the Swahili coast — Lamu town, Watamu reef, and Diani beach — to the classic safari circuit.",
        arrival: {
          route: "Your City -> Nairobi (NBO)",
          meta: "Start in Nairobi, safari circuit, then coastal leg via Mombasa or Lamu. Return from Mombasa (MBA) or back via NBO.",
          sideTitle: "Coast Timing",
          sideCopy: "October–March for the coast — the Indian Ocean is calm and the northeast trade winds fill the dhow sails",
        },
        days: [
          { name: "Arrival", title: "Nairobi Arrival", location: "Nairobi", activities: [{ time: "PM", text: "Arrive NBO and hotel check-in." }, { time: "Night", text: "Nairobi restaurant evening." }] },
          { name: "Nairobi", title: "Nairobi Wildlife Day", location: "Nairobi", activities: [{ time: "AM", text: "National park dawn and elephant orphanage." }, { time: "PM", text: "Giraffe Centre and Karen Blixen." }] },
          { name: "Mara", title: "Fly to Masai Mara", location: "Masai Mara", activities: [{ time: "AM", text: "Wilson to Mara airstrip." }, { time: "PM", text: "First game drive." }] },
          { name: "Mara", title: "Migration and Big Cats", location: "Masai Mara", activities: [{ time: "AM", text: "Mara River crossing vigil." }, { time: "PM", text: "Cheetah and lion territory." }] },
          { name: "Balloon", title: "Balloon and Maasai", location: "Masai Mara", activities: [{ time: "AM", text: "Dawn balloon, bush breakfast." }, { time: "PM", text: "Maasai village and night drive." }] },
          { name: "Laikipia", title: "Fly to Laikipia", location: "Laikipia", activities: [{ time: "AM", text: "Charter to Laikipia conservancy." }, { time: "PM", text: "Walking rhino safari and sundowners." }] },
          { name: "Lamu", title: "Fly to Lamu", location: "Lamu", activities: [{ time: "AM", text: "Charter flight to Lamu." }, { time: "PM", text: "Lamu old town walking tour." }] },
          { name: "Lamu", title: "Dhow Day and Manda Island", location: "Lamu", activities: [{ time: "AM", text: "Full-day dhow sail to Manda Island ruins." }, { time: "PM", text: "Sunset over the Lamu waterfront." }] },
          { name: "Watamu", title: "Watamu Reef", location: "Watamu", activities: [{ time: "AM", text: "Fly or boat to Watamu Marine Park." }, { time: "PM", text: "Coral snorkelling and sea turtle spotting." }] },
          { name: "Departure", title: "Mombasa and Fly Out", location: "MBA or NBO", activities: [{ time: "AM", text: "Old Town Mombasa and Fort Jesus." }, { time: "PM", text: "International departure." }] },
        ],
        departure: {
          route: "Mombasa (MBA) or Nairobi (NBO) -> Your City",
          meta: "Mombasa airport (MBA) connects to Nairobi and some Gulf hubs. Many visitors return via NBO for more connection options.",
          sideTitle: "Coast Combine",
          sideCopy: "The safari-to-coast combination is Kenya's classic — allow minimum 3 nights coast for it to feel like a proper change of pace.",
        },
      },
    },
    footerLine1: "Discover Kenya — the Great Migration, Amboseli elephants below Kilimanjaro, Lamu's Swahili soul, and the safari that defined East Africa",
    footerLine2: "eTA required (etakenya.go.ke). Mara lodges book 6–12 months ahead. Yellow fever certificate if arriving from endemic countries.",
  },

  uganda: {
    country: "Uganda",
    heroEyebrow: "East Africa — The Pearl of Africa, Mountain Gorillas and the Source of the Nile",
    heroTitleHtml: "Ugan<em>da</em>",
    heroTagline:
      "Churchill called it the Pearl of Africa — and the hyperbole holds. Mountain gorillas in Bwindi's ancient forest, chimpanzees in Kibale, tree-climbing lions in Queen Elizabeth, the thundering Murchison Falls on the Nile, shoebill stork in the papyrus swamps, and a highland landscape of volcanic lakes and tea-covered hills of heartbreaking beauty.",
    heroStats: [
      { label: "Capital", value: "Kampala" },
      { label: "Currency", value: "UGX (Ugandan Shilling)" },
      { label: "Language", value: "English, Swahili, Luganda" },
      { label: "Time Zone", value: "UTC+3" },
    ],
    knowSubtitle:
      "Uganda is East Africa's best-value primate destination — gorilla permits are significantly cheaper than Rwanda, chimp trekking is world-class, and the country's extraordinary biodiversity rewards travellers who go beyond the standard circuit.",
    know: [
      {
        icon: "🦍",
        title: "Gorilla Permits",
        text: "Mountain gorilla trekking permits cost USD 700 per person — significantly less than Rwanda's USD 1,500. Book well in advance through the Uganda Wildlife Authority (ugandawildlife.org). Both Bwindi and Mgahinga host habituated groups.",
      },
      {
        icon: "🛂",
        title: "Visa — East Africa Tourist Visa",
        text: "Uganda participates in the East Africa Tourist Visa (shared with Kenya and Rwanda) for USD 100 — excellent value if combining countries. Single-country Uganda visa available online at visas.immigration.go.ug.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever vaccination is required. Malaria prophylaxis is essential throughout Uganda. Typhoid, hepatitis A, and meningococcal vaccinations recommended. Medical facilities outside Kampala are limited — insurance with evacuation cover is important.",
      },
      {
        icon: "🌿",
        title: "Biodiversity",
        text: "Uganda contains half of the world's remaining mountain gorillas, the highest chimpanzee density in East Africa, over 1,060 bird species (more than any country in Africa), and an extraordinary concentration of primates — 13 species.",
      },
      {
        icon: "🌊",
        title: "Murchison Falls",
        text: "The Nile is forced through a 7-metre gap in the rock at Murchison Falls, creating the most powerful waterfall in the world measured by water volume per cubic metre. The boat cruise upstream from Paraa is one of Africa's great river experiences.",
      },
      {
        icon: "🏔️",
        title: "Rwenzori Mountains",
        text: "The Mountains of the Moon — a UNESCO World Heritage site on the DRC border, with permanent glaciers on the equator, Afroalpine moorlands of giant lobelias and groundsels, and a multi-day trek unlike anything else in Africa.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs are available in Kampala and major towns. USD is accepted at most lodges. UGX required for most local transactions. Uganda is good value by East African standards — gorilla permits significantly cheaper than Rwanda.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Kampala is the hub. Entebbe airport is 40km south on Lake Victoria. Bwindi Impenetrable Forest is a 8–9 hour drive or a scenic charter flight from Entebbe. Internal flights to Murchison, Queen Elizabeth, and Kidepo are efficient.",
      },
      {
        icon: "🐦",
        title: "Birding",
        text: "Uganda has more bird species than any other country in Africa — 1,060+. The shoebill stork in the Mabamba swamp, the African green broadbill in Bwindi, and the extraordinary forest birds of Kibale make Uganda a birding destination of the very first rank.",
      },
      {
        icon: "🦁",
        title: "Tree-Climbing Lions",
        text: "The lions of Ishasha in the southern sector of Queen Elizabeth National Park habitually climb fig trees — one of only two lion populations in the world to do this. Watching lions draped in the branches of a giant fig is extraordinary.",
      },
    ],
    seeSubtitle:
      "Mountain gorillas in Bwindi, tree-climbing lions in Ishasha, chimpanzees in Kibale, Murchison Falls and the Nile boat, shoebill in Mabamba swamp, the Rwenzori Mountains of the Moon, and the Ssese Islands on Lake Victoria.",
    see: [
      {
        name: "Bwindi Impenetrable Forest",
        title: "Half the World's Mountain Gorillas",
        desc: "A UNESCO World Heritage site — Bwindi's ancient forest shelters nearly half the world's remaining mountain gorilla population across four gorilla sectors: Buhoma, Ruhija, Rushaga, and Nkuringo, each with a distinct character.",
        tag: "Wildlife - Mountain Gorillas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Bwindi gorilla family Uganda forest",
      },
      {
        name: "Kibale Forest National Park",
        title: "World's Finest Chimpanzee Trekking",
        desc: "Kibale has the highest density of primates in East Africa — 13 species including the best-habituated chimpanzee communities in the world. The Kanyanchu chimp trek is the finest chimpanzee experience available anywhere.",
        tag: "Wildlife - Chimpanzees",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Kibale chimpanzee forest Uganda primates",
      },
      {
        name: "Murchison Falls National Park",
        title: "The Nile Forced Through Seven Metres",
        desc: "Uganda's largest national park — the Nile roars through a 7-metre rock gap at the most powerful waterfall on Earth, and the boat cruise upstream from Paraa through hippo-dense, crocodile-lined banks is one of Africa's iconic river experiences.",
        tag: "Nature - Falls and Nile",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Murchison Falls Nile Uganda power",
      },
      {
        name: "Queen Elizabeth National Park",
        title: "Tree Lions, Chimp Tracking, Kazinga Channel",
        desc: "Uganda's most diverse park — tree-climbing lions in Ishasha, chimpanzees in the Kyambura Gorge, the Kazinga Channel boat (Africa's densest hippo concentration), and an extraordinary volcanic crater lake landscape.",
        tag: "Wildlife - Diverse",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Queen Elizabeth NP Uganda tree lion",
      },
      {
        name: "Rwenzori Mountains",
        title: "UNESCO Mountains of the Moon",
        desc: "The legendary Mountains of the Moon on the DRC border — permanent glaciers on the equator, giant lobelias 9 metres tall, and Afroalpine moorlands inhabited by the three-horned chameleon. A multi-day trek unlike anywhere else in Africa.",
        tag: "Adventure - UNESCO Mountains",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Rwenzori mountains glaciers Uganda equatorial",
      },
      {
        name: "Kidepo Valley National Park",
        title: "Africa's Most Remote Wilderness",
        desc: "Uganda's far north — a remote savanna valley in the Karamoja region with cheetah, lion, ostrich, and some of Uganda's finest landscapes, visited by very few and rated by many guides as one of the best parks in Africa.",
        tag: "Wildlife - Remote",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Kidepo Valley park Uganda remote north",
      },
      {
        name: "Mabamba Swamp",
        title: "Shoebill Stork Capital of the World",
        desc: "The Mabamba wetland on Lake Victoria near Entebbe holds the most accessible shoebill stork population in East Africa — paddled into by dugout canoe, the prehistoric birds stand motionless in the papyrus.",
        tag: "Birding - Shoebill",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Shoebill stork Mabamba swamp Uganda",
      },
      {
        name: "Source of the Nile, Jinja",
        title: "Where Lake Victoria Becomes the Nile",
        desc: "Jinja is the town at the point where Lake Victoria narrows and the Nile begins its 6,650km journey north — the Owen Falls Dam, the source monument, white-water rafting, and a laid-back town that backpackers have loved for decades.",
        tag: "Geography - Nile Source",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Jinja Nile source Lake Victoria Uganda",
      },
      {
        name: "Lake Bunyonyi",
        title: "Africa's Deepest Lake in a Crater Landscape",
        desc: "A spectacular crater lake in southwestern Uganda — 29 islands, terraced hillsides, dugout canoe paddling, and a cool, quiet highland atmosphere that makes it a beloved recovery stop after Bwindi gorilla trekking.",
        tag: "Nature - Crater Lake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Bunyonyi crater islands Uganda highlands",
      },
      {
        name: "Ssese Islands, Lake Victoria",
        title: "Equatorial Islands on Africa's Largest Lake",
        desc: "An archipelago of 84 islands on Lake Victoria — white sand beaches, forest interior, fishing communities, and a slow island pace that is entirely unlike the mainland. Reached by ferry from Entebbe or Bukakata.",
        tag: "Nature - Islands",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Ssese islands Lake Victoria Uganda",
      },
    ],
    doSubtitle:
      "Mountain gorilla trekking in Bwindi, chimpanzee habituation in Kibale, Kazinga Channel boat, tree lion search in Ishasha, Nile rafting at Jinja, shoebill canoe in Mabamba, Rwenzori mountain trek, and night primate walks in Kibale.",
    do: [
      {
        title: "Mountain Gorilla Trek, Bwindi",
        desc: "One of the world's great wildlife experiences — a strenuous rainforest hike to sit for one transformative hour with a habituated gorilla family in Bwindi's ancient forest. Book through UWA well in advance.",
        tag: "Wildlife - Gorillas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Gorilla trek Bwindi Uganda ancient forest",
      },
      {
        title: "Chimpanzee Habituation Experience, Kibale",
        desc: "Unlike the standard chimp trek, the habituation experience allows four hours with a chimpanzee group still being habituated — extraordinary intimate time with wild chimpanzees in their forest world.",
        tag: "Wildlife - Chimpanzees",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Chimpanzee habituation Kibale Uganda",
      },
      {
        title: "Kazinga Channel Boat Cruise",
        desc: "A two-hour boat on the Kazinga Channel connecting lakes George and Edward — the world's densest hippo concentration, thousands of buffalo on the banks, and remarkable waterbirds in the shallows.",
        tag: "Wildlife - Boat Cruise",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Kazinga Channel boat hippos Uganda",
      },
      {
        title: "Tree-Climbing Lion Search, Ishasha",
        desc: "Drive the fig-tree plains of Ishasha in southern Queen Elizabeth NP looking up into the branches — the Ishasha lions regularly drape themselves in the giant figs, one of only two lion populations in the world to habitually do this.",
        tag: "Wildlife - Tree Lions",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Tree climbing lion Ishasha fig Uganda",
      },
      {
        title: "White-Water Rafting, Jinja",
        desc: "Grade 5 white-water rafting on the Nile at Jinja — one of the world's great commercial rafting experiences, running through enormous rapids on Africa's greatest river just below the point where Lake Victoria becomes the Nile.",
        tag: "Adventure - Jinja",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "White water rafting Jinja Nile Uganda",
      },
      {
        title: "Shoebill Canoe, Mabamba",
        desc: "A dugout canoe dawn trip into the Mabamba papyrus swamp near Entebbe — the shoebill stands motionless in the papyrus as you approach silently, its prehistoric head and massive bill at eye level with your canoe.",
        tag: "Birding - Shoebill",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Shoebill canoe Mabamba papyrus Entebbe",
      },
      {
        title: "Murchison Falls Boat Cruise",
        desc: "The classic Nile experience — a 3-hour boat from Paraa upstream through hippo pods, Nile crocodiles, and elephant on the banks, to the base of Murchison Falls where the full force of the Nile erupts through 7 metres of rock.",
        tag: "Nature - Murchison",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Murchison Falls boat cruise Nile Uganda",
      },
      {
        title: "Night Primate Walk, Kibale",
        desc: "A torchlit walk through Kibale forest at night — searching for potto, bushbaby, and the extraordinary nocturnal primates in the forest canopy, with the sounds of the night forest all around.",
        tag: "Wildlife - Night",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Night primate walk Kibale Uganda forest",
      },
      {
        title: "Lake Bunyonyi Canoe Day",
        desc: "Paddle between the 29 islands of Lake Bunyonyi — stopping at Punishment Island (a historically dark place with a deeply human story), visiting villages on the larger islands, and watching the terraced hillsides in the highland light.",
        tag: "Nature - Bunyonyi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Bunyonyi canoe islands Uganda",
      },
      {
        title: "Batwa Cultural Trail, Bwindi",
        desc: "The Batwa are the original forest inhabitants of Bwindi — the cultural trail with Batwa guides is a deeply moving experience of forest medicine, fire-making, hunting techniques, and the story of the people who lived inside the forest that is now a gorilla reserve.",
        tag: "Culture - Batwa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Batwa cultural trail Bwindi forest Uganda",
      },
    ],
    eatSubtitle:
      "Ugandan food is generous, starchy, and matoke-centred — steamed green banana matoke, rolex street wraps, groundnut stew, Nile perch from Lake Victoria, and the cold Nile Special that ends every long safari day.",
    eat: [
      {
        category: "National Staple",
        name: "Matoke",
        desc: "Steamed green cooking bananas wrapped in banana leaves and cooked until soft — served with groundnut stew, beans, or smoked fish. The fundamental food of southern Uganda and the Buganda kingdom.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Matoke steamed banana Uganda groundnut",
      },
      {
        category: "Street Phenomenon",
        name: "Rolex",
        desc: "Uganda's beloved street food — a rolled chapati with eggs (often with tomato, cabbage, and onion) made on a roadside griddle. The name is a corruption of 'rolled eggs.' Every town, every time of day.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "Rolex chapati eggs Uganda street food",
      },
      {
        category: "Lake Fish",
        name: "Nile Perch from Lake Victoria",
        desc: "Tilapia and Nile perch from Lake Victoria — fried whole and served with matooke and a peanut sauce at lakeside restaurants around Entebbe and Kampala's fish markets. The freshest, most abundant lake fish in East Africa.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Nile perch Lake Victoria Uganda fried",
      },
      {
        category: "Kampala Restaurant",
        name: "Groundnut Stew",
        desc: "Ugandan groundnut (peanut) stew — slow-cooked with chicken, beef, or smoked catfish in a rich, aromatic sauce with tomato and spices — served over rice or matoke in equal, generous portions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Groundnut stew peanut Uganda chicken",
      },
      {
        category: "Drink",
        name: "Nile Special, Waragi, and Bushera",
        desc: "Nile Special lager is Uganda's beloved beer — cold after a gorilla trek, essential. Waragi is the national spirit — a potent sugarcane or millet gin. Bushera is a traditional fermented millet drink served at room temperature.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Nile Special beer waragi Uganda drink",
      },
    ],
    staySubtitle:
      "Entebbe for arrivals; Kampala for the city; Bwindi for gorilla trekking; Kibale for chimpanzees; Murchison for the Nile; Lake Bunyonyi for highland recovery; Kidepo for the remote north.",
    stay: [
      {
        type: "Arrival Base",
        area: "Entebbe",
        desc: "Entebbe is the airport town on Lake Victoria — several excellent guesthouses and the Boma Guest House for transit stays before upcountry departures.",
        picks: ["Boma Guest House Entebbe", "Karibu Guest House", "Protea Hotel Entebbe"],
      },
      {
        type: "Gorilla Base",
        area: "Bwindi",
        desc: "Mahogany Springs, Sanctuary Gorilla Forest Camp, and Bwindi Lodge are the finest — set directly on the forest boundary in each of Bwindi's four sectors.",
        picks: ["Mahogany Springs Lodge", "Sanctuary Gorilla Forest Camp", "Bwindi Lodge Buhoma"],
      },
      {
        type: "Chimp Base",
        area: "Kibale / Fort Portal",
        desc: "Primate Lodge Kibale and Kyaninga Lodge are the best for chimp trekking. Fort Portal town has good mid-range options as a base for the Kibale and crater lakes.",
        picks: ["Primate Lodge Kibale", "Kyaninga Lodge Fort Portal", "Ndali Lodge crater lakes"],
      },
      {
        type: "Nile",
        area: "Murchison Falls",
        desc: "Paraa Safari Lodge and Nile Safari Camp are the best within the park — the Nile views from both are extraordinary.",
        picks: ["Paraa Safari Lodge", "Nile Safari Camp", "Baker's Lodge"],
      },
      {
        type: "Highland Recovery",
        area: "Lake Bunyonyi",
        desc: "Arcadia Cottages and Bwindi Backpackers (not Bwindi the forest — a different place at Bunyonyi) offer peaceful lakeside stays popular after Bwindi gorilla trekking.",
        picks: ["Arcadia Cottages Bunyonyi", "Bunyonyi Overland Resort", "Clouds Mountain Gorilla Lodge"],
      },
    ],
    map: {
      center: [1.5, 32.5],
      zoom: 6.8,
      seeSpots: [
        { lat: -1.05, lng: 29.67, name: "Bwindi Forest", desc: "Half world's mountain gorillas" },
        { lat: 0.5, lng: 30.36, name: "Kibale Forest", desc: "Finest chimp trekking" },
        { lat: 2.28, lng: 31.67, name: "Murchison Falls", desc: "World's most powerful waterfall" },
        { lat: -0.17, lng: 29.9, name: "Queen Elizabeth NP", desc: "Tree lions and Kazinga" },
        { lat: 0.4, lng: 29.9, name: "Rwenzori Mountains", desc: "UNESCO Mountains of the Moon" },
        { lat: 3.7, lng: 33.9, name: "Kidepo Valley", desc: "Remote wilderness north" },
        { lat: 0.28, lng: 32.27, name: "Mabamba Swamp", desc: "Shoebill stork capital" },
        { lat: 0.43, lng: 33.2, name: "Jinja — Nile Source", desc: "Lake Victoria to Nile" },
        { lat: -1.3, lng: 29.88, name: "Lake Bunyonyi", desc: "Crater lake with islands" },
        { lat: 0.05, lng: 32.44, name: "Ssese Islands", desc: "Lake Victoria archipelago" },
      ],
      doSpots: [
        { lat: -1.05, lng: 29.67, name: "Gorilla Trek", desc: "Bwindi forest families" },
        { lat: 0.5, lng: 30.36, name: "Chimp Habituation", desc: "Kibale 4-hour experience" },
        { lat: -0.17, lng: 29.9, name: "Kazinga Boat", desc: "Hippo dense channel" },
        { lat: -0.55, lng: 29.63, name: "Tree Lion Search", desc: "Ishasha fig trees" },
        { lat: 0.43, lng: 33.2, name: "Jinja Rafting", desc: "Grade 5 Nile white water" },
        { lat: 0.28, lng: 32.27, name: "Shoebill Canoe", desc: "Mabamba dawn papyrus" },
        { lat: 2.28, lng: 31.67, name: "Murchison Cruise", desc: "Paraa to falls by boat" },
        { lat: -1.05, lng: 29.67, name: "Batwa Trail", desc: "Forest people culture" },
      ],
      staySpots: [
        { lat: 0.06, lng: 32.46, name: "Entebbe", desc: "Airport arrival base" },
        { lat: -1.05, lng: 29.67, name: "Bwindi", desc: "Forest gorilla lodges" },
        { lat: 0.5, lng: 30.36, name: "Kibale", desc: "Chimpanzee forest camps" },
        { lat: 2.28, lng: 31.67, name: "Murchison", desc: "Nile safari lodges" },
        { lat: -1.3, lng: 29.88, name: "Lake Bunyonyi", desc: "Highland crater lake" },
      ],
    },
    dayTrips: [
      {
        title: "Mabamba Shoebill Dawn Canoe",
        subtitle: "A pre-dawn pirogue into the Mabamba papyrus swamp on Lake Victoria — the shoebill stork stands perfectly still in the reeds at eye level as you approach by paddle, its prehistoric bill and unblinking eye unlike any bird on Earth.",
        tag: "Birding - Entebbe Half Day",
        distance: "~35km from Entebbe",
        duration: "Half day (4 hours)",
        transport: "Car to Mabamba landing, dugout canoe",
        steps: [
          { time: "5:30AM", text: "Depart Entebbe before dawn for the Mabamba landing site on Lake Victoria." },
          { time: "6AM", text: "Board a dugout canoe and paddle into the papyrus channels in silence." },
          { time: "6:30AM", text: "First shoebill — the bird stands motionless in the papyrus, perfectly camouflaged until it moves." },
          { time: "7:30AM", text: "Other Mabamba specials — African jacana, malachite kingfisher, and the sitatunga deer in the swamp margins." },
          { time: "9AM", text: "Return to the landing and drive back to Entebbe for breakfast." },
          { time: "10AM", text: "Optional add-on: Uganda Wildlife Education Centre (Entebbe Zoo) for rescued wildlife." },
        ],
      },
      {
        title: "Jinja Nile Source and White Water",
        subtitle: "A classic Uganda day trip east from Kampala — the source of the Nile where Lake Victoria narrows, the Owen Falls view, and Grade 5 white-water rafting on the upper Nile in the afternoon.",
        tag: "Adventure - Kampala Day Trip",
        distance: "~90km east of Kampala",
        duration: "Full day (9 hours)",
        transport: "Car east from Kampala or Entebbe",
        steps: [
          { time: "6:30AM", text: "Depart Kampala east on the Jinja highway." },
          { time: "8:30AM", text: "Arrive Jinja — boat to the Nile source monument at the outflow of Lake Victoria." },
          { time: "9:30AM", text: "Walk the Nile bank and Owen Falls viewpoint — the river at its widest, flattest, and most powerful." },
          { time: "11AM", text: "Check in with the rafting operator — briefing and kit-up." },
          { time: "12PM", text: "Grade 5 rafting on the Nile — six major rapids, huge drops, and rolling recoveries." },
          { time: "4PM", text: "Return drive to Kampala." },
        ],
      },
      {
        title: "Lake Bunyonyi Canoe and Island Walk",
        subtitle: "Spend a day on the extraordinary crater lake of Bunyonyi — paddling between terraced hillside islands, visiting the Batwa island community, swimming in Africa's second deepest lake, and watching the highland light change across the water.",
        tag: "Nature - Bwindi Recovery Day",
        distance: "~8km from Kabale",
        duration: "Full day (6 hours on water)",
        transport: "Car to Bunyonyi, dugout canoe",
        steps: [
          { time: "7AM", text: "Arrive at the Bunyonyi shore and board a dugout canoe with a guide." },
          { time: "7:30AM", text: "Paddle to Punishment Island — the guide explains the island's dark history and the social change it represents." },
          { time: "9AM", text: "Continue to Bwama Island — the old leprosy settlement is now a school and community." },
          { time: "11AM", text: "Swimming stop in the clear, warm lake water." },
          { time: "1PM", text: "Picnic lunch on a grassy island shore." },
          { time: "3PM", text: "Return paddle with the afternoon light on the terraced hillsides." },
        ],
      },
      {
        title: "Ziwa Rhino Sanctuary and Murchison Day",
        subtitle: "The only place to see wild rhinos in Uganda — Ziwa Rhino Sanctuary is a walking rhino experience on the road to Murchison Falls, making it a natural stop en route to the park.",
        tag: "Wildlife - Murchison Road Trip",
        distance: "~180km north of Kampala",
        duration: "Full day (10 hours with Murchison entry)",
        transport: "Car north from Kampala",
        steps: [
          { time: "6AM", text: "Depart Kampala north on the road to Murchison." },
          { time: "9AM", text: "Arrive Ziwa Rhino Sanctuary — this is Uganda's only wild rhino population." },
          { time: "9:30AM", text: "Walking encounter with southern white rhinos at close range — a ranger leads the approach on foot." },
          { time: "11AM", text: "Continue north to Murchison Falls NP." },
          { time: "1PM", text: "Afternoon game drive on the north bank — lion, elephant, giraffe, and buffalo." },
          { time: "4PM", text: "Top of the Falls viewpoint — stand above the 7-metre gap where the full Nile forces through." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week of Uganda's primate circuit — gorillas in Bwindi, chimpanzees in Kibale, tree lions in Queen Elizabeth, and the Murchison Falls Nile.",
        arrival: {
          route: "Your City -> Entebbe (EBB)",
          meta: "Entebbe connects via Nairobi, Addis Ababa, Dubai, Amsterdam, and London. Ethiopian Airlines, Emirates, and Kenya Airways are the main carriers.",
          sideTitle: "Permits",
          sideCopy: "Gorilla (USD 700) and chimp habituation permits must be pre-booked via ugandawildlife.org",
        },
        days: [
          {
            name: "Arrival",
            title: "Entebbe and Mabamba",
            location: "Entebbe",
            activities: [
              { time: "AM", text: "Arrive EBB — if arriving the night before, pre-dawn Mabamba shoebill canoe." },
              { time: "PM", text: "Entebbe Botanical Gardens and Lake Victoria beach." },
            ],
          },
          {
            name: "Drive",
            title: "Drive to Queen Elizabeth NP",
            location: "Queen Elizabeth NP",
            activities: [
              { time: "AM", text: "Long but scenic drive southwest to Queen Elizabeth." },
              { time: "PM", text: "Arrive and first Kazinga Channel boat cruise." },
            ],
          },
          {
            name: "QENP",
            title: "Tree Lions — Ishasha",
            location: "Ishasha Sector",
            activities: [
              { time: "AM", text: "Drive south to Ishasha for the tree-climbing lion search." },
              { time: "PM", text: "Fig tree scans and game drive on the Ishasha plains." },
            ],
          },
          {
            name: "Kibale",
            title: "Drive to Kibale Forest",
            location: "Kibale NP",
            activities: [
              { time: "AM", text: "Drive north to Kibale via the crater lake district." },
              { time: "PM", text: "Arrive and afternoon chimp trek briefing." },
            ],
          },
          {
            name: "Chimps",
            title: "Chimpanzee Habituation Experience",
            location: "Kibale NP",
            activities: [
              { time: "AM", text: "4-hour chimpanzee habituation experience — the most intimate chimp encounter available." },
              { time: "PM", text: "Night primate walk in Kibale forest." },
            ],
          },
          {
            name: "Bwindi",
            title: "Drive to Bwindi for Gorillas",
            location: "Bwindi",
            activities: [
              { time: "AM", text: "Drive south to Bwindi Impenetrable Forest." },
              { time: "PM", text: "Briefing and community walk around the park boundary." },
            ],
          },
          {
            name: "Gorillas",
            title: "Mountain Gorilla Trek",
            location: "Bwindi",
            activities: [
              { time: "AM", text: "Assigned gorilla family trek into the forest." },
              { time: "PM", text: "Batwa cultural trail in the afternoon." },
            ],
          },
        ],
        departure: {
          route: "Bwindi -> Entebbe (EBB) — charter flight or drive",
          meta: "Charter flights from Kihihi or Kisoro airstrips back to Entebbe take 1.5 hours. The drive is 8–9 hours. Most fly.",
          sideTitle: "Best Time",
          sideCopy: "June–August and December–February for drier forest conditions. Gorilla trekking is year-round but drier months have firmer trails.",
        },
      },
      "10": {
        summary: "Ten days adding Murchison Falls and the Nile, Lake Bunyonyi recovery, and deeper Kibale time.",
        arrival: {
          route: "Your City -> Entebbe (EBB)",
          meta: "Same routing. Ten days allows the full primate circuit plus Murchison Falls — Uganda's widest park.",
          sideTitle: "East Africa Visa",
          sideCopy: "Buy the East Africa Tourist Visa (Uganda + Kenya + Rwanda) for USD 100 if combining countries",
        },
        days: [
          { name: "Arrival", title: "Entebbe and Shoebill", location: "Entebbe", activities: [{ time: "AM", text: "Arrive and Mabamba shoebill canoe." }, { time: "PM", text: "Botanical Gardens and lake." }] },
          { name: "Jinja", title: "Jinja Nile Rafting", location: "Jinja", activities: [{ time: "AM", text: "Drive to Jinja — Nile source visit." }, { time: "PM", text: "Grade 5 rafting on the Nile." }] },
          { name: "Murchison", title: "Drive to Murchison Falls", location: "Murchison", activities: [{ time: "AM", text: "Drive north — Ziwa rhino sanctuary stop." }, { time: "PM", text: "Arrive and game drive north bank." }] },
          { name: "Falls", title: "Nile Boat Cruise", location: "Murchison", activities: [{ time: "AM", text: "Paraa to Falls boat cruise — hippos and crocodiles." }, { time: "PM", text: "Top of Falls walk and afternoon drive." }] },
          { name: "QENP", title: "Drive to Queen Elizabeth", location: "Queen Elizabeth NP", activities: [{ time: "AM", text: "Drive south to QENP." }, { time: "PM", text: "Kazinga Channel boat cruise." }] },
          { name: "Ishasha", title: "Tree Lion and Kibale Drive", location: "Kibale NP", activities: [{ time: "AM", text: "Ishasha tree lion dawn drive." }, { time: "PM", text: "Drive north to Kibale." }] },
          { name: "Chimps", title: "Chimp Habituation Day", location: "Kibale NP", activities: [{ time: "AM", text: "4-hour chimpanzee habituation experience." }, { time: "PM", text: "Night primate walk." }] },
          { name: "Bwindi", title: "Drive to Bwindi", location: "Bwindi", activities: [{ time: "AM", text: "Drive south through Fort Portal and crater lakes." }, { time: "PM", text: "Arrive Bwindi, forest orientation." }] },
          { name: "Gorillas", title: "Mountain Gorilla Trek", location: "Bwindi", activities: [{ time: "AM", text: "Gorilla family trek and one-hour encounter." }, { time: "PM", text: "Batwa cultural trail." }] },
          { name: "Bunyonyi", title: "Lake Bunyonyi Recovery", location: "Lake Bunyonyi", activities: [{ time: "AM", text: "Morning canoe on Bunyonyi islands." }, { time: "PM", text: "Charter flight to Entebbe and departure." }] },
        ],
        departure: {
          route: "Bunyonyi/Kabale -> Entebbe (EBB) by charter",
          meta: "Charter from Kisoro or Kihihi back to Entebbe — 1.5 hours. A perfect last morning on Lake Bunyonyi.",
          sideTitle: "Combine",
          sideCopy: "Uganda + Rwanda is the most logical East Africa combination — Bwindi to Volcanoes NP is 2.5 hours by road.",
        },
      },
    },
    footerLine1: "Discover Uganda — mountain gorillas in Bwindi, chimpanzees in Kibale, Murchison Falls, tree-climbing lions, the Pearl of Africa",
    footerLine2: "Gorilla permits USD 700 via ugandawildlife.org. Yellow fever required. East Africa Tourist Visa covers Uganda, Kenya, and Rwanda.",
  },

  tanzania: {
    country: "Tanzania",
    heroEyebrow: "East Africa — Serengeti, Kilimanjaro, Zanzibar, and the Cradle of Humankind",
    heroTitleHtml: "Tanza<em>nia</em>",
    heroTagline:
      "The country with everything — the Serengeti migration and the Ngorongoro Crater, Kilimanjaro rising above the African plain, the Swahili spice island of Zanzibar, the remote Selous and Ruaha wilderness, and Olduvai Gorge where the human story began. More African wildlife than any country on Earth, in landscapes of staggering scale and beauty.",
    heroStats: [
      { label: "Capital", value: "Dodoma (political) / Dar es Salaam (commercial)" },
      { label: "Currency", value: "TZS (Tanzanian Shilling)" },
      { label: "Language", value: "Swahili, English" },
      { label: "Time Zone", value: "UTC+3" },
    ],
    knowSubtitle:
      "Tanzania is East Africa's safari heavyweight — the Serengeti alone justifies a transcontinental flight. The northern circuit (Serengeti, Ngorongoro, Tarangire) is world-famous and well-serviced. The southern circuit (Selous/Nyerere, Ruaha) is wilder, quieter, and increasingly compelling.",
    know: [
      {
        icon: "🦌",
        title: "The Great Migration",
        text: "Over two million wildebeest, zebra, and Thomson's gazelle move between the Serengeti and Kenya's Masai Mara in a year-round cycle. The river crossings at the Mara River happen July–October. The calving season (January–February) in the southern Serengeti is equally extraordinary.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Most nationalities can obtain a Tanzania e-visa online at eservices.immigration.go.tz before travel. USD 50 for most nationalities. East African Community citizens have different arrangements. The process is generally smooth.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever certificate required if arriving from an endemic country. Malaria prophylaxis essential for all areas. Typhoid and hepatitis A recommended. Zanzibar has year-round malaria risk. Medical facilities outside Dar and Arusha are limited.",
      },
      {
        icon: "🏔️",
        title: "Kilimanjaro",
        text: "Africa's highest peak (5,895m) is a non-technical walk-up requiring significant acclimatisation. The Lemosho and Machame routes take 7–8 days and give the best summit success rates. Book through a licensed operator well in advance.",
      },
      {
        icon: "🌊",
        title: "Zanzibar",
        text: "The spice island off Tanzania's coast — Stone Town's UNESCO Swahili labyrinth, white sand beaches at Nungwi and Kendwa, world-class diving on the reef, and the extraordinary history of the Indian Ocean trade and the Arab-African civilisation.",
      },
      {
        icon: "🐘",
        title: "Southern Circuit",
        text: "The Selous Game Reserve (now Nyerere NP) and Ruaha National Park together form Africa's largest combined wildlife area — vast, wild, and with far fewer visitors than the northern circuit. Enormous elephant populations and wild dog packs.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs in Arusha, Dar, and major towns. USD widely accepted at lodges and parks. Tanzania has high conservation fees — park fees add significantly to costs, especially for the northern circuit. Budget carefully.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Kilimanjaro International Airport (JRO) serves the northern circuit. Dar es Salaam (DAR) serves the south and Zanzibar. Charter flights connect Arusha to the Serengeti, Selous, and Ruaha efficiently. The northern circuit is also driveable.",
      },
      {
        icon: "🦴",
        title: "Olduvai Gorge",
        text: "The Olduvai Gorge in the Ngorongoro Conservation Area is where Homo habilis, Homo erectus, and Australopithecus remains were found — one of the most important paleoanthropological sites on Earth, on the floor of the Rift Valley.",
      },
      {
        icon: "🏊",
        title: "Diving",
        text: "Tanzania's Indian Ocean coast offers excellent diving — Zanzibar's Mnemba Atoll is one of East Africa's finest coral reef dives, with whale sharks seasonally, while Mafia Island is arguably even better and far less visited.",
      },
    ],
    seeSubtitle:
      "The Serengeti and calving season, Ngorongoro Crater, Kilimanjaro at dawn, Zanzibar Stone Town, Tarangire's enormous elephant herds, the wild Selous, Olduvai Gorge, and the Mafia Island reef.",
    see: [
      {
        name: "Serengeti National Park",
        title: "The Migration and the Endless Plain",
        desc: "The world's greatest wildlife ecosystem — two million animals in perpetual movement across 30,000 km² of savanna. Every month has something extraordinary: calving season in January–February, the northern crossing July–October, and big cat densities year-round that are simply unmatched.",
        tag: "Wildlife - World-Class",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Serengeti migration wildebeest Tanzania plain",
      },
      {
        name: "Ngorongoro Crater",
        title: "The Eighth Wonder of the World",
        desc: "The world's largest intact volcanic caldera — 600 km² of enclosed wildlife habitat holding the densest big five concentration on Earth. Black rhino, lion prides, massive buffalo herds, and flocks of flamingo on the soda lake floor.",
        tag: "Wildlife - UNESCO",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Ngorongoro Crater caldera wildlife Tanzania",
      },
      {
        name: "Kilimanjaro",
        title: "The Roof of Africa",
        desc: "Africa's highest peak and the world's highest free-standing mountain — a dormant stratovolcano rising from the Tanzanian plain to 5,895m above sea level, its glaciated summit visible for hundreds of kilometres across the savanna.",
        tag: "Adventure - Mountain",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Kilimanjaro peak Tanzania Africa highest",
      },
      {
        name: "Zanzibar Stone Town",
        title: "UNESCO Swahili Spice Island",
        desc: "One of Africa's most beautiful UNESCO sites — a living Swahili-Arab-Indian city of carved wooden doors, coral stone buildings, the historic slave market site, the Old Fort, and narrow lanes that have traded spices, ivory, and ideas for a thousand years.",
        tag: "UNESCO - Swahili",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Zanzibar Stone Town carved doors Tanzania",
      },
      {
        name: "Tarangire National Park",
        title: "Elephant Kingdom and Ancient Baobabs",
        desc: "The Tarangire River in the dry season draws the largest elephant concentrations in northern Tanzania — thousands of elephants, vast baobab groves, and an atmosphere of primeval Africa that feels rawer than either the Serengeti or the Crater.",
        tag: "Wildlife - Elephants",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Tarangire elephants baobab Tanzania dry season",
      },
      {
        name: "Selous Game Reserve (Nyerere NP)",
        title: "Africa's Largest Game Reserve",
        desc: "The Selous — now partly Nyerere National Park — is Africa's largest protected wildlife area. Wild dogs, enormous elephant herds, hippo-dense river channels, and the extraordinary Rufiji River boat safaris in a wilderness with virtually no other visitors.",
        tag: "Wildlife - Southern Circuit",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Selous Rufiji River boat safari Tanzania",
      },
      {
        name: "Olduvai Gorge",
        title: "The Cradle of Humankind",
        desc: "A steep-sided ravine in the Ngorongoro Conservation Area where Louis and Mary Leakey discovered Homo habilis fossils in 1959 — one of the most important archaeological sites in human history, with a small but excellent museum.",
        tag: "History - Paleoanthropology",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Olduvai Gorge Rift Valley Tanzania human origins",
      },
      {
        name: "Ruaha National Park",
        title: "Tanzania's Wild and Untouched South",
        desc: "Tanzania's second largest park and one of its best-kept secrets — vast elephant herds, substantial lion and leopard populations, wild dogs, and the Great Ruaha River cutting through a landscape that feels genuinely remote.",
        tag: "Wildlife - Remote",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Ruaha National Park Tanzania southern wild",
      },
      {
        name: "Nungwi and Kendwa Beaches",
        title: "Zanzibar's Finest Sands",
        desc: "The northern tip of Zanzibar island — white coral sand, warm Indian Ocean, traditional dhow-building yards at Nungwi village, snorkelling on the reef, and sunsets over the open sea that end every beach day perfectly.",
        tag: "Beach - Zanzibar",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Nungwi beach Zanzibar white sand Tanzania",
      },
      {
        name: "Lake Manyara National Park",
        title: "Tree-Climbing Lions and Flamingo Shore",
        desc: "A narrow strip of woodland and alkaline lake — tree-climbing lions in the mahogany forest, flocks of flamingo on the lake shore, and elephant at surprisingly close range in dense vegetation, all within 2 hours of Arusha.",
        tag: "Wildlife - Northern Circuit",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Lake Manyara tree lion flamingo Tanzania",
      },
    ],
    doSubtitle:
      "Serengeti calving season, Ngorongoro crater floor drive, Kilimanjaro summit attempt, Zanzibar spice tour, Rufiji River boat safari, Mnemba Atoll diving, Olduvai Gorge, and hot air balloon over the Serengeti.",
    do: [
      {
        title: "Serengeti Balloon Safari",
        desc: "A dawn hot air balloon over the Serengeti — launching from the central plains as the wildebeest begin to move, drifting over lion kills and elephant herds, landing for a full bush breakfast served on a linen-set table in the grass.",
        tag: "Adventure - Balloon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Hot air balloon Serengeti dawn Tanzania",
      },
      {
        title: "Ngorongoro Crater Floor Game Drive",
        desc: "Descend 600m into the Ngorongoro Crater — a full-day game drive on the crater floor among the densest big five population in Africa. Black rhino, lion prides hunting in the open, and massive concentrations of grazing animals.",
        tag: "Wildlife - Crater",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Ngorongoro crater floor big five Tanzania",
      },
      {
        title: "Kilimanjaro Summit Trek",
        desc: "Seven to eight days of walking through five distinct climate zones — rainforest, heath, moorland, alpine desert, and glacier — to reach Uhuru Peak at 5,895m. The Lemosho route gives the best acclimatisation and summit rate.",
        tag: "Adventure - Kilimanjaro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Kilimanjaro summit trek Tanzania Uhuru",
      },
      {
        title: "Zanzibar Spice Tour",
        desc: "A half-day walk through Zanzibar's spice farms — cloves, nutmeg, vanilla, cinnamon, and pepper growing in their natural state, explained by farmers, tasted fresh, and contextualised within the Indian Ocean trade history.",
        tag: "Culture - Zanzibar",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Zanzibar spice tour cloves Tanzania farm",
      },
      {
        title: "Rufiji River Boat Safari",
        desc: "A motorised boat through the Rufiji River channels in Nyerere NP — hippopotamus pods at every bend, crocodiles on every sandbank, and the wild silence of Africa's largest game reserve, utterly without other vehicles.",
        tag: "Wildlife - Selous",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Rufiji River boat Nyerere hippo Tanzania",
      },
      {
        title: "Mnemba Atoll Diving",
        desc: "One of East Africa's finest coral reef dives — the Mnemba Atoll off Zanzibar's northeast coast has sea turtles, reef sharks, dolphins, and extraordinary coral gardens in warm, clear Indian Ocean water.",
        tag: "Marine - Zanzibar",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Mnemba atoll diving Zanzibar coral Tanzania",
      },
      {
        title: "Walking Safari, Selous",
        desc: "A guided walking safari through the Selous wilderness — on foot among elephant and buffalo with an armed scout, experiencing the scale and silence of Africa's largest game reserve at ground level.",
        tag: "Adventure - Walking",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Walking safari Selous elephant Tanzania",
      },
      {
        title: "Stone Town Sunset Dhow Cruise",
        desc: "A traditional wooden dhow sailing from Stone Town at sunset — the carved silhouette of the old town fading behind you, dolphins sometimes joining the boat, and the Indian Ocean colours as the sun drops over Africa.",
        tag: "Culture - Zanzibar",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Stone Town dhow sunset Zanzibar Tanzania",
      },
      {
        title: "Olduvai Gorge Visit",
        desc: "Stop at Olduvai Gorge on the way between the Serengeti and Ngorongoro — the small museum explains the fossil discoveries, a guide walks you to the excavation site, and the Rift Valley scale makes the human timeline viscerally real.",
        tag: "History - Human Origins",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Olduvai Gorge museum fossils Tanzania",
      },
      {
        title: "Wild Dog Tracking, Ruaha",
        desc: "Ruaha has one of the healthiest wild dog populations in East Africa — tracking packs on their dawn hunts across the Ruaha River floodplains is one of the most electrifying wildlife experiences Tanzania offers.",
        tag: "Wildlife - Wild Dogs",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Wild dog pack Ruaha Tanzania southern",
      },
    ],
    eatSubtitle:
      "Tanzania's food is as diverse as its geography — Zanzibar's coconut-spiced Swahili seafood, ugali and nyama choma on the mainland, the night food market of Stone Town's Forodhani Gardens, and strong Kilimanjaro coffee.",
    eat: [
      {
        category: "Zanzibar Icon",
        name: "Forodhani Night Market",
        desc: "Stone Town's waterfront night market — dozens of stalls serving fresh-grilled octopus (urojo), Zanzibar pizza (a stuffed folded chapati), sugarcane juice, cassava chips, and lobster rolls, eaten at communal tables by the sea.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Forodhani night market Stone Town Zanzibar",
      },
      {
        category: "Swahili Coast",
        name: "Coconut Fish Curry",
        desc: "Fresh Indian Ocean fish slow-cooked in coconut milk with cardamom, lemongrass, and tamarind — the signature Swahili coast dish served over coconut rice at Stone Town restaurants.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Coconut fish curry Swahili Tanzania",
      },
      {
        category: "Safari Staple",
        name: "Ugali and Nyama Choma",
        desc: "The mainland staple — stiff white ugali (maize meal) eaten with grilled nyama choma (goat or beef), kachumbari salad, and sukuma wiki. Found at every local restaurant from Arusha to Dar.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Ugali nyama choma Tanzania mainland food",
      },
      {
        category: "Highland Coffee",
        name: "Kilimanjaro Coffee and Chai",
        desc: "Tanzania's highland coffee is among East Africa's finest — the Kilimanjaro and Arusha estates produce elegant, bright beans. Spiced chai (with cardamom, ginger, and cinnamon) is the universal morning drink in lodges and roadside dukas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Kilimanjaro coffee chai Tanzania highland",
      },
      {
        category: "Zanzibar Street",
        name: "Urojo (Zanzibar Mix Soup) and Mkate wa Ufuta",
        desc: "Urojo is Zanzibar's beloved street soup — a tangy, spiced broth with bhajia fritters, potato cubes, egg, mango, and crispy cassava chips. Mkate wa ufuta (sesame flatbread) is the quintessential Stone Town breakfast.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Urojo Zanzibar mix soup Stone Town",
      },
    ],
    staySubtitle:
      "Arusha as the northern circuit hub; Serengeti migration camps; Ngorongoro crater rim lodges; Zanzibar Stone Town and beach hotels; Selous tented camps for the southern circuit.",
    stay: [
      {
        type: "Northern Base",
        area: "Arusha",
        desc: "Arusha is the gateway to the northern circuit — Elewana Arusha Coffee Lodge, Rivertrees Country Inn, and a range of mid-range hotels near the Clock Tower are the best bases.",
        picks: ["Arusha Coffee Lodge", "Rivertrees Country Inn", "Arusha Hotel"],
      },
      {
        type: "Migration",
        area: "Serengeti",
        desc: "The Serengeti's finest camps move seasonally to follow the migration — Four Seasons Serengeti (central), Singita Sasakwa (western corridor), and Lemala Ndutu (calving season south).",
        picks: ["Four Seasons Serengeti", "Singita Sasakwa Hill House", "Lemala Ndutu Camp"],
      },
      {
        type: "Crater",
        area: "Ngorongoro",
        desc: "The crater rim lodges are extraordinary — The Highlands (Elewana), Ngorongoro Serena, and Ngorongoro Crater Lodge offer views directly into the caldera.",
        picks: ["The Highlands Ngorongoro", "Ngorongoro Crater Lodge", "Ngorongoro Serena Safari Lodge"],
      },
      {
        type: "Zanzibar",
        area: "Stone Town and Beaches",
        desc: "Stone Town — Park Hyatt Zanzibar and Emerson Spice for the cultural heart. Beaches — Zanzibar White Sand Luxury Villas (Jambiani), The Residence (Kizimkazi), and Kilindi (Kendwa) for the northern tip.",
        picks: ["Park Hyatt Zanzibar", "Emerson Spice Stone Town", "Kilindi Zanzibar Kendwa"],
      },
      {
        type: "Southern Circuit",
        area: "Selous / Nyerere",
        desc: "Roho ya Selous, Siwandu, and Sand Rivers Selous are the finest within the Selous — all fly-in camps on the Rufiji River with boat safaris and walking included.",
        picks: ["Roho ya Selous", "Sand Rivers Selous", "Siwandu Camp"],
      },
    ],
    map: {
      center: [-6.5, 35.0],
      zoom: 5.8,
      seeSpots: [
        { lat: -2.33, lng: 34.83, name: "Serengeti NP", desc: "World's greatest migration" },
        { lat: -3.18, lng: 35.49, name: "Ngorongoro Crater", desc: "Densest big five on Earth" },
        { lat: -3.07, lng: 37.35, name: "Kilimanjaro", desc: "Roof of Africa 5,895m" },
        { lat: -6.16, lng: 39.19, name: "Zanzibar Stone Town", desc: "UNESCO Swahili island" },
        { lat: -3.85, lng: 36.08, name: "Tarangire NP", desc: "Elephant herds baobabs" },
        { lat: -8.5, lng: 37.8, name: "Selous / Nyerere", desc: "Africa's largest game reserve" },
        { lat: -3.35, lng: 35.35, name: "Olduvai Gorge", desc: "Human origins Rift Valley" },
        { lat: -8.0, lng: 34.9, name: "Ruaha NP", desc: "Wild dogs and wilderness" },
        { lat: -5.9, lng: 39.33, name: "Nungwi Beach", desc: "Zanzibar finest sands" },
        { lat: -3.35, lng: 35.9, name: "Lake Manyara NP", desc: "Tree lions and flamingos" },
      ],
      doSpots: [
        { lat: -2.33, lng: 34.83, name: "Serengeti Balloon", desc: "Dawn hot air balloon" },
        { lat: -3.18, lng: 35.49, name: "Crater Floor Drive", desc: "Big five caldera game" },
        { lat: -3.07, lng: 37.35, name: "Kilimanjaro Trek", desc: "7-8 day summit route" },
        { lat: -6.16, lng: 39.19, name: "Spice Tour", desc: "Zanzibar farm walk" },
        { lat: -8.5, lng: 37.8, name: "Rufiji Boat Safari", desc: "Hippo channel cruise" },
        { lat: -5.95, lng: 39.35, name: "Mnemba Diving", desc: "Coral atoll northeast" },
        { lat: -3.35, lng: 35.35, name: "Olduvai Visit", desc: "Human origins museum" },
      ],
      staySpots: [
        { lat: -3.37, lng: 36.68, name: "Arusha", desc: "Northern circuit hub" },
        { lat: -2.33, lng: 34.83, name: "Serengeti", desc: "Migration tented camps" },
        { lat: -3.18, lng: 35.49, name: "Ngorongoro Rim", desc: "Crater view lodges" },
        { lat: -6.16, lng: 39.19, name: "Zanzibar", desc: "Stone Town and beaches" },
        { lat: -8.5, lng: 37.8, name: "Selous", desc: "Rufiji river camps" },
      ],
    },
    dayTrips: [
      {
        title: "Ngorongoro Crater to Olduvai Gorge",
        subtitle: "Combine a morning on the Ngorongoro Crater floor with an afternoon at Olduvai Gorge — from the densest big five population on Earth to the site where the human story was found written in stone.",
        tag: "Wildlife & History - Full Day",
        distance: "Ngorongoro rim to crater floor to Olduvai",
        duration: "Full day (9 hours)",
        transport: "4x4 with guide from Ngorongoro lodge",
        steps: [
          { time: "6AM", text: "Descend to the Ngorongoro Crater floor — the walls rise 600m around you as you enter the caldera." },
          { time: "6:30AM", text: "Black rhino search in the Lerai forest — up to 26 rhinos live on the crater floor." },
          { time: "9AM", text: "Lion prides and hyena clans — the crater has the highest lion density of any area its size in Africa." },
          { time: "12PM", text: "Picnic lunch at the designated hippo pool stop on the crater floor." },
          { time: "1:30PM", text: "Ascend the crater and drive west to Olduvai Gorge — 45 minutes across open Rift Valley savanna." },
          { time: "2:30PM", text: "Olduvai Gorge museum and guided walk to the excavation site where Homo habilis was found in 1959." },
        ],
      },
      {
        title: "Zanzibar Stone Town and Forodhani Evening",
        subtitle: "A full day in Stone Town — spice market, slave memorial, carved door architecture, and the Persian Baths in the morning, then the Forodhani waterfront night market as the sun sets over the Indian Ocean.",
        tag: "Culture - Zanzibar Day",
        distance: "Stone Town, Zanzibar",
        duration: "Full day (8 hours)",
        transport: "Walking within Stone Town",
        steps: [
          { time: "8AM", text: "Begin at Darajani Market — fresh spices, cloves, dried fish, and the daily produce market of Stone Town." },
          { time: "9:30AM", text: "The Anglican Cathedral and slave memorial — built on the site of the last open slave market in the Indian Ocean world." },
          { time: "11AM", text: "Carved door tour — the best examples in Stone Town are found in the Mercury House, Old Dispensary, and Hurumzi area." },
          { time: "1PM", text: "Lunch at Emerson on Hurumzi rooftop — the finest view in Stone Town over the red rooftops and minarets." },
          { time: "4PM", text: "Persian Baths (Hamamni) and the Old Fort before the sunset walk." },
          { time: "6PM", text: "Forodhani Gardens night market opens — grilled octopus, Zanzibar pizza, and sugar cane juice by the sea." },
        ],
      },
      {
        title: "Tarangire Day Trip from Arusha",
        subtitle: "A full day in Tarangire National Park during the dry season — the Tarangire River drawing thousands of elephants to its banks, ancient baobabs with circumferences of 25 metres, and one of the most atmospheric landscapes in northern Tanzania.",
        tag: "Wildlife - Arusha Day Trip",
        distance: "~120km southwest of Arusha",
        duration: "Full day (9 hours)",
        transport: "4x4 from Arusha",
        steps: [
          { time: "6AM", text: "Early departure from Arusha southwest to Tarangire gate." },
          { time: "7:30AM", text: "Enter Tarangire — the road drops to the river where elephant herds are already gathering." },
          { time: "8:30AM", text: "Drive the riverine woodland — hundreds of elephants, giraffe, and enormous baobab trees." },
          { time: "11AM", text: "Silale Swamp for the greatest wildlife concentration — buffalo, wildebeest, and elephant all converge." },
          { time: "1PM", text: "Picnic lunch under a tamarind tree on the Tarangire River bank." },
          { time: "3PM", text: "Return drive to Arusha arriving for dinner." },
        ],
      },
      {
        title: "Kilimanjaro Acclimatisation Day Hike",
        subtitle: "A serious day hike on the lower Kilimanjaro slopes — through cloud forest to the Mandara Huts at 2,700m, returning the same day. An essential acclimatisation day and a taste of the mountain for those not attempting the summit.",
        tag: "Adventure - Kilimanjaro Foothills",
        distance: "~35km from Moshi, 18km round trip hike",
        duration: "Full day (8 hours with drive)",
        transport: "Car to Marangu gate, hiking",
        steps: [
          { time: "6:30AM", text: "Drive from Moshi to Marangu gate and register." },
          { time: "8AM", text: "Begin the Marangu route through dense Kilimanjaro cloud forest — colobus monkeys and Hartlaub's turaco in the canopy." },
          { time: "11AM", text: "Arrive Mandara Huts at 2,700m — rest and snack at the first camp on the Marangu route." },
          { time: "11:30AM", text: "Optional 30-minute detour to the Maundi Crater viewpoint for Mawenzi peak views." },
          { time: "12PM", text: "Begin descent back through the forest." },
          { time: "3PM", text: "Exit gate and return to Moshi." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A classic Tanzania week — the northern circuit (Tarangire, Ngorongoro, Serengeti) plus two nights in Zanzibar.",
        arrival: {
          route: "Your City -> Kilimanjaro (JRO) or Dar es Salaam (DAR)",
          meta: "JRO is best for the northern circuit. DAR for Zanzibar first. Ethiopian Airlines, KLM, Qatar, and Kenya Airways connect well.",
          sideTitle: "Park Fees",
          sideCopy: "Tanzania's northern circuit park fees are significant — budget carefully, fees are paid per day per person in USD",
        },
        days: [
          {
            name: "Arrival",
            title: "Arrive Arusha",
            location: "Arusha",
            activities: [
              { time: "PM", text: "Arrive JRO, Arusha hotel and briefing with guide." },
              { time: "Night", text: "Arusha market walk and dinner." },
            ],
          },
          {
            name: "Tarangire",
            title: "Tarangire Elephant Kingdom",
            location: "Tarangire NP",
            activities: [
              { time: "AM", text: "Drive southwest and enter Tarangire at dawn." },
              { time: "PM", text: "Riverine elephant herds and baobab drives." },
            ],
          },
          {
            name: "Ngorongoro",
            title: "Ngorongoro Crater Floor",
            location: "Ngorongoro",
            activities: [
              { time: "AM", text: "Dawn descent into the crater — black rhino and lion." },
              { time: "PM", text: "Full crater floor game drive, Olduvai Gorge stop." },
            ],
          },
          {
            name: "Serengeti",
            title: "Enter the Serengeti",
            location: "Serengeti NP",
            activities: [
              { time: "AM", text: "Drive west into the Serengeti via the Ngorongoro highlands." },
              { time: "PM", text: "First Serengeti game drive and camp arrival." },
            ],
          },
          {
            name: "Migration",
            title: "Serengeti Full Day",
            location: "Serengeti NP",
            activities: [
              { time: "AM", text: "Pre-dawn balloon safari and bush breakfast." },
              { time: "PM", text: "Cheetah and wild dog tracking on the open plains." },
            ],
          },
          {
            name: "Zanzibar",
            title: "Fly to Zanzibar",
            location: "Zanzibar",
            activities: [
              { time: "AM", text: "Charter flight from Seronera to Zanzibar via Arusha." },
              { time: "PM", text: "Stone Town check-in and Forodhani night market." },
            ],
          },
          {
            name: "Departure",
            title: "Stone Town and Fly Out",
            location: "ZNZ / DAR",
            activities: [
              { time: "AM", text: "Stone Town carved door walk and slave memorial." },
              { time: "PM", text: "Flight to DAR for international departure." },
            ],
          },
        ],
        departure: {
          route: "Zanzibar (ZNZ) -> Dar es Salaam (DAR) -> Your City",
          meta: "Most international flights depart from DAR — a 25-minute flight from ZNZ. Allow 3 hours for the connection.",
          sideTitle: "Best Time",
          sideCopy: "July–October for Mara River crossings. January–February for calving season in the southern Serengeti.",
        },
      },
      "10": {
        summary: "Ten days adding Zanzibar beaches, a second Serengeti sector, and Kilimanjaro foothills.",
        arrival: {
          route: "Your City -> Kilimanjaro (JRO)",
          meta: "Fly into JRO for the mountain foothills start, circuit the parks, and exit via ZNZ and DAR.",
          sideTitle: "Southern Option",
          sideCopy: "Swap Zanzibar for Selous if wildlife is your priority — fly Arusha to Selous in 2.5 hours for a completely different Tanzania",
        },
        days: [
          { name: "Arrival", title: "Arusha and Kilimanjaro Foothills", location: "Moshi / Marangu", activities: [{ time: "AM", text: "Arrive JRO, drive to Moshi." }, { time: "PM", text: "Kilimanjaro forest day hike to Mandara Huts." }] },
          { name: "Arusha", title: "Arusha and Prepare for Circuit", location: "Arusha", activities: [{ time: "AM", text: "Arusha National Park walk — black and white colobus, flamingo." }, { time: "PM", text: "Final briefing and cultural dinner." }] },
          { name: "Tarangire", title: "Tarangire Elephants", location: "Tarangire NP", activities: [{ time: "AM", text: "Enter Tarangire at dawn for elephant herds." }, { time: "PM", text: "Baobab plains and Silale swamp." }] },
          { name: "Ngorongoro", title: "Crater Floor and Olduvai", location: "Ngorongoro", activities: [{ time: "AM", text: "Dawn descent into the caldera." }, { time: "PM", text: "Full crater drive and Olduvai afternoon." }] },
          { name: "Serengeti S", title: "Southern Serengeti — Calving or Migration", location: "Serengeti South", activities: [{ time: "AM", text: "Enter southern Serengeti — wildebeest calving area (Jan–Feb) or open plains." }, { time: "PM", text: "Cheetah and wild dog plains." }] },
          { name: "Serengeti N", title: "Central and Northern Serengeti", location: "Serengeti Central", activities: [{ time: "AM", text: "Pre-dawn balloon over the central plains." }, { time: "PM", text: "Move to northern Mara River area if migration season." }] },
          { name: "Migration", title: "Mara River Crossing Vigil", location: "Northern Serengeti", activities: [{ time: "AM", text: "Position at Mara River crossing point — patience rewarded." }, { time: "PM", text: "Lion pride afternoon tracking." }] },
          { name: "Zanzibar", title: "Fly to Zanzibar", location: "Zanzibar", activities: [{ time: "AM", text: "Charter to Zanzibar." }, { time: "PM", text: "Spice tour and Forodhani evening." }] },
          { name: "Beach", title: "Nungwi Beach and Mnemba Snorkel", location: "Nungwi / Mnemba", activities: [{ time: "AM", text: "Drive to Nungwi — beach and dhow-building village." }, { time: "PM", text: "Mnemba Atoll snorkelling trip." }] },
          { name: "Departure", title: "Stone Town Morning and Fly Out", location: "ZNZ / DAR", activities: [{ time: "AM", text: "Final Stone Town walk and market." }, { time: "PM", text: "Fly DAR for international departure." }] },
        ],
        departure: {
          route: "Zanzibar (ZNZ) -> Dar es Salaam (DAR) -> Your City",
          meta: "Same routing. Allow a full day in Zanzibar for the last morning rather than rushing to the airport.",
          sideTitle: "Southern Circuit",
          sideCopy: "Consider a separate southern circuit trip to Selous and Ruaha — wild dogs, boat safaris, and zero other vehicles.",
        },
      },
    },
    footerLine1: "Discover Tanzania — the Serengeti migration, Ngorongoro Crater, Kilimanjaro, Zanzibar's Swahili coast, and the cradle of humankind",
    footerLine2: "e-Visa required (eservices.immigration.go.tz). Park fees significant — budget carefully. Yellow fever certificate required from endemic countries.",
  },

  zambia: {
    country: "Zambia",
    heroEyebrow: "Southern Africa — Victoria Falls, Walking Safaris, and the Real Africa",
    heroTitleHtml: "Zam<em>bia</em>",
    heroTagline:
      "The birthplace of the walking safari — Zambia is southern Africa's most authentic wilderness destination. Victoria Falls thundering on the Zambezi, the Luangwa Valley's unrivalled leopard and wild dog sightings, the Kafue wilderness, the Lower Zambezi canoe safaris, and a safari culture built on intimacy, walking, and genuine adventure.",
    heroStats: [
      { label: "Capital", value: "Lusaka" },
      { label: "Currency", value: "ZMW (Zambian Kwacha)" },
      { label: "Language", value: "English, Nyanja, Bemba, Tonga" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "Zambia is where serious safari travellers go when they want the real thing — walking safaris with legendary guides, night drives, boat safaris, and camps where the only lights are the fire and the stars. Less infrastructure, more wilderness, and some of Africa's finest guide culture.",
    know: [
      {
        icon: "🚶",
        title: "Walking Safari — Zambia's Invention",
        text: "Norman Carr and then Robin Pope refined the walking safari in the Luangwa Valley. Zambia's professional guides are among the most knowledgeable in Africa — the country's Professional Guides Association (ZPG) maintains exceptional standards. Walking is the default activity.",
      },
      {
        icon: "🛂",
        title: "Visa — KAZA UniVisa",
        text: "The KAZA UniVisa (USD 50) covers Zambia and Zimbabwe — ideal for combining Victoria Falls from both sides and the Kafue-Hwange corridor. Available on arrival at Livingstone and Harry Mwanga Nkumbula airports.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Malaria prophylaxis is essential throughout Zambia year-round. Yellow fever required if arriving from an endemic country. Typhoid and hepatitis A recommended. Medical evacuation insurance is non-negotiable for remote safari camps.",
      },
      {
        icon: "🌊",
        title: "Victoria Falls",
        text: "Mosi-oa-Tunya — 'The Smoke That Thunders' — is the world's largest waterfall by combined width and height (1.7km wide, 108m tall). The Zambia side offers the most dramatic full-frontal view; December–April has maximum flow.",
      },
      {
        icon: "🐆",
        title: "South Luangwa — Leopard Capital",
        text: "South Luangwa is consistently rated among the best parks in Africa for leopard sightings — the Luangwa Valley's woodland structure and high impala density create ideal conditions. Night drives in particular deliver extraordinary cat encounters.",
      },
      {
        icon: "🐕",
        title: "Wild Dogs",
        text: "Zambia — particularly the Luangwa and Kafue — has one of Africa's most significant wild dog populations. Pack hunts are the most dramatic predator encounter in Africa, and Zambia is one of the best places to witness them.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "USD is accepted at all safari camps and lodges. ATMs in Lusaka and Livingstone. Remote camps are cash or pre-paid only. Zambia is mid-to-high cost by African standards — the best camps are expensive but genuinely exceptional.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Lusaka (LUN) and Livingstone (LVI) are the main entry airports. Charter flights connect to South Luangwa (Mfuwe), Kafue, and Lower Zambezi — driving to these parks is possible but long. Internal charters are the recommended way to move between regions.",
      },
      {
        icon: "🛶",
        title: "Canoe Safari",
        text: "The Lower Zambezi canoe safari is one of Africa's greatest adventures — paddling between camps through hippo pods and crocodile-lined banks, camping on the river bank, and experiencing the Zambezi entirely at water level.",
        },
      {
        icon: "⭐",
        title: "Night Skies",
        text: "Zambia's remote camps, far from any light pollution, have some of the darkest night skies in Africa — the Milky Way overhead after dinner, guided by a bush fire, is one of the enduring memories of a Zambian safari.",
      },
    ],
    seeSubtitle:
      "Victoria Falls and the Zambian side viewpoints, South Luangwa Valley leopards and wild dogs, the Lower Zambezi hippo channels, the vast Kafue wilderness, Bangweulu Swamps and the shoebill stork, and the Zambezi sunset.",
    see: [
      {
        name: "Victoria Falls",
        title: "Mosi-oa-Tunya — The Smoke That Thunders",
        desc: "The world's largest waterfall — 1.7km wide and 108m tall, the Zambezi drops into a narrow basalt gorge creating a perpetual cloud of spray visible from 50km away. The Zambia side trail gives direct face-on views unavailable from Zimbabwe.",
        tag: "Natural Wonder - UNESCO",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Victoria Falls Zambezi Zambia spray",
      },
      {
        name: "South Luangwa National Park",
        title: "The Leopard Capital of Africa",
        desc: "Arguably the finest safari destination on the African continent — extraordinary leopard densities, massive lion prides, wild dog packs, and the Luangwa River's hippo pods in a landscape of mopane woodland and oxbow lagoons.",
        tag: "Wildlife - Safari Icon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "South Luangwa leopard Zambia valley",
      },
      {
        name: "Lower Zambezi National Park",
        title: "Canoe Safari on Africa's Great River",
        desc: "A wilderness of riverine forest and floodplain on the Zambezi — canoe between camps through hippo pods, fish for tiger fish at sunset, and walk in the morning through elephant and buffalo country.",
        tag: "Wildlife - River Safari",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lower Zambezi canoe hippo elephant Zambia",
      },
      {
        name: "Kafue National Park",
        title: "Zambia's Vast and Undervisited Wilderness",
        desc: "The second largest national park in Africa — a vast, wild, almost visitor-free park with extraordinary cheetah and wild dog populations, the Busanga Plains (Zambia's finest open savanna), and the Kafue River flowing through it all.",
        tag: "Wildlife - Wilderness",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Kafue National Park wilderness Zambia",
      },
      {
        name: "Bangweulu Swamps",
        title: "Shoebill and the Black Lechwe",
        desc: "A vast wetland system in northern Zambia — the Bangweulu holds significant shoebill stork populations, enormous herds of endemic black lechwe antelope, and a remote, unexplored quality that feels genuinely frontier.",
        tag: "Wildlife - Wetland",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Bangweulu swamps shoebill lechwe Zambia",
      },
      {
        name: "Luangwa River and Oxbow Lagoons",
        title: "The River That Defines South Luangwa",
        desc: "The Luangwa River cuts through South Luangwa, leaving oxbow lagoons as it changes course — these lagoons concentrate extraordinary wildlife: hippo pods, crocodiles, puku, waterbuck, and the leopards that hunt the margins.",
        tag: "Nature - River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Luangwa river oxbow lagoon hippo Zambia",
      },
      {
        name: "Livingstone and the Zambezi",
        title: "The Adventure Capital of Southern Africa",
        desc: "The town on the Zambian bank of Victoria Falls — white-water rafting on the Zambezi gorge, bungee jumping from the bridge, sunset cruises, and the Victoria Falls Hotel veranda. The adventure hub of southern Africa.",
        tag: "Adventure - Livingstone",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Livingstone Zambezi Victoria Falls Zambia",
      },
      {
        name: "North Luangwa National Park",
        title: "The Wilderness Within the Wilderness",
        desc: "North Luangwa is even wilder than its famous southern neighbour — extremely limited visitor access (walking only, no vehicle game drives), enormous buffalo herds, and a raw, unmanaged wilderness that few people ever visit.",
        tag: "Wildlife - Remote",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "North Luangwa buffalo wilderness Zambia",
      },
      {
        name: "Busanga Plains, Kafue",
        title: "Zambia's Finest Open Savanna",
        desc: "The Busanga Plains in northern Kafue flood seasonally — in the dry season they emerge as vast open grassland with the highest cheetah and lion density in Kafue, red lechwe in their thousands, and the most dramatic big sky in Zambia.",
        tag: "Wildlife - Kafue",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Busanga Plains Kafue cheetah lechwe Zambia",
      },
      {
        name: "Lake Kariba",
        title: "The Inland Sea",
        desc: "Africa's largest man-made lake — the drowned Zambezi Valley creates an inland sea with extraordinary houseboat safaris, excellent tiger fishing, elephant swimming between islands, and the haunting dead trees still standing in the shallows.",
        tag: "Nature - Lake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Kariba houseboat Zambia elephant",
      },
    ],
    doSubtitle:
      "Walking safari in South Luangwa, Victoria Falls full-frontal walk, Lower Zambezi canoe safari, night drive leopard spotlight, Kafue wild dog tracking, tiger fishing on the Zambezi, Bangweulu shoebill, and the Victoria Falls bridge bungee.",
    do: [
      {
        title: "Walking Safari, South Luangwa",
        desc: "Walk with a professional Zambian guide through South Luangwa — tracking lion prints, approaching elephants on foot, and reading the bush in a way no vehicle ever allows. The best walking guides in Africa are right here.",
        tag: "Adventure - Walking Safari",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Walking safari South Luangwa Zambia guide",
      },
      {
        title: "Victoria Falls Walk — Zambia Side",
        desc: "Walk the Mosi-oa-Tunya trail on the Zambian bank — full frontal views of the main falls, the rain forest soaked by perpetual spray, and the Devil's Pool swim at the edge (high season only) for those with nerves of steel.",
        tag: "Natural Wonder - Falls",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Victoria Falls walk Zambia Mosi-oa-Tunya",
      },
      {
        title: "Lower Zambezi Canoe Safari",
        desc: "Paddle between camps on the Lower Zambezi River — three to five days of canoe, camp, walk, and fish, moving through hippo pods with a professional guide and camping under extraordinary southern African stars.",
        tag: "Adventure - Canoe",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lower Zambezi canoe multi-day safari Zambia",
      },
      {
        title: "Night Drive Leopard Spotlight, Luangwa",
        desc: "South Luangwa's night drives are legendary — the leopard density here means that night drives frequently produce multiple sightings, often at extraordinarily close range in the spotlight.",
        tag: "Wildlife - Night Drive",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Night drive leopard spotlight Luangwa Zambia",
      },
      {
        title: "Tiger Fishing on the Zambezi",
        desc: "Tiger fish are among the most aggressive freshwater sport fish on Earth — fly fishing or spinning on the Zambezi below Victoria Falls or on Lake Kariba for these ferocious, acrobatic fish.",
        tag: "Adventure - Fishing",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Tiger fishing Zambezi Kariba Zambia",
      },
      {
        title: "Kafue Wild Dog Track",
        desc: "Follow a Kafue wild dog pack at dawn — the fastest animal pursuit in Africa, as the pack fans out to chase impala across the open Kafue plains, often successfully, in a hunt that is all noise and dust and speed.",
        tag: "Wildlife - Wild Dogs",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Wild dog pack hunt Kafue Zambia dawn",
      },
      {
        title: "Victoria Falls Bungee Jump",
        desc: "The 111m bungee jump from the Victoria Falls bridge into the Zambezi Gorge — one of the world's great thrill experiences, with the falls visible from the bridge and the gorge walls rising on both sides.",
        tag: "Adventure - Extreme",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Bungee jump Victoria Falls bridge Zambezi",
      },
      {
        title: "Zambezi Sunset Cruise",
        desc: "Board a pontoon boat on the Zambezi above the falls at sunset — hippos, elephants crossing to islands, fish eagles, and the extraordinary orange sky of a southern African river evening.",
        tag: "Nature - Zambezi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Zambezi sunset cruise hippos Livingstone",
      },
      {
        title: "Bangweulu Shoebill Search",
        desc: "A remote expedition to the Bangweulu Swamps — dugout canoe through papyrus channels searching for the shoebill stork alongside enormous black lechwe herds and the extraordinary wetland birds of northern Zambia.",
        tag: "Birding - Bangweulu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Bangweulu shoebill canoe Zambia remote",
      },
      {
        title: "White-Water Rafting, Zambezi Gorge",
        desc: "Grade 5 rafting through the Batoka Gorge below Victoria Falls — one of the world's great commercial rafting runs, with enormous rapids named Stairway to Heaven, Commercial Suicide, and the Terminator.",
        tag: "Adventure - Rafting",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "White water rafting Zambezi gorge Zambia",
      },
    ],
    eatSubtitle:
      "Zambian food is hearty and nshima-centred — the white maize staple served with relishes of dried fish, groundnut stew, and impwa, with cold Mosi lager after every long walking safari day.",
    eat: [
      {
        category: "National Staple",
        name: "Nshima with Relishes",
        desc: "Nshima — stiff white maize porridge — is the foundation of every Zambian meal, eaten with the right hand, dipped into relishes of dried kapenta fish, groundnut stew, pumpkin leaves, or braised beef.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Nshima relish Zambia maize staple",
      },
      {
        category: "Lake Staple",
        name: "Kapenta — Zambezi Sardines",
        desc: "Kapenta are tiny dried or fresh-fried sardines from Lake Kariba and the Zambezi — served over nshima as the most common daily protein, or fried crispy with tomato and onion as a relish.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Kapenta Zambezi sardines Zambia dried fish",
      },
      {
        category: "Camp Cuisine",
        name: "Bush Breakfast and Bush Dinner",
        desc: "Zambia's best camps serve extraordinary food in the bush — a full English breakfast after a walking safari, and multi-course dinners under the stars by firelight, with wine lists that surprise every first-time visitor.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Bush breakfast camp food Zambia safari",
      },
      {
        category: "Street Food",
        name: "Ifinkubala — Caterpillars",
        desc: "Mopane caterpillars — dried or fried — are a protein-rich delicacy in Zambia's rural markets. Salty, crunchy, and surprisingly addictive. Found at every roadside stall and local market from Livingstone to Lusaka.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Mopane caterpillars fried market Zambia",
      },
      {
        category: "Drink",
        name: "Mosi Lager and Chibuku",
        desc: "Mosi lager (named for Mosi-oa-Tunya) is Zambia's national beer — cold and essential after a walking safari. Chibuku is the traditional opaque maize beer, sold in cardboard cartons and consumed communally.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Mosi lager Chibuku maize beer Zambia",
      },
    ],
    staySubtitle:
      "Livingstone for Victoria Falls; Mfuwe and the Luangwa Valley camps; Lower Zambezi tented camps; Kafue for the Busanga Plains; Bangweulu for the remote north.",
    stay: [
      {
        type: "Victoria Falls",
        area: "Livingstone",
        desc: "The Royal Livingstone (Anantara) on the Zambezi bank is the flagship. Tongabezi Lodge and Thorntree River Lodge offer more intimate experiences a short drive from the falls.",
        picks: ["Royal Livingstone by Anantara", "Tongabezi Lodge", "Thorntree River Lodge"],
      },
      {
        type: "Luangwa Flagship",
        area: "South Luangwa",
        desc: "Mfuwe Lodge, Robin Pope Safaris' Nsefu and Tena Tena, and Chinzombo are the finest. Book the specialist bush camps (Crocodile, Lion) for the most remote and authentic experience.",
        picks: ["Mfuwe Lodge", "Nsefu Camp", "Chinzombo Camp"],
      },
      {
        type: "Canoe Safari",
        area: "Lower Zambezi",
        desc: "Chiawa Camp and Old Mondoro are the best within the national park. Anabezi is the luxury option. All are fly-in and include canoe, walking, and game drives.",
        picks: ["Chiawa Camp", "Old Mondoro", "Anabezi Luxury Tented Camp"],
      },
      {
        type: "Kafue",
        area: "Kafue / Busanga Plains",
        desc: "Busanga Bush Camp and Shumba Camp are the gold standard for the Busanga Plains. Musungwa Lodge is a good mid-range option on the river.",
        picks: ["Shumba Camp Busanga", "Busanga Bush Camp", "Musungwa Safari Lodge"],
      },
      {
        type: "Remote",
        area: "Bangweulu / North Luangwa",
        desc: "Shoebill Camp is the only accommodation in Bangweulu. Buffalo Camp in North Luangwa is the sole access point for the northern valley — fly-in only, walking only.",
        picks: ["Shoebill Camp Bangweulu", "Buffalo Camp North Luangwa", "Mwaleshi Camp"],
      },
    ],
    map: {
      center: [-14.0, 27.5],
      zoom: 5.8,
      seeSpots: [
        { lat: -17.9243, lng: 25.8572, name: "Victoria Falls", desc: "Mosi-oa-Tunya world's largest" },
        { lat: -13.0, lng: 31.8, name: "South Luangwa NP", desc: "Leopard capital of Africa" },
        { lat: -15.5, lng: 29.4, name: "Lower Zambezi NP", desc: "Canoe safari Zambezi" },
        { lat: -14.5, lng: 26.0, name: "Kafue NP", desc: "Vast wild dog wilderness" },
        { lat: -11.5, lng: 29.8, name: "Bangweulu Swamps", desc: "Shoebill and black lechwe" },
        { lat: -13.0, lng: 31.8, name: "Luangwa River", desc: "Oxbow lagoon leopards" },
        { lat: -17.9243, lng: 25.8572, name: "Livingstone", desc: "Adventure capital Zambezi" },
        { lat: -12.5, lng: 31.9, name: "North Luangwa NP", desc: "Walking only wilderness" },
        { lat: -13.5, lng: 25.8, name: "Busanga Plains", desc: "Kafue cheetah savanna" },
        { lat: -17.0, lng: 28.0, name: "Lake Kariba", desc: "Inland sea houseboat" },
      ],
      doSpots: [
        { lat: -13.0, lng: 31.8, name: "Walking Safari", desc: "Luangwa professional guides" },
        { lat: -17.9243, lng: 25.8572, name: "Victoria Falls Walk", desc: "Full-frontal Zambia side" },
        { lat: -15.5, lng: 29.4, name: "Zambezi Canoe", desc: "Multi-day river paddle" },
        { lat: -13.0, lng: 31.8, name: "Night Drive", desc: "Leopard spotlight Luangwa" },
        { lat: -17.0, lng: 28.0, name: "Tiger Fishing", desc: "Kariba and Zambezi" },
        { lat: -14.5, lng: 26.0, name: "Wild Dog Track", desc: "Kafue dawn pack hunt" },
        { lat: -17.9243, lng: 25.8572, name: "Bungee Jump", desc: "Victoria Falls bridge 111m" },
        { lat: -11.5, lng: 29.8, name: "Shoebill Canoe", desc: "Bangweulu remote wetland" },
      ],
      staySpots: [
        { lat: -17.9243, lng: 25.8572, name: "Livingstone", desc: "Victoria Falls lodges" },
        { lat: -13.0, lng: 31.8, name: "South Luangwa", desc: "Valley walking camps" },
        { lat: -15.5, lng: 29.4, name: "Lower Zambezi", desc: "River tented camps" },
        { lat: -14.5, lng: 26.0, name: "Kafue", desc: "Busanga plains camps" },
        { lat: -11.5, lng: 29.8, name: "Bangweulu", desc: "Remote shoebill camp" },
      ],
    },
    dayTrips: [
      {
        title: "Victoria Falls and Devil's Pool",
        subtitle: "Spend a full day on the Zambia side of Victoria Falls — the Mosi-oa-Tunya trail through the rain forest to the main viewpoints, followed by the extraordinary Devil's Pool swim at the very lip of the falls during low water season.",
        tag: "Natural Wonder - Livingstone Day",
        distance: "Victoria Falls, Livingstone",
        duration: "Full day (6 hours)",
        transport: "Walking trail from Livingstone gate",
        steps: [
          { time: "7AM", text: "Enter the Mosi-oa-Tunya National Park — the spray-soaked rain forest begins before you see the falls." },
          { time: "7:30AM", text: "First viewpoint — the full 1.7km width of the falls emerging from the spray, the Zambezi disappearing into the gorge." },
          { time: "9AM", text: "Walk the full Zambian side trail — Knife Edge Bridge walkway above the Eastern Cataract." },
          { time: "10:30AM", text: "Devil's Pool (September–December only) — guided swim to the natural pool at the very lip of the main falls." },
          { time: "12PM", text: "Lunch at the Victoria Falls Hotel veranda for the Zimbabwe side view." },
          { time: "3PM", text: "Zambezi sunset cruise — hippos and elephants in the golden hour above the falls." },
        ],
      },
      {
        title: "Mosi-oa-Tunya and White Water Rafting",
        subtitle: "Combine the falls viewpoint walk with an afternoon Grade 5 white-water rafting run through the Batoka Gorge — from the serenity of the rain forest to the chaos of Stairway to Heaven in one day.",
        tag: "Adventure - Livingstone Full Day",
        distance: "Victoria Falls gorge, Livingstone",
        duration: "Full day (7 hours)",
        transport: "Walking to falls, truck to put-in point",
        steps: [
          { time: "7AM", text: "Morning walk through the Victoria Falls rain forest and full trail viewpoints." },
          { time: "10AM", text: "Return to Livingstone and check in with the rafting operator for briefing." },
          { time: "11AM", text: "Descend into the Batoka Gorge by abseil or staircase to the river launch point." },
          { time: "11:30AM", text: "Begin the rafting run — 21 rapids, including Commercial Suicide (grade 5) and the Terminator." },
          { time: "3PM", text: "Exit the gorge by pulley system and transfer to Livingstone." },
          { time: "4PM", text: "Cold Mosi lager and debrief." },
        ],
      },
      {
        title: "South Luangwa Night Drive and Walking Combo",
        subtitle: "The classic Luangwa combination in a single day — a pre-dawn walking safari reading fresh tracks from the night, a midday rest, and a night drive that takes the camp vehicle into the darkness for leopard, hyena, and genet.",
        tag: "Wildlife - Luangwa Full Day",
        distance: "South Luangwa Valley camp-based",
        duration: "Full day (3AM start, 10PM end)",
        transport: "On foot and camp vehicle",
        steps: [
          { time: "5:30AM", text: "Pre-dawn departure on foot — the guide reads the night's tracks, identifies fresh lion kill, and follows elephant movement." },
          { time: "8:30AM", text: "Return to camp for a full English breakfast in the bush, fire still glowing." },
          { time: "10AM", text: "Siesta period — the valley heat at midday is intense, the wildlife resting." },
          { time: "4PM", text: "Afternoon game drive along the Luangwa River — leopards emerging from daytime rest in trees." },
          { time: "6PM", text: "Sundowners at the river bank — hippos yawning, impala drinking." },
          { time: "7PM", text: "Night drive begins — spotlight on leopards, genets, nightjars, and hyenas in the dark." },
        ],
      },
      {
        title: "Zambezi Sunset Cruise and Tiger Fishing",
        subtitle: "An afternoon on the upper Zambezi from Livingstone — tiger fishing at the prime spots above the falls, followed by a sunset cruise with hippos and elephants crossing to the islands as the sky turns orange.",
        tag: "Nature & Adventure - Livingstone Afternoon",
        distance: "Upper Zambezi, Livingstone",
        duration: "Half day (5 hours)",
        transport: "Motorboat from Livingstone waterfront",
        steps: [
          { time: "2PM", text: "Board at the Livingstone waterfront with your fishing guide." },
          { time: "2:30PM", text: "Move to prime tiger fish spots on the upper Zambezi islands." },
          { time: "3PM", text: "Spin or fly fish for tiger fish — aggressive strikes, aerial jumps, powerful runs." },
          { time: "5PM", text: "Move downstream for the sunset cruise portion — hippos surfacing beside the boat." },
          { time: "5:30PM", text: "Elephants swimming to the Zambian islands — a daily Zambezi spectacle." },
          { time: "6:30PM", text: "Return to Livingstone in the last light." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week in Zambia — Victoria Falls, South Luangwa's walking safaris and night drives, and the Lower Zambezi canoe.",
        arrival: {
          route: "Your City -> Livingstone (LVI) or Lusaka (LUN)",
          meta: "Livingstone connects via Johannesburg (JNB) — the best gateway for Victoria Falls first. Ethiopian Airlines and Kenya Airways connect via their hubs. Most visitors fly via JNB.",
          sideTitle: "KAZA UniVisa",
          sideCopy: "Buy the KAZA UniVisa on arrival (USD 50) — covers Zambia and Zimbabwe for the Victoria Falls border crossing",
        },
        days: [
          {
            name: "Arrival",
            title: "Livingstone and Victoria Falls",
            location: "Livingstone",
            activities: [
              { time: "PM", text: "Arrive LVI, hotel and first Victoria Falls walk." },
              { time: "Night", text: "Zambezi sunset cruise — hippos and elephants." },
            ],
          },
          {
            name: "Falls",
            title: "Full Victoria Falls Day",
            location: "Livingstone",
            activities: [
              { time: "AM", text: "Mosi-oa-Tunya full trail walk and Devil's Pool (seasonal)." },
              { time: "PM", text: "White-water rafting in the Batoka Gorge." },
            ],
          },
          {
            name: "Fly",
            title: "Fly to South Luangwa",
            location: "South Luangwa NP",
            activities: [
              { time: "AM", text: "Charter flight from Livingstone to Mfuwe." },
              { time: "PM", text: "Afternoon game drive — first Luangwa impressions." },
            ],
          },
          {
            name: "Walk",
            title: "Walking Safari Day",
            location: "South Luangwa",
            activities: [
              { time: "AM", text: "Dawn walking safari — tracking lion, elephant on foot." },
              { time: "PM", text: "Siesta and afternoon game drive to the Luangwa River." },
            ],
          },
          {
            name: "Night",
            title: "Night Drive and Leopard",
            location: "South Luangwa",
            activities: [
              { time: "PM", text: "Afternoon river drive and sundowners." },
              { time: "Night", text: "Night drive — leopard spotlight in the mopane." },
            ],
          },
          {
            name: "Zambezi",
            title: "Fly to Lower Zambezi",
            location: "Lower Zambezi NP",
            activities: [
              { time: "AM", text: "Charter to Lower Zambezi and canoe orientation." },
              { time: "PM", text: "First canoe section — hippos and afternoon game drive." },
            ],
          },
          {
            name: "Departure",
            title: "Zambezi Morning and Fly Out",
            location: "LUN / LVI",
            activities: [
              { time: "AM", text: "Early canoe and walking, charter to Lusaka." },
              { time: "PM", text: "International departure from LUN." },
            ],
          },
        ],
        departure: {
          route: "Lusaka (LUN) -> Johannesburg (JNB) -> Your City",
          meta: "Most Zambia international flights route through Johannesburg. Allow a half-day buffer in Lusaka.",
          sideTitle: "Best Time",
          sideCopy: "May–October for the dry season — wildlife concentrates at water and the walking conditions are excellent.",
        },
      },
      "10": {
        summary: "Ten days adding Kafue's Busanga Plains wild dogs, a night on Lake Kariba, and the Bangweulu shoebill.",
        arrival: {
          route: "Your City -> Lusaka (LUN) or Livingstone (LVI)",
          meta: "Same routing. The extra days justify adding Kafue — fly Lusaka to Busanga — and either Kariba or Bangweulu.",
          sideTitle: "Wild Dogs",
          sideCopy: "Kafue is particularly good for wild dogs July–October — coordinate with the camp for pack location",
        },
        days: [
          { name: "Arrival", title: "Livingstone and Falls", location: "Livingstone", activities: [{ time: "PM", text: "Arrive LVI, falls walk and sunset cruise." }] },
          { name: "Falls", title: "Falls and Rafting", location: "Livingstone", activities: [{ time: "AM", text: "Full falls trail." }, { time: "PM", text: "Batoka Gorge white water." }] },
          { name: "Luangwa", title: "Fly to South Luangwa", location: "South Luangwa", activities: [{ time: "AM", text: "Charter to Mfuwe." }, { time: "PM", text: "First Luangwa game drive." }] },
          { name: "Walk", title: "Walking and Night Drive", location: "South Luangwa", activities: [{ time: "AM", text: "Dawn walking safari." }, { time: "Night", text: "Leopard night drive." }] },
          { name: "Bush Camp", title: "Move to Bush Camp", location: "South Luangwa Remote", activities: [{ time: "AM", text: "Light aircraft to remote bush camp." }, { time: "PM", text: "Afternoon walking — no other vehicles." }] },
          { name: "Kafue", title: "Fly to Kafue Busanga", location: "Kafue NP", activities: [{ time: "AM", text: "Charter to Busanga Plains." }, { time: "PM", text: "Cheetah and wild dog afternoon." }] },
          { name: "Busanga", title: "Busanga Full Day", location: "Kafue Busanga", activities: [{ time: "AM", text: "Pre-dawn wild dog pack hunt." }, { time: "PM", text: "Red lechwe and lion on the plains." }] },
          { name: "Kariba", title: "Lake Kariba Houseboat", location: "Lake Kariba", activities: [{ time: "AM", text: "Fly to Kariba." }, { time: "PM", text: "Houseboat, tiger fishing, elephant islands." }] },
          { name: "Zambezi", title: "Lower Zambezi", location: "Lower Zambezi NP", activities: [{ time: "AM", text: "Fly to Lower Zambezi." }, { time: "PM", text: "Canoe and evening game drive." }] },
          { name: "Departure", title: "Zambezi Morning and Fly Out", location: "LUN", activities: [{ time: "AM", text: "Morning canoe and charter to Lusaka." }, { time: "PM", text: "International departure from LUN." }] },
        ],
        departure: {
          route: "Lusaka (LUN) -> Johannesburg (JNB) -> Your City",
          meta: "Same routing. An extra transit night in Lusaka allows a final Zambian evening.",
          sideTitle: "Victoria Falls Combine",
          sideCopy: "Cross to the Zimbabwe side of the falls on your first or last day — the KAZA UniVisa makes it seamless.",
        },
      },
    },
    footerLine1: "Discover Zambia — walking safari birthplace, Victoria Falls, Luangwa leopards, Lower Zambezi canoes, and the real Africa",
    footerLine2: "KAZA UniVisa covers Zambia and Zimbabwe (USD 50). Malaria prophylaxis essential. Medical evacuation cover non-negotiable for remote camps.",
  },
};

function numberWithZero(index) {
  return String(index + 1).padStart(2, "0");
}

function renderKnowCards(knowCards) {
  return knowCards
    .map(
      (item) => `
        <div class="know-card">
          <span class="know-icon">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function renderCards(items, mode) {
  return items
    .map(
      (item, idx) => `
        <div class="card">
          <img class="card-img" src="${item.image}" alt="${item.alt}" loading="lazy"
            onerror="this.classList.add('is-hidden'); this.nextElementSibling.style.display='flex';">
          <div class="card-img-placeholder">Photo unavailable</div>
          <div class="card-body">
            <div class="card-number">${numberWithZero(idx)} / ${item.name || "Activity"}</div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
            <span class="card-tag">${item.tag}</span>
          </div>
        </div>
      `
    )
    .join("");
}

function renderFood(foodItems) {
  return foodItems
    .map(
      (food) => `
        <div class="food-card">
          <img class="food-img" src="${food.image}" alt="${food.alt}" loading="lazy"
            onerror="this.style.display='none'">
          <div class="food-body">
            <div class="food-category">${food.category}</div>
            <h3 class="food-name">${food.name}</h3>
            <p class="food-desc">${food.desc}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderStay(stayItems) {
  return stayItems
    .map(
      (stay) => `
        <div class="stay-card">
          <div class="stay-type">${stay.type}</div>
          <div class="stay-area">${stay.area}</div>
          <p class="stay-desc">${stay.desc}</p>
          <div class="stay-picks">
            ${stay.picks.map((pick) => `<div class="stay-pick">${pick}</div>`).join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function renderFlight(blockTitle, flight) {
  if (!flight) {
    return "";
  }

  return `
    <div class="flight-block">
      <div class="flight-info">
        <div class="flight-title">${blockTitle}</div>
        <div class="flight-route">${flight.route}</div>
        <div class="flight-meta">${flight.meta}</div>
      </div>
      <div>
        <div class="flight-title">${flight.sideTitle}</div>
        <div class="flight-side-copy">${flight.sideCopy}</div>
      </div>
    </div>
  `;
}

function renderDay(day, index) {
  return `
    <div class="day-block">
      <div class="day-label">
        <span class="day-num">Day ${index + 1}</span>
        <span class="day-name">${day.name}</span>
      </div>
      <div class="day-content">
        <h3>${day.title}</h3>
        <div class="day-location">${day.location}</div>
        <div class="day-activities">
          ${day.activities
            .map(
              (activity) => `
            <div class="day-activity">
              <span class="day-activity-time">${activity.time}</span>
              <span>${activity.text}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderItineraryPlans(itineraries) {
  const planKeys = ["4", "7", "10"].filter((key) => itineraries[key]);

  return planKeys
    .map((key) => {
      const plan = itineraries[key];
      const activeClass = key === "10" ? "active" : "";

      return `
        <div class="itinerary-plan ${activeClass}" data-itinerary="${key}">
          <p class="section-subtitle itinerary-plan-summary">${plan.summary}</p>
          ${renderFlight("Arrival Flight", plan.arrival)}
          <div class="timeline">
            ${plan.days.map((day, index) => renderDay(day, index)).join("")}
          </div>
          ${renderFlight("Departure Flight", plan.departure)}
        </div>
      `;
    })
    .join("");
}

function renderItineraryButtons(itineraries) {
  return ["4", "7", "10"]
    .filter((key) => itineraries[key])
    .map(
      (key) =>
        `<button class="itinerary-btn ${key === "10" ? "active" : ""}" data-itinerary-btn="${key}">${key} days</button>`
    )
    .join("");
}

function renderDayTrips(dayTrips) {
  if (!dayTrips || dayTrips.length === 0) return "";
  return dayTrips.map((trip, i) => `
    <div class="day-trip-card">
      <div class="day-trip-number">Day Trip ${String(i + 1).padStart(2, "0")}</div>
      <div class="day-trip-tag">${trip.tag}</div>
      <h3 class="day-trip-title">${trip.title}</h3>
      <p class="day-trip-subtitle">${trip.subtitle}</p>
      <div class="day-trip-steps">
        ${trip.steps.map(step => `
          <div class="day-trip-step">
            <div class="day-trip-step-time">${step.time}</div>
            <div class="day-trip-step-text">${step.text}</div>
          </div>
        `).join("")}
      </div>
      <div class="day-trip-logistics">
        <div class="day-trip-logistics-item"><strong>Distance:</strong> ${trip.distance}</div>
        <div class="day-trip-logistics-item"><strong>Duration:</strong> ${trip.duration}</div>
        <div class="day-trip-logistics-item"><strong>Transport:</strong> ${trip.transport}</div>
      </div>
    </div>
  `).join("");
}

function renderPage(guide) {
  document.title = `${guide.country} - Travel Guide`;
  document.body.innerHTML = `
    <nav>
      <a href="#" class="nav-logo">Discover <span>${guide.country}</span></a>
      <ul class="nav-links">
        <li><a href="#know">Know</a></li>
        <li><a href="#see">See</a></li>
        <li><a href="#do">Do</a></li>
        <li><a href="#eat">Eat</a></li>
        <li><a href="#stay">Stay</a></li>
        <li><a href="#map">Map</a></li>
        <li><a href="#itinerary">Itinerary</a></li>
        ${guide.dayTrips && guide.dayTrips.length ? '<li><a href="#daytrips">Day Trips</a></li>' : ""}
      </ul>
    </nav>

    <section class="hero">
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <div class="hero-eyebrow">${guide.heroEyebrow}</div>
        <h1>${guide.heroTitleHtml}</h1>
        <p class="hero-tagline">${guide.heroTagline}</p>
        <div class="hero-stats">
          ${guide.heroStats
            .map(
              (stat) => `
            <div>
              <div class="hero-stat-label">${stat.label}</div>
              <div class="hero-stat-value">${stat.value}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="scroll-hint">Scroll to explore</div>
    </section>

    <section class="know-section" id="know">
      <div class="section-header">
        <div class="section-tag">Essential Info</div>
        <h2 class="section-title">What to <em>Know</em></h2>
        <p class="section-subtitle">${guide.knowSubtitle}</p>
      </div>
      <div class="know-grid">
        ${renderKnowCards(guide.know)}
      </div>
    </section>

    <section id="see">
      <div class="section-header">
        <div class="section-tag">Must See</div>
        <h2 class="section-title">What to <em>See</em></h2>
        <p class="section-subtitle">${guide.seeSubtitle}</p>
      </div>
      <div class="cards-grid">
        ${renderCards(guide.see, "see")}
      </div>
    </section>

    <div class="divider"></div>

    <section id="do">
      <div class="section-header">
        <div class="section-tag">Activities</div>
        <h2 class="section-title">What to <em>Do</em></h2>
        <p class="section-subtitle">${guide.doSubtitle}</p>
      </div>
      <div class="cards-grid">
        ${renderCards(guide.do, "do")}
      </div>
    </section>

    <section id="eat" style="background: var(--sand);">
      <div class="section-header">
        <div class="section-tag">Local Cuisine</div>
        <h2 class="section-title">What to <em>Eat</em></h2>
        <p class="section-subtitle">${guide.eatSubtitle}</p>
      </div>
      <div class="food-grid">
        ${renderFood(guide.eat)}
      </div>
    </section>

    <section class="stay-section" id="stay">
      <div class="section-header">
        <div class="section-tag">Accommodation</div>
        <h2 class="section-title">Where to <em>Stay</em></h2>
        <p class="section-subtitle">${guide.staySubtitle}</p>
      </div>
      <div class="stay-grid">
        ${renderStay(guide.stay)}
      </div>
    </section>

    <section class="map-section" id="map">
      <div class="section-header">
        <div class="section-tag">Interactive Map</div>
        <h2 class="section-title">Explore <em>${guide.country}</em></h2>
        <p class="section-subtitle">All major sights, activities, stay zones, and airports in one map.</p>
      </div>
      <div class="map-legend">
        <span class="legend-label">Legend:</span>
        <div class="legend-item"><div class="legend-dot" style="background:#C4714A"></div>Things to See</div>
        <div class="legend-item"><div class="legend-dot" style="background:#1B3A5C"></div>Activities</div>
        <div class="legend-item"><div class="legend-dot" style="background:#C9A84C"></div>Where to Stay</div>
        <div class="legend-item"><div class="legend-dot" style="background:#2A9D8F"></div>Airports</div>
      </div>
      <div id="country-map"></div>
    </section>

    <section class="itinerary-section" id="itinerary">
      <div class="section-header">
        <div class="section-tag">Day by Day</div>
        <h2 class="section-title">Choose your <em>Itinerary</em></h2>
        <p class="section-subtitle">Pick the pace that fits your trip length: 7 or 10 days.</p>
        <div class="itinerary-switcher">${renderItineraryButtons(guide.itineraries)}</div>
      </div>
      ${renderItineraryPlans(guide.itineraries)}
    </section>

    ${guide.dayTrips && guide.dayTrips.length ? `
    <section class="day-trips-section" id="daytrips">
      <div class="section-header">
        <div class="section-tag">Excursions</div>
        <h2 class="section-title">Day <em>Trips</em></h2>
        <p class="section-subtitle">Half-day and full-day excursions from the main bases — no overnight required.</p>
      </div>
      <div class="day-trips-grid">
        ${renderDayTrips(guide.dayTrips)}
      </div>
    </section>
    ` : ""}

    <footer>
      <p><span>${guide.country}</span> Travel Guide</p>
      <p style="margin-top: 8px; font-size: 0.75rem;">${guide.footerLine1}</p>
      <p style="margin-top: 8px; font-size: 0.75rem;">${guide.footerLine2}</p>
    </footer>
  `;
}

const AIRPORTS_CSV_PATH = "datasets/airport_data_coords_cleaned.csv";
let airportsByCountryPromise = null;

function parseCsvRow(row) {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i += 1) {
    const ch = row[i];
    if (ch === '"') {
      if (inQuotes && row[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }
    current += ch;
  }

  cells.push(current);
  return cells;
}

function escapeMapHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function loadAirportsByCountry() {
  if (airportsByCountryPromise) {
    return airportsByCountryPromise;
  }

  airportsByCountryPromise = fetch(AIRPORTS_CSV_PATH)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to load airport CSV (${res.status})`);
      }
      return res.text();
    })
    .then((csvText) => {
      const lines = csvText
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      if (lines.length < 2) {
        return {};
      }

      const headers = parseCsvRow(lines[0]).map((h) => h.trim());
      const idxCountry = headers.indexOf("Country");
      const idxCity = headers.indexOf("City");
      const idxAirportName = headers.indexOf("Airport Name");
      const idxIata = headers.indexOf("IATA Code");
      const idxLon = headers.indexOf("longitude_deg");
      const idxLat = headers.indexOf("latitude_deg");

      if ([idxCountry, idxCity, idxAirportName, idxIata, idxLon, idxLat].some((idx) => idx < 0)) {
        throw new Error("Airport CSV is missing one or more required columns.");
      }

      const maxIdx = Math.max(idxCountry, idxCity, idxAirportName, idxIata, idxLon, idxLat);
      const grouped = {};

      for (let i = 1; i < lines.length; i += 1) {
        const row = parseCsvRow(lines[i]);
        if (row.length <= maxIdx) {
          continue;
        }

        const country = (row[idxCountry] || "").trim();
        const lat = Number.parseFloat(row[idxLat]);
        const lng = Number.parseFloat(row[idxLon]);
        if (!country || !Number.isFinite(lat) || !Number.isFinite(lng)) {
          continue;
        }

        const key = country.toLowerCase();
        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push({
          airportName: (row[idxAirportName] || "").trim(),
          city: (row[idxCity] || "").trim(),
          iata: (row[idxIata] || "").trim(),
          lat,
          lng,
        });
      }

      return grouped;
    })
    .catch((error) => {
      console.error("Unable to load country airports:", error);
      return {};
    });

  return airportsByCountryPromise;
}

function getAirportsForCountry(country) {
  const key = (country || "").toLowerCase().trim();
  if (!key) {
    return Promise.resolve([]);
  }
  return loadAirportsByCountry().then((grouped) => grouped[key] || []);
}

function initializeMap(guide) {
  const map = L.map("country-map", {
    center: guide.map.center,
    zoom: guide.map.zoom,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);

  function makeIcon(color) {
    return L.divIcon({
      className: "",
      html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10],
    });
  }

  const seeIcon = makeIcon("#C4714A");
  const doIcon = makeIcon("#1B3A5C");
  const stayIcon = makeIcon("#C9A84C");
  const airportIcon = L.divIcon({
    className: "",
    html: '<div style="width:16px;height:16px;border-radius:50%;background:#2A9D8F;border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;line-height:1">✈</div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });

  guide.map.seeSpots.forEach((spot) => {
    L.marker([spot.lat, spot.lng], { icon: seeIcon, zIndexOffset: 100 })
      .addTo(map)
      .bindPopup(
        `<strong style="font-family:Georgia,serif;font-size:1rem">${spot.name}</strong><br><span style="color:#7A7772;font-size:0.82rem">${spot.desc}</span><br><span style="font-size:0.7rem;color:#C4714A;text-transform:uppercase;letter-spacing:0.08em">Thing to See</span>`
      );
  });

  guide.map.doSpots.forEach((spot) => {
    L.marker([spot.lat, spot.lng], { icon: doIcon, zIndexOffset: 300 })
      .addTo(map)
      .bindPopup(
        `<strong style="font-family:Georgia,serif;font-size:1rem">${spot.name}</strong><br><span style="color:#7A7772;font-size:0.82rem">${spot.desc}</span><br><span style="font-size:0.7rem;color:#1B3A5C;text-transform:uppercase;letter-spacing:0.08em">Activity</span>`
      );
  });

  guide.map.staySpots.forEach((spot) => {
    L.marker([spot.lat, spot.lng], { icon: stayIcon, zIndexOffset: 50 })
      .addTo(map)
      .bindPopup(
        `<strong style="font-family:Georgia,serif;font-size:1rem">${spot.name}</strong><br><span style="color:#7A7772;font-size:0.82rem">${spot.desc}</span><br><span style="font-size:0.7rem;color:#C9A84C;text-transform:uppercase;letter-spacing:0.08em">Where to Stay</span>`
      );
  });

  getAirportsForCountry(guide.country).then((airports) => {
    airports.forEach((airport) => {
      const title = airport.iata ? `${airport.airportName} (${airport.iata})` : airport.airportName;
      L.marker([airport.lat, airport.lng], { icon: airportIcon, zIndexOffset: -100 })
        .addTo(map)
        .bindPopup(
          `<strong style="font-family:Georgia,serif;font-size:0.98rem">${escapeMapHtml(title)}</strong><br><span style="color:#7A7772;font-size:0.82rem">${escapeMapHtml(airport.city)}</span><br><span style="font-size:0.7rem;color:#2A9D8F;text-transform:uppercase;letter-spacing:0.08em">Airport</span>`
        );
    });
  });
}

function initializeItinerarySwitcher() {
  const buttons = document.querySelectorAll("[data-itinerary-btn]");
  const plans = document.querySelectorAll("[data-itinerary]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-itinerary-btn");

      buttons.forEach((btn) => btn.classList.remove("active"));
      plans.forEach((plan) => plan.classList.remove("active"));

      button.classList.add("active");
      const targetPlan = document.querySelector(`[data-itinerary="${selected}"]`);
      if (targetPlan) {
        targetPlan.classList.add("active");
      }
    });
  });
}

function bootGuide() {
  const countryKey = document.body.getAttribute("data-guide-country");
  const guide = GUIDE_DATA[countryKey];

  if (!guide) {
    document.body.innerHTML = `
      <main style="padding:40px;font-family:DM Sans,sans-serif;">
        <h1>Travel guide not found</h1>
        <p>Invalid guide key: <code>${countryKey || "undefined"}</code></p>
      </main>
    `;
    return;
  }

  renderPage(guide);
  initializeMap(guide);
  initializeItinerarySwitcher();
}

bootGuide();
