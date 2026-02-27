const GUIDE_DATA = {

  seychelles: {
    country: "Seychelles",
    heroEyebrow: "Indian Ocean — Granite Islands, Coral Atolls, and the Last Eden",
    heroTitleHtml: "Sey<em>chel</em>les",
    heroTagline:
      "The most beautiful islands on Earth — ancient granite boulders piled improbably above powder-white beaches on Mahé, Praslin, and La Digue, the last wild coco de mer palm forest, giant Aldabra tortoises ambling through open savanna, coral reefs of extraordinary colour and clarity, and a Creole culture built from African, French, and Indian threads across 115 islands scattered across the Indian Ocean.",
    heroStats: [
      { label: "Capital", value: "Victoria, Mahé" },
      { label: "Currency", value: "SCR (Seychellois Rupee)" },
      { label: "Language", value: "Seychellois Creole, English, French" },
      { label: "Time Zone", value: "UTC+4" },
    ],
    knowSubtitle:
      "The Seychelles is one of Africa's most expensive destinations — but the islands deliver extraordinary natural beauty at every price point. The inner islands (Mahé, Praslin, La Digue) are the classic circuit; the outer atolls (Alphonse, Desroches, Aldabra) are for those seeking complete remoteness.",
    know: [
      {
        icon: "🛂",
        title: "Visa — Permit on Arrival",
        text: "All nationalities receive a free visitor's permit on arrival for up to 30 days (extendable). No advance visa required. A return or onward ticket and proof of accommodation are required at the immigration desk.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "The Seychelles has two main seasons — the southeast trade wind season (May–October, cooler, rougher seas on the east coast) and the northwest monsoon (November–April, calmer seas, occasional heavy rain). The inner islands are diveable and beautiful year-round.",
      },
      {
        icon: "🐢",
        title: "Giant Tortoises",
        text: "The Aldabra giant tortoise is the world's largest land tortoise — Aldabra Atoll holds over 100,000 animals, the largest population on Earth. On the inner islands, rescued tortoises roam freely at many resorts and conservation areas.",
      },
      {
        icon: "🥥",
        title: "Coco de Mer",
        text: "The coco de mer palm produces the world's largest seed — up to 25kg. The Vallée de Mai on Praslin is the only wild forest of this extraordinary endemic palm, a UNESCO World Heritage site and the legendary original Garden of Eden.",
      },
      {
        icon: "🤿",
        title: "Diving",
        text: "The Seychelles inner islands have excellent diving year-round — granite boulders draped in coral, nurse sharks, hawksbill turtles, and schooling fish at sites around Mahé, Praslin, and the St. Anne Marine Park. The outer atolls have world-class drift diving.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "The Seychelles is one of the most expensive destinations in Africa. Budget hotels and guesthouses (known as 'self-catering') on La Digue and Praslin offer affordable alternatives to the luxury resorts. ATMs in Victoria. USD, EUR, and GBP widely accepted.",
      },
      {
        icon: "🚢",
        title: "Island Hopping",
        text: "Inter-island Cat Cocos ferry connects Mahé, Praslin, and La Digue — the Mahé–Praslin crossing takes 1 hour, Praslin–La Digue takes 15 minutes. Domestic flights connect Mahé to Praslin (15 minutes) and to the outer islands.",
      },
      {
        icon: "🦜",
        title: "Endemic Birds",
        text: "The Seychelles has 13 endemic bird species including the Seychelles warbler, black parrot (national bird, found only in Praslin), magpie robin (once nearly extinct), and the extraordinary white tern — which lays its single egg on a bare branch.",
      },
      {
        icon: "🌿",
        title: "Conservation",
        text: "Seychelles is a world leader in island conservation — the Nature Seychelles and Island Conservation Society have brought multiple species back from the brink. Cousin Island is a model conservation success. The country protects over 50% of its land area.",
      },
      {
        icon: "🍽️",
        title: "Creole Culture",
        text: "Seychellois Creole culture is a beautiful fusion of African, French, South Asian, and Malagasy threads — in the food, the music (moutia, sega), the architecture, and the warmth of the people. Victoria's Sir Selwyn Clarke Market is the best introduction.",
      },
    ],
    seeSubtitle:
      "Anse Source d'Argent's granite boulders and white sand, the Vallée de Mai coco de mer forest, Aldabra's giant tortoises, Beau Vallon beach at sunset, the Seychelles black parrot in the palm forest, and Victoria's Creole market.",
    see: [
      {
        name: "Anse Source d'Argent, La Digue",
        title: "The Most Photographed Beach on Earth",
        desc: "Ancient pink granite boulders the size of houses, carved into impossible shapes by millions of years of erosion, rising from powder-white sand above a shallow turquoise lagoon — Anse Source d'Argent is simply the most beautiful beach on Earth.",
        tag: "Beach - Iconic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Anse Source d'Argent granite boulders La Digue Seychelles",
      },
      {
        name: "Vallée de Mai, Praslin",
        title: "UNESCO Coco de Mer Palm Forest",
        desc: "A UNESCO World Heritage site on Praslin — the only wild forest of the coco de mer palm, whose enormous double-lobed seeds inspired legends of an underwater Garden of Eden. The Seychelles black parrot lives here, and the ancient forest feels genuinely primeval.",
        tag: "UNESCO - Palm Forest",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Vallée de Mai coco de mer Praslin UNESCO Seychelles",
      },
      {
        name: "Aldabra Atoll",
        title: "UNESCO — 100,000 Giant Tortoises",
        desc: "The world's largest raised coral atoll and one of the last truly pristine marine ecosystems — 100,000 Aldabra giant tortoises, nesting green turtles, frigatebird colonies, and coral reef of extraordinary health. One of the most remote and biodiverse places on Earth.",
        tag: "UNESCO - Outer Atoll",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Aldabra Atoll giant tortoises UNESCO Seychelles",
      },
      {
        name: "Anse Lazio, Praslin",
        title: "Praslin's Perfect Crescent",
        desc: "A wide crescent of white sand backed by takamaka trees on Praslin's northwest tip — calm, clear turquoise water, good snorkelling on the reef at both ends, and a beach that consistently appears on any list of the world's finest.",
        tag: "Beach - Praslin",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Anse Lazio beach Praslin crescent Seychelles",
      },
      {
        name: "Cousin Island",
        title: "A Model of Island Conservation",
        desc: "A small island off Praslin that was bought by BirdLife International in 1968 and transformed from a coconut plantation into one of the world's most successful island conservation reserves — hawksbill turtles nesting on the beach, Seychelles warblers overhead.",
        tag: "Conservation - Bird Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Cousin Island conservation reserve Seychelles Praslin",
      },
      {
        name: "Victoria, Mahé",
        title: "The World's Smallest Capital",
        desc: "A compact, colourful Creole city — the Sir Selwyn Clarke Market with its fish stalls and spice vendors, the miniature replica of Big Ben, the Botanical Gardens with tortoises, and the distinctive architecture of the world's smallest capital city.",
        tag: "Capital - Creole",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Victoria capital market Mahé Seychelles Creole",
      },
      {
        name: "Morne Seychellois National Park",
        title: "Mahé's Granite Highland Interior",
        desc: "The forested granite highlands of central Mahé — hiking trails through mist-forest, viewpoints above the island's coastline, cinnamon trees, and the endemic Seychelles swiftlet nesting in the granite boulders.",
        tag: "Nature - Highland Hiking",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Morne Seychellois National Park granite Mahé",
      },
      {
        name: "St. Anne Marine National Park",
        title: "Mahé's Coral Reef Garden",
        desc: "A group of six islands off Victoria — the marine park has excellent snorkelling and diving among coral gardens, sea turtles, rays, and reef fish, accessible by glass-bottom boat or kayak from Mahé's east coast.",
        tag: "Marine - Snorkel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "St Anne Marine Park coral reef Mahé Seychelles",
      },
      {
        name: "Beau Vallon, Mahé",
        title: "Mahé's Social Beach",
        desc: "A long arc of white sand on Mahé's northwest coast — calm water, beach stalls, dive schools, and the informal social life of the island. The Wednesday evening street food market at Beau Vallon is the finest introduction to Seychellois Creole cooking.",
        tag: "Beach - Mahé",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Beau Vallon beach Mahé social Seychelles",
      },
      {
        name: "La Digue",
        title: "The Island Where Time Has Stopped",
        desc: "The third main island — small enough to explore entirely by bicycle, with ox-carts still carrying goods on the single road, fishing communities, and granite boulder coves of extraordinary beauty beyond the famous Anse Source d'Argent.",
        tag: "Island - La Digue",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "La Digue island bicycle ox-cart Seychelles",
      },
    ],
    doSubtitle:
      "Cycling La Digue to Anse Source d'Argent, walking the Vallée de Mai for the black parrot, diving the granite reef off Mahé, kayaking to Cousin Island, Beau Vallon Wednesday night market, snorkelling Anse Lazio, and a glass-bottom boat over the St. Anne coral.",
    do: [
      {
        title: "Cycle La Digue to Anse Source d'Argent",
        desc: "Hire a bicycle in La Digue village and pedal the 3km south to Anse Source d'Argent — passing vanilla plantations and the historic L'Union Estate coconut mill before arriving at the most beautiful beach on Earth.",
        tag: "Adventure - La Digue",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Cycle La Digue Anse Source d'Argent Seychelles",
      },
      {
        title: "Vallée de Mai Dawn Walk",
        desc: "Enter the Vallée de Mai at opening time — the coco de mer palms are extraordinary at dawn, the Seychelles black parrot is most active in the morning, and the forest is free of the midday visitor crowds.",
        tag: "Nature - Praslin",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Vallée de Mai dawn walk black parrot Praslin",
      },
      {
        title: "Dive the Granite Reef, Mahé",
        desc: "Dive the underwater granite boulders around Mahé — nurse sharks rest between the rocks, moray eels emerge from crevices, hawksbill turtles drift overhead, and the coral draped on the granite walls is unlike any other dive in the world.",
        tag: "Marine - Scuba",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Dive granite reef Mahé Seychelles turtle shark",
      },
      {
        title: "Cousin Island Conservation Tour",
        desc: "Take a boat from Praslin to Cousin Island — a guided tour with the island rangers through one of the world's finest conservation reserves, watching hawksbill turtles on the beach and Seychelles warblers in the canopy.",
        tag: "Conservation - Praslin",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Cousin Island tour hawksbill turtle warbler Seychelles",
      },
      {
        title: "Beau Vallon Wednesday Night Market",
        desc: "The finest introduction to Seychellois food — the Wednesday evening Lalonn festival at Beau Vallon beach, with stalls serving grilled fish, octopus curry, ladob banana dessert, and fresh coconut, eaten on the sand.",
        tag: "Food - Mahé",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Beau Vallon night market food Seychelles Creole",
      },
      {
        title: "Snorkel Anse Lazio Reef Ends",
        desc: "The rocky reef at both ends of Anse Lazio is home to parrotfish, surgeonfish, and the occasional hawksbill turtle — enter the water at the northern rocks for the best coral and clearest visibility.",
        tag: "Marine - Praslin",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Snorkel Anse Lazio reef parrotfish Praslin",
      },
      {
        title: "Morne Seychellois Hiking",
        desc: "Hike the Copolia Trail from Sans Souci Road into the Morne Seychellois National Park — a 3-hour return trail through cinnamon forest to a granite plateau with panoramic views over Mahé's coastline.",
        tag: "Adventure - Mahé",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Copolia Trail Morne Seychellois hike granite Mahé",
      },
      {
        title: "Victoria Market and Botanical Gardens",
        desc: "Spend a morning in Victoria — the Sir Selwyn Clarke Market for fresh tuna, dried spices, and Creole life; then the Botanical Gardens for giant tortoises roaming free among the native palms.",
        tag: "Culture - Victoria",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Victoria market Botanical Gardens tortoise Seychelles",
      },
      {
        title: "Kayak to St. Anne Island",
        desc: "Kayak from Mahé's east coast across to the St. Anne Marine Park — the coral gardens in the shallows are excellent for snorkelling, and the uninhabited islands have deserted beaches for a private picnic.",
        tag: "Adventure - Marine Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Kayak St Anne Marine Park Mahé Seychelles",
      },
      {
        title: "Sunset Sail from Praslin",
        desc: "A catamaran sunset sail from Praslin — stopping to snorkel at Curieuse Island (giant tortoises on the beach), passing through the St. Pierre islet, and returning to Praslin in the amber light of an Indian Ocean evening.",
        tag: "Adventure - Praslin Sail",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Catamaran sail sunset Praslin Curieuse Seychelles",
      },
    ],
    eatSubtitle:
      "Seychellois Creole food is one of the Indian Ocean's finest — grilled red snapper with ladob banana, octopus curry with breadfruit, fresh tuna tartare at Victoria market, and the cold Seybrew that every beach deserves.",
    eat: [
      {
        category: "Creole Classic",
        name: "Grilled Red Snapper with Creole Sauce",
        desc: "Whole red snapper grilled over charcoal and served with a fresh tomato, chilli, and coriander Creole sauce alongside breadfruit chips and a green papaya salad — the definitive Seychellois beach restaurant meal.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled red snapper Creole sauce Seychelles beach",
      },
      {
        category: "Island Curry",
        name: "Octopus Curry",
        desc: "Octopus slow-cooked in coconut milk with turmeric, garlic, lemongrass, and fresh chilli — a Seychellois signature dish that reflects the Indian and Malagasy threads of the islands' Creole culture.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Octopus curry coconut Seychelles Creole Indian Ocean",
      },
      {
        category: "Street Market",
        name: "Tuna Tartare at Victoria Market",
        desc: "The Sir Selwyn Clarke Market in Victoria sells the freshest yellowfin tuna in the Indian Ocean — eaten raw as tartare with lime and chilli at the market tables, or grilled at the stalls outside.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Tuna tartare Victoria market Seychelles yellowfin",
      },
      {
        category: "Creole Dessert",
        name: "Ladob and Coconut Ice Cream",
        desc: "Ladob — ripe plantain or breadfruit cooked in coconut milk with vanilla and nutmeg — is the quintessential Seychellois dessert. Coconut ice cream from a beach stall on La Digue is the other essential sweet.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Ladob plantain coconut milk dessert Seychelles Creole",
      },
      {
        category: "Drink",
        name: "Seybrew, Takamaka Rum, and Coconut Water",
        desc: "Seybrew is the Seychelles' local lager — light, cold, and perfect on the beach. Takamaka is the island's premium rum, produced in St. André. Fresh young coconut water, cut open on any beach, is the essential free drink.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Seybrew Takamaka rum coconut water Seychelles",
      },
    ],
    staySubtitle:
      "Mahé for arrivals and diving; Praslin for the Vallée de Mai and finest beaches; La Digue for cycling and the iconic granite coves; outer atolls for complete remoteness.",
    stay: [
      {
        type: "Mahé",
        area: "Mahé Island",
        desc: "Four Seasons Seychelles (Petite Anse) and the Hilton Seychelles Northolme are the top end. Banyan Tree Mahé and a range of self-catering guesthouses in Beau Vallon cover mid-range.",
        picks: ["Four Seasons Seychelles Mahé", "Hilton Northolme Seychelles", "Beau Vallon guesthouses"],
      },
      {
        type: "Praslin",
        area: "Praslin Island",
        desc: "Constance Lemuria (Anse Kerlan) and the Raffles Seychelles (Anse Takamaka) are the finest. Several excellent mid-range chalets in the Côte d'Or area near Anse Lazio.",
        picks: ["Constance Lemuria Praslin", "Raffles Seychelles", "Côte d'Or self-catering"],
      },
      {
        type: "La Digue",
        area: "La Digue Island",
        desc: "The Domaine de L'Orangeraie is the island's finest resort. Château St. Cloud and a wide range of simple guesthouses offer excellent affordable alternatives on this car-free island.",
        picks: ["Domaine de L'Orangeraie", "Château St. Cloud", "La Digue Island Lodge"],
      },
      {
        type: "Outer Atolls",
        area: "Alphonse, Desroches, or Silhouette",
        desc: "Alphonse Island Resort (fly-fishing and diving mecca), Desroches Island Resort, and Silhouette Island's Hilton offer complete seclusion on the outer islands.",
        picks: ["Alphonse Island Resort", "Desroches Island Resort", "Hilton Seychelles Labriz Silhouette"],
      },
      {
        type: "Private Island",
        area: "North Island or Fregate",
        desc: "North Island and Fregate Island Private represent the apex of Seychelles luxury — entirely private islands with a handful of villas, barefoot elegance, and conservation programmes built into the stay.",
        picks: ["North Island Seychelles", "Fregate Island Private", "Denis Private Island"],
      },
    ],
    map: {
      center: [-4.65, 55.45],
      zoom: 10.5,
      seeSpots: [
        { lat: -4.345, lng: 55.836, name: "Anse Source d'Argent", desc: "World's most beautiful beach" },
        { lat: -4.329, lng: 55.739, name: "Vallée de Mai", desc: "UNESCO coco de mer forest" },
        { lat: -9.4, lng: 46.35, name: "Aldabra Atoll", desc: "100,000 giant tortoises" },
        { lat: -4.295, lng: 55.719, name: "Anse Lazio", desc: "Praslin perfect crescent beach" },
        { lat: -4.348, lng: 55.725, name: "Cousin Island", desc: "Conservation reserve Praslin" },
        { lat: -4.619, lng: 55.451, name: "Victoria", desc: "World's smallest capital" },
        { lat: -4.6, lng: 55.45, name: "Morne Seychellois NP", desc: "Granite highland trails Mahé" },
        { lat: -4.582, lng: 55.517, name: "St. Anne Marine Park", desc: "Coral reef gardens Mahé" },
        { lat: -4.535, lng: 55.427, name: "Beau Vallon", desc: "Mahé social beach market" },
        { lat: -4.345, lng: 55.836, name: "La Digue Island", desc: "Bicycle and ox-cart island" },
      ],
      doSpots: [
        { lat: -4.345, lng: 55.836, name: "Cycle La Digue", desc: "Bicycle to Anse Source d'Argent" },
        { lat: -4.329, lng: 55.739, name: "Vallée de Mai Walk", desc: "Black parrot dawn forest" },
        { lat: -4.6, lng: 55.46, name: "Granite Reef Dive", desc: "Mahé underwater boulders" },
        { lat: -4.348, lng: 55.725, name: "Cousin Tour", desc: "Conservation island boat" },
        { lat: -4.535, lng: 55.427, name: "Night Market", desc: "Wednesday Beau Vallon food" },
        { lat: -4.295, lng: 55.719, name: "Anse Lazio Snorkel", desc: "Reef ends parrotfish" },
        { lat: -4.607, lng: 55.443, name: "Copolia Hike", desc: "Morne Seychellois granite" },
        { lat: -4.619, lng: 55.451, name: "Victoria Market", desc: "Tuna market and gardens" },
      ],
      staySpots: [
        { lat: -4.6, lng: 55.45, name: "Mahé", desc: "Main island resort hub" },
        { lat: -4.329, lng: 55.739, name: "Praslin", desc: "Beaches and Vallée de Mai" },
        { lat: -4.345, lng: 55.836, name: "La Digue", desc: "Granite cove island" },
        { lat: -7.0, lng: 52.72, name: "Alphonse / Desroches", desc: "Outer atoll seclusion" },
        { lat: -4.49, lng: 55.24, name: "Silhouette Island", desc: "Hilton private island" },
      ],
    },
    dayTrips: [
      {
        title: "La Digue Full Island Bicycle Day",
        subtitle: "Spend a full day exploring La Digue by bicycle — the island is small enough to circumnavigate entirely, with Anse Source d'Argent in the morning, the Grand Anse on the wild east coast, and Anse Cocos for a private late afternoon swim.",
        tag: "Adventure - La Digue Island Day",
        distance: "La Digue island, 15km by bicycle",
        duration: "Full day (7 hours)",
        transport: "Bicycle hire from La Digue jetty",
        steps: [
          { time: "7AM", text: "Hire a bicycle at La Digue jetty — the island has no cars, only bicycles and ox-carts." },
          { time: "7:30AM", text: "Pedal south to L'Union Estate — the old coconut mill and giant tortoises roaming free." },
          { time: "8AM", text: "Arrive Anse Source d'Argent early before day-trippers — the granite boulders in the morning light." },
          { time: "10AM", text: "Cycle east across the island to Grande Anse — the wild ocean side with powerful surf and no crowds." },
          { time: "12PM", text: "Continue south to Petite Anse and Anse Cocos — a 20-minute walk from the road to a private granite cove." },
          { time: "3PM", text: "Return cycle to the village for fresh coconut and cold Seybrew." },
        ],
      },
      {
        title: "Praslin — Vallée de Mai and Anse Lazio",
        subtitle: "A perfect Praslin day — the Vallée de Mai palm forest at dawn for the Seychelles black parrot, then drive north to Anse Lazio for the afternoon snorkel and the finest beach on Praslin.",
        tag: "Nature & Beach - Praslin Day",
        distance: "Praslin island — 12km between sites",
        duration: "Full day (7 hours)",
        transport: "Taxi or hire car on Praslin",
        steps: [
          { time: "7:30AM", text: "Enter the Vallée de Mai at opening — the forest is coolest and the black parrot most active before 9AM." },
          { time: "8AM", text: "Walk the main circuit through the coco de mer palms — the male and female palms, the endemic skinks." },
          { time: "9:30AM", text: "Black parrot viewpoint — the best sighting spot is on the upper trail near the rest shelter." },
          { time: "10:30AM", text: "Drive north to Anse Lazio — 20 minutes." },
          { time: "11AM", text: "Swim and snorkel the northern reef end — parrotfish, surgeonfish, and occasional turtles." },
          { time: "1PM", text: "Lunch at Bonbon Plume or Anse Lazio restaurant on the beach." },
          { time: "3PM", text: "Afternoon swim in the calm southern bay and sunset from the beach." },
        ],
      },
      {
        title: "Cousin Island and Curieuse Catamaran",
        subtitle: "A day catamaran from Praslin — morning at Cousin Island with the conservation rangers (turtles, warblers, frigate birds), then Curieuse Island for free-roaming giant tortoises on the beach and mangrove kayaking.",
        tag: "Conservation & Marine - Praslin Day Sail",
        distance: "Praslin boat day — 5km to Cousin, 8km to Curieuse",
        duration: "Full day (7 hours)",
        transport: "Catamaran day trip from Côte d'Or",
        steps: [
          { time: "8AM", text: "Board catamaran at Côte d'Or — sail southwest to Cousin Island (20 minutes)." },
          { time: "8:30AM", text: "Ranger-guided Cousin Island tour — hawksbill turtles nesting on the beach, fairy terns on bare branches." },
          { time: "10:30AM", text: "Snorkel the Cousin reef — excellent coral and visibility on the leeward side." },
          { time: "12PM", text: "Sail to Curieuse Island — lunch on board." },
          { time: "1PM", text: "Giant Aldabra tortoises roam freely on Curieuse beach — walk among them at close range." },
          { time: "2:30PM", text: "Kayak the Curieuse mangrove channel — crab plovers and mangrove herons." },
          { time: "4PM", text: "Return sail to Praslin." },
        ],
      },
      {
        title: "Mahé Victoria and Morne Seychellois Hike",
        subtitle: "A morning in Victoria's market and Botanical Gardens, then an afternoon hike through the granite highland of Morne Seychellois National Park — the island from above and at street level in a single day.",
        tag: "Culture & Nature - Mahé Day",
        distance: "Victoria and Morne Seychellois, Mahé",
        duration: "Full day (7 hours)",
        transport: "Taxi on Mahé",
        steps: [
          { time: "7:30AM", text: "Victoria's Sir Selwyn Clarke Market at its most vibrant — fish stalls, spice merchants, and fresh fruit." },
          { time: "9AM", text: "Victoria Botanical Gardens — giant tortoises in the Aldabra enclosure, coco de mer grove, native palms." },
          { time: "10:30AM", text: "Drive up Sans Souci Road to the Copolia Trail trailhead." },
          { time: "11AM", text: "Begin the Copolia Trail hike through cinnamon and endemic palm forest." },
          { time: "1PM", text: "Reach the Copolia granite plateau — panoramic views over Victoria, Ste. Anne, and the east coast." },
          { time: "3PM", text: "Return to Mahé's west coast for a sunset swim at Beau Vallon." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A classic Seychelles week across the three main islands — Mahé, Praslin, and La Digue — combining beaches, the Vallée de Mai, and Creole culture.",
        arrival: {
          route: "Your City -> Mahé (SEZ)",
          meta: "Mahé International Airport (SEZ) connects directly to London, Paris, Dubai, Doha, Johannesburg, and Nairobi. Emirates, Air France, and British Airways all fly direct.",
          sideTitle: "Ferry Booking",
          sideCopy: "Book the Cat Cocos inter-island ferry in advance in peak season — it fills quickly. Mahé to Praslin 1 hour, Praslin to La Digue 15 minutes",
        },
        days: [
          {
            name: "Arrival",
            title: "Mahé — Victoria and Beau Vallon",
            location: "Mahé",
            activities: [
              { time: "PM", text: "Arrive SEZ, hotel check-in near Beau Vallon." },
              { time: "Night", text: "Victoria market evening and Creole dinner." },
            ],
          },
          {
            name: "Mahé",
            title: "Copolia Hike and Dive",
            location: "Mahé",
            activities: [
              { time: "AM", text: "Copolia Trail hike through Morne Seychellois NP." },
              { time: "PM", text: "Afternoon dive on the granite reef — nurse sharks and turtles." },
            ],
          },
          {
            name: "Praslin",
            title: "Ferry to Praslin — Vallée de Mai",
            location: "Praslin",
            activities: [
              { time: "AM", text: "Morning ferry to Praslin — check into Côte d'Or area." },
              { time: "PM", text: "Vallée de Mai — black parrot and coco de mer afternoon." },
            ],
          },
          {
            name: "Praslin",
            title: "Anse Lazio and Cousin Island",
            location: "Praslin",
            activities: [
              { time: "AM", text: "Cousin Island conservation tour — turtles and warblers." },
              { time: "PM", text: "Anse Lazio beach and reef snorkel." },
            ],
          },
          {
            name: "La Digue",
            title: "Ferry to La Digue — Anse Source d'Argent",
            location: "La Digue",
            activities: [
              { time: "AM", text: "15-minute ferry to La Digue — hire bicycle." },
              { time: "PM", text: "Anse Source d'Argent and Grand Anse cycling." },
            ],
          },
          {
            name: "La Digue",
            title: "La Digue Full Island Bicycle Day",
            location: "La Digue",
            activities: [
              { time: "AM", text: "Petite Anse and Anse Cocos — the wild southern coves." },
              { time: "PM", text: "Sunset catamaran from La Digue to Curieuse Island." },
            ],
          },
          {
            name: "Departure",
            title: "Return to Mahé and Fly Out",
            location: "SEZ",
            activities: [
              { time: "AM", text: "Ferry back to Praslin and connecting to Mahé." },
              { time: "PM", text: "International departure from SEZ." },
            ],
          },
        ],
        departure: {
          route: "Mahé (SEZ) -> Your City",
          meta: "Most international flights depart SEZ in the evening or overnight. Allow an afternoon buffer from La Digue to Mahé (2 ferry connections).",
          sideTitle: "Best Time",
          sideCopy: "April–May and October–November for the calmest seas and best diving conditions on both coasts.",
        },
      },
      "10": {
        summary: "Ten days adding an outer island stay, deeper Mahé hiking, and a whale shark snorkel season excursion.",
        arrival: {
          route: "Your City -> Mahé (SEZ)",
          meta: "Same routing. Ten days justifies a 2-night outer island add-on — Silhouette, Alphonse, or Desroches by charter.",
          sideTitle: "Whale Sharks",
          sideCopy: "Whale sharks aggregate off Mahé and Praslin October–March — check with dive operators for current sightings",
        },
        days: [
          { name: "Arrival", title: "Mahé Arrival", location: "Mahé", activities: [{ time: "PM", text: "Arrive SEZ, Beau Vallon hotel." }, { time: "Night", text: "Wednesday night market if timing allows." }] },
          { name: "Mahé", title: "Victoria and Botanical Gardens", location: "Mahé", activities: [{ time: "AM", text: "Victoria market and Botanical Gardens tortoise walk." }, { time: "PM", text: "St. Anne Marine Park kayak." }] },
          { name: "Mahé", title: "Copolia Hike and Dive", location: "Mahé", activities: [{ time: "AM", text: "Copolia Trail and granite plateau." }, { time: "PM", text: "Granite reef dive — nurse sharks." }] },
          { name: "Outer", title: "Charter to Outer Island", location: "Silhouette or Alphonse", activities: [{ time: "AM", text: "Charter flight to outer island." }, { time: "PM", text: "Arrival snorkel and giant tortoise walk." }] },
          { name: "Outer", title: "Outer Island Full Day", location: "Outer Island", activities: [{ time: "AM", text: "Fly-fishing or drift diving on the outer reef." }, { time: "PM", text: "Deserted beach and sunset over open Indian Ocean." }] },
          { name: "Praslin", title: "Return to Praslin", location: "Praslin", activities: [{ time: "AM", text: "Charter back to Praslin." }, { time: "PM", text: "Vallée de Mai afternoon — black parrot and coco de mer." }] },
          { name: "Praslin", title: "Cousin and Curieuse Day", location: "Praslin", activities: [{ time: "AM", text: "Cousin Island conservation tour." }, { time: "PM", text: "Curieuse tortoises and mangrove kayak." }] },
          { name: "Praslin", title: "Anse Lazio Day", location: "Praslin", activities: [{ time: "AM", text: "Anse Lazio morning swim and snorkel." }, { time: "PM", text: "Catamaran sunset sail from Côte d'Or." }] },
          { name: "La Digue", title: "La Digue Bicycle Day", location: "La Digue", activities: [{ time: "AM", text: "Ferry to La Digue — Anse Source d'Argent and full island loop." }, { time: "PM", text: "Return ferry to Praslin and Mahé." }] },
          { name: "Departure", title: "Mahé Final Morning", location: "SEZ", activities: [{ time: "AM", text: "Final beach swim or market visit." }, { time: "PM", text: "International departure from SEZ." }] },
        ],
        departure: {
          route: "Mahé (SEZ) -> Your City",
          meta: "Same routing. Evening flights allow a full final afternoon on Mahé.",
          sideTitle: "Outer Island Tip",
          sideCopy: "Alphonse Island is the finest for fly-fishing and open ocean diving — book the exclusive season (April–October) well in advance.",
        },
      },
    },
    footerLine1: "Discover Seychelles — Anse Source d'Argent's granite Eden, Vallée de Mai's coco de mer forest, Aldabra's tortoises, and the Indian Ocean's most extraordinary islands",
    footerLine2: "Visitor permit on arrival — no advance visa. Seybrew is cold. April–May and October–November for the calmest seas.",
  },

  mauritius: {
    country: "Mauritius",
    heroEyebrow: "Indian Ocean — Volcanic Island, Coral Lagoon, and the Dodo's Homeland",
    heroTitleHtml: "Mauri<em>tius</em>",
    heroTagline:
      "Mark Twain wrote that Mauritius was made first and then heaven was modelled after it — the volcanic peaks of the Black River Gorges above a perfect ring of coral reef, the extraordinary beach resorts of the east and northwest coast, the multicultural Creole-Indian-Chinese-French society of Port Louis, endemic pink pigeons and echo parakeets in the island's surviving native forest, and one of the Indian Ocean's finest cuisines.",
    heroStats: [
      { label: "Capital", value: "Port Louis" },
      { label: "Currency", value: "MUR (Mauritian Rupee)" },
      { label: "Language", value: "Mauritian Creole, English, French" },
      { label: "Time Zone", value: "UTC+4" },
    ],
    knowSubtitle:
      "Mauritius is one of the Indian Ocean's most complete destinations — extraordinary beaches and resort infrastructure, genuine cultural diversity, excellent hiking in the Black River Gorges, world-class diving, and a multicultural food scene unlike anywhere else in Africa.",
    know: [
      {
        icon: "🛂",
        title: "Visa",
        text: "Most nationalities receive a free visa on arrival for up to 60–90 days. No advance application required for most passport holders. Mauritius is one of the most open visa policies in the Indian Ocean.",
      },
      {
        icon: "🌊",
        title: "The Lagoon",
        text: "Mauritius is almost entirely ringed by a coral reef — the lagoon between the reef and the shore is warm, calm, and extraordinarily clear. The best lagoons are on the west coast (Flic en Flac, La Preneuse) and north (Grand Baie, Pereybere).",
      },
      {
        icon: "🤿",
        title: "Diving",
        text: "Mauritius has excellent diving — the Cathedral (a vast underwater cave off Flic en Flac), the Shark Pit (Pointe aux Piments), and the wreck of the Stella Maru are among the island's signature dive sites. The southwest has the best coral.",
      },
      {
        icon: "🌿",
        title: "Native Forest and Endemic Species",
        text: "Over 60% of Mauritius's original forest was destroyed — but the Black River Gorges NP and the Île aux Aigrettes conservation island preserve remarkable endemic species: the pink pigeon (once down to 9 individuals), the Mauritian echo parakeet, and the Rodrigues fruit bat.",
      },
      {
        icon: "🍜",
        title: "Food Culture",
        text: "Mauritian food is one of the Indian Ocean's greatest — Chinese, Indian, French, and Creole threads woven together. Dholl puri at a roadside stall, biryani from a Muslim traiteur, fresh octopus vindaye at a beach restaurant, and a French-influenced Sunday lunch spread.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "Mauritius has a tropical climate — the summer (November–April) is hotter and wetter, with cyclone risk December–March. The dry winter (May–October) is the best time to visit — cooler, clearer, and with less rain.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs widely available across the island. MUR for local purchases. Most resorts operate in USD or EUR. Mauritius has a wide range of accommodation — from luxurious beachfront resorts to affordable guesthouses in local villages.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Car hire is the best way to explore — the island is small (65km x 45km) and driveable in a day. Public buses connect all towns. Taxis are plentiful. The motorway connects Port Louis to the north and south efficiently.",
      },
      {
        icon: "🏔️",
        title: "Le Morne Brabant",
        text: "Le Morne Brabant — UNESCO World Heritage site — is the basalt peninsula on the southwest tip of the island, a symbol of freedom where escaped slaves took refuge. The mountain rises dramatically from the lagoon, with excellent hiking.",
      },
      {
        icon: "🎭",
        title: "Cultural Diversity",
        text: "Mauritius has one of the most diverse societies in Africa — Hindu Mauritian, Muslim Mauritian, Creole, Franco-Mauritian, and Sino-Mauritian communities each contribute festivals, food, and architecture. Diwali, Eid, and Christmas are all celebrated with equal enthusiasm.",
      },
    ],
    seeSubtitle:
      "Le Morne Brabant at sunrise, the Black River Gorges endemic forest, Île aux Aigrettes pink pigeons and echo parakeets, the underwater waterfall illusion, Port Louis' multicultural capital, Seven Coloured Earths, and the east coast coral lagoon.",
    see: [
      {
        name: "Le Morne Brabant",
        title: "UNESCO — Symbol of Freedom",
        desc: "A dramatic basalt peninsula rising 556m from the southwest lagoon — a UNESCO World Heritage site commemorating the escaped slaves (marrons) who sought refuge on its cliffs. Extraordinary hiking, the finest lagoon views on the island, and a profound cultural significance.",
        tag: "UNESCO - Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Le Morne Brabant UNESCO basalt Mauritius lagoon",
      },
      {
        name: "Black River Gorges National Park",
        title: "Endemic Forest on the Volcanic Plateau",
        desc: "The largest remaining area of native forest in Mauritius — pink pigeon, Mauritian kestrel (once the world's rarest bird), echo parakeet, and endemic ebony trees in gorge-cut highland terrain with extraordinary views over the southwest coast.",
        tag: "Nature - Endemic Forest",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Black River Gorges forest pink pigeon Mauritius",
      },
      {
        name: "Île aux Aigrettes",
        title: "Dodo Island Conservation Reserve",
        desc: "A small coral islet off the southeast coast — painstakingly restored to its pre-human condition by the Mauritius Wildlife Foundation, with Aldabra giant tortoises, Telfair's skinks, and the pink pigeon in a forest that looks as it did before the dodo walked.",
        tag: "Conservation - Endemic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Île aux Aigrettes pink pigeon tortoise Mauritius",
      },
      {
        name: "The Underwater Waterfall",
        title: "Le Morne's Famous Ocean Illusion",
        desc: "Off the Le Morne peninsula, sand and silt cascading down an underwater shelf creates the extraordinary illusion of a waterfall plunging into the abyss — best seen from a helicopter or light aircraft over the southwest coast.",
        tag: "Nature - Illusion",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Underwater waterfall illusion Le Morne Mauritius aerial",
      },
      {
        name: "Port Louis",
        title: "A Multicultural Indian Ocean Capital",
        desc: "A genuinely interesting capital — the Central Market with its street food and spice stalls, the Caudan Waterfront, the Champ de Mars (world's oldest horse racing track in the southern hemisphere), and the extraordinary cultural mix of Hindu temples, mosques, and Chinese pagodas.",
        tag: "Capital - Multicultural",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Port Louis market capital multicultural Mauritius",
      },
      {
        name: "Seven Coloured Earths, Chamarel",
        title: "The Volcanic Rainbow Sands",
        desc: "A geological curiosity in the Chamarel plain — volcanic ash deposited in seven distinct colour bands (red, brown, violet, green, blue, purple, yellow) that never mix despite rain and wind, alongside the 100m Chamarel Waterfall.",
        tag: "Nature - Geology",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Seven Coloured Earths Chamarel volcanic Mauritius",
      },
      {
        name: "Belle Mare and Palmar",
        title: "The East Coast Lagoon",
        desc: "The finest lagoon coast in Mauritius — the east coast's wide, shallow turquoise lagoon between the reef and the white sand beach at Belle Mare and Palmar is the most photographed in the island, calm and swimmable year-round.",
        tag: "Beach - East Coast",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Belle Mare lagoon turquoise east coast Mauritius",
      },
      {
        name: "Trou aux Biches and Grand Baie",
        title: "The Social North Coast",
        desc: "The northwest coast's resort hub — Trou aux Biches has one of the island's finest beaches, Grand Baie is the water sports and social centre, and Pereybere offers a more local beach culture.",
        tag: "Beach - North Coast",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Trou aux Biches Grand Baie north coast Mauritius",
      },
      {
        name: "Pamplemousses Botanical Garden",
        title: "One of the World's Oldest Tropical Gardens",
        desc: "The Sir Seewoosagur Ramgoolam Botanical Garden at Pamplemousses — one of the oldest and most important tropical gardens in the world, with the famous giant Victoria amazonica water lilies, over 650 labelled plant species, and tortoises wandering free.",
        tag: "Nature - Gardens",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Pamplemousses Botanical Garden lily Mauritius",
      },
      {
        name: "Flic en Flac",
        title: "The West Coast Dive and Sunset Hub",
        desc: "The finest west coast beach — excellent diving on the Cathedral cave and reef systems just offshore, the best sunsets in Mauritius from the beach restaurants, and a local village atmosphere behind the resort strip.",
        tag: "Beach & Dive - West Coast",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Flic en Flac sunset dive west coast Mauritius",
      },
    ],
    doSubtitle:
      "Hiking Le Morne Brabant at sunrise, diving the Cathedral cave at Flic en Flac, Île aux Aigrettes conservation tour, Black River Gorges endemic bird walk, dholl puri breakfast at a roadside stall, helicopter over the underwater waterfall, and a Sunday table d'hôte lunch.",
    do: [
      {
        title: "Hike Le Morne Brabant",
        desc: "Climb the basalt peninsula with a guide — the official trail rises steeply through pandanus and endemic forest to the summit plateau, with extraordinary views over the southwest lagoon and the open Indian Ocean.",
        tag: "Adventure - Le Morne",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Le Morne Brabant hike summit guide Mauritius",
      },
      {
        title: "Dive the Cathedral, Flic en Flac",
        desc: "The Cathedral is a vast underwater cavern off Flic en Flac — rays glide through the entrance, lion fish hover at the cave walls, and shafts of Indian Ocean light pour through the cathedral ceiling at certain times of day.",
        tag: "Marine - Scuba Cave",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Cathedral cave dive Flic en Flac rays Mauritius",
      },
      {
        title: "Île aux Aigrettes Conservation Tour",
        desc: "A guided boat trip to the Île aux Aigrettes conservation island — the Mauritius Wildlife Foundation rangers explain the restoration work, the endemic species, and the extraordinary story of the pink pigeon recovery from just 9 birds to over 500.",
        tag: "Conservation - Pink Pigeon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Île aux Aigrettes tour conservation Mauritius pink pigeon",
      },
      {
        title: "Black River Gorges Endemic Bird Walk",
        desc: "Walk the Black River Gorges NP trails with a birding guide — echo parakeet in the endemic ebony forest, Mauritius kestrel on the thermals, and pink pigeon on the forest floor, in native forest that feels as if the dodo might still be here.",
        tag: "Birding - Black River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Black River Gorges bird walk echo parakeet Mauritius",
      },
      {
        title: "Dholl Puri Breakfast at a Roadside Stall",
        desc: "The quintessential Mauritian street breakfast — a flat roti filled with split pea dhal, rougaille (tomato sauce), coriander, and lime, eaten standing at a roadside stall. Found at every junction from 6AM — the best introduction to Mauritian food culture.",
        tag: "Food - Street",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Dholl puri breakfast roadside stall Mauritius",
      },
      {
        title: "Helicopter Flight — Underwater Waterfall",
        desc: "A helicopter flight over the Le Morne peninsula to see the underwater waterfall illusion from above — the sand cascading off the shelf creates a striking visual effect visible only from altitude, over one of the island's most dramatic landscapes.",
        tag: "Adventure - Helicopter",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Helicopter underwater waterfall Le Morne Mauritius aerial",
      },
      {
        title: "Port Louis Central Market Morning",
        desc: "The Central Market in Port Louis at 7AM — fresh tuna, rambutan, tamarind, dried shrimp, spice stalls, and the extraordinary multicultural commercial energy of a capital built from five different civilisations.",
        tag: "Culture - Port Louis",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Port Louis Central Market morning tuna Mauritius",
      },
      {
        title: "Sunday Table d'Hôte Lunch",
        desc: "A Sunday Mauritian table d'hôte at a local family restaurant — a multi-course spread of octopus vindaye, mine frite, Creole curry, achards, and roti, eaten with a cold Phoenix beer, that captures the island's extraordinary food culture.",
        tag: "Food - Creole",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Sunday table d'hôte Creole lunch Mauritius",
      },
      {
        title: "Kitesurfing at Le Morne",
        desc: "Le Morne beach is one of the world's best kitesurfing locations — the consistent trade wind, the flat shallow lagoon, and the extraordinary backdrop of the basalt mountain make it a destination for kitesurfers of all levels.",
        tag: "Adventure - Kitesurf",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Kitesurfing Le Morne lagoon trade wind Mauritius",
      },
      {
        title: "Chamarel Seven Colours and Rum Distillery",
        desc: "Drive to the Chamarel plateau — the Seven Coloured Earths volcanic formation, the Chamarel Waterfall, and the Chamarel Rum Distillery for a tasting of Mauritius's finest artisanal rum, all within walking distance of each other.",
        tag: "Culture & Nature - Chamarel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Chamarel Seven Colours rum distillery Mauritius",
      },
    ],
    eatSubtitle:
      "Mauritius has the finest cuisine in the Indian Ocean — dholl puri and mine bouilli at every roadside stall, octopus vindaye at beach restaurants, biryani from a Muslim traiteur, and a cold Phoenix lager to end every long beach day.",
    eat: [
      {
        category: "Street Icon",
        name: "Dholl Puri",
        desc: "Mauritius's beloved street food — a thin, soft roti filled with yellow split pea dhal, served with rougaille (tomato chilli sauce), coriander, and lime. Sold from roadside stalls across the island from early morning, eaten at any hour.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Dholl puri street food roti dhal Mauritius",
      },
      {
        category: "Creole Seafood",
        name: "Octopus Vindaye",
        desc: "Octopus marinated and cooked with mustard seeds, turmeric, garlic, and vinegar — a Mauritian Creole dish with Indian and Malagasy roots, served cold as a starter or warm with rice at beach restaurants around the island.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Octopus vindaye Creole Mauritius seafood",
      },
      {
        category: "Noodle Culture",
        name: "Mine Bouilli and Mine Frite",
        desc: "Mauritian Chinese noodle dishes — mine bouilli (noodles in a light broth with vegetables and meat) and mine frite (stir-fried noodles with Creole spicing) reflect the Sino-Mauritian community's centuries-old contribution to the island's kitchen.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Mine bouilli noodles Sino-Mauritian food",
      },
      {
        category: "Muslim Traiteur",
        name: "Biryani Mauricien",
        desc: "Mauritian biryani from a Muslim traiteur (takeaway) — long-grained rice layered with slow-cooked lamb or chicken, saffron, and whole spices, served with brèdes chouchou (chayote leaves) and a fiery chilli sauce.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Biryani Mauricien Muslim traiteur rice Mauritius",
      },
      {
        category: "Drink",
        name: "Phoenix Beer, Alouda, and Chamarel Rum",
        desc: "Phoenix is Mauritius's beloved local lager — cold and essential after the beach. Alouda is the iced milk drink with basil seeds and rose syrup sold at roadside stalls. Chamarel and St. Aubin are the island's finest artisanal rums.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Phoenix beer alouda Chamarel rum Mauritius drink",
      },
    ],
    staySubtitle:
      "North coast for beach resort life; west coast (Flic en Flac) for diving and sunsets; east coast (Belle Mare) for the finest lagoon; Le Morne for the southwest; Port Louis for culture.",
    stay: [
      {
        type: "North Coast",
        area: "Trou aux Biches / Grand Baie",
        desc: "Constance Prince Maurice is the north's finest; Trou aux Biches Beachcomber and Club Med La Plantation d'Albion are excellent alternatives.",
        picks: ["Trou aux Biches Beachcomber", "Constance Prince Maurice", "Veranda Grand Baie"],
      },
      {
        type: "East Coast",
        area: "Belle Mare / Palmar",
        desc: "The east coast has Mauritius's finest lagoon — One&Only Le Saint Géran, Constance Belle Mare Plage, and Long Beach are the top-end options.",
        picks: ["One&Only Le Saint Géran", "Constance Belle Mare Plage", "Long Beach Mauritius"],
      },
      {
        type: "West Coast",
        area: "Flic en Flac / Tamarin",
        desc: "The west coast has excellent value — Sugar Beach and La Pirogue Beachcomber are the resort options; numerous guesthouses in Flic en Flac village.",
        picks: ["Sugar Beach Resort Flic en Flac", "La Pirogue Beachcomber", "Flic en Flac guesthouses"],
      },
      {
        type: "Southwest",
        area: "Le Morne",
        desc: "The Le Morne peninsula has Dinarobin Beachcomber and Paradis Beachcomber — both with direct access to the lagoon, kite school, and the Le Morne hike.",
        picks: ["Dinarobin Beachcomber Le Morne", "Paradis Beachcomber", "Lux* Le Morne"],
      },
      {
        type: "Local Character",
        area: "Chamarel / Tamarin Village",
        desc: "For a more local Mauritius experience — Chamarel's Lakaz Chamarel Exclusive Lodge above the gorges, or guesthouses in the surf village of Tamarin.",
        picks: ["Lakaz Chamarel Exclusive Lodge", "Tamarin Hotel", "Black River guesthouses"],
      },
    ],
    map: {
      center: [-20.28, 57.55],
      zoom: 10.5,
      seeSpots: [
        { lat: -20.45, lng: 57.31, name: "Le Morne Brabant", desc: "UNESCO freedom symbol" },
        { lat: -20.37, lng: 57.38, name: "Black River Gorges NP", desc: "Endemic forest pink pigeon" },
        { lat: -20.43, lng: 57.73, name: "Île aux Aigrettes", desc: "Dodo island conservation" },
        { lat: -20.45, lng: 57.31, name: "Underwater Waterfall", desc: "Sand shelf aerial illusion" },
        { lat: -20.162, lng: 57.499, name: "Port Louis", desc: "Multicultural capital market" },
        { lat: -20.43, lng: 57.39, name: "Seven Coloured Earths", desc: "Chamarel volcanic sands" },
        { lat: -20.19, lng: 57.78, name: "Belle Mare", desc: "East coast turquoise lagoon" },
        { lat: -19.96, lng: 57.58, name: "Trou aux Biches", desc: "North coast resort beach" },
        { lat: -20.26, lng: 57.36, name: "Flic en Flac", desc: "West coast dive and sunset" },
        { lat: -20.0, lng: 57.55, name: "Pamplemousses Gardens", desc: "Oldest tropical botanical garden" },
      ],
      doSpots: [
        { lat: -20.45, lng: 57.31, name: "Le Morne Hike", desc: "Summit trail guide" },
        { lat: -20.26, lng: 57.36, name: "Cathedral Dive", desc: "Underwater cave Flic en Flac" },
        { lat: -20.43, lng: 57.73, name: "Île aux Aigrettes", desc: "Conservation tour boat" },
        { lat: -20.37, lng: 57.38, name: "Black River Birds", desc: "Echo parakeet endemic walk" },
        { lat: -20.162, lng: 57.499, name: "Port Louis Market", desc: "Central Market morning" },
        { lat: -20.45, lng: 57.31, name: "Helicopter Flight", desc: "Underwater waterfall aerial" },
        { lat: -20.43, lng: 57.39, name: "Chamarel Rum", desc: "Seven Colours and distillery" },
        { lat: -20.45, lng: 57.31, name: "Kitesurfing", desc: "Le Morne trade wind lagoon" },
      ],
      staySpots: [
        { lat: -19.96, lng: 57.58, name: "North Coast", desc: "Trou aux Biches resorts" },
        { lat: -20.19, lng: 57.78, name: "East Coast", desc: "Belle Mare finest lagoon" },
        { lat: -20.26, lng: 57.36, name: "West Coast", desc: "Flic en Flac diving" },
        { lat: -20.45, lng: 57.31, name: "Le Morne", desc: "Southwest peninsula resort" },
        { lat: -20.38, lng: 57.42, name: "Chamarel", desc: "Gorge highland lodge" },
      ],
    },
    dayTrips: [
      {
        title: "Le Morne Hike and Underwater Waterfall",
        subtitle: "Hike the basalt pinnacle of Le Morne Brabant at sunrise with a guide, then take a glass-bottom boat or kayak over the spectacular underwater waterfall illusion off the southwest peninsula.",
        tag: "Adventure - Le Morne Full Day",
        distance: "Le Morne peninsula, southwest Mauritius",
        duration: "Full day (7 hours)",
        transport: "Car to Le Morne, walking and boat",
        steps: [
          { time: "6AM", text: "Meet the guide at Le Morne trail base — the climb begins in cool morning air." },
          { time: "6:30AM", text: "Steep ascent through pandanus scrub and endemic vegetation to the first plateau." },
          { time: "8AM", text: "Summit plateau — views over the lagoon, the southwest coast, and across to Rodrigues on clear days." },
          { time: "9:30AM", text: "Descend to the beach and board a glass-bottom boat or kayak." },
          { time: "10AM", text: "Paddle or boat over the underwater waterfall shelf — the visual effect is best on a calm morning." },
          { time: "12PM", text: "Lunch at a Le Morne beach restaurant with the mountain behind." },
        ],
      },
      {
        title: "Black River Gorges and Île aux Aigrettes",
        subtitle: "Combine a morning hiking the endemic forest of Black River Gorges for echo parakeets and pink pigeons, with an afternoon boat to Île aux Aigrettes for the extraordinary conservation story of Mauritius's near-extinct species.",
        tag: "Nature & Conservation - Full Day",
        distance: "Black River Gorges and east coast",
        duration: "Full day (8 hours with drive)",
        transport: "Car across island, boat to Île aux Aigrettes",
        steps: [
          { time: "7AM", text: "Enter Black River Gorges NP at the Petrin viewpoint — the endemic forest spreads below." },
          { time: "7:30AM", text: "Walk the Macchabée Trail — endemic ebony trees, native orchids, and echo parakeet in the canopy." },
          { time: "9:30AM", text: "Pink pigeon at the feeding station near the Visitor Centre." },
          { time: "11AM", text: "Drive east across the island to the Ile aux Aigrettes departure point at Mahébourg." },
          { time: "1PM", text: "Boat to Île aux Aigrettes — Aldabra tortoises, pink pigeons in a restored pre-human landscape." },
          { time: "3PM", text: "Return boat and drive north along the coast." },
        ],
      },
      {
        title: "Port Louis Market and Pamplemousses Gardens",
        subtitle: "A cultural morning — the Central Market of Port Louis at its most vibrant, then a short drive north to the Sir Seewoosagur Ramgoolam Botanical Garden at Pamplemousses for the giant water lilies and free-roaming tortoises.",
        tag: "Culture & Nature - North Day",
        distance: "Port Louis and Pamplemousses, 12km apart",
        duration: "Full day (6 hours)",
        transport: "Car or taxi",
        steps: [
          { time: "7AM", text: "Port Louis Central Market — the best time is early before the heat. Fresh tuna from the fish section." },
          { time: "8AM", text: "Chinese quarter and mosque streets — the multicultural architecture of the capital at street level." },
          { time: "9:30AM", text: "Caudan Waterfront for coffee overlooking the harbour." },
          { time: "10:30AM", text: "Drive 12km north to Pamplemousses Botanical Garden." },
          { time: "11AM", text: "Victoria amazonica water lily pond — the giant lilies can support a child's weight." },
          { time: "12:30PM", text: "Giant tortoises in the garden grounds and the colonial Château Mon Plaisir." },
        ],
      },
      {
        title: "Chamarel Rum, Seven Colours, and West Coast Sunset",
        subtitle: "Drive into the Chamarel highlands for the volcanic Seven Coloured Earths, the 100m Chamarel Waterfall, and a rum tasting at the Chamarel distillery, then descend to Flic en Flac beach for the best sunset on the island.",
        tag: "Culture & Nature - Chamarel Day",
        distance: "Chamarel plateau and Flic en Flac, southwest Mauritius",
        duration: "Full day (7 hours)",
        transport: "Car from anywhere on island",
        steps: [
          { time: "9AM", text: "Drive to Chamarel plateau — the air is noticeably cooler and the Black River Gorges open below." },
          { time: "9:30AM", text: "Chamarel Seven Coloured Earths — the seven volcanic soil bands and 100m waterfall viewpoint." },
          { time: "11AM", text: "Chamarel Rum Distillery — guided tour and tasting of the island's finest artisanal rum." },
          { time: "1PM", text: "Lunch at Varangue sur Morne restaurant — the finest valley views in Mauritius." },
          { time: "3PM", text: "Descend to Flic en Flac for an afternoon swim on the west coast." },
          { time: "5:30PM", text: "Sunset from Flic en Flac beach — the best on the island, watching the sky behind La Preneuse." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week combining Mauritius's finest beach, the Black River Gorges endemic forest, Le Morne, Île aux Aigrettes, and Port Louis cultural immersion.",
        arrival: {
          route: "Your City -> Mauritius (MRU)",
          meta: "Sir Seewoosagur Ramgoolam International Airport (MRU) connects directly to London, Paris, Frankfurt, Dubai, Johannesburg, Nairobi, and Singapore. Air Mauritius and Emirates have excellent services.",
          sideTitle: "Car Hire",
          sideCopy: "Hire a car from the airport — the island is small and self-driving is the best way to explore beyond the resort area",
        },
        days: [
          {
            name: "Arrival",
            title: "Arrival and Beach",
            location: "East or North Coast",
            activities: [
              { time: "PM", text: "Arrive MRU, hotel check-in and first lagoon swim." },
              { time: "Night", text: "Resort dinner or local roadside Creole." },
            ],
          },
          {
            name: "Gorges",
            title: "Black River Gorges Birds",
            location: "Black River Gorges NP",
            activities: [
              { time: "AM", text: "Macchabée Trail walk for echo parakeet and pink pigeon." },
              { time: "PM", text: "Chamarel Seven Colours and waterfall." },
            ],
          },
          {
            name: "Le Morne",
            title: "Le Morne Hike and Kitesurf",
            location: "Le Morne",
            activities: [
              { time: "AM", text: "Le Morne Brabant summit hike at dawn." },
              { time: "PM", text: "Underwater waterfall boat and Le Morne beach." },
            ],
          },
          {
            name: "Île Aigrettes",
            title: "Île aux Aigrettes and Mahébourg",
            location: "Southeast",
            activities: [
              { time: "AM", text: "Île aux Aigrettes conservation tour — pink pigeon and tortoises." },
              { time: "PM", text: "Mahébourg waterfront and blue bay snorkel." },
            ],
          },
          {
            name: "Port Louis",
            title: "Port Louis and Pamplemousses",
            location: "North",
            activities: [
              { time: "AM", text: "Central Market at 7AM and Chinese quarter walk." },
              { time: "PM", text: "Pamplemousses Botanical Gardens water lilies." },
            ],
          },
          {
            name: "Dive",
            title: "Cathedral Dive and Flic en Flac",
            location: "West Coast",
            activities: [
              { time: "AM", text: "Cathedral cave dive with Flic en Flac dive operator." },
              { time: "PM", text: "Flic en Flac beach and west coast sunset." },
            ],
          },
          {
            name: "Departure",
            title: "Final Beach and Fly Out",
            location: "MRU",
            activities: [
              { time: "AM", text: "Last lagoon swim and dholl puri breakfast." },
              { time: "PM", text: "International departure from MRU." },
            ],
          },
        ],
        departure: {
          route: "Mauritius (MRU) -> Your City",
          meta: "Most flights depart late evening or overnight. A full final day is usually possible.",
          sideTitle: "Best Time",
          sideCopy: "May–October for the dry season — clearest lagoon, best diving visibility, and cooler temperatures.",
        },
      },
      "10": {
        summary: "Ten days adding helicopter flight, deeper hiking, Rodrigues Island, and a full Creole food immersion.",
        arrival: {
          route: "Your City -> Mauritius (MRU)",
          meta: "Ten days allows a 2-night side trip to Rodrigues Island — a much smaller, wilder island 560km to the northeast by Air Mauritius.",
          sideTitle: "Rodrigues",
          sideCopy: "Rodrigues Island is the undiscovered gem — tiny, wild, and with even clearer water and fewer tourists than Mauritius",
        },
        days: [
          { name: "Arrival", title: "North Coast Arrival", location: "North Coast", activities: [{ time: "PM", text: "Arrive MRU, Trou aux Biches hotel." }, { time: "Night", text: "Grand Baie dinner." }] },
          { name: "Port Louis", title: "Port Louis Market and Gardens", location: "Port Louis / North", activities: [{ time: "AM", text: "Central Market and multicultural capital." }, { time: "PM", text: "Pamplemousses Gardens." }] },
          { name: "Gorges", title: "Black River Gorges Full Day", location: "Black River / Chamarel", activities: [{ time: "AM", text: "Endemic bird walk Macchabée Trail." }, { time: "PM", text: "Seven Colours and Chamarel Rum distillery." }] },
          { name: "Le Morne", title: "Le Morne Hike and Helicopter", location: "Le Morne", activities: [{ time: "AM", text: "Summit hike at dawn." }, { time: "PM", text: "Helicopter flight over underwater waterfall." }] },
          { name: "Kitesurf", title: "Le Morne Kitesurf and Lagoon Day", location: "Le Morne", activities: [{ time: "AM", text: "Kitesurfing lesson on the lagoon." }, { time: "PM", text: "Snorkel the Le Morne reef end." }] },
          { name: "Rodrigues", title: "Fly to Rodrigues Island", location: "Rodrigues", activities: [{ time: "AM", text: "50-min Air Mauritius flight to Rodrigues." }, { time: "PM", text: "Lagoon snorkel and cycling the island." }] },
          { name: "Rodrigues", title: "Rodrigues Full Day", location: "Rodrigues", activities: [{ time: "AM", text: "Sega dance and octopus drying on rocks." }, { time: "PM", text: "Boat to François Leguat tortoise reserve." }] },
          { name: "East", title: "Return — East Coast Belle Mare", location: "Belle Mare", activities: [{ time: "AM", text: "Return flight to Mauritius, east coast check-in." }, { time: "PM", text: "Belle Mare lagoon swimming and kayak." }] },
          { name: "Ile Aigrettes", title: "Île aux Aigrettes and Blue Bay", location: "Southeast", activities: [{ time: "AM", text: "Île aux Aigrettes conservation tour." }, { time: "PM", text: "Blue Bay Marine Park snorkel." }] },
          { name: "Departure", title: "Dive and Fly Out", location: "MRU", activities: [{ time: "AM", text: "Cathedral dive or final lagoon morning." }, { time: "PM", text: "International departure from MRU." }] },
        ],
        departure: {
          route: "Mauritius (MRU) -> Your City",
          meta: "Same routing. Allow afternoon buffer — MRU is a busy airport.",
          sideTitle: "Rodrigues Tip",
          sideCopy: "Stay at Tekoma Boutik Hotel or Cotton Bay Resort on Rodrigues — both have extraordinary views and access to the lagoon.",
        },
      },
    },
    footerLine1: "Discover Mauritius — Le Morne's UNESCO peak, Black River Gorges endemic forest, the finest lagoon in the Indian Ocean, and the most extraordinary cuisine in Africa",
    footerLine2: "Visa on arrival. May–October dry season best. Hire a car. Dholl puri for breakfast every day.",
  },

  madagascar: {
    country: "Madagascar",
    heroEyebrow: "Indian Ocean — The Eighth Continent, Lemurs, and the Avenue of the Baobabs",
    heroTitleHtml: "Mada<em>gas</em>car",
    heroTagline:
      "The world's most biodiverse island — separated from Africa 88 million years ago, Madagascar evolved in spectacular isolation to produce over 90% of its wildlife found nowhere else on Earth. Ring-tailed lemurs in the spiny forest, indri calling at dawn in the Andasibe rainforest, the Avenue of the Baobabs at sunset, whale sharks in the Mozambique Channel, the tsingy stone forests of Bemaraha, and an island so different from everything else that naturalists call it the eighth continent.",
    heroStats: [
      { label: "Capital", value: "Antananarivo" },
      { label: "Currency", value: "MGA (Malagasy Ariary)" },
      { label: "Language", value: "Malagasy, French" },
      { label: "Time Zone", value: "UTC+3" },
    ],
    knowSubtitle:
      "Madagascar is a destination for travellers who want something genuinely unlike anywhere else — the endemic wildlife is extraordinary, but the country requires patience, flexibility, and an acceptance of infrastructure challenges that rewards those who embrace them.",
    know: [
      {
        icon: "🦎",
        title: "Endemism",
        text: "Over 90% of Madagascar's wildlife is found nowhere else on Earth — all 105+ lemur species, all chameleons but one, over 300 endemic bird species, and an extraordinary range of reptiles, amphibians, and insects. The island is a textbook of evolution.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Most nationalities can obtain a visa on arrival at Antananarivo's Ivato Airport for stays up to 30 days (extendable). Bring passport photos and the fee in euros or USD. The process is generally straightforward.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Malaria prophylaxis is essential throughout Madagascar. Yellow fever required if arriving from endemic countries. Typhoid and hepatitis A recommended. Plague exists in some highland areas — awareness and prompt treatment matter. Medical facilities outside Tana are very limited.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "Madagascar has highly varied regional climates. The east coast has heavy year-round rainfall. The west (Morondava, Tsingy) is best April–November. The south (Isalo, spiny desert) is accessible year-round. Cyclone season runs December–March on the east coast.",
      },
      {
        icon: "🚗",
        title: "Getting Around",
        text: "Roads are notoriously difficult — the RN7 south from Tana is the most driveable route. Internal flights (Air Madagascar, Tsaradia) connect key destinations and are strongly recommended for long distances. Allow generous time buffers for all ground transfers.",
      },
      {
        icon: "🌳",
        title: "The Baobabs",
        text: "Madagascar has six of the world's eight baobab species — all endemic. The Avenue of the Baobabs near Morondava, where ancient trees up to 800 years old line a dirt road, is the island's most iconic image and one of Africa's greatest spectacles at sunset.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "ATMs exist in Antananarivo and major towns but are unreliable — bring sufficient cash in euros or USD. MGA for local purchases. Card payments are rare outside top hotels. Madagascar is excellent value once on the ground.",
      },
      {
        icon: "🤝",
        title: "Fady — Cultural Taboos",
        text: "Fady are local taboos — specific to villages, clans, and regions — involving foods, actions, colours, or directions. Always ask a local guide before doing anything in a new community. Respecting fady is essential for a positive relationship with Malagasy communities.",
      },
      {
        icon: "🐋",
        title: "Whales",
        text: "Humpback whales migrate through the Mozambique Channel and congregate around Île Sainte-Marie (July–September) for calving — one of the most spectacular whale concentrations in the Indian Ocean, viewable by boat from the island.",
      },
      {
        icon: "🏝️",
        title: "Île Sainte-Marie",
        text: "A long, narrow island off the northeast coast — pirate history (the original pirate republic), humpback whales, excellent diving, vanilla plantations, and one of Madagascar's most beautiful beaches on the south peninsula.",
      },
    ],
    seeSubtitle:
      "Ring-tailed lemurs in Anja Community Reserve, the Avenue of the Baobabs at golden hour, tsingy limestone needles at Bemaraha, the indri's haunting dawn call in Andasibe, humpback whales at Île Sainte-Marie, chameleons in Ranomafana, and the spiny forest of Berenty.",
    see: [
      {
        name: "Avenue of the Baobabs",
        title: "Madagascar's Most Iconic Landscape",
        desc: "A dirt road near Morondava flanked by ancient baobab trees up to 30 metres tall and 800 years old — at sunset, the silhouettes against the orange sky create one of the most extraordinary landscapes in the natural world.",
        tag: "Nature - Iconic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Avenue of the Baobabs Morondava sunset Madagascar",
      },
      {
        name: "Tsingy de Bemaraha",
        title: "UNESCO Limestone Needle Forest",
        desc: "A UNESCO World Heritage site of extraordinary limestone pinnacles — razor-sharp tsingy needles up to 70 metres tall, carved by erosion into a forest of stone that is almost impossible to walk through and entirely unlike any landscape on Earth.",
        tag: "UNESCO - Geology",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Tsingy de Bemaraha limestone UNESCO Madagascar",
      },
      {
        name: "Andasibe-Mantadia NP",
        title: "Indri — The Singing Lemur",
        desc: "The closest national park to Antananarivo — the indri, Madagascar's largest lemur, fills the Andasibe rainforest with haunting, far-carrying calls at dawn. The park also holds diademed sifaka, black-and-white ruffed lemur, and over 100 bird species.",
        tag: "Wildlife - Lemurs",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Indri lemur Andasibe rainforest Madagascar",
      },
      {
        name: "Isalo National Park",
        title: "Ruiniform Sandstone and Swimming Holes",
        desc: "A vast sandstone massif in the central south — eroded canyons, natural swimming pools fed by crystal streams, ring-tailed and Verreaux's sifaka lemurs, and extraordinary panoramic views over the surrounding grassland.",
        tag: "Nature - Sandstone",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Isalo National Park sandstone canyon swimming Madagascar",
      },
      {
        name: "Anja Community Reserve",
        title: "Ring-Tailed Lemurs on the Rocks",
        desc: "A small community-managed reserve near Ambalavao — ring-tailed lemurs so habituated they move within arm's reach, basking on granite boulders and leaping between the rocks in groups of 30–50 animals.",
        tag: "Wildlife - Ring-Tailed Lemurs",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Ring-tailed lemur Anja reserve granite Madagascar",
      },
      {
        name: "Île Sainte-Marie",
        title: "Humpback Whales and Pirate History",
        desc: "A narrow island off the northeast coast — once the base of the Indian Ocean pirate republic, with a pirate cemetery still standing. Humpback whales calve in the bay July–September in extraordinary concentrations.",
        tag: "Wildlife & Culture - Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Île Sainte-Marie humpback whale pirate cemetery Madagascar",
      },
      {
        name: "Ranomafana National Park",
        title: "Rainforest Chameleons and Golden Lemurs",
        desc: "A highland rainforest park in the southeast — the greater bamboo lemur (critically endangered), the golden bamboo lemur (found only here), hundreds of chameleon species, and extraordinary birdlife in dense, mist-draped montane forest.",
        tag: "Wildlife - Rainforest",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Ranomafana rainforest lemur chameleon Madagascar",
      },
      {
        name: "Berenty Private Reserve",
        title: "The Ring-Tailed Lemur Classic",
        desc: "The most visitor-accessible lemur reserve in Madagascar — ring-tailed and Verreaux's sifaka lemurs so habituated they walk among visitors, with guided night walks for mouse lemurs and sportive lemurs in the dry spiny forest.",
        tag: "Wildlife - Private Reserve",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Berenty ring-tailed sifaka lemur Madagascar",
      },
      {
        name: "Antananarivo",
        title: "The City on Twelve Hills",
        desc: "Madagascar's capital — the Rova royal palace above the city, the colourful highland market of Analakely, the old French colonial quarter, and the extraordinary views over the rice paddies of the Hauts Plateaux.",
        tag: "Capital - Culture",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Antananarivo capital Rova palace Madagascar highland",
      },
      {
        name: "Nosy Be",
        title: "Madagascar's Resort Island",
        desc: "The northwest's most developed tourism island — excellent diving on the surrounding coral reefs, whale sharks seasonally, black lemurs in Lokobe Reserve, and the ylang-ylang and spice plantations that give the island its fragrance.",
        tag: "Beach & Diving - Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Nosy Be diving lemur whale shark Madagascar",
      },
    ],
    doSubtitle:
      "Walking with ring-tailed lemurs at Anja, the Avenue of the Baobabs at sunset, tsingy circuit at Bemaraha, indri dawn call in Andasibe, humpback whale boat at Île Sainte-Marie, night walk for mouse lemurs, and the RN7 road trip south.",
    do: [
      {
        title: "Avenue of the Baobabs Sunset",
        desc: "Arrive at the Avenue of the Baobabs an hour before sunset — the light changes dramatically as the sun drops, the ancient tree trunks turn gold, and the Malagasy sky performs its best work in the last 30 minutes of the day.",
        tag: "Nature - Morondava",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Avenue Baobabs sunset golden Morondava Madagascar",
      },
      {
        title: "Indri Dawn Call, Andasibe",
        desc: "Wake before dawn and enter Andasibe forest as the indri begin their morning territorial calls — the sound carries 3km through the rainforest and is unlike any animal call in the world, somewhere between a whale song and an alarm.",
        tag: "Wildlife - Andasibe",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Indri dawn call Andasibe forest Madagascar",
      },
      {
        title: "Tsingy Grand Circuit",
        desc: "The Grand Tsingy circuit at Bemaraha — harnesses, via ferrata through the limestone needles, suspension bridges between the razor pinnacles, and endemic Decken's sifaka leaping between the tsingy in a landscape found nowhere else on Earth.",
        tag: "Adventure - Bemaraha",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Tsingy Grand Circuit via ferrata limestone Madagascar",
      },
      {
        title: "Ring-Tailed Lemur Walk, Anja",
        desc: "A guided walk through Anja Community Reserve — ring-tailed lemurs approach within touching distance on the granite boulders, while the community guide explains their behaviour and the reserve's successful conservation model.",
        tag: "Wildlife - Lemurs",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Ring-tailed lemur walk Anja community reserve Madagascar",
      },
      {
        title: "Humpback Whale Boat, Île Sainte-Marie",
        desc: "July to September — board a small boat from Île Sainte-Marie into the bay where humpback whales congregate for calving. Breaching, tail-slapping, and mother-calf pairs in one of the most concentrated whale aggregations in the Indian Ocean.",
        tag: "Wildlife - Whales",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Humpback whale boat Île Sainte-Marie Madagascar",
      },
      {
        title: "Night Walk for Mouse Lemurs",
        desc: "Any forested reserve after dark — mouse lemurs are the world's smallest primates, their eyes glowing red in the torch beam as they sprint through the undergrowth. Guided night walks also reveal chameleons, frogs, and tenrecs.",
        tag: "Wildlife - Night",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Mouse lemur night walk torch Madagascar forest",
      },
      {
        title: "RN7 Road Trip — Tana to Fort Dauphin",
        desc: "The RN7 south from Antananarivo to Fort Dauphin via Antsirabe, Ambositra, Fianarantsoa, Ambalavao, Isalo, and Berenty — the most rewarding overland route in Madagascar, through highland rice culture, forest, sandstone, and spiny desert.",
        tag: "Adventure - Road Trip",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "RN7 road trip highland Madagascar Isalo",
      },
      {
        title: "Chameleon Hunting, Ranomafana",
        desc: "Walk Ranomafana's rainforest trails with a specialist guide who knows exactly where every species hides — panther chameleons, parson's chameleons (the world's largest), and the tiny brookesia micro-chameleons on the forest floor.",
        tag: "Wildlife - Reptiles",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chimpanzee_seated_Gombe.jpg/1280px-Chimpanzee_seated_Gombe.jpg",
        alt: "Chameleon hunting Ranomafana rainforest Madagascar",
      },
      {
        title: "Isalo Natural Pools Hike",
        desc: "Hike into the Isalo sandstone canyons to the natural swimming pools — fed by cool clear streams in a landscape of extraordinary eroded rock, with ring-tailed lemurs often drinking at the water's edge.",
        tag: "Adventure - Isalo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Isalo natural pools hike sandstone canyon Madagascar",
      },
      {
        title: "Pirogue on the Tsiribihina River",
        desc: "A 3-day pirogue journey down the Tsiribihina River from Miandrivazo to Belo-sur-Tsiribihina — camping on sandy banks, kingfishers and fish eagles overhead, and the slow, extraordinary pace of river travel through central Madagascar.",
        tag: "Adventure - River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Tsiribihina River pirogue camping Madagascar",
      },
    ],
    eatSubtitle:
      "Malagasy food is rice-centred and deeply satisfying — romazava broth with zebu, ravitoto with pork, fresh seafood on the coast, a cold THB beer at the end of a long lemur-watching day, and the extraordinary vanilla that makes everything sweet.",
    eat: [
      {
        category: "National Dish",
        name: "Romazava",
        desc: "Madagascar's national dish — a clear broth of zebu beef, pork, or chicken with anamamy leaves (a bitter green similar to watercress), eaten over rice. Found at every hotely (local restaurant) from Tana to Toliara.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Romazava zebu broth rice Madagascar national dish",
      },
      {
        category: "Pork Staple",
        name: "Ravitoto sy Henakisoa",
        desc: "Pounded cassava leaves slow-cooked with pork and coconut milk — a rich, earthy dish that is Madagascar's most beloved comfort food, served over great mounds of rice at local restaurants throughout the highlands.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Ravitoto cassava pork coconut Madagascar highland",
      },
      {
        category: "Coastal Seafood",
        name: "Grilled Zebu and Lobster",
        desc: "On the coast — whole grilled crayfish (langouste) and fresh prawns at beach restaurants, extraordinarily cheap and extraordinarily good. In the highlands — zebu steak grilled over charcoal is the equivalent luxury.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled lobster zebu steak Madagascar coastal",
      },
      {
        category: "Sweet",
        name: "Malagasy Vanilla and Coconut Sweets",
        desc: "Madagascar produces over 80% of the world's vanilla — the pods are used in everything from local sweets to the vanilla rum served after dinner. Koba (peanut and banana rice cake) and coconut-based confections from market stalls.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Vanilla pods koba sweet rice cake Madagascar",
      },
      {
        category: "Drink",
        name: "THB Beer, Rum Arrangé, and Lasopy",
        desc: "Three Stars (THB) is Madagascar's ubiquitous lager. Rum arrangé — local rum infused with vanilla, ginger, lychee, or tamarind — is found at every beach bar. Lasopy is a thin, savoury broth soup drunk as a morning starter at local restaurants.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "THB beer rum arrangé vanilla lasopy Madagascar drink",
      },
    ],
    staySubtitle:
      "Antananarivo for arrivals; Andasibe lodges for indri; the RN7 circuit for highland immersion; Morondava for the baobabs; Île Sainte-Marie for whales and beach; Nosy Be for diving.",
    stay: [
      {
        type: "Capital",
        area: "Antananarivo",
        desc: "Hôtel Colbert and Sakamanga are the classic Tana stays. La Résidence and the Palissandre Côte Ouest offer more modern options. Sakamanga's courtyard bar is Tana's best social spot.",
        picks: ["Hôtel Colbert Antananarivo", "Sakamanga Hotel", "La Résidence Ankerana"],
      },
      {
        type: "Indri Forest",
        area: "Andasibe",
        desc: "Feon'ny Ala guesthouse and Andasibe Hotel are directly adjacent to the park. The new Vakôna Forest Lodge offers the most comfort.",
        picks: ["Vakôna Forest Lodge Andasibe", "Feon'ny Ala", "Andasibe Hotel"],
      },
      {
        type: "Baobabs",
        area: "Morondava",
        desc: "Chez Maggie and Palissandre Côte Ouest are the best Morondava options — both close to the Avenue of the Baobabs.",
        picks: ["Palissandre Côte Ouest Morondava", "Chez Maggie Morondava", "Renala au Sable d'Or"],
      },
      {
        type: "Island",
        area: "Île Sainte-Marie",
        desc: "Le Cocotier and Princesse Bora Lodge are the finest stays on the island. A range of simple bungalow guesthouses cater to all budgets.",
        picks: ["Princesse Bora Lodge Sainte-Marie", "Le Cocotier Sainte-Marie", "Lakana Vezo"],
      },
      {
        type: "RN7 South",
        area: "Isalo and Ranomafana",
        desc: "Jardin du Roy and Isalo Rock Lodge for Isalo; Setam Lodge and Centre ValBio at Ranomafana for the rainforest experience.",
        picks: ["Isalo Rock Lodge", "Jardin du Roy Isalo", "Setam Lodge Ranomafana"],
      },
    ],
    map: {
      center: [-19.5, 46.5],
      zoom: 5.8,
      seeSpots: [
        { lat: -20.25, lng: 44.42, name: "Avenue of the Baobabs", desc: "Iconic sunset baobab road" },
        { lat: -18.47, lng: 44.77, name: "Tsingy de Bemaraha", desc: "UNESCO limestone needles" },
        { lat: -18.93, lng: 48.42, name: "Andasibe-Mantadia NP", desc: "Indri singing lemur" },
        { lat: -22.6, lng: 45.35, name: "Isalo National Park", desc: "Sandstone canyons pools" },
        { lat: -21.85, lng: 46.9, name: "Anja Community Reserve", desc: "Ring-tailed lemur rocks" },
        { lat: -17.0, lng: 49.85, name: "Île Sainte-Marie", desc: "Humpback whales pirate" },
        { lat: -21.25, lng: 47.47, name: "Ranomafana NP", desc: "Rainforest chameleon lemur" },
        { lat: -24.97, lng: 46.33, name: "Berenty Reserve", desc: "Ring-tailed sifaka classic" },
        { lat: -18.9, lng: 47.53, name: "Antananarivo", desc: "Capital highland city" },
        { lat: -13.3, lng: 48.25, name: "Nosy Be", desc: "Resort island diving" },
      ],
      doSpots: [
        { lat: -20.25, lng: 44.42, name: "Baobabs Sunset", desc: "Avenue golden hour" },
        { lat: -18.93, lng: 48.42, name: "Indri Dawn", desc: "Andasibe forest call" },
        { lat: -18.47, lng: 44.77, name: "Tsingy Circuit", desc: "Via ferrata limestone" },
        { lat: -21.85, lng: 46.9, name: "Lemur Walk Anja", desc: "Community reserve" },
        { lat: -17.0, lng: 49.85, name: "Whale Boat", desc: "Île Sainte-Marie July-Sept" },
        { lat: -21.25, lng: 47.47, name: "Chameleon Hunting", desc: "Ranomafana rainforest" },
        { lat: -22.6, lng: 45.35, name: "Isalo Pools Hike", desc: "Sandstone canyon swim" },
        { lat: -19.5, lng: 45.2, name: "Tsiribihina Pirogue", desc: "3-day river journey" },
      ],
      staySpots: [
        { lat: -18.9, lng: 47.53, name: "Antananarivo", desc: "Capital hotel hub" },
        { lat: -18.93, lng: 48.42, name: "Andasibe", desc: "Indri forest lodges" },
        { lat: -20.25, lng: 44.42, name: "Morondava", desc: "Baobab area hotels" },
        { lat: -17.0, lng: 49.85, name: "Île Sainte-Marie", desc: "Island bungalows" },
        { lat: -22.6, lng: 45.35, name: "Isalo", desc: "Sandstone park lodges" },
      ],
    },
    dayTrips: [
      {
        title: "Andasibe Indri Dawn and Forest Walk",
        subtitle: "An early morning in the Andasibe rainforest — the indri territorial call filling the valley at dawn, then a guided walk through primary forest for black-and-white ruffed lemurs, chameleons, and the extraordinary endemic birdlife of eastern Madagascar.",
        tag: "Wildlife - Andasibe Full Morning",
        distance: "~145km east of Antananarivo",
        duration: "Full day (9 hours with drive)",
        transport: "Car east from Tana or based at Andasibe lodge",
        steps: [
          { time: "5AM", text: "Enter Andasibe Special Reserve before dawn — the indri begin calling as the first light appears." },
          { time: "5:30AM", text: "Follow the guide toward the indri group — their call carries 3km but the animals are in the canopy above." },
          { time: "6AM", text: "Locate the indri family — observe the territorial call display from the tree tops." },
          { time: "7:30AM", text: "Continue the forest walk — diademed sifaka, chameleons, and endemic birds." },
          { time: "9AM", text: "Breakfast at the lodge before the midday heat." },
          { time: "3PM", text: "Afternoon visit to the AEECL lemur rescue centre — injured and orphaned lemurs in large enclosures." },
        ],
      },
      {
        title: "Avenue of the Baobabs — Dawn and Dusk",
        subtitle: "The Avenue of the Baobabs is extraordinary at both ends of the day — a dawn visit for the empty road and morning light, then a return at sunset when the silhouettes against the Morondava sky create one of the world's great natural spectacles.",
        tag: "Nature - Morondava Full Day",
        distance: "~25km north of Morondava",
        duration: "Full day (including two visits)",
        transport: "Car from Morondava",
        steps: [
          { time: "5:30AM", text: "Drive north from Morondava before dawn — the track to the Avenue is sandy but passable." },
          { time: "6AM", text: "Dawn at the Avenue — the trees are yours alone, the light pink and horizontal." },
          { time: "8AM", text: "Walk north to the Baobab Amoureux — two intertwined baobabs in a field." },
          { time: "10AM", text: "Return to Morondava for breakfast and rest during the midday heat." },
          { time: "4PM", text: "Return to the Avenue as other visitors arrive for sunset." },
          { time: "5:30PM", text: "The golden hour — the ancient trunks glow, the sky turns orange, and the silhouettes become the iconic image." },
        ],
      },
      {
        title: "Anja Community Reserve and Ambalavao",
        subtitle: "A half-day stop on the RN7 south — the Anja Community Reserve's extraordinarily habituated ring-tailed lemurs on granite boulders, followed by the famous Arindrano paper-making workshop and market in Ambalavao.",
        tag: "Wildlife & Culture - RN7 Stop",
        distance: "~50km south of Fianarantsoa on RN7",
        duration: "Half day (4 hours)",
        transport: "Car on RN7",
        steps: [
          { time: "8AM", text: "Arrive Anja Community Reserve — pay the community fee at the entrance." },
          { time: "8:30AM", text: "Walk the granite boulder circuit — ring-tailed lemurs within touching distance from the first minutes." },
          { time: "9:30AM", text: "Lemur troops of 30–50 animals basking, feeding, and playing on the warm rocks." },
          { time: "10:30AM", text: "Drive 5km north to Ambalavao — the famous Arindrano Antaimoro paper workshop." },
          { time: "11AM", text: "Watch paper being made from the hafotra plant with pressed flowers and leaves — buy sheets as gifts." },
          { time: "12PM", text: "Ambalavao Wednesday or Saturday zebu market — one of Madagascar's great rural spectacles." },
        ],
      },
      {
        title: "Isalo Natural Pools and Canyon Hike",
        subtitle: "A full-day hike into the heart of Isalo National Park — through eroded sandstone canyons to the natural pools fed by clear mountain streams, with ring-tailed lemurs drinking at the water and the extraordinary ruiniform landscape all around.",
        tag: "Adventure - Isalo Full Day",
        distance: "Isalo NP, 10–15km hiking",
        duration: "Full day (7 hours hiking)",
        transport: "4x4 to trailhead, walking throughout",
        steps: [
          { time: "6:30AM", text: "Early start from the Isalo park gate — the canyon is coolest in the first hours." },
          { time: "7AM", text: "Enter the piscine naturelle canyon — eroded sandstone walls rising on both sides." },
          { time: "9AM", text: "Reach the black pool (piscine noire) — cold, dark water fed by a small waterfall." },
          { time: "10:30AM", text: "Continue to the piscine bleue — clearer, warmer, and surrounded by ring-tailed lemurs." },
          { time: "12PM", text: "Swim in the natural pool and picnic on the canyon rocks." },
          { time: "2PM", text: "Return through the canyon with afternoon light on the sandstone walls." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week on the classic RN7 circuit — Antananarivo, Andasibe lemurs, Fianarantsoa, Anja, Isalo, and Berenty.",
        arrival: {
          route: "Your City -> Antananarivo (TNR)",
          meta: "Ivato Airport connects via Paris, Nairobi, Johannesburg, Dubai, and La Réunion. Air France and Ethiopian Airlines are the main carriers. Allow a day in Tana to recover before heading south.",
          sideTitle: "Flexibility",
          sideCopy: "Build generous time buffers — Madagascar's roads and logistics require patience. Missing a connection is a Madagascar rite of passage.",
        },
        days: [
          {
            name: "Arrival",
            title: "Antananarivo Arrival",
            location: "Antananarivo",
            activities: [
              { time: "PM", text: "Arrive TNR, Sakamanga hotel and city orientation." },
              { time: "Night", text: "Analakely market walk and romazava dinner." },
            ],
          },
          {
            name: "Andasibe",
            title: "Drive to Andasibe — Indri Dawn",
            location: "Andasibe",
            activities: [
              { time: "AM", text: "Pre-dawn entry into Andasibe for the indri call." },
              { time: "PM", text: "Forest walk and AEECL lemur rescue centre." },
            ],
          },
          {
            name: "Return",
            title: "Return to Tana — Fly South",
            location: "Fianarantsoa",
            activities: [
              { time: "AM", text: "Return to Tana and domestic flight to Fianarantsoa." },
              { time: "PM", text: "Arrive Fiana and city walk." },
            ],
          },
          {
            name: "Anja",
            title: "Anja Lemurs and Ambalavao",
            location: "Ambalavao / Anja",
            activities: [
              { time: "AM", text: "Anja Community Reserve ring-tailed lemurs." },
              { time: "PM", text: "Ambalavao paper workshop and drive south." },
            ],
          },
          {
            name: "Isalo",
            title: "Isalo Canyon and Natural Pools",
            location: "Isalo NP",
            activities: [
              { time: "AM", text: "Full-day canyon and natural pools hike." },
              { time: "PM", text: "Sunset from the Isalo massif." },
            ],
          },
          {
            name: "Berenty",
            title: "Drive to Berenty Reserve",
            location: "Berenty",
            activities: [
              { time: "AM", text: "Drive south through the spiny desert to Berenty." },
              { time: "PM", text: "Sifaka and ring-tailed lemur walk in the gallery forest." },
            ],
          },
          {
            name: "Departure",
            title: "Berenty to Fort Dauphin — Fly Out",
            location: "TNR",
            activities: [
              { time: "AM", text: "Morning lemur walk and fly from Fort Dauphin." },
              { time: "PM", text: "Connect Tana for international departure." },
            ],
          },
        ],
        departure: {
          route: "Fort Dauphin (FTU) -> Antananarivo (TNR) -> Your City",
          meta: "Internal Tsaradia flight from Fort Dauphin to Tana takes 2 hours. Allow a full connection day in Tana.",
          sideTitle: "Best Time",
          sideCopy: "April–November for the RN7 south. July–September for humpback whales at Île Sainte-Marie.",
        },
      },
      "10": {
        summary: "Ten days adding Ranomafana rainforest, the Avenue of the Baobabs, and the Tsiribihina river journey.",
        arrival: {
          route: "Your City -> Antananarivo (TNR)",
          meta: "Ten days allows the west coast baobab addition — fly Tana to Morondava (1 hour) and then overland to the tsingy or south.",
          sideTitle: "West Loop",
          sideCopy: "Fly Tana–Morondava for the baobabs and Tsiribihina river, then fly back to Tana before continuing south on RN7.",
        },
        days: [
          { name: "Arrival", title: "Tana Arrival", location: "Antananarivo", activities: [{ time: "PM", text: "Arrive TNR and city walk." }, { time: "Night", text: "Sakamanga dinner." }] },
          { name: "Andasibe", title: "Indri Dawn Andasibe", location: "Andasibe", activities: [{ time: "AM", text: "Pre-dawn indri call." }, { time: "PM", text: "Forest walk and lemur centre." }] },
          { name: "Fly West", title: "Fly to Morondava", location: "Morondava", activities: [{ time: "AM", text: "Return to Tana, fly to Morondava." }, { time: "PM", text: "Arrive and rest." }] },
          { name: "Baobabs", title: "Avenue of the Baobabs", location: "Morondava", activities: [{ time: "AM", text: "Dawn at the Avenue alone." }, { time: "PM", text: "Return for golden hour sunset." }] },
          { name: "River", title: "Tsiribihina Pirogue Day One", location: "Tsiribihina River", activities: [{ time: "AM", text: "Drive to Miandrivazo, board pirogue." }, { time: "PM", text: "River camp first night." }] },
          { name: "River", title: "Tsiribihina River Day Two", location: "Tsiribihina River", activities: [{ time: "AM", text: "Full river day — fish eagles and kingfishers." }, { time: "PM", text: "Riverbank camp night two." }] },
          { name: "Return", title: "Fly Back to Tana — South", location: "Fianarantsoa", activities: [{ time: "AM", text: "End river trip, fly Morondava–Tana, fly Fiana." }, { time: "PM", text: "Ranomafana afternoon walk." }] },
          { name: "Ranomafana", title: "Ranomafana Chameleons and Lemurs", location: "Ranomafana NP", activities: [{ time: "AM", text: "Golden bamboo lemur and chameleon walk." }, { time: "PM", text: "Night walk for mouse lemurs." }] },
          { name: "Isalo", title: "Anja and Isalo", location: "Isalo NP", activities: [{ time: "AM", text: "Anja ring-tailed lemurs." }, { time: "PM", text: "Isalo canyon pools hike." }] },
          { name: "Departure", title: "Berenty and Fly Out", location: "TNR", activities: [{ time: "AM", text: "Berenty sifaka morning." }, { time: "PM", text: "Fort Dauphin to Tana departure." }] },
        ],
        departure: {
          route: "Fort Dauphin (FTU) -> Antananarivo (TNR) -> Your City",
          meta: "Same as 7-day. Ten days barely scratches the surface — Madagascar rewards extended stays enormously.",
          sideTitle: "Nosy Be Add-On",
          sideCopy: "Add Nosy Be (fly Tana–Nosy Be, 2 hours) as a diving and beach ending to any Madagascar itinerary.",
        },
      },
    },
    footerLine1: "Discover Madagascar — ring-tailed lemurs, the Avenue of the Baobabs, tsingy stone forests, indri dawn calls, humpback whales, and the eighth continent",
    footerLine2: "Visa on arrival. Malaria prophylaxis essential. Build time buffers. Roads are difficult — internal flights recommended. THB is always cold.",
  },

  mozambique: {
    country: "Mozambique",
    heroEyebrow: "East Africa — Coral Archipelagos, Dhow Culture, and the Turquoise Mozambique Channel",
    heroTitleHtml: "Mozam<em>bique</em>",
    heroTagline:
      "One of Africa's most beautiful and least visited coastlines — 2,500km of Indian Ocean shoreline from the Quirimbas Archipelago's ancient Swahili coral islands in the north to the Bazaruto Archipelago's dugong-filled lagoons in the south. World-class diving on the Sofala Bank, the extraordinary whale sharks of Tofo Beach, Gorongosa National Park's remarkable wildlife recovery, and a Creole-Portuguese-African culture that expresses itself in the food, the music, and the extraordinary warmth of the Mozambican people.",
    heroStats: [
      { label: "Capital", value: "Maputo" },
      { label: "Currency", value: "MZN (Mozambican Metical)" },
      { label: "Language", value: "Portuguese, Emakhuwa, Changana, Sena" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "Mozambique is East Africa's most beautiful coastal secret — the infrastructure is improving but still requires flexibility. The north (Quirimbas, Pemba) is more remote; the south (Tofo, Bazaruto, Inhambane) is more accessible. The country rewards patient, adventurous travellers enormously.",
    know: [
      {
        icon: "🛂",
        title: "Visa",
        text: "Most nationalities can obtain a visa on arrival at Maputo, Beira, and Pemba airports (USD 50–85 depending on nationality). E-visa available at evisa.gov.mz. SADC citizens generally visa-free. Check current requirements for your nationality before travel.",
      },
      {
        icon: "🦈",
        title: "Whale Sharks",
        text: "Tofo Beach near Inhambane has one of the world's most consistent whale shark aggregations — present year-round but best October–March. Snorkelling or diving with these gentle giants in the warm Mozambique Channel is one of Africa's great marine experiences.",
      },
      {
        icon: "💉",
        title: "Health",
        text: "Malaria prophylaxis is essential throughout Mozambique year-round. Yellow fever required if arriving from endemic countries. Typhoid and hepatitis A recommended. Medical facilities outside Maputo are very limited — medical evacuation insurance is essential.",
      },
      {
        icon: "🌊",
        title: "The Mozambique Channel",
        text: "The channel between Mozambique and Madagascar is one of the Indian Ocean's most biodiverse marine environments — humpback whales (July–October), whale sharks, dugongs in the Bazaruto lagoons, manta rays at Tofo, and extraordinary coral reef systems.",
      },
      {
        icon: "🏝️",
        title: "The Archipelagos",
        text: "The Bazaruto Archipelago (south) and the Quirimbas Archipelago (north) are Mozambique's twin island jewels — both UNESCO biosphere reserves, both with extraordinary marine life, and both dramatically different in character.",
      },
      {
        icon: "🌿",
        title: "Gorongosa Recovery",
        text: "Gorongosa National Park — devastated by civil war — is undergoing one of Africa's most remarkable wildlife recoveries under the Carr Foundation. Lion, elephant, buffalo, hippo, and wild dog have all returned in significant numbers.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "USD is widely accepted at lodges and tourist operations. ATMs in Maputo and major provincial capitals. Outside these centres, cash in USD or MZN is essential. The Quirimbas and Bazaruto are fly-in operations — expensive but extraordinary.",
      },
      {
        icon: "🚙",
        title: "Getting Around",
        text: "Maputo (MPM) is the main hub. Beira (BEW) and Pemba (POL) serve the centre and north. Charter flights connect to the islands and Gorongosa. The EN1 coast road south is reasonable; north of Beira requires a 4x4 or charter flights.",
      },
      {
        icon: "🎵",
        title: "Music and Culture",
        text: "Mozambique's musical culture is extraordinary — marrabenta from Maputo, the timbila xylophone of the Chopi people (UNESCO Intangible Heritage), and the dhow-and-Arabic musical threads of the Swahili north. The Maputo music scene is one of southern Africa's finest.",
      },
      {
        icon: "🦭",
        title: "Dugongs",
        text: "The Bazaruto Archipelago holds the last significant dugong population in the western Indian Ocean — an estimated 250 animals feed on the seagrass beds of the Bazaruto lagoon, viewable by boat from Benguerra or Bazaruto islands.",
      },
    ],
    seeSubtitle:
      "Tofo Beach whale sharks, the Quirimbas Archipelago's Ibo Island coral palaces, Bazaruto dugongs, Gorongosa's wildlife recovery, Maputo's colonial architecture, and the Indian Ocean reef systems of the Sofala Bank.",
    see: [
      {
        name: "Tofo Beach and Whale Sharks",
        title: "World Capital of Whale Shark Encounters",
        desc: "A laid-back beach town near Inhambane — Tofo has one of the world's most consistent whale shark populations and extraordinary manta ray aggregations. The dive sites off Tofo are among the finest in the Indian Ocean.",
        tag: "Marine - Whale Sharks",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Tofo Beach whale shark snorkel dive Mozambique",
      },
      {
        name: "Quirimbas Archipelago",
        title: "Ancient Swahili Coral Islands",
        desc: "A UNESCO Biosphere Reserve of 32 coral islands north of Pemba — Ibo Island's Portuguese fort and silver craftsmen, Quilaléa's pristine reef, and the extraordinary Swahili-Arab-Portuguese cultural layers of a civilisation built on the Indian Ocean trade.",
        tag: "UNESCO - Archipelago",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Quirimbas Archipelago Ibo Island coral Mozambique",
      },
      {
        name: "Bazaruto Archipelago",
        title: "Dugongs and the Southern Lagoon",
        desc: "A UNESCO Biosphere Reserve south of Vilanculos — five islands protecting the last significant dugong population in the western Indian Ocean, with pristine sandbanks, extraordinary fishing, and the finest offshore diving in southern Mozambique.",
        tag: "UNESCO - Islands",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Bazaruto Archipelago dugong lagoon Mozambique",
      },
      {
        name: "Gorongosa National Park",
        title: "Africa's Greatest Wildlife Recovery",
        desc: "Once all but destroyed by civil war, Gorongosa is now one of Africa's most extraordinary conservation stories — lion, elephant, wild dog, hippo, and buffalo returned in force, with the Carr Foundation investing in both wildlife and community development.",
        tag: "Wildlife - Recovery",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Gorongosa National Park wildlife lion Mozambique recovery",
      },
      {
        name: "Ibo Island",
        title: "A Portuguese Fort on a Coral Island",
        desc: "The jewel of the Quirimbas — a small coral island with a 16th-century Portuguese fort, ruined palaces slowly reclaimed by the forest, silver craftsmen working in the old Arab tradition, and the extraordinary Ibo Island Lodge in a restored mansion.",
        tag: "Culture - Historic Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Ibo Island Portuguese fort silver crafts Mozambique",
      },
      {
        name: "Maputo",
        title: "Southern Africa's Most Underrated Capital",
        desc: "A vibrant, art-filled city — the Polana neighbourhood's Portuguese villas, the Mercado Central's extraordinary fish market, Maputo's thriving live music scene (marrabenta), the extraordinary Nucleo de Arte, and the finest prawns in Africa at Costa do Sol.",
        tag: "Capital - Vibrant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Maputo capital marrabenta prawn Portuguese Mozambique",
      },
      {
        name: "Inhambane and the Dhow Coast",
        title: "A Portuguese Town on Dhow Bay",
        desc: "An ancient town on a bay of the Mozambique Channel — Portuguese colonial architecture, the oldest mosque in Mozambique, dhows still crossing the bay as they have for 500 years, and the gateway to Tofo Beach and the whale shark sites.",
        tag: "Culture - Dhow Town",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Inhambane dhow Portuguese colonial bay Mozambique",
      },
      {
        name: "Pemba and the North",
        title: "The Gateway to the Quirimbas",
        desc: "A relaxed bay town in northern Mozambique — the gateway to the Quirimbas Archipelago, with its own excellent dive sites, the extraordinary Wimbe Beach, and the Swahili character that distinguishes the north from the Portuguese-inflected south.",
        tag: "Town - Northern Base",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Pemba Wimbe Beach Quirimbas gateway Mozambique",
      },
      {
        name: "Vilanculos",
        title: "The Bazaruto Gateway Town",
        desc: "A breezy bay town on the southern coast — the departure point for the Bazaruto Archipelago, with its own excellent beach, dhow sailing, kitesurfing, and the laid-back atmosphere of a town that exists primarily as a staging post for paradise.",
        tag: "Town - Southern Base",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Vilanculos dhow beach Bazaruto gateway Mozambique",
      },
      {
        name: "Ilha de Moçambique",
        title: "UNESCO — First Capital of Portuguese East Africa",
        desc: "A tiny coral island connected to the mainland by a 3km bridge — a UNESCO World Heritage city of extraordinary Portuguese, Arab, and African architectural layers, the oldest European building in the southern hemisphere, and one of Africa's most historically layered places.",
        tag: "UNESCO - Historic Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Ilha de Moçambique UNESCO Portuguese fort Mozambique",
      },
    ],
    doSubtitle:
      "Snorkel with whale sharks at Tofo, dive the Bazaruto reef, dhow safari in the Quirimbas, game drive in Gorongosa, silver craft workshop on Ibo Island, marrabenta evening in Maputo, and a sundowner on a Bazaruto sandbank.",
    do: [
      {
        title: "Snorkel with Whale Sharks, Tofo",
        desc: "Board a RIB from Tofo and race out to the open Mozambique Channel — when the spotter calls a whale shark, slip in and fin alongside a 10-metre fish as it filters plankton, entirely indifferent to the humans at its side.",
        tag: "Marine - Whale Shark",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Whale shark snorkel Tofo Mozambique Channel",
      },
      {
        title: "Dive the Manta Reef, Tofo",
        desc: "Manta rays aggregate at the Manta Reef off Tofo year-round — oceanic mantas with wingspans up to 5 metres hovering in the current as they feed, one of the Indian Ocean's most spectacular dive experiences.",
        tag: "Marine - Manta Ray",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Manta ray dive Tofo Mozambique oceanic",
      },
      {
        title: "Dhow Safari, Quirimbas",
        desc: "Sail between the Quirimbas islands on a traditional Arab dhow — stopping at deserted sandbanks, snorkelling pristine reef, and anchoring off Ibo Island as the sun sets behind the Portuguese fort.",
        tag: "Adventure - Dhow Sailing",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Dhow safari Quirimbas Archipelago islands Mozambique",
      },
      {
        title: "Gorongosa Game Drive",
        desc: "A morning game drive in Gorongosa's restored savanna — lion prides that have grown from fewer than 20 animals in 2008 to over 100 today, enormous elephant herds, hippos in Lake Urema, and the extraordinary birding of the miombo woodland.",
        tag: "Wildlife - Gorongosa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Gorongosa game drive lion elephant Mozambique",
      },
      {
        title: "Ibo Island Silver Workshop",
        desc: "Watch Ibo Island's silver craftsmen at work — a tradition of silver jewellery-making using ancient Arab techniques, passed down through generations of island families, producing extraordinary pieces sold at the lodge and from homes throughout the island.",
        tag: "Culture - Ibo Island",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Ibo Island silver craft workshop Quirimbas Mozambique",
      },
      {
        title: "Marrabenta Evening, Maputo",
        desc: "Maputo's music scene is one of southern Africa's finest — marrabenta, the city's own percussive dance music, plays at venues like the Nucleo de Arte on weekends, alongside live jazz, afropop, and the extraordinary local restaurant-bar culture.",
        tag: "Culture - Maputo Music",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Marrabenta music Maputo evening Mozambique",
      },
      {
        title: "Bazaruto Sandbank Sundowner",
        desc: "Take a dhow at sunset to one of the Bazaruto Archipelago's deserted sandbanks — white sand emerging from turquoise water, the islands silhouetted behind you, and a cold drink as the sun drops into the Mozambique Channel.",
        tag: "Nature - Bazaruto",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Bazaruto sandbank sundowner dhow Mozambique",
      },
      {
        title: "Dugong Search, Bazaruto",
        desc: "A boat search across the Bazaruto lagoon's seagrass beds for dugongs — the western Indian Ocean's last significant population, the slow-moving sea cows visible just below the surface in the shallow turquoise water.",
        tag: "Wildlife - Dugong",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Dugong search Bazaruto lagoon seagrass Mozambique",
      },
      {
        title: "Maputo Fish Market at Dawn",
        desc: "The Mercado Central fish market in Maputo before 7AM — an extraordinary spectacle of freshly landed Indian Ocean fish, prawns, crayfish, and squid, with fishermen and buyers negotiating in Portuguese and Changana.",
        tag: "Culture - Maputo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Maputo fish market dawn prawns Mozambique",
      },
      {
        title: "Ilha de Moçambique Walking Tour",
        desc: "Walk the length of Ilha de Moçambique — from the Fort of São Sebastião (oldest European building in the southern hemisphere) through the Stone Town's UNESCO layers to the macuti (thatched) town at the southern end.",
        tag: "History - UNESCO",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Ilha de Moçambique Fort UNESCO walking tour",
      },
    ],
    eatSubtitle:
      "Mozambican food is the Indian Ocean's great secret — Maputo prawns grilled in piri piri butter, matapa with coconut and cashew, fresh crayfish on a Quirimbas dhow, caril de caranguejo on the Inhambane coast, and a cold 2M beer at any beach.",
    eat: [
      {
        category: "National Icon",
        name: "Maputo Prawns (Camarão Piri Piri)",
        desc: "Giant Mozambican prawns — some of the largest and finest in the world — grilled in a butter and piri piri sauce and served with chips and fresh bread. Costa do Sol in Maputo is the classic venue; every beach restaurant does a version.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Mozambique prawns piri piri butter Maputo grilled",
      },
      {
        category: "Creole Classic",
        name: "Matapa",
        desc: "Cassava leaves ground and slow-cooked with coconut milk, garlic, and dried shrimp — served over xima (maize porridge) as Mozambique's most beloved everyday dish. Found at every local restaurant from Maputo to Pemba.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Matapa cassava coconut milk shrimp Mozambique",
      },
      {
        category: "Coastal Seafood",
        name: "Caril de Caranguejo",
        desc: "Crab curry — blue swimmer crabs from the mangrove channels cooked in coconut milk with turmeric, ginger, and fresh chilli, served over rice at Inhambane and Tofo beach restaurants. An extraordinary combination of Indian Ocean ingredients.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Caril de caranguejo crab curry coconut Mozambique",
      },
      {
        category: "Island Fresh",
        name: "Grilled Crayfish and Clams",
        desc: "The Quirimbas and Bazaruto lodges serve whole grilled crayfish from the reef and clams from the lagoon floor — extraordinarily fresh, simply prepared with butter and lemon, eaten on the beach as the Indian Ocean does its best at sunset.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Grilled crayfish clams Quirimbas lodge Mozambique",
      },
      {
        category: "Drink",
        name: "2M Beer, Tipo Tinto Rum, and Coconut Water",
        desc: "Dois M (2M) is Mozambique's beloved lager — cold and essential at any beach. Tipo Tinto is the local sugarcane spirit, drunk neat or mixed. Fresh coconut water from roadside vendors and cashew fruit juice in season.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "2M beer Tipo Tinto coconut water Mozambique",
      },
    ],
    staySubtitle:
      "Maputo for arrivals and culture; Tofo and Inhambane for the whale sharks and southern diving; Vilanculos for Bazaruto; Pemba for the Quirimbas; Gorongosa for wildlife.",
    stay: [
      {
        type: "Capital",
        area: "Maputo",
        desc: "Polana Serena Hotel is the grande dame. Montebelo Girassol Maputo and the boutique Bahia Mar Club are good alternatives. The Polana neighbourhood has excellent guesthouses.",
        picks: ["Polana Serena Hotel Maputo", "Bahia Mar Club Hotel", "Montebelo Girassol Maputo"],
      },
      {
        type: "Whale Sharks",
        area: "Tofo / Inhambane",
        desc: "Tofo Beach has a good range of guesthouses and dive lodges — Bamboozi, Casa Barry, and Fatima's Nest are the established names for different budgets.",
        picks: ["Bamboozi Beach Lodge Tofo", "Casa Barry Lodge", "Fatima's Nest Tofo"],
      },
      {
        type: "Southern Islands",
        area: "Bazaruto Archipelago",
        desc: "Anantara Bazaruto Island Resort and Azura Benguerra are the flagship island lodges. The Dugong Beach Lodge on Benguerra is a more intimate alternative.",
        picks: ["Anantara Bazaruto Island Resort", "Azura Benguerra Island", "Dugong Beach Lodge"],
      },
      {
        type: "Northern Islands",
        area: "Quirimbas Archipelago",
        desc: "Ibo Island Lodge (the most atmospheric in Mozambique) and Quilaléa Private Island are the finest in the Quirimbas. &Beyond Vamizi Island is the luxury flagship.",
        picks: ["Ibo Island Lodge", "Quilaléa Private Island", "&Beyond Vamizi Island"],
      },
      {
        type: "Wildlife",
        area: "Gorongosa NP",
        desc: "Chitengo Camp (main camp) and the Nhambita Community Camp are the within-park options. Explore Gorongosa works directly with the Carr Foundation.",
        picks: ["Chitengo Safari Camp Gorongosa", "Nhambita Community Camp", "Explore Gorongosa"],
      },
    ],
    map: {
      center: [-17.5, 35.5],
      zoom: 5.5,
      seeSpots: [
        { lat: -23.86, lng: 35.55, name: "Tofo Beach", desc: "Whale shark world capital" },
        { lat: -12.5, lng: 40.6, name: "Quirimbas Archipelago", desc: "UNESCO Swahili coral islands" },
        { lat: -21.8, lng: 35.5, name: "Bazaruto Archipelago", desc: "UNESCO dugong lagoon" },
        { lat: -18.64, lng: 34.73, name: "Gorongosa NP", desc: "Africa's greatest recovery" },
        { lat: -12.34, lng: 40.57, name: "Ibo Island", desc: "Portuguese fort silver craft" },
        { lat: -25.97, lng: 32.58, name: "Maputo", desc: "Prawn capital music city" },
        { lat: -23.86, lng: 35.38, name: "Inhambane", desc: "Dhow bay Portuguese town" },
        { lat: -12.97, lng: 40.52, name: "Pemba", desc: "Quirimbas northern gateway" },
        { lat: -21.7, lng: 35.3, name: "Vilanculos", desc: "Bazaruto southern gateway" },
        { lat: -15.04, lng: 40.73, name: "Ilha de Moçambique", desc: "UNESCO oldest Portuguese fort" },
      ],
      doSpots: [
        { lat: -23.86, lng: 35.55, name: "Whale Shark Snorkel", desc: "Tofo RIB excursion" },
        { lat: -23.86, lng: 35.55, name: "Manta Ray Dive", desc: "Tofo Manta Reef" },
        { lat: -12.5, lng: 40.6, name: "Dhow Safari", desc: "Quirimbas island sailing" },
        { lat: -18.64, lng: 34.73, name: "Gorongosa Drive", desc: "Lion and elephant recovery" },
        { lat: -12.34, lng: 40.57, name: "Silver Workshop", desc: "Ibo Island craft" },
        { lat: -25.97, lng: 32.58, name: "Marrabenta Evening", desc: "Maputo live music" },
        { lat: -21.8, lng: 35.5, name: "Dugong Search", desc: "Bazaruto lagoon boat" },
        { lat: -15.04, lng: 40.73, name: "Ilha Walking Tour", desc: "UNESCO fort stone town" },
      ],
      staySpots: [
        { lat: -25.97, lng: 32.58, name: "Maputo", desc: "Capital hotel hub" },
        { lat: -23.86, lng: 35.55, name: "Tofo / Inhambane", desc: "Whale shark dive lodges" },
        { lat: -21.8, lng: 35.5, name: "Bazaruto", desc: "Island resort Vilanculos" },
        { lat: -12.5, lng: 40.6, name: "Quirimbas", desc: "Ibo and Vamizi islands" },
        { lat: -18.64, lng: 34.73, name: "Gorongosa", desc: "Wildlife camp Carr Foundation" },
      ],
    },
    dayTrips: [
      {
        title: "Tofo Whale Shark and Manta Double Dive",
        subtitle: "A full morning on the Mozambique Channel from Tofo — a whale shark snorkel on the open water followed by a dive on the Manta Reef, combining the channel's two most extraordinary marine encounters in a single expedition.",
        tag: "Marine - Tofo Full Morning",
        distance: "Tofo Beach, open Mozambique Channel",
        duration: "Half day (5 hours)",
        transport: "RIB from Tofo Beach",
        steps: [
          { time: "6:30AM", text: "Brief at the Tofo dive centre — conditions, species expected, snorkel or dive choice." },
          { time: "7AM", text: "RIB launch into the Mozambique Channel — spotter scanning the surface." },
          { time: "7:30AM", text: "Whale shark located — slip into the water and fin alongside. Average 8–10 metres, entirely calm." },
          { time: "9AM", text: "Move to the Manta Reef site for a dive — oceanic mantas in the current above the reef." },
          { time: "10:30AM", text: "Surface interval on the boat before a second dive or return to Tofo." },
          { time: "12PM", text: "Return to Tofo, debrief with cold 2M beer at the beach bar." },
        ],
      },
      {
        title: "Inhambane Dhow Bay and Old Town",
        subtitle: "A morning in Inhambane town — the oldest mosque in Mozambique, the Portuguese cathedral, dhows crossing the bay as they have for 500 years — then a dhow crossing to Tofo Beach for the afternoon.",
        tag: "Culture - Inhambane Half Day",
        distance: "Inhambane town and bay",
        duration: "Half day (4 hours)",
        transport: "Walking and dhow",
        steps: [
          { time: "7:30AM", text: "Start at the Inhambane fish market on the waterfront — the morning catch arriving by dhow." },
          { time: "8:30AM", text: "Walk to the oldest mosque in Mozambique (18th century) and the adjacent cathedral." },
          { time: "9:30AM", text: "Inhambane Museum of History and the colonial-era avenues of casuarina and mango trees." },
          { time: "11AM", text: "Board the small passenger dhow at the waterfront for the crossing to Tofo." },
          { time: "11:30AM", text: "Arrive Tofo — the dhow crossing takes 30 minutes across the azure bay." },
          { time: "12PM", text: "Lunch at a Tofo beach restaurant and afternoon on the beach." },
        ],
      },
      {
        title: "Gorongosa Lake Urema Hippo Boat",
        subtitle: "A morning boat on Lake Urema in Gorongosa — the seasonal lake at the heart of the park, with the highest hippo concentration in Mozambique, enormous crocodiles, and the extraordinary birdlife of the Gorongosa floodplain.",
        tag: "Wildlife - Gorongosa Morning",
        distance: "Lake Urema, Gorongosa NP",
        duration: "Half day (4 hours in park)",
        transport: "Camp vehicle to lake, motorised boat",
        steps: [
          { time: "6AM", text: "Pre-dawn departure from Chitengo Camp to Lake Urema." },
          { time: "6:30AM", text: "Board the flat-bottomed boat — hippo pods surface immediately." },
          { time: "7AM", text: "Enormous Nile crocodiles on the banks — Gorongosa has a significant crocodile population." },
          { time: "8AM", text: "African skimmer, saddle-billed stork, and the extraordinary Gorongosa waterfowl." },
          { time: "9AM", text: "Return to Chitengo Camp for breakfast." },
          { time: "10AM", text: "Morning game drive on the floodplain — lion and elephant in the peak heat." },
        ],
      },
      {
        title: "Maputo Prawns, Market, and Nucleo de Arte",
        subtitle: "A full Maputo cultural day — the Mercado Central fish market at dawn, the Portuguese colonial avenues of Polana at mid-morning, the Nucleo de Arte contemporary gallery, and the Costa do Sol restaurant for the finest piri piri prawns in Africa at sunset.",
        tag: "Culture - Maputo Full Day",
        distance: "Maputo city",
        duration: "Full day (8 hours)",
        transport: "Walking and taxi in Maputo",
        steps: [
          { time: "6:30AM", text: "Mercado Central fish market — freshly landed prawns, tuna, and crayfish being sold at the docks." },
          { time: "8:30AM", text: "Walk the Polana neighbourhood — Portuguese villas, casuarina avenues, and the Polana Serena's colonial grandeur." },
          { time: "10AM", text: "Nucleo de Arte gallery — the most important contemporary African art space in Mozambique." },
          { time: "12PM", text: "Lunch at Mundo's restaurant — the classic Maputo lunch institution." },
          { time: "3PM", text: "National Museum and independence-era murals in the city centre." },
          { time: "6PM", text: "Costa do Sol at sunset — piri piri prawns and cold 2M beer on the Maputo Bay waterfront." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week in southern Mozambique — Maputo's culture and prawns, Inhambane and whale sharks at Tofo, and the Bazaruto Archipelago dugongs.",
        arrival: {
          route: "Your City -> Maputo (MPM)",
          meta: "Maputo connects via Johannesburg, Nairobi, Addis Ababa, Lisbon, and Dubai. LAM Mozambique, Ethiopian Airlines, and Kenya Airways are the main carriers. Most visitors fly via JNB.",
          sideTitle: "Visa",
          sideCopy: "Visa on arrival at MPM — bring USD cash and passport photos. Check current fee for your nationality.",
        },
        days: [
          {
            name: "Arrival",
            title: "Maputo Arrival",
            location: "Maputo",
            activities: [
              { time: "PM", text: "Arrive MPM, Polana neighbourhood hotel." },
              { time: "Night", text: "Costa do Sol piri piri prawns on the bay." },
            ],
          },
          {
            name: "Maputo",
            title: "Maputo Cultural Day",
            location: "Maputo",
            activities: [
              { time: "AM", text: "Fish market dawn, Polana walk, Nucleo de Arte." },
              { time: "Night", text: "Marrabenta live music evening." },
            ],
          },
          {
            name: "Fly",
            title: "Fly to Inhambane",
            location: "Inhambane / Tofo",
            activities: [
              { time: "AM", text: "Fly MPM to Inhambane (1 hour) — settle at Tofo lodge." },
              { time: "PM", text: "First whale shark RIB excursion." },
            ],
          },
          {
            name: "Tofo",
            title: "Whale Shark and Manta Full Day",
            location: "Tofo",
            activities: [
              { time: "AM", text: "Whale shark snorkel and manta ray dive." },
              { time: "PM", text: "Inhambane old town dhow crossing." },
            ],
          },
          {
            name: "Bazaruto",
            title: "Fly to Bazaruto",
            location: "Bazaruto Archipelago",
            activities: [
              { time: "AM", text: "Fly to Vilanculos and boat to Bazaruto island." },
              { time: "PM", text: "Dugong search and sandbank sundowner." },
            ],
          },
          {
            name: "Bazaruto",
            title: "Bazaruto Reef and Sandbanks",
            location: "Bazaruto Archipelago",
            activities: [
              { time: "AM", text: "Dive the Two Mile Reef — Mozambique's finest coral." },
              { time: "PM", text: "Dhow to remote sandbank for private afternoon." },
            ],
          },
          {
            name: "Departure",
            title: "Return to Maputo and Fly Out",
            location: "MPM",
            activities: [
              { time: "AM", text: "Boat to Vilanculos and fly to Maputo." },
              { time: "PM", text: "International departure from MPM." },
            ],
          },
        ],
        departure: {
          route: "Maputo (MPM) -> Johannesburg (JNB) -> Your City",
          meta: "Most international connections route via JNB. Evening flights from MPM are common.",
          sideTitle: "Best Time",
          sideCopy: "October–March for whale sharks. July–October for humpback whales. The coast is good year-round.",
        },
      },
      "10": {
        summary: "Ten days adding the Quirimbas Archipelago and Ibo Island in the north, plus Gorongosa wildlife.",
        arrival: {
          route: "Your City -> Maputo (MPM)",
          meta: "Fly into Maputo, circuit south then fly north to Pemba for the Quirimbas. Return from Pemba or loop back through Maputo.",
          sideTitle: "North Timing",
          sideCopy: "The Quirimbas are best May–October when seas are calmer — avoid November–March cyclone season for the north",
        },
        days: [
          { name: "Arrival", title: "Maputo", location: "Maputo", activities: [{ time: "PM", text: "Arrive MPM." }, { time: "Night", text: "Costa do Sol prawns." }] },
          { name: "Maputo", title: "Maputo Culture", location: "Maputo", activities: [{ time: "AM", text: "Fish market, Polana, Nucleo de Arte." }, { time: "Night", text: "Marrabenta live music." }] },
          { name: "Tofo", title: "Fly to Tofo", location: "Tofo / Inhambane", activities: [{ time: "AM", text: "Fly to Inhambane." }, { time: "PM", text: "Whale shark first excursion." }] },
          { name: "Tofo", title: "Whale Shark and Manta", location: "Tofo", activities: [{ time: "AM", text: "Double dive — whale shark and manta." }, { time: "PM", text: "Inhambane dhow town walk." }] },
          { name: "Gorongosa", title: "Fly to Gorongosa", location: "Gorongosa NP", activities: [{ time: "AM", text: "Fly to Gorongosa via Beira." }, { time: "PM", text: "First game drive — lion and elephant." }] },
          { name: "Gorongosa", title: "Lake Urema Hippo Boat", location: "Gorongosa NP", activities: [{ time: "AM", text: "Lake Urema hippo and croc boat." }, { time: "PM", text: "Afternoon game drive — wild dog search." }] },
          { name: "Quirimbas", title: "Fly to Pemba — Quirimbas", location: "Quirimbas / Ibo", activities: [{ time: "AM", text: "Fly Gorongosa to Pemba." }, { time: "PM", text: "Boat to Ibo Island, fort walk." }] },
          { name: "Ibo", title: "Ibo Island Full Day", location: "Ibo Island", activities: [{ time: "AM", text: "Silver craft workshop and fort ruins walk." }, { time: "PM", text: "Dhow snorkel to adjacent reef." }] },
          { name: "Quirimbas", title: "Quilaléa or Vamizi Reef Dive", location: "Quirimbas North", activities: [{ time: "AM", text: "Dive the pristine Quirimbas outer reef." }, { time: "PM", text: "Sandbank dhow sundowner." }] },
          { name: "Departure", title: "Fly from Pemba", location: "POL / MPM", activities: [{ time: "AM", text: "Morning at Wimbe Beach, Pemba." }, { time: "PM", text: "Fly Pemba to Maputo and international departure." }] },
        ],
        departure: {
          route: "Pemba (POL) -> Maputo (MPM) -> Johannesburg (JNB) -> Your City",
          meta: "Pemba to Maputo connects via LAM domestic. Allow a connection day in Maputo.",
          sideTitle: "Combine",
          sideCopy: "Mozambique combines naturally with Tanzania (Dar es Salaam to Maputo) or Malawi (Lilongwe to Pemba by charter).",
        },
      },
    },
    footerLine1: "Discover Mozambique — whale sharks at Tofo, dugongs in Bazaruto, Ibo Island's coral palaces, Gorongosa's lion recovery, and the finest prawns in Africa",
    footerLine2: "Visa on arrival in USD. Malaria prophylaxis essential. Medical evacuation insurance non-negotiable. 2M is always cold.",
  },
};

function numberWithZero(index) {
  return String(index + 1).padStart(2, "0");
}

function renderKnowCards(knowCards) {
  return knowCards
    .map(
      (card, i) => `
    <div class="know-card">
      <div class="know-card-icon">${card.icon}</div>
      <div class="know-card-number">${numberWithZero(i)}</div>
      <h3 class="know-card-title">${card.title}</h3>
      <p class="know-card-text">${card.text}</p>
    </div>`
    )
    .join("");
}

function renderSeeCards(items) {
  return items
    .map(
      (item, i) => `
    <div class="see-card">
      <div class="see-card-image-wrap">
        <img src="${item.image}" alt="${item.alt}" class="see-card-image" loading="lazy" />
      </div>
      <div class="see-card-body">
        <div class="see-card-meta">
          <span class="see-card-number">${numberWithZero(i)}</span>
          <span class="see-card-tag">${item.tag}</span>
        </div>
        <h3 class="see-card-name">${item.name}</h3>
        <h4 class="see-card-title">${item.title}</h4>
        <p class="see-card-desc">${item.desc}</p>
      </div>
    </div>`
    )
    .join("");
}

function renderDoCards(items) {
  return items
    .map(
      (item, i) => `
    <div class="do-card">
      <div class="do-card-image-wrap">
        <img src="${item.image}" alt="${item.alt}" class="do-card-image" loading="lazy" />
      </div>
      <div class="do-card-body">
        <div class="do-card-meta">
          <span class="do-card-number">${numberWithZero(i)}</span>
          <span class="do-card-tag">${item.tag}</span>
        </div>
        <h3 class="do-card-title">${item.title}</h3>
        <p class="do-card-desc">${item.desc}</p>
      </div>
    </div>`
    )
    .join("");
}

function renderEatCards(items) {
  return items
    .map(
      (item, i) => `
    <div class="eat-card">
      <div class="eat-card-image-wrap">
        <img src="${item.image}" alt="${item.alt}" class="eat-card-image" loading="lazy" />
      </div>
      <div class="eat-card-body">
        <div class="eat-card-meta">
          <span class="eat-card-number">${numberWithZero(i)}</span>
          <span class="eat-card-category">${item.category}</span>
        </div>
        <h3 class="eat-card-name">${item.name}</h3>
        <p class="eat-card-desc">${item.desc}</p>
      </div>
    </div>`
    )
    .join("");
}

function renderStayCards(items) {
  return items
    .map(
      (item, i) => `
    <div class="stay-card">
      <div class="stay-card-meta">
        <span class="stay-card-number">${numberWithZero(i)}</span>
        <span class="stay-card-type">${item.type}</span>
      </div>
      <h3 class="stay-card-area">${item.area}</h3>
      <p class="stay-card-desc">${item.desc}</p>
      <ul class="stay-card-picks">
        ${item.picks.map((p) => `<li>${p}</li>`).join("")}
      </ul>
    </div>`
    )
    .join("");
}

function renderDayTrips(dayTrips) {
  if (!dayTrips || dayTrips.length === 0) return "";
  return `
  <section class="day-trips-section">
    <div class="section-header">
      <h2 class="section-title">Day Trips</h2>
      <p class="section-subtitle">Curated excursions from the main bases</p>
    </div>
    <div class="day-trips-grid">
      ${dayTrips
        .map(
          (trip, i) => `
      <div class="day-trip-card">
        <div class="day-trip-header">
          <span class="day-trip-number">${numberWithZero(i)}</span>
          <span class="day-trip-tag">${trip.tag}</span>
        </div>
        <h3 class="day-trip-title">${trip.title}</h3>
        <p class="day-trip-subtitle">${trip.subtitle}</p>
        <div class="day-trip-meta">
          <span>📍 ${trip.distance}</span>
          <span>⏱ ${trip.duration}</span>
          <span>🚗 ${trip.transport}</span>
        </div>
        <ol class="day-trip-steps">
          ${trip.steps.map((s) => `<li><strong>${s.time}</strong> — ${s.text}</li>`).join("")}
        </ol>
      </div>`
        )
        .join("")}
    </div>
  </section>`;
}

function initializeMap(guide) {
  const map = L.map("guide-map").setView(guide.map.center, guide.map.zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  const icons = {
    see: L.divIcon({ className: "map-pin map-pin-see", html: "👁", iconSize: [28, 28] }),
    do: L.divIcon({ className: "map-pin map-pin-do", html: "⚡", iconSize: [28, 28] }),
    stay: L.divIcon({ className: "map-pin map-pin-stay", html: "🏠", iconSize: [28, 28] }),
  };

  const addSpots = (spots, iconKey) => {
    spots.forEach((spot) => {
      L.marker([spot.lat, spot.lng], { icon: icons[iconKey] })
        .bindPopup(`<strong>${spot.name}</strong><br>${spot.desc}`)
        .addTo(map);
    });
  };

  addSpots(guide.map.seeSpots, "see");
  addSpots(guide.map.doSpots, "do");
  addSpots(guide.map.staySpots, "stay");
}

function renderItinerary(itin, days) {
  const dayCards = itin.days
    .map(
      (d, i) => `
    <div class="itin-day">
      <div class="itin-day-header">
        <span class="itin-day-number">Day ${i + 1}</span>
        <span class="itin-day-name">${d.name}</span>
        <span class="itin-day-location">📍 ${d.location}</span>
      </div>
      <h4 class="itin-day-title">${d.title}</h4>
      <ul class="itin-day-activities">
        ${d.activities.map((a) => `<li><strong>${a.time}</strong> — ${a.text}</li>`).join("")}
      </ul>
    </div>`
    )
    .join("");

  return `
    <div class="itin-panel">
      <p class="itin-summary">${itin.summary}</p>
      <div class="itin-arrival">
        <div class="itin-arrival-route">✈️ <strong>Route:</strong> ${itin.arrival.route}</div>
        <p>${itin.arrival.meta}</p>
        <div class="itin-aside"><strong>${itin.arrival.sideTitle}:</strong> ${itin.arrival.sideCopy}</div>
      </div>
      <div class="itin-days">${dayCards}</div>
      <div class="itin-departure">
        <div class="itin-departure-route">✈️ <strong>Departure:</strong> ${itin.departure.route}</div>
        <p>${itin.departure.meta}</p>
        <div class="itin-aside"><strong>${itin.departure.sideTitle}:</strong> ${itin.departure.sideCopy}</div>
      </div>
    </div>`;
}

function initializeItinerarySwitcher() {
  const btns = document.querySelectorAll(".itin-btn");
  const panels = document.querySelectorAll(".itin-panel");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const target = document.getElementById("itin-" + btn.dataset.days);
      if (target) target.classList.add("active");
    });
  });
}

function renderPage(guide) {
  document.title = guide.country + " — Travel Guide";
  document.body.innerHTML = `
    <header class="hero">
      <div class="hero-inner">
        <p class="hero-eyebrow">${guide.heroEyebrow}</p>
        <h1 class="hero-title">${guide.heroTitleHtml}</h1>
        <p class="hero-tagline">${guide.heroTagline}</p>
        <div class="hero-stats">
          ${guide.heroStats.map((s) => `<div class="hero-stat"><span class="hero-stat-label">${s.label}</span><span class="hero-stat-value">${s.value}</span></div>`).join("")}
        </div>
      </div>
    </header>

    <section class="know-section">
      <div class="section-header">
        <h2 class="section-title">Before You Go</h2>
        <p class="section-subtitle">${guide.knowSubtitle}</p>
      </div>
      <div class="know-grid">${renderKnowCards(guide.know)}</div>
    </section>

    <section class="see-section">
      <div class="section-header">
        <h2 class="section-title">See</h2>
        <p class="section-subtitle">${guide.seeSubtitle}</p>
      </div>
      <div class="see-grid">${renderSeeCards(guide.see)}</div>
    </section>

    <section class="do-section">
      <div class="section-header">
        <h2 class="section-title">Do</h2>
        <p class="section-subtitle">${guide.doSubtitle}</p>
      </div>
      <div class="do-grid">${renderDoCards(guide.do)}</div>
    </section>

    ${renderDayTrips(guide.dayTrips)}

    <section class="eat-section">
      <div class="section-header">
        <h2 class="section-title">Eat &amp; Drink</h2>
        <p class="section-subtitle">${guide.eatSubtitle}</p>
      </div>
      <div class="eat-grid">${renderEatCards(guide.eat)}</div>
    </section>

    <section class="stay-section">
      <div class="section-header">
        <h2 class="section-title">Stay</h2>
        <p class="section-subtitle">${guide.staySubtitle}</p>
      </div>
      <div class="stay-grid">${renderStayCards(guide.stay)}</div>
    </section>

    <section class="map-section">
      <div class="section-header">
        <h2 class="section-title">Map</h2>
      </div>
      <div id="guide-map" class="guide-map"></div>
      <div class="map-legend">
        <span>👁 See</span>
        <span>⚡ Do</span>
        <span>🏠 Stay</span>
      </div>
    </section>

    <section class="itinerary-section">
      <div class="section-header">
        <h2 class="section-title">Itineraries</h2>
      </div>
      <div class="itin-switcher">
        <button class="itin-btn active" data-days="7">7 Days</button>
        <button class="itin-btn" data-days="10">10 Days</button>
      </div>
      <div id="itin-7" class="itin-panel active">${renderItinerary(guide.itineraries["7"], 7)}</div>
      <div id="itin-10" class="itin-panel">${renderItinerary(guide.itineraries["10"], 10)}</div>
    </section>

    <footer class="guide-footer">
      <p>${guide.footerLine1}</p>
      <p>${guide.footerLine2}</p>
    </footer>
  `;
}

function bootGuide() {
  const country = document.body.dataset.guideCountry;
  const guide = GUIDE_DATA[country];
  if (!guide) {
    document.body.innerHTML = "<p style='padding:2rem'>Guide not found for: " + country + "</p>";
    return;
  }
  renderPage(guide);
  initializeMap(guide);
  initializeItinerarySwitcher();
}

bootGuide();
