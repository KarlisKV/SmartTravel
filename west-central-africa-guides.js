const GUIDE_DATA = {

  drc: {
    country: "Democratic Republic of the Congo",
    heroEyebrow: "Central Africa - The Heart of the World's Greatest Forest",
    heroTitleHtml: "DR <em>Con</em>go",
    heroTagline:
      "The world's second largest rainforest, the most powerful river on Earth, mountain gorillas in Virunga's mist, okapi in the Ituri, bonobo in intact equatorial forest, and a country of staggering natural wealth and complexity — the beating heart of Africa.",
    heroStats: [
      { label: "Capital", value: "Kinshasa" },
      { label: "Currency", value: "CDF (Congolese Franc)" },
      { label: "Language", value: "French, Lingala, Swahili, Kikongo, Tshiluba" },
      { label: "Time Zone", value: "UTC+1 (west) / UTC+2 (east)" },
    ],
    knowSubtitle:
      "The DRC is not for the unprepared — but for those who go with specialist support, it offers wildlife and cultural encounters found absolutely nowhere else on Earth. Virunga alone is worth the journey.",
    know: [
      {
        icon: "🛡️",
        title: "Security — Region Specific",
        text: "Security conditions vary dramatically by region. Eastern DRC (North Kivu, South Kivu, Ituri) has experienced prolonged instability — always check current advisories. Kinshasa, western DRC, Virunga's gorilla sector, and Lomami are accessible with specialist support.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "A visa is required for most nationalities and must be obtained in advance from a Congolese embassy. The process can be bureaucratic — allow significant lead time and use a specialist operator where possible.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever vaccination is required. Malaria prophylaxis is essential throughout. Typhoid, hepatitis A, cholera, and meningitis vaccinations are strongly recommended. Medical evacuation cover is non-negotiable.",
      },
      {
        icon: "🦍",
        title: "Mountain Gorillas",
        text: "Virunga National Park in the east holds one of the world's most important mountain gorilla populations. Gorilla trekking here is one of Africa's iconic wildlife experiences — a strictly limited number of daily permits.",
      },
      {
        icon: "🦛",
        title: "Okapi and Bonobo",
        text: "The DRC is the only country on Earth where both okapi (the forest giraffe) and bonobo (the most closely related ape to humans) are found. Both require specialist access through dedicated reserves.",
      },
      {
        icon: "🌊",
        title: "The Congo River",
        text: "The Congo River is the world's deepest river and Africa's most powerful — it discharges more water than any river outside the Amazon. The Pool Malebo at Kinshasa is one of the great river sights of Africa.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Kinshasa (FIH) and Lubumbashi (FBM) are the main international gateways. Domestic flights connect major cities but are unreliable. Virunga requires a flight to Goma. All remote areas need specialist operator logistics.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "The equatorial west has rain year-round with two drier periods (June–August and December–February). The east and southeast are more seasonal — June to September is the best window for mountain gorillas in Virunga.",
      },
      {
        icon: "🎵",
        title: "Music",
        text: "Kinshasa is one of Africa's great music capitals — rumba congolaise and soukous were born here. The live music scene on Boulevard du 30 Juin and in the Gombe district is extraordinary.",
      },
      {
        icon: "📶",
        title: "Connectivity",
        text: "Good mobile coverage in Kinshasa, Goma, and Lubumbashi. Variable in secondary cities. Remote areas have no coverage — satellite communication is standard for all wilderness operations.",
      },
    ],
    seeSubtitle:
      "Mountain gorillas at Virunga, bonobo at Lola ya Bonobo, okapi in the Ituri, Nyiragongo's lava lake, the Congo River at Pool Malebo, and the extraordinary forest life of the world's second largest rainforest.",
    see: [
      {
        name: "Virunga National Park",
        title: "Africa's Oldest Park — Mountain Gorillas and Lava",
        desc: "Africa's oldest national park and a UNESCO World Heritage site — mountain gorilla families in misty Afromontane forest, the active Nyiragongo lava lake, and a landscape of extraordinary volcanic drama on the Rwandan border.",
        tag: "UNESCO - Wildlife",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Virunga mountain gorilla forest DRC UNESCO",
      },
      {
        name: "Nyiragongo Volcano",
        title: "World's Largest Persistent Lava Lake",
        desc: "A two-day trek to the summit of Nyiragongo — the world's largest persistent lava lake glowing in the crater below, with a night spent on the crater rim watching molten rock churn in the darkness.",
        tag: "Adventure - Volcano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dallol_hotsprings.jpg/1280px-Dallol_hotsprings.jpg",
        alt: "Nyiragongo lava lake volcano summit DRC",
      },
      {
        name: "Lola ya Bonobo",
        title: "Bonobo Sanctuary Near Kinshasa",
        desc: "The world's only bonobo sanctuary — 80 orphaned bonobos living in 30 hectares of forest near Kinshasa, the most accessible place on Earth to observe these extraordinary apes, our closest relative alongside chimpanzees.",
        tag: "Wildlife - Bonobo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Lola ya Bonobo sanctuary Kinshasa DRC",
      },
      {
        name: "Okapi Wildlife Reserve",
        title: "UNESCO Home of the Forest Giraffe",
        desc: "A vast UNESCO World Heritage reserve in the Ituri Forest sheltering the secretive okapi — the forest giraffe known only to science since 1901 — alongside forest elephants, chimpanzees, and Mbuti pygmy communities.",
        tag: "UNESCO - Okapi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Okapi Wildlife Reserve Ituri forest DRC",
      },
      {
        name: "Kinshasa",
        title: "Africa's Third Largest City and Music Capital",
        desc: "A city of 17 million on the Congo River — facing Brazzaville across the Pool Malebo, with the vibrant Marché de la Liberté, the Académie des Beaux-Arts, and an extraordinary live music culture.",
        tag: "Capital - River City",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dakar_from_above.jpg/1280px-Dakar_from_above.jpg",
        alt: "Kinshasa Congo River city DRC capital",
      },
      {
        name: "Lomami National Park",
        title: "The Park That Didn't Exist Until 2016",
        desc: "A vast wilderness park established in 2016 in the central Congo Basin — home to the newly described lesula monkey, okapi, bonobos, and forest elephants in one of the world's least explored rainforests.",
        tag: "Wildlife - Remote",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Lomami national park forest DRC new wilderness",
      },
      {
        name: "Kahuzi-Biéga National Park",
        title: "Eastern Lowland Gorillas",
        desc: "A UNESCO World Heritage site near Bukavu — home to the eastern lowland gorilla, the world's largest gorilla subspecies, in montane and lowland forest on the edge of the Congo Basin.",
        tag: "UNESCO - Gorillas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Kahuzi-Biéga eastern lowland gorilla DRC UNESCO",
      },
      {
        name: "Congo River and Pool Malebo",
        title: "The World's Most Powerful River",
        desc: "The Pool Malebo — where the Congo River broadens into an inland sea 30km wide between Kinshasa and Brazzaville. River traffic, fishermen in dugouts, and the overwhelming scale of the world's deepest river.",
        tag: "Nature - Congo River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Congo River Pool Malebo Kinshasa DRC",
      },
      {
        name: "Goma",
        title: "The Volcanic Frontier City",
        desc: "The eastern gateway city — rebuilt after the 2002 Nyiragongo eruption, surrounded by lava fields, with Lake Kivu at its feet and the Virunga volcanoes looming above. The most dramatic urban setting in Africa.",
        tag: "City - Volcanic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dakar_from_above.jpg/1280px-Dakar_from_above.jpg",
        alt: "Goma volcanic city Lake Kivu DRC Virunga",
      },
      {
        name: "Lake Kivu",
        title: "The Methane Lake",
        desc: "An extraordinary rift valley lake on the DRC-Rwanda border — one of Africa's deepest and most beautiful lakes, with extraordinary biodiversity, island villages, and the extraordinary geological phenomenon of dissolved methane at depth.",
        tag: "Nature - Rift Lake",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Kivu rift valley DRC Rwanda border",
      },
    ],
    doSubtitle:
      "Trekking to mountain gorillas in Virunga's mist, sleeping on Nyiragongo's crater rim above the lava lake, visiting bonobos at Lola ya Bonobo, Congo River boat journeys, Kinshasa's live music scene, and Lake Kivu by pirogue.",
    do: [
      {
        title: "Mountain Gorilla Trek, Virunga",
        desc: "One of the world's great wildlife experiences — trek through Afromontane forest with armed rangers to spend one hour with a habituated mountain gorilla family in Virunga National Park.",
        tag: "Wildlife - Gorillas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Mountain gorilla trek Virunga DRC",
      },
      {
        title: "Nyiragongo Summit and Crater Camp",
        desc: "A two-day guided ascent of Nyiragongo — spend the night on the crater rim as the world's largest persistent lava lake glows below, then descend through forest before the volcano's next unpredictable eruption.",
        tag: "Adventure - Volcano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dallol_hotsprings.jpg/1280px-Dallol_hotsprings.jpg",
        alt: "Nyiragongo crater camp lava lake overnight DRC",
      },
      {
        title: "Bonobo Visit at Lola ya Bonobo",
        desc: "Spend a morning at the world's only bonobo sanctuary — watching groups of orphaned bonobos play, forage, and socialise in forest just 30 minutes from central Kinshasa.",
        tag: "Wildlife - Bonobo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Bonobo visit Lola ya Bonobo Kinshasa DRC",
      },
      {
        title: "Congo River Boat Journey",
        desc: "Travel by boat along the Congo River — from Kinshasa upriver toward Mbandaka, watching the forest-lined banks, river islands, fishing villages, and the extraordinary scale of the world's most powerful river.",
        tag: "Nature - River Journey",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Congo River boat journey upstream DRC",
      },
      {
        title: "Kinshasa Live Music Night",
        desc: "Experience the birthplace of rumba congolaise — live music on Boulevard du 30 Juin and the Gombe district clubs, where world-class Congolese musicians perform every night of the week.",
        tag: "Culture - Music",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg/960px-Gnaoua_%28Gnawa%29_musicians_performing_during_the_2010_Gnaoua_festival_in_the_city_of_Essaouira%2C_Morocco.jpg",
        alt: "Kinshasa live music rumba congolaise DRC",
      },
      {
        title: "Lake Kivu Pirogue",
        desc: "Paddle by pirogue across Lake Kivu from Goma — visiting island fishing communities, swimming in the extraordinary blue water, and watching the Virunga volcanoes reflected in the lake at dusk.",
        tag: "Nature - Lake Kivu",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Lake Kivu pirogue Goma volcano DRC",
      },
      {
        title: "Okapi Tracking, Ituri",
        desc: "Trek through the Ituri Forest with specialist guides and Mbuti trackers in search of the elusive okapi — one of the world's most remarkable animals, invisible in the forest and known only since 1901.",
        tag: "Wildlife - Okapi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Okapi tracking Ituri forest Mbuti DRC",
      },
      {
        title: "Kinshasa Art Scene",
        desc: "Visit the Académie des Beaux-Arts and the galleries of the Gombe district — Kinshasa has one of Africa's most vibrant contemporary art scenes, producing world-class painters, sculptors, and video artists.",
        tag: "Culture - Art",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexandria%27s_Bibliotheca.jpg/1280px-Alexandria%27s_Bibliotheca.jpg",
        alt: "Kinshasa art Académie Beaux-Arts DRC",
      },
      {
        title: "Eastern Lowland Gorilla Trek, Kahuzi-Biéga",
        desc: "Trek the steep forest of Kahuzi-Biéga for an encounter with eastern lowland gorillas — the world's largest gorilla subspecies, silverbacks of extraordinary size in dense montane forest near Bukavu.",
        tag: "Wildlife - Gorillas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Eastern lowland gorilla Kahuzi-Biéga Bukavu DRC",
      },
      {
        title: "Mbuti Pygmy Cultural Visit, Ituri",
        desc: "With a respectful specialist guide, visit Mbuti communities in the Ituri Forest — among the world's most ancient forest hunter-gatherer peoples, with an extraordinary ecological knowledge of the Congo Basin.",
        tag: "Culture - Mbuti",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Mbuti pygmy cultural visit Ituri forest DRC",
      },
    ],
    eatSubtitle:
      "Congolese cuisine is generous, forest-rooted, and deeply satisfying — pondu cassava leaf stew, grilled capitaine from the Congo River, fufu with moambe, kwanga fermented bread, and the vibrant street food culture of Kinshasa.",
    eat: [
      {
        category: "National Dish",
        name: "Pondu and Fufu",
        desc: "Pondu is pounded cassava leaves slow-cooked with palm oil, dried fish, and ground peanuts — the defining dish of the DRC. Eaten with fufu (pounded cassava paste) by hand, from a shared bowl.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Pondu fufu cassava leaf stew DRC national dish",
      },
      {
        category: "River Classic",
        name: "Capitaine Grillé du Fleuve",
        desc: "Congo River capitaine (Nile perch) grilled whole over charcoal at riverside restaurants — served with plantain, kwanga fermented cassava bread, and pili-pili pepper sauce. A Kinshasa institution.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Capitaine grilled Congo River fish Kinshasa DRC",
      },
      {
        category: "Street Food",
        name: "Liboke de Poisson",
        desc: "Fish or meat wrapped in banana leaves and steamed over coals — the liboke is a street food and village staple, the DRC's answer to the tamale, packed with onion, tomato, and forest spices.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Couscous_%28Alg%C3%A9rie%2C_lieu_exact_non_pr%C3%A9cis%C3%A9%29.jpg/1280px-Couscous_%28Alg%C3%A9rie%2C_lieu_exact_non_pr%C3%A9cis%C3%A9%29.jpg",
        alt: "Liboke fish banana leaf DRC street food",
      },
      {
        category: "Kinshasa Favourite",
        name: "Moambe Chicken and Rice",
        desc: "Chicken slow-cooked in palm butter with garlic and tomato — the moambe is the feast dish of the Congo Basin, served with rice at family gatherings and the best restaurants of the Gombe district.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Moambe chicken palm butter rice Kinshasa DRC",
      },
      {
        category: "Drink",
        name: "Primus, Skol and Lotoko",
        desc: "Primus and Skol are the twin lagers of the Congo — cold and ubiquitous at every bar and riverside restaurant. Lotoko is the fierce homemade spirit distilled from cassava or corn, drunk at local cabarets.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Primus Skol Lotoko beer spirit DRC drink",
      },
    ],
    staySubtitle:
      "Kinshasa for arrivals and Congo River life; Goma for Virunga access; Bukavu for Lake Kivu and Kahuzi-Biéga; specialist lodges for Ituri and remote areas.",
    stay: [
      {
        type: "Capital",
        area: "Kinshasa",
        desc: "Good international hotels in the Gombe district and along the Congo River — the Pullman Grand Hôtel du Congo and smaller guesthouses throughout the capital.",
        picks: ["Pullman Grand Hôtel du Congo", "Fleuve Congo Hotel", "Gombe district guesthouses"],
      },
      {
        type: "Virunga Base",
        area: "Goma / Virunga NP",
        desc: "Goma hotels provide the base for Virunga gorilla treks and Nyiragongo ascents. Mikeno Lodge within the park offers the most immersive experience.",
        picks: ["Mikeno Lodge (Virunga NP)", "Goma Serena Hotel", "Ihusi Hotel Goma"],
      },
      {
        type: "Lake Kivu",
        area: "Bukavu / Goma Lakeshore",
        desc: "The lakeshore hotels of Bukavu and Goma offer extraordinary views of Lake Kivu and access to Kahuzi-Biéga gorilla trekking.",
        picks: ["Orchid Safari Club Bukavu", "Karibu Hotel Bukavu", "Coco Lodge Goma"],
      },
      {
        type: "Ituri Access",
        area: "Kisangani / Epulu",
        desc: "Basic accommodation at Epulu in the heart of the Okapi Reserve, reached by plane to Kisangani and then road. Kisangani has simple hotel options.",
        picks: ["Epulu research station accommodation", "Kisangani guesthouses", "Operator-arranged camp stays"],
      },
      {
        type: "Remote Forest",
        area: "Lomami / Central Basin",
        desc: "Fly-in tented camps operated by specialist operators for Lomami National Park — accessible by light aircraft from Kinshasa.",
        picks: ["Lomami fly-in camp", "Specialist operator tented camp", "Research station accommodation"],
      },
    ],
    map: {
      center: [-2.5, 24.0],
      zoom: 5.2,
      seeSpots: [
        { lat: -1.2, lng: 29.3, name: "Virunga National Park", desc: "Mountain gorillas and Nyiragongo" },
        { lat: -1.47, lng: 29.23, name: "Nyiragongo Volcano", desc: "World's largest lava lake" },
        { lat: -4.35, lng: 15.3, name: "Lola ya Bonobo", desc: "Bonobo sanctuary Kinshasa" },
        { lat: 1.5, lng: 28.2, name: "Okapi Wildlife Reserve", desc: "Ituri forest giraffe" },
        { lat: -4.3217, lng: 15.3022, name: "Kinshasa", desc: "Congo River capital" },
        { lat: -0.85, lng: 25.3, name: "Lomami National Park", desc: "New wilderness central basin" },
        { lat: -2.3, lng: 28.8, name: "Kahuzi-Biéga NP", desc: "Eastern lowland gorillas" },
        { lat: -1.6, lng: 29.22, name: "Goma", desc: "Volcanic frontier city" },
        { lat: -2.5, lng: 28.85, name: "Lake Kivu", desc: "Deep rift valley lake" },
      ],
      doSpots: [
        { lat: -1.2, lng: 29.3, name: "Gorilla Trek", desc: "Virunga mountain family" },
        { lat: -1.47, lng: 29.23, name: "Nyiragongo Ascent", desc: "Crater overnight lava" },
        { lat: -4.35, lng: 15.3, name: "Bonobo Visit", desc: "Lola ya Bonobo sanctuary" },
        { lat: -4.3217, lng: 15.3022, name: "Congo River Boat", desc: "Kinshasa upstream journey" },
        { lat: -4.3217, lng: 15.3022, name: "Live Music Kinshasa", desc: "Rumba congolaise clubs" },
        { lat: -2.5, lng: 28.85, name: "Lake Kivu Pirogue", desc: "Island and volcano views" },
      ],
      staySpots: [
        { lat: -4.3217, lng: 15.3022, name: "Kinshasa", desc: "Capital hotels" },
        { lat: -1.6, lng: 29.22, name: "Goma", desc: "Virunga base" },
        { lat: -2.3, lng: 28.8, name: "Bukavu", desc: "Lake Kivu lakeshore" },
        { lat: 1.0, lng: 28.1, name: "Epulu / Kisangani", desc: "Ituri access" },
        { lat: -0.85, lng: 25.3, name: "Lomami Camp", desc: "Fly-in forest camp" },
      ],
    },
    dayTrips: [
      {
        title: "Lola ya Bonobo from Kinshasa",
        subtitle: "The world's only bonobo sanctuary sits just 30km from central Kinshasa — a morning visit to watch orphaned bonobos in 30 hectares of forest is the most accessible great ape encounter on Earth.",
        tag: "Wildlife - Kinshasa Half Day",
        distance: "~30km from central Kinshasa",
        duration: "Half day (4 hours)",
        transport: "Private car from Kinshasa",
        steps: [
          { time: "8AM", text: "Depart central Kinshasa south toward Petite Barrière — book tickets in advance through the sanctuary." },
          { time: "9AM", text: "Arrive Lola ya Bonobo — receive the briefing on bonobo behaviour and sanctuary protocols." },
          { time: "9:30AM", text: "Enter the forest enclosures with a guide — groups of bonobos moving freely through the trees." },
          { time: "10AM", text: "Morning feeding session — observe the extraordinary social behaviour, facial expressions, and play of these human-like apes." },
          { time: "11AM", text: "Visit the nursery enclosure — youngest orphans with their surrogate mothers." },
          { time: "12PM", text: "Return to Kinshasa for a riverside capitaine lunch." },
        ],
      },
      {
        title: "Congo River and Pool Malebo Boat",
        subtitle: "A half-day boat on the Congo River from Kinshasa — crossing the Pool Malebo, the vast inland sea where the river broadens to 30km wide, with Brazzaville's skyline visible across the water.",
        tag: "Nature - Kinshasa Half Day",
        distance: "Kinshasa waterfront",
        duration: "Half day (3–4 hours)",
        transport: "River boat from Kinshasa port",
        steps: [
          { time: "7AM", text: "Arrive at the Kinshasa river port — arrange a local boat with a guide." },
          { time: "7:30AM", text: "Depart onto the Pool Malebo — the Congo River broadens to an extraordinary width." },
          { time: "8AM", text: "Brazzaville's skyline visible across the water — the two closest capital cities on Earth, facing each other across the river." },
          { time: "9AM", text: "River island visit — traditional fishing communities on the islands in the middle of the pool." },
          { time: "10AM", text: "Watch dugout canoe fishermen working the current with their traditional nets." },
          { time: "11AM", text: "Return to Kinshasa port with the city skyline ahead." },
        ],
      },
      {
        title: "Lake Kivu Island Day from Goma",
        subtitle: "A pirogue journey across the deep blue waters of Lake Kivu from Goma — visiting the village of Idjwi Island, swimming in the extraordinary lake, and watching the Virunga volcanoes reflected in the water at sunset.",
        tag: "Nature - Goma Full Day",
        distance: "~30km by boat from Goma",
        duration: "Full day (7–8 hours)",
        transport: "Motor-pirogue from Goma dock",
        steps: [
          { time: "7AM", text: "Depart Goma dock by motor-pirogue heading south across Lake Kivu." },
          { time: "8:30AM", text: "Arrive Idjwi Island — one of Africa's most densely populated islands, with a distinct local culture." },
          { time: "9AM", text: "Walk the island — coffee plantations, fishing communities, and views back to the Virunga volcanoes." },
          { time: "11AM", text: "Swim in Lake Kivu — the water is cool and clear, free of bilharzia at this altitude." },
          { time: "1PM", text: "Lunch with an island family — fresh Kivu fish and local vegetables." },
          { time: "4PM", text: "Return to Goma as the volcanoes turn gold in the late afternoon light." },
        ],
      },
      {
        title: "Nyiragongo Day Hike",
        subtitle: "The first day of the Nyiragongo two-day trek — a guided hike from the park gate through Afromontane forest and lava fields to the crater rim, ending with the first sight of the glowing lava lake below.",
        tag: "Adventure - Virunga Day One",
        distance: "~13km from Kibati gate to crater rim",
        duration: "Full day (7–8 hours hiking)",
        transport: "Vehicle to Kibati gate then on foot",
        steps: [
          { time: "8AM", text: "Depart from Kibati gate south of Goma with Virunga rangers and porters." },
          { time: "9AM", text: "Enter the forest zone — Afromontane trees draped in lichen, sunbirds in the canopy." },
          { time: "11AM", text: "Emerge from forest onto the lava field — the upper cone of Nyiragongo above, steam venting from fissures." },
          { time: "1PM", text: "Lunch stop on the lava field — extraordinary views back over Lake Kivu and Rwanda." },
          { time: "4PM", text: "Arrive at the crater rim at 3,470m — the vast lava lake glowing orange-red 200m below." },
          { time: "Night", text: "Sleep in the crater rim huts as the lava lake churns and glows in the darkness below." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A one-week DRC route combining Kinshasa's Congo River culture, Virunga mountain gorillas, Nyiragongo, and Lake Kivu.",
        arrival: {
          route: "Your City -> Kinshasa (FIH) -> Goma (GOM)",
          meta: "Kinshasa connects via Brussels, Paris, Addis Ababa, Nairobi, and Johannesburg. Fly domestically from FIH to Goma to begin the wildlife circuit.",
          sideTitle: "Airlines",
          sideCopy: "Brussels Airlines, Air France, Ethiopian, Kenya Airways, Congo Airways (domestic)",
        },
        days: [
          {
            name: "Arrival",
            title: "Kinshasa Introduction",
            location: "Kinshasa",
            activities: [
              { time: "PM", text: "Arrive FIH, hotel check-in in the Gombe district." },
              { time: "Night", text: "Congo River waterfront bar and first moambe dinner." },
            ],
          },
          {
            name: "Kinshasa",
            title: "Kinshasa City Day",
            location: "Kinshasa",
            activities: [
              { time: "AM", text: "Lola ya Bonobo sanctuary morning visit." },
              { time: "PM", text: "Congo River pool and Académie des Beaux-Arts." },
            ],
          },
          {
            name: "Fly",
            title: "Fly to Goma — Virunga",
            location: "Goma",
            activities: [
              { time: "AM", text: "Domestic flight Kinshasa to Goma." },
              { time: "PM", text: "Arrive Goma — Lake Kivu waterfront and gorilla permit briefing." },
            ],
          },
          {
            name: "Gorillas",
            title: "Mountain Gorilla Trek, Virunga",
            location: "Virunga NP",
            activities: [
              { time: "AM", text: "Early departure for mountain gorilla trek from Kibumba sector." },
              { time: "PM", text: "Return and Goma lakeside evening." },
            ],
          },
          {
            name: "Volcano D1",
            title: "Nyiragongo Ascent Day One",
            location: "Nyiragongo",
            activities: [
              { time: "AM", text: "Depart Kibati gate — hike through forest and lava fields toward the crater." },
              { time: "Night", text: "Sleep on crater rim — lava lake glowing below all night." },
            ],
          },
          {
            name: "Volcano D2",
            title: "Crater and Descent",
            location: "Nyiragongo",
            activities: [
              { time: "AM", text: "Dawn at the crater rim — extraordinary light on the lava lake before descent." },
              { time: "PM", text: "Descend to Kibati and return to Goma. Lake Kivu pirogue evening." },
            ],
          },
          {
            name: "Departure",
            title: "Fly Goma to Kinshasa and Out",
            location: "FIH",
            activities: [
              { time: "AM", text: "Domestic flight GOM to FIH." },
              { time: "PM", text: "International departure from Kinshasa." },
            ],
          },
        ],
        departure: {
          route: "Kinshasa (FIH) -> Your City",
          meta: "Most intercontinental connections from Kinshasa. Evening departures common for Europe.",
          sideTitle: "Permits",
          sideCopy: "Virunga gorilla permits must be booked well in advance via the Virunga Foundation website.",
        },
      },
      "10": {
        summary: "Ten days adding Lake Kivu's islands, Kahuzi-Biéga's eastern lowland gorillas, and deeper Kinshasa time.",
        arrival: {
          route: "Your City -> Kinshasa (FIH)",
          meta: "Fly in via Brussels or Addis Ababa, spend time in Kinshasa and the Lola ya Bonobo, then fly east.",
          sideTitle: "Route",
          sideCopy: "FIH -> Kinshasa (2 nights) -> Goma/Virunga -> Nyiragongo -> Bukavu/Kahuzi-Biéga -> FIH",
        },
        days: [
          { name: "Arrival", title: "Kinshasa", location: "Kinshasa", activities: [{ time: "PM", text: "Arrive FIH and check in." }, { time: "Night", text: "Congo River bar and live music." }] },
          { name: "Kinshasa", title: "Bonobo and River", location: "Kinshasa", activities: [{ time: "AM", text: "Lola ya Bonobo sanctuary." }, { time: "PM", text: "Pool Malebo boat and Académie des Beaux-Arts." }] },
          { name: "Fly East", title: "Fly to Goma", location: "Goma", activities: [{ time: "AM", text: "Domestic to Goma." }, { time: "PM", text: "Lake Kivu waterfront and briefing." }] },
          { name: "Gorillas", title: "Virunga Gorilla Trek", location: "Virunga NP", activities: [{ time: "AM", text: "Mountain gorilla trek — Kibumba or Bukima sector." }, { time: "PM", text: "Rest and Goma evening." }] },
          { name: "Kivu", title: "Lake Kivu Island Day", location: "Lake Kivu", activities: [{ time: "AM", text: "Pirogue to Idjwi Island." }, { time: "PM", text: "Island walk, swim, and return at sunset." }] },
          { name: "Volcano D1", title: "Nyiragongo Day One", location: "Nyiragongo", activities: [{ time: "AM", text: "Kibati gate and ascent through forest." }, { time: "Night", text: "Crater rim — lava lake all night." }] },
          { name: "Volcano D2", title: "Descent and Drive to Bukavu", location: "Bukavu", activities: [{ time: "AM", text: "Dawn crater and descent." }, { time: "PM", text: "Drive south to Bukavu on Lake Kivu." }] },
          { name: "Kahuzi", title: "Eastern Lowland Gorilla Trek", location: "Kahuzi-Biéga NP", activities: [{ time: "AM", text: "Trek for eastern lowland gorillas — world's largest gorilla subspecies." }, { time: "PM", text: "Return to Bukavu lakeside." }] },
          { name: "Rest", title: "Bukavu and Lake Kivu", location: "Bukavu", activities: [{ time: "AM", text: "Orchid Safari Club morning and lake swim." }, { time: "PM", text: "Fly Bukavu to Kinshasa." }] },
          { name: "Departure", title: "Final Kinshasa and Fly Out", location: "FIH", activities: [{ time: "AM", text: "Last market and riverside lunch." }, { time: "PM", text: "International departure from FIH." }] },
        ],
        departure: {
          route: "Kinshasa (FIH) -> Your City",
          meta: "Allow a full day buffer in Kinshasa — domestic flight delays are common.",
          sideTitle: "Planning",
          sideCopy: "Book both Virunga gorilla permits and Kahuzi-Biéga permits at least 3 months ahead.",
        },
      },
    },
    footerLine1: "Discover the DRC - Mountain gorillas, Nyiragongo lava lake, bonobos, the Congo River, and the world's second largest rainforest",
    footerLine2: "Yellow fever required. Virunga permits via virungapark.org. Check eastern region advisories before travel.",
  },

  angola: {
    country: "Angola",
    heroEyebrow: "Southern Africa - The Sleeping Giant Awakens",
    heroTitleHtml: "An<em>go</em>la",
    heroTagline:
      "Africa's most dramatically undervisited country — the surreal Tsingy-like landscapes of Pungo Andongo's black rocks, the Kalandula Falls thundering through rainforest, the extraordinary Namib Desert extending north from Namibia, the pink flamingo lagoons of Iona National Park, and a capital of Portuguese Baroque rising above an Atlantic bay.",
    heroStats: [
      { label: "Capital", value: "Luanda" },
      { label: "Currency", value: "AOA (Angolan Kwanza)" },
      { label: "Language", value: "Portuguese, Umbundu, Kimbundu, Kikongo" },
      { label: "Time Zone", value: "UTC+1" },
    ],
    knowSubtitle:
      "Angola is emerging rapidly as a destination after decades of closure — visa rules have relaxed significantly, infrastructure is improving, and the country's extraordinary natural and cultural wealth remains almost entirely undiscovered by tourism.",
    know: [
      {
        icon: "🛂",
        title: "Visa",
        text: "Angola has relaxed its visa policy significantly in recent years — e-visa and visa-on-arrival are now available for many nationalities. Confirm current requirements before travel. The process is improving rapidly.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Yellow fever vaccination is required. Malaria prophylaxis is essential throughout. Typhoid, hepatitis A, and cholera vaccinations are strongly recommended. Medical evacuation cover is essential for remote areas.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs are available in Luanda and larger cities but can be unreliable. USD is widely accepted. The Kwanza cannot be freely converted — exchange only what you need on arrival.",
      },
      {
        icon: "🌊",
        title: "Atlantic Coast",
        text: "Angola's Atlantic coast runs for 1,650km — from the arid Namib and Iona in the south through the tropical beaches of the centre to the mangrove forests of Cabinda in the north. Largely undiscovered.",
        },
      {
        icon: "🏔️",
        title: "Serra da Leba",
        text: "The spectacular pass road at Serra da Leba — a series of tight hairpin bends descending 1,000m from the Huíla plateau to the coastal lowlands — is one of the most dramatic roads in Africa.",
      },
      {
        icon: "🦩",
        title: "Iona National Park",
        text: "The oldest national park in southern Africa, Iona protects the northern extension of the Namib Desert — with extraordinary landscapes, large desert-adapted mammal populations, and seasonal flamingo lagoons.",
      },
      {
        icon: "🌋",
        title: "Pungo Andongo",
        text: "The Pedras Negras de Pungo Andongo — massive black granite boulders rising from the savanna like a natural cathedral. One of Africa's most extraordinary and least-known geological spectacles.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Luanda is the main international gateway. TAAG Angola Airlines operates domestic flights to all major cities. Roads have improved dramatically — 4x4 recommended for remote areas and national parks.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "Angola's climate varies dramatically by latitude — the north is tropical with year-round rain, the south increasingly arid. The dry season (May–September) is best for travel across most regions.",
      },
      {
        icon: "📶",
        title: "Connectivity",
        text: "Good mobile coverage in Luanda and provincial capitals. Coverage improves steadily year on year. Remote areas including Iona and Pungo Andongo have limited connectivity.",
      },
    ],
    seeSubtitle:
      "The black boulders of Pungo Andongo, Kalandula Falls in full flow, Iona's Namib desert landscape, Serra da Leba's hairpin drama, Luanda's Ilha waterfront, and the pink flamingo lagoons of the southern coast.",
    see: [
      {
        name: "Pedras Negras de Pungo Andongo",
        title: "The Black Rocks of the Savanna",
        desc: "One of Africa's most extraordinary geological landscapes — massive black granite inselbergs rising dramatically from the Malanje plateau, a spiritual site of the Mbundu people and the scene of Queen Nzinga's legendary battles.",
        tag: "Geology - Iconic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tadrart_Acacus_1.jpg/1280px-Tadrart_Acacus_1.jpg",
        alt: "Pungo Andongo black rocks boulders savanna Angola",
      },
      {
        name: "Kalandula Falls",
        title: "Africa's Second Largest Waterfall by Volume",
        desc: "The Lucala River plunges 105m over a basalt escarpment in a wall of water over 400m wide — surrounded by lush rainforest, often rainbow-filled, and accessible by road from Malanje. Spectacular in the rainy season.",
        tag: "Nature - Waterfall",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Kalandula Falls waterfall Lucala river Angola",
      },
      {
        name: "Iona National Park",
        title: "Southern Africa's Oldest Park — Desert and Dunes",
        desc: "The oldest national park in southern Africa, gazetted in 1937 — the northern extension of the Namib Desert, with towering dunes, pink flamingo lagoons at the Curoca River mouth, desert-adapted elephants, and lion.",
        tag: "Wildlife - Namib",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Iona national park Namib desert dunes Angola",
      },
      {
        name: "Serra da Leba Pass",
        title: "The Most Dramatic Road in Africa",
        desc: "The engineered marvel of Serra da Leba — a Portuguese-built mountain pass descending 1,000m from the Huíla plateau to the Namibe lowlands in a series of breathtaking hairpin bends through granite cliffs.",
        tag: "Landscape - Pass",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Serra da Leba pass hairpin road Angola dramatic",
      },
      {
        name: "Luanda",
        title: "The Baroque Atlantic Capital",
        desc: "A city of extraordinary contrasts — the 17th-century Portuguese fortress and cathedral above the bay, the magnificent Ilha da Luanda spit with Atlantic beaches and seafood restaurants, and a booming modern skyline.",
        tag: "Capital - Atlantic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dakar_from_above.jpg/1280px-Dakar_from_above.jpg",
        alt: "Luanda capital Atlantic bay Angola Portuguese",
      },
      {
        name: "Namibe and the Namib North",
        title: "Desert Meets Atlantic",
        desc: "The town of Namibe (Moçâmedes) where the Namib Desert meets the cold Atlantic — extraordinary desert-coast scenery, fossil forests, and the gateway to Iona National Park.",
        tag: "Landscape - Desert Coast",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Namibe desert Atlantic coast Angola Namib",
      },
      {
        name: "Huambo and the Planalto",
        title: "Angola's Highland Heartland",
        desc: "The Bié Plateau — Angola's cool, fertile highland interior — with the elegant Portuguese-built city of Huambo at its centre, coffee and maize cultivation, and a landscape of extraordinary highland beauty.",
        tag: "Landscape - Highland",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Huambo planalto highland plateau Angola",
      },
      {
        name: "Kissama National Park",
        title: "Luanda's Wildlife Reserve",
        desc: "The closest national park to Luanda — after decades of war-era poaching, Kissama is recovering thanks to Operation Noah's Ark, which reintroduced elephants, buffalo, and other species from southern Africa.",
        tag: "Wildlife - Kissama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Kissama national park wildlife Luanda Angola",
      },
      {
        name: "Benguela and Lobito",
        title: "Colonial Elegance on the Atlantic",
        desc: "Angola's most beautiful coastal cities — Benguela's Portuguese colonial architecture and Lobito's extraordinary natural bay and Restinga spit, home to some of Angola's finest Atlantic beaches.",
        tag: "Coast - Colonial",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Benguela Lobito colonial coast Atlantic Angola",
      },
      {
        name: "Welwitschia Plains",
        title: "The 2,000-Year-Old Plant",
        desc: "The Namibe desert interior holds ancient welwitschia plants — some over 2,000 years old, with only two leaves growing continuously for millennia. Among the most extraordinary botanical phenomena on Earth.",
        tag: "Botany - Ancient",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Welwitschia ancient plant desert Namibe Angola",
      },
    ],
    doSubtitle:
      "Walking among the Pedras Negras at Pungo Andongo, standing in the spray of Kalandula, driving Serra da Leba at sunrise, Iona flamingo lagoon, Kissama safari from Luanda, and Luanda's Ilha waterfront.",
    do: [
      {
        title: "Pungo Andongo Rock Walk",
        desc: "Walk among the extraordinary Pedras Negras — scrambling up the black granite boulders for views across the Malanje savanna, exploring the caves and overhangs of Queen Nzinga's legendary stronghold.",
        tag: "Geology - Iconic Walk",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tadrart_Acacus_1.jpg/1280px-Tadrart_Acacus_1.jpg",
        alt: "Pungo Andongo rock walk black boulders Angola",
      },
      {
        title: "Kalandula Falls Spray Walk",
        desc: "Walk the viewpoint trail above and beside Kalandula Falls — standing in the rainbow-filled spray of Africa's second largest waterfall by volume, with the Lucala gorge below.",
        tag: "Nature - Waterfall",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Kalandula Falls spray walk viewpoint Angola",
      },
      {
        title: "Serra da Leba Sunrise Drive",
        desc: "Drive the Serra da Leba pass at dawn — watching the light come up over the Namibe desert far below as you navigate the extraordinary Portuguese-engineered hairpin road from Lubango.",
        tag: "Landscape - Sunrise Drive",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Serra da Leba sunrise drive hairpin Angola",
      },
      {
        title: "Iona Flamingo Lagoon",
        desc: "Drive south through the Namib to the Curoca River mouth — a seasonal lagoon where thousands of lesser and greater flamingos gather in brilliant pink clouds against the desert dunes.",
        tag: "Wildlife - Flamingos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Iona flamingo lagoon Curoca Angola Namib",
      },
      {
        title: "Kissama Safari from Luanda",
        desc: "A day safari to Kissama National Park just 70km south of Luanda — elephants, hippos, and recovering wildlife in a park rebuilt through one of Africa's most ambitious wildlife reintroduction programmes.",
        tag: "Wildlife - Kissama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Kissama safari day trip Luanda Angola",
      },
      {
        title: "Luanda Ilha Waterfront",
        desc: "Walk the Ilha da Luanda spit — Atlantic breakers on one side, Luanda Bay on the other — and eat at the extraordinary string of seafood restaurants that have made Ilha one of Africa's finest dining strips.",
        tag: "City - Luanda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dakar_from_above.jpg/1280px-Dakar_from_above.jpg",
        alt: "Luanda Ilha waterfront seafood Atlantic Angola",
      },
      {
        title: "Welwitschia Botanical Walk",
        desc: "Drive into the Namibe desert interior to visit ancient welwitschia plants — guided by a local specialist who identifies 500 and 2,000-year-old specimens in the extraordinary gravel plains.",
        tag: "Botany - Desert Walk",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mangrove_-_Oman.jpg/1280px-Mangrove_-_Oman.jpg",
        alt: "Welwitschia botanical walk Namibe desert Angola",
      },
      {
        title: "Luanda Old Town Heritage Walk",
        desc: "Explore the Baixa district — the 17th-century Fortaleza de São Miguel above the bay, the Museu Nacional de Antropologia, and the faded grandeur of Portuguese colonial Luanda.",
        tag: "Heritage - Luanda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Asmara_City_Center.jpg/1280px-Asmara_City_Center.jpg",
        alt: "Luanda old town heritage fortress colonial Angola",
      },
      {
        title: "Benguela and Lobito Coastal Drive",
        desc: "The coastal road between Benguela and Lobito — past Portuguese colonial squares, the extraordinary Lobito Restinga spit, and the Atlantic beaches that are slowly reawakening to tourism.",
        tag: "Coast - Drive",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Guinea_Bissau_-_Bijagos_2.jpg/1280px-Guinea_Bissau_-_Bijagos_2.jpg",
        alt: "Benguela Lobito coastal drive Atlantic Angola",
      },
      {
        title: "Lubango and the Cristo Rei",
        desc: "Lubango's Cristo Rei statue overlooks the Huíla plateau from a clifftop — one of Africa's most dramatic hilltop religious monuments, with views across the city and toward the Serra da Leba escarpment.",
        tag: "Landmark - Lubango",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Volubilis_Longshot_II.jpg/1280px-Volubilis_Longshot_II.jpg",
        alt: "Lubango Cristo Rei statue hilltop Angola",
      },
    ],
    eatSubtitle:
      "Angolan food is a vivid Portuguese-African fusion — muamba de galinha in palm oil, calulu de peixe, fresh Atlantic seafood on Luanda's Ilha, mufete grilled fish with farofa, and the extraordinary fresh juice culture of the tropics.",
    eat: [
      {
        category: "National Dish",
        name: "Muamba de Galinha",
        desc: "Chicken slow-cooked in a rich sauce of dendém (palm oil), garlic, okra, and hot peppers — served with funge (cassava paste). The definitive Angolan celebration dish, fragrant and deeply coloured.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Muamba de galinha palm oil chicken Angola",
      },
      {
        category: "Coastal Classic",
        name: "Mufete de Cacusso",
        desc: "Grilled cacusso (freshwater bream) served with farofa (toasted cassava flour), boiled plantain, palm oil, and raw onion — the most beloved informal seafood dish of Luanda's waterfront.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Mufete cacusso grilled fish Angola Luanda",
      },
      {
        category: "Atlantic Seafood",
        name: "Grilled Lobster, Ilha da Luanda",
        desc: "Cold Atlantic lobster, prawns, and fresh fish grilled over charcoal at Ilha da Luanda's seafood restaurants — among the finest and most affordable Atlantic seafood in Africa, served with fresh bread and lemon.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled lobster Atlantic Ilha da Luanda Angola",
      },
      {
        category: "Forest Stew",
        name: "Calulu de Peixe",
        desc: "A rich stew of smoked and fresh fish with palm oil, dried shrimp, okra, sweet potato leaves, and tomato — a dish that traces its ancestry across the Atlantic to the Afro-Brazilian acarajé tradition.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Calulu de peixe fish stew Angola",
      },
      {
        category: "Drink",
        name: "Cuca Beer and Ginguba",
        desc: "Cuca is Angola's beloved lager — brewed since 1952 and inseparable from the Angolan identity. Ginguba is a traditional peanut snack sold at every roadside — eaten with Cuca at any hour of the day.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Cuca beer ginguba peanut Angola drink",
      },
    ],
    staySubtitle:
      "Luanda for arrivals and Kissama access; Lubango for Serra da Leba; Namibe for Iona; Malanje for Pungo Andongo; Benguela for the central coast.",
    stay: [
      {
        type: "Capital",
        area: "Luanda",
        desc: "Luanda has good international hotels across the Ilha and Baixa districts — recently improved and now more affordable than the peak oil-boom era.",
        picks: ["Intercontinental Luanda", "Epic Sana Luanda", "Ilha da Luanda boutique hotels"],
      },
      {
        type: "Southern Base",
        area: "Lubango / Namibe",
        desc: "Lubango has good hotels for Serra da Leba access. Namibe is the base for Iona National Park — basic but improving guesthouses.",
        picks: ["Hotel Namibi Lubango", "Chik-Chik Hotel Namibe", "Operator-arranged guesthouses"],
      },
      {
        type: "Desert Access",
        area: "Iona / Curoca",
        desc: "Specialist camping within Iona National Park — arranged through licensed operators with all equipment provided. The park has no permanent lodge infrastructure.",
        picks: ["Operator-arranged desert camp", "Namibe-based operator fly-in", "Self-sufficient camping (specialist)"],
      },
      {
        type: "Inland Heritage",
        area: "Malanje",
        desc: "Basic but adequate hotels in Malanje city for Pungo Andongo and Kalandula access — both are day trips from the city.",
        picks: ["Hotel Kalandula Malanje", "Malanje city guesthouses", "Operator-arranged stays"],
      },
      {
        type: "Central Coast",
        area: "Benguela / Lobito",
        desc: "Angola's most pleasant coastal cities for an overnight — improving hotel infrastructure and extraordinary Atlantic beaches.",
        picks: ["Hotel Praia Morena Benguela", "Restinga Hotel Lobito", "Coastal guesthouses"],
      },
    ],
    map: {
      center: [-12.0, 17.5],
      zoom: 5.5,
      seeSpots: [
        { lat: -9.7, lng: 16.7, name: "Pungo Andongo", desc: "Black rock boulders savanna" },
        { lat: -9.05, lng: 16.0, name: "Kalandula Falls", desc: "Africa's second largest waterfall" },
        { lat: -16.9, lng: 12.4, name: "Iona National Park", desc: "Namib desert flamingo lagoons" },
        { lat: -14.9, lng: 13.5, name: "Serra da Leba", desc: "Most dramatic road in Africa" },
        { lat: -8.8368, lng: 13.2343, name: "Luanda", desc: "Atlantic capital Portuguese baroque" },
        { lat: -14.92, lng: 13.5, name: "Lubango", desc: "Huíla plateau highland city" },
        { lat: -15.18, lng: 12.15, name: "Namibe", desc: "Desert meets Atlantic coast" },
        { lat: -12.37, lng: 13.55, name: "Kissama NP", desc: "Luanda wildlife reserve" },
        { lat: -12.58, lng: 13.4, name: "Benguela / Lobito", desc: "Colonial elegance Atlantic" },
      ],
      doSpots: [
        { lat: -9.7, lng: 16.7, name: "Rock Walk", desc: "Pungo Andongo scramble" },
        { lat: -9.05, lng: 16.0, name: "Falls Walk", desc: "Kalandula spray viewpoint" },
        { lat: -14.9, lng: 13.5, name: "Sunrise Drive", desc: "Serra da Leba dawn" },
        { lat: -16.9, lng: 12.4, name: "Flamingo Lagoon", desc: "Iona Curoca river mouth" },
        { lat: -12.37, lng: 13.55, name: "Kissama Safari", desc: "Day trip from Luanda" },
        { lat: -8.8368, lng: 13.2343, name: "Ilha Waterfront", desc: "Luanda Atlantic seafood" },
      ],
      staySpots: [
        { lat: -8.8368, lng: 13.2343, name: "Luanda", desc: "Capital international hotels" },
        { lat: -14.92, lng: 13.5, name: "Lubango", desc: "Southern highland base" },
        { lat: -15.18, lng: 12.15, name: "Namibe", desc: "Iona gateway" },
        { lat: -9.53, lng: 16.34, name: "Malanje", desc: "Pungo Andongo base" },
        { lat: -12.58, lng: 13.4, name: "Benguela", desc: "Central coast hotels" },
      ],
    },
    dayTrips: [
      {
        title: "Kissama National Park from Luanda",
        subtitle: "Angola's most accessible safari — just 70km south of Luanda, Kissama is home to elephants reintroduced from Botswana, hippos on the Kwanza River, and recovering populations of buffalo, sable, and giant sable antelope.",
        tag: "Wildlife - Luanda Day Trip",
        distance: "~70km south of Luanda",
        duration: "Full day (8–9 hours)",
        transport: "4x4 from Luanda — park gate at Cabo Ledo",
        steps: [
          { time: "6AM", text: "Early departure from Luanda south on the Cabo Ledo road toward Kissama's main gate." },
          { time: "7:30AM", text: "Enter Kissama — morning is the best time for elephant encounters near the Kwanza River." },
          { time: "9AM", text: "Kwanza River hippo pool — pods of hippos in the river shallows below the acacia bank." },
          { time: "11AM", text: "Drive the park's interior tracks — warthog, eland, and recovering buffalo herds." },
          { time: "1PM", text: "Picnic lunch in the park under an acacia — listen for the bird calls in the surrounding miombo." },
          { time: "4PM", text: "Return to Luanda in time for sundowner on Ilha da Luanda." },
        ],
      },
      {
        title: "Kalandula Falls from Malanje",
        subtitle: "The Lucala River plunges 105m over a basalt lip in a wall of water 400m wide — just 100km from Malanje, the falls are surrounded by lush forest and filled with rainbows in morning light.",
        tag: "Nature - Malanje Day Trip",
        distance: "~100km from Malanje",
        duration: "Full day (7–8 hours)",
        transport: "4x4 from Malanje",
        steps: [
          { time: "7AM", text: "Depart Malanje east toward the Lucala River on improved tarmac road." },
          { time: "9AM", text: "Arrive Kalandula — first view of the falls from the upper viewpoint, rainbows in the spray." },
          { time: "9:30AM", text: "Walk down to the base viewpoint — the full width of the falls visible, spray drenching the path." },
          { time: "11AM", text: "Follow the trail to the side of the falls — stand in the rainforest beside the cascade." },
          { time: "1PM", text: "Lunch at the nearby guesthouse with views of the falls." },
          { time: "3PM", text: "Return to Malanje, stopping at a Malanje market for local mangoes and groundnuts." },
        ],
      },
      {
        title: "Serra da Leba and Namibe Descent",
        subtitle: "Drive from Lubango down the breathtaking Serra da Leba mountain pass — 1,000m of hairpin bends through red granite cliffs — to the desert town of Namibe on the Atlantic, returning via the dramatic coastal road.",
        tag: "Landscape - Lubango Full Day",
        distance: "~80km from Lubango to Namibe",
        duration: "Full day (7 hours)",
        transport: "4x4 from Lubango",
        steps: [
          { time: "6AM", text: "Depart Lubango before dawn — drive to the Serra da Leba pass summit for sunrise." },
          { time: "6:30AM", text: "Sunrise at the top of the pass — the Namibe desert plains stretching west to the Atlantic in the first light." },
          { time: "7AM", text: "Begin the descent — 16 hairpin bends through red granite cliffs, each one more dramatic than the last." },
          { time: "9AM", text: "Arrive Namibe — the cold Atlantic current hits the desert air, creating the Namib's extraordinary climate." },
          { time: "10AM", text: "Walk the Namibe waterfront and fossil wood forest nearby." },
          { time: "1PM", text: "Fresh Atlantic fish lunch at Namibe harbour before the return drive via the coast road." },
        ],
      },
      {
        title: "Pungo Andongo Rocks and Cangandala",
        subtitle: "Half a day among the Pedras Negras — Angola's most spectacular geological landscape — combined with a visit to the tiny Cangandala National Park, the only sanctuary for the critically endangered giant sable antelope.",
        tag: "Geology + Wildlife - Malanje Full Day",
        distance: "~90km from Malanje",
        duration: "Full day (8 hours)",
        transport: "4x4 from Malanje",
        steps: [
          { time: "7AM", text: "Drive southwest from Malanje toward the Pungo Andongo massif." },
          { time: "8:30AM", text: "Arrive the Pedras Negras — walk among the massive black granite boulders of the inselberg complex." },
          { time: "9:30AM", text: "Scramble to the top of the largest boulders — panoramic views across the Malanje savanna." },
          { time: "11AM", text: "Queen Nzinga's footprint rock — the legendary imprint of the Ndongo queen in the granite." },
          { time: "1PM", text: "Drive to Cangandala National Park — the only place on Earth where the palanca negra gigante (giant sable) is protected." },
          { time: "3PM", text: "Return to Malanje." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A one-week Angola route combining Luanda's colonial bay, Kissama wildlife, Malanje's black rocks and falls, and the south's dramatic Serra da Leba.",
        arrival: {
          route: "Your City -> Luanda (LAD)",
          meta: "Luanda connects via Lisbon (TAP), Addis Ababa (Ethiopian), Dubai (Emirates), Johannesburg (South African), and several European hubs.",
          sideTitle: "Airlines",
          sideCopy: "TAP Air Portugal, Ethiopian Airlines, Emirates, South African Airways, TAAG Angola",
        },
        days: [
          {
            name: "Arrival",
            title: "Luanda Introduction",
            location: "Luanda",
            activities: [
              { time: "PM", text: "Arrive LAD, check in and Baixa colonial heritage walk." },
              { time: "Night", text: "Ilha da Luanda seafood dinner and Atlantic sunset." },
            ],
          },
          {
            name: "Luanda",
            title: "Luanda City Day",
            location: "Luanda",
            activities: [
              { time: "AM", text: "Fortaleza de São Miguel and Museu Nacional de Antropologia." },
              { time: "PM", text: "Kissama National Park afternoon safari." },
            ],
          },
          {
            name: "Fly",
            title: "Fly to Malanje",
            location: "Malanje",
            activities: [
              { time: "AM", text: "TAAG domestic flight to Malanje." },
              { time: "PM", text: "Check in and first afternoon at Pungo Andongo rocks." },
            ],
          },
          {
            name: "Rocks",
            title: "Pungo Andongo Full Day",
            location: "Pedras Negras",
            activities: [
              { time: "AM", text: "Full morning among the black rocks — scrambling, caves, and Queen Nzinga's footprint." },
              { time: "PM", text: "Cangandala park for giant sable." },
            ],
          },
          {
            name: "Falls",
            title: "Kalandula Falls",
            location: "Kalandula",
            activities: [
              { time: "AM", text: "Drive to Kalandula — spray walk and base viewpoint." },
              { time: "PM", text: "Return to Malanje and evening flight to Luanda." },
            ],
          },
          {
            name: "South",
            title: "Fly to Lubango — Serra da Leba",
            location: "Lubango",
            activities: [
              { time: "AM", text: "TAAG flight to Lubango and afternoon Cristo Rei visit." },
              { time: "PM", text: "Evening on the Huíla plateau before the dawn drive." },
            ],
          },
          {
            name: "Departure",
            title: "Serra da Leba Descent and Fly Out",
            location: "LAD",
            activities: [
              { time: "AM", text: "Dawn Serra da Leba descent to Namibe — breakfast in the desert town." },
              { time: "PM", text: "Fly Lubango to Luanda and international departure." },
            ],
          },
        ],
        departure: {
          route: "Luanda (LAD) -> Your City",
          meta: "Good international connections from Luanda via Lisbon, Addis Ababa, and Dubai.",
          sideTitle: "Tip",
          sideCopy: "Book TAAG domestic flights in advance — seats fill quickly on Luanda–Malanje and Luanda–Lubango routes.",
        },
      },
      "10": {
        summary: "Ten days adding the Namib desert of Iona, Benguela's colonial coast, and a deeper Namibe exploration.",
        arrival: {
          route: "Your City -> Luanda (LAD)",
          meta: "Fly in via Lisbon or Addis Ababa. The extended route covers north, centre, and south Angola.",
          sideTitle: "Route",
          sideCopy: "LAD -> Luanda -> Kissama -> Malanje (rocks+falls) -> Lubango/Serra da Leba -> Namibe -> Iona -> Benguela -> LAD",
        },
        days: [
          { name: "Arrival", title: "Luanda", location: "Luanda", activities: [{ time: "PM", text: "Arrive and check in." }, { time: "Night", text: "Ilha seafood dinner." }] },
          { name: "Luanda", title: "City and Kissama", location: "Luanda", activities: [{ time: "AM", text: "Colonial heritage walk and fortress." }, { time: "PM", text: "Kissama National Park safari." }] },
          { name: "Malanje", title: "Fly to Malanje", location: "Malanje", activities: [{ time: "AM", text: "Fly to Malanje." }, { time: "PM", text: "Pungo Andongo rocks afternoon." }] },
          { name: "Rocks+Falls", title: "Pungo Andongo and Kalandula", location: "Malanje region", activities: [{ time: "AM", text: "Full Pungo Andongo rock circuit." }, { time: "PM", text: "Kalandula Falls visit and return." }] },
          { name: "South", title: "Fly to Lubango", location: "Lubango", activities: [{ time: "AM", text: "Fly Malanje to Lubango via Luanda." }, { time: "PM", text: "Cristo Rei and Huíla plateau." }] },
          { name: "Leba", title: "Serra da Leba Dawn", location: "Serra da Leba / Namibe", activities: [{ time: "AM", text: "Dawn drive down Serra da Leba to Namibe." }, { time: "PM", text: "Namibe waterfront and fossil wood forest." }] },
          { name: "Iona", title: "Iona National Park", location: "Iona NP", activities: [{ time: "AM", text: "Drive south to Iona — Namib dunes and desert landscapes." }, { time: "PM", text: "Curoca flamingo lagoon at sunset." }] },
          { name: "Welwitschia", title: "Welwitschia and Desert Drive", location: "Namib interior", activities: [{ time: "AM", text: "Ancient welwitschia plant walk in the Namibe interior." }, { time: "PM", text: "Return to Namibe." }] },
          { name: "Coast", title: "Fly to Benguela", location: "Benguela", activities: [{ time: "AM", text: "Fly or drive north to Benguela." }, { time: "PM", text: "Lobito Restinga spit and colonial quarter walk." }] },
          { name: "Departure", title: "Benguela Coast and Fly Out", location: "LAD", activities: [{ time: "AM", text: "Atlantic beach morning." }, { time: "PM", text: "Fly Benguela to Luanda and international departure." }] },
        ],
        departure: {
          route: "Luanda (LAD) -> Your City",
          meta: "Allow buffer in Luanda — LAD domestic connections can run late.",
          sideTitle: "Planning",
          sideCopy: "Iona requires 4x4 and ideally an operator — no park infrastructure exists and tracks are unmarked.",
        },
      },
    },
    footerLine1: "Discover Angola - Black rock sculptures, Africa's great waterfall, Namib flamingos, Serra da Leba, and the Atlantic baroque capital",
    footerLine2: "Yellow fever required. E-visa available for most nationalities. Iona requires specialist operator support.",
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
      if (inQuotes && row[i + 1] === '"') { current += '"'; i += 1; }
      else { inQuotes = !inQuotes; }
      continue;
    }
    if (ch === "," && !inQuotes) { cells.push(current); current = ""; continue; }
    current += ch;
  }
  cells.push(current);
  return cells;
}

function escapeMapHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function loadAirportsByCountry() {
  if (airportsByCountryPromise) return airportsByCountryPromise;
  airportsByCountryPromise = fetch(AIRPORTS_CSV_PATH)
    .then((res) => { if (!res.ok) throw new Error(`Failed to load airport CSV (${res.status})`); return res.text(); })
    .then((csvText) => {
      const lines = csvText.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
      if (lines.length < 2) return {};
      const headers = parseCsvRow(lines[0]).map((h) => h.trim());
      const idxCountry = headers.indexOf("Country"), idxCity = headers.indexOf("City");
      const idxAirportName = headers.indexOf("Airport Name"), idxIata = headers.indexOf("IATA Code");
      const idxLon = headers.indexOf("longitude_deg"), idxLat = headers.indexOf("latitude_deg");
      if ([idxCountry, idxCity, idxAirportName, idxIata, idxLon, idxLat].some((i) => i < 0))
        throw new Error("Airport CSV missing required columns.");
      const maxIdx = Math.max(idxCountry, idxCity, idxAirportName, idxIata, idxLon, idxLat);
      const grouped = {};
      for (let i = 1; i < lines.length; i += 1) {
        const row = parseCsvRow(lines[i]);
        if (row.length <= maxIdx) continue;
        const country = (row[idxCountry] || "").trim();
        const lat = Number.parseFloat(row[idxLat]), lng = Number.parseFloat(row[idxLon]);
        if (!country || !Number.isFinite(lat) || !Number.isFinite(lng)) continue;
        const key = country.toLowerCase();
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push({ airportName: (row[idxAirportName] || "").trim(), city: (row[idxCity] || "").trim(), iata: (row[idxIata] || "").trim(), lat, lng });
      }
      return grouped;
    })
    .catch((error) => { console.error("Unable to load country airports:", error); return {}; });
  return airportsByCountryPromise;
}

function getAirportsForCountry(country) {
  const key = (country || "").toLowerCase().trim();
  if (!key) return Promise.resolve([]);
  return loadAirportsByCountry().then((grouped) => grouped[key] || []);
}

function initializeMap(guide) {
  const map = L.map("country-map", { center: guide.map.center, zoom: guide.map.zoom, zoomControl: true, scrollWheelZoom: false });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);
  function makeIcon(color) {
    return L.divIcon({ className: "", html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>`, iconSize: [14, 14], iconAnchor: [7, 7], popupAnchor: [0, -10] });
  }
  const seeIcon = makeIcon("#C4714A"), doIcon = makeIcon("#1B3A5C"), stayIcon = makeIcon("#C9A84C");
  const airportIcon = L.divIcon({ className: "", html: '<div style="width:16px;height:16px;border-radius:50%;background:#2A9D8F;border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;line-height:1">✈</div>', iconSize: [16, 16], iconAnchor: [8, 8], popupAnchor: [0, -10] });
  guide.map.seeSpots.forEach((spot) => { L.marker([spot.lat, spot.lng], { icon: seeIcon, zIndexOffset: 100 }).addTo(map).bindPopup(`<strong style="font-family:Georgia,serif;font-size:1rem">${spot.name}</strong><br><span style="color:#7A7772;font-size:0.82rem">${spot.desc}</span><br><span style="font-size:0.7rem;color:#C4714A;text-transform:uppercase;letter-spacing:0.08em">Thing to See</span>`); });
  guide.map.doSpots.forEach((spot) => { L.marker([spot.lat, spot.lng], { icon: doIcon, zIndexOffset: 300 }).addTo(map).bindPopup(`<strong style="font-family:Georgia,serif;font-size:1rem">${spot.name}</strong><br><span style="color:#7A7772;font-size:0.82rem">${spot.desc}</span><br><span style="font-size:0.7rem;color:#1B3A5C;text-transform:uppercase;letter-spacing:0.08em">Activity</span>`); });
  guide.map.staySpots.forEach((spot) => { L.marker([spot.lat, spot.lng], { icon: stayIcon, zIndexOffset: 50 }).addTo(map).bindPopup(`<strong style="font-family:Georgia,serif;font-size:1rem">${spot.name}</strong><br><span style="color:#7A7772;font-size:0.82rem">${spot.desc}</span><br><span style="font-size:0.7rem;color:#C9A84C;text-transform:uppercase;letter-spacing:0.08em">Where to Stay</span>`); });
  getAirportsForCountry(guide.country).then((airports) => {
    airports.forEach((airport) => {
      const title = airport.iata ? `${airport.airportName} (${airport.iata})` : airport.airportName;
      L.marker([airport.lat, airport.lng], { icon: airportIcon, zIndexOffset: -100 }).addTo(map).bindPopup(`<strong style="font-family:Georgia,serif;font-size:0.98rem">${escapeMapHtml(title)}</strong><br><span style="color:#7A7772;font-size:0.82rem">${escapeMapHtml(airport.city)}</span><br><span style="font-size:0.7rem;color:#2A9D8F;text-transform:uppercase;letter-spacing:0.08em">Airport</span>`);
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
      if (targetPlan) targetPlan.classList.add("active");
    });
  });
}

function bootGuide() {
  const countryKey = document.body.getAttribute("data-guide-country");
  const guide = GUIDE_DATA[countryKey];
  if (!guide) {
    document.body.innerHTML = `<main style="padding:40px;font-family:DM Sans,sans-serif;"><h1>Travel guide not found</h1><p>Invalid guide key: <code>${countryKey || "undefined"}</code></p></main>`;
    return;
  }
  renderPage(guide);
  initializeMap(guide);
  initializeItinerarySwitcher();
}

bootGuide();
