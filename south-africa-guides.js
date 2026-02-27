const GUIDE_DATA = {

  south_africa: {
    country: "South Africa",
    heroEyebrow: "Southern Africa — Cape Winelands, Kruger's Big Five, the Garden Route, and the Rainbow Nation",
    heroTitleHtml: "South <em>Af</em>rica",
    heroTagline:
      "The most complete country in Africa — Table Mountain rising above the Cape Peninsula's vineyards and whale-watching bays, the Kruger National Park's legendary big five game drives, the spectacular Garden Route coast from Mossel Bay to Storms River, the Drakensberg's soaring basalt amphitheatre, Soweto's history and energy, the winelands of Stellenbosch and Franschhoek, and a cultural diversity — Zulu, Xhosa, Afrikaner, Cape Malay, Indian — that expresses itself with extraordinary vitality in the food, the music, and the people.",
    heroStats: [
      { label: "Capital", value: "Pretoria (exec) / Cape Town (leg)" },
      { label: "Currency", value: "ZAR (South African Rand)" },
      { label: "Language", value: "11 official languages incl. Zulu, Xhosa, Afrikaans, English" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "South Africa is Africa's most visited country and most complete destination — excellent infrastructure, world-class food and wine, extraordinary wildlife, and dramatic scenery across a country the size of France, Spain, and Germany combined. Allow at least two weeks to do it justice.",
    know: [
      {
        icon: "🦁",
        title: "Big Five",
        text: "The Kruger National Park and its surrounding private reserves (Sabi Sand, Timbavati, Thornybush) offer some of Africa's finest big five game viewing — leopard sightings are exceptional in the Sabi Sand, and Kruger's self-drive is one of the best in Africa.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Most Western nationalities do not require a visa for South Africa — free entry on arrival for up to 90 days for EU, UK, USA, Canadian, and Australian passport holders. Your passport must be valid for 30 days after departure and have two blank pages.",
      },
      {
        icon: "🌊",
        title: "Two Oceans",
        text: "South Africa is the only country in the world where the Atlantic and Indian Oceans meet — at Cape Agulhas, the southernmost point of Africa. The west coast (Atlantic side) is cold and dramatic; the east coast (Indian Ocean side) is warm and sub-tropical.",
      },
      {
        icon: "🍷",
        title: "Wine",
        text: "The Cape Winelands produce some of the southern hemisphere's finest wine — Stellenbosch and Franschhoek for Cabernet Sauvignon and Merlot, Swartland for Chenin Blanc and Syrah, and the Walker Bay for Pinot Noir. The wine route is one of the world's great food and wine journeys.",
      },
      {
        icon: "🚗",
        title: "Self-Drive",
        text: "South Africa has excellent roads and drives on the left — the N2 Garden Route, the N7 Namaqualand, and the Panorama Route through Mpumalanga are all superb self-drive experiences. Hire cars are available at all major airports.",
      },
      {
        icon: "🌡️",
        title: "Climate",
        text: "South Africa has significant regional variation — the Western Cape has a Mediterranean climate (wet winters, dry summers). The Kruger and Limpopo are hot and dry May–October (best for game viewing) and wet November–April. The Garden Route is temperate year-round.",
      },
      {
        icon: "⚠️",
        title: "Safety",
        text: "South Africa has elevated crime rates in urban areas — exercise standard urban caution in Johannesburg, Cape Town, and Durban city centres. Tourist areas, winelands, game reserves, and the Garden Route are generally very safe. Do not walk alone at night in cities.",
      },
      {
        icon: "🐋",
        title: "Whale Watching",
        text: "Hermanus on the Walker Bay is the world's best land-based whale watching destination — southern right whales calve in the bay June–December, with mothers and calves visible from the cliffs. Boat-based encounters are also available.",
      },
      {
        icon: "🏔️",
        title: "Drakensberg",
        text: "The Drakensberg (Dragon's Mountain) forms the escarpment between KwaZulu-Natal and Lesotho — soaring basalt amphitheatres, San rock art in remote caves, and some of southern Africa's finest multi-day hiking in a UNESCO World Heritage landscape.",
      },
      {
        icon: "🏙️",
        title: "Johannesburg",
        text: "Africa's most dynamic city — Soweto's township tours, the Apartheid Museum (one of the world's finest history museums), the regenerated Maboneng and Braamfontein precincts, and a restaurant and arts scene that rivals any African capital.",
      },
    ],
    seeSubtitle:
      "Table Mountain above Cape Town, Kruger's big five, the Garden Route's forested coast, the Drakensberg Amphitheatre, Robben Island, the Cape Winelands, Hermanus whales, the Blyde River Canyon, Soweto, and the Cape of Good Hope.",
    see: [
      {
        name: "Table Mountain",
        title: "Cape Town's Iconic Flat-Topped Summit",
        desc: "One of the world's most recognisable mountains — a flat-topped sandstone massif rising 1,086m directly above Cape Town, with the cable car offering extraordinary views over the city, the peninsula, and both oceans. Walking the India Venster trail is the finest ascent.",
        tag: "Nature - Iconic",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Table Mountain Cape Town summit cable car South Africa",
      },
      {
        name: "Kruger National Park",
        title: "Africa's Legendary Big Five Safari",
        desc: "South Africa's flagship national park — 20,000 km² of bushveld, one of Africa's best self-drive experiences, and some of the continent's finest leopard sightings in the private reserves on the western border. Lion, elephant, buffalo, rhino, and cheetah in extraordinary numbers.",
        tag: "Wildlife - Big Five",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Kruger National Park big five safari leopard South Africa",
      },
      {
        name: "Cape Peninsula",
        title: "From Cape Town to the Cape of Good Hope",
        desc: "A 75km peninsula of extraordinary beauty — Hout Bay's fishing harbour, the Chapman's Peak drive carved into the cliff face, the penguin colony at Boulders Beach, and the Cape of Good Hope where the two oceans meet at Africa's southwestern tip.",
        tag: "Nature - Peninsula Drive",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Cape Peninsula Good Hope Chapman's Peak South Africa",
      },
      {
        name: "The Garden Route",
        title: "South Africa's Most Scenic Coastal Drive",
        desc: "The N2 from Mossel Bay to Storms River — ancient Knysna forest, the Knysna Lagoon, Tsitsikamma's coastline plunging into the Indian Ocean, bungee jumping at Bloukrans Bridge (the world's highest commercial bungee), and Wilderness Beach's long white arc.",
        tag: "Nature - Coastal Drive",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Garden Route Knysna Tsitsikamma South Africa coastal",
      },
      {
        name: "Stellenbosch and Franschhoek",
        title: "The Cape Winelands",
        desc: "South Africa's premier wine region — Stellenbosch's Cape Dutch architecture and Cabernet vineyards, and Franschhoek (Little France), settled by Huguenot refugees in 1688, with the finest restaurant concentration outside Cape Town.",
        tag: "Food & Wine - Winelands",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Stellenbosch Franschhoek winelands Cape Dutch South Africa",
      },
      {
        name: "Robben Island",
        title: "Where Nelson Mandela Was Imprisoned",
        desc: "A UNESCO World Heritage site in Table Bay — the island where Nelson Mandela spent 18 of his 27 prison years, now a museum guided by former political prisoners. The boat crossing and the cell block tour are profoundly moving.",
        tag: "UNESCO - History",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Robben Island Nelson Mandela prison UNESCO South Africa",
      },
      {
        name: "Drakensberg",
        title: "UNESCO — Dragon's Mountain Amphitheatre",
        desc: "The soaring basalt escarpment of the uKhahlamba-Drakensberg — a UNESCO World Heritage site for both its natural grandeur and its San Bushman rock art. The Amphitheatre in the Royal Natal National Park rises 1,200m in a single cliff face.",
        tag: "UNESCO - Mountains",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Drakensberg Amphitheatre Royal Natal UNESCO South Africa",
      },
      {
        name: "Blyde River Canyon",
        title: "Africa's Green Canyon",
        desc: "The third largest canyon in the world and the largest 'green' canyon — carved by the Blyde River through red sandstone, with the three domed peaks of the Three Rondavels, the panoramic views from God's Window, and Bourke's Luck Potholes.",
        tag: "Nature - Canyon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Blyde River Canyon Three Rondavels God's Window South Africa",
      },
      {
        name: "Soweto",
        title: "The Soul of South African History",
        desc: "South Western Townships — where both Nelson Mandela and Desmond Tutu lived on the same street, where the 1976 uprising began, and where the vibrant contemporary township culture of shebeens, jazz, and street food tells the story of a city and a nation.",
        tag: "Culture - History",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Soweto township Mandela Tutu house history South Africa",
      },
      {
        name: "Hermanus",
        title: "World's Best Land-Based Whale Watching",
        desc: "A cliff-top town on Walker Bay — southern right whales calve directly below the cliff path June–December, sometimes within 20 metres of the shore. The town's whale crier blows a kelp horn to alert residents when whales are in the bay.",
        tag: "Wildlife - Whales",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Hermanus whale watching Walker Bay southern right South Africa",
      },
    ],
    doSubtitle:
      "Riding the Cape Town cable car to Table Mountain at sunrise, a Sabi Sand leopard drive, the Chapman's Peak coastal drive, whale watching from the Hermanus cliff path, the Apartheid Museum in Johannesburg, bungee jumping at Bloukrans, the Franschhoek wine tram, and a braai under the Milky Way.",
    do: [
      {
        title: "Table Mountain Cable Car at Sunrise",
        desc: "Book the first cable car of the day and arrive at the top as Cape Town wakes below — the mountain is clear before the infamous tablecloth cloud rolls in, and the 360° views over the city, the Waterfront, Robben Island, and both coastlines are extraordinary.",
        tag: "Adventure - Cape Town",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.fy/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Table Mountain cable car sunrise Cape Town view",
      },
      {
        title: "Sabi Sand Leopard Drive",
        desc: "The Sabi Sand Game Reserve on Kruger's western boundary has the finest leopard density in Africa — habituated animals that allow vehicles within metres, with sightings virtually guaranteed and the private reserve's night drives producing extraordinary encounters.",
        tag: "Wildlife - Sabi Sand",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Sabi Sand leopard drive private reserve South Africa",
      },
      {
        title: "Chapman's Peak Drive",
        desc: "Drive the Chapman's Peak toll road on the western peninsula — 9km of road carved directly into the cliff face above the Atlantic, with 114 curves and extraordinary views south toward the Cape of Good Hope.",
        tag: "Nature - Cape Peninsula",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Chapman's Peak drive cliff Atlantic Cape Peninsula",
      },
      {
        title: "Apartheid Museum, Johannesburg",
        desc: "One of the world's finest history museums — the Apartheid Museum in Johannesburg tells the story of South Africa's 46-year system of racial classification with extraordinary documentary honesty. Allow at least 3 hours.",
        tag: "Culture - Johannesburg",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Apartheid Museum Johannesburg history South Africa",
      },
      {
        title: "Franschhoek Wine Tram and Lunch",
        desc: "The Franschhoek Wine Tram hops between the valley's finest estates — a morning of Chardonnay and Pinot Noir tastings in the shadow of the Franschhoek mountains, ending with lunch at one of South Africa's finest restaurants.",
        tag: "Food & Wine - Winelands",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Franschhoek wine tram vineyard lunch South Africa",
      },
      {
        title: "Boulders Beach Penguin Colony",
        desc: "Walk among 3,000 African penguins at Boulders Beach near Simon's Town — the only mainland penguin colony in Africa, where the birds nest between the granite boulders and have become entirely habituated to visitors.",
        tag: "Wildlife - Cape Peninsula",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Boulders Beach African penguin colony Simon's Town South Africa",
      },
      {
        title: "Bloukrans Bungee Jump",
        desc: "The world's highest commercial bungee jump — 216m off the Bloukrans Bridge arch on the Garden Route, above a river gorge in the Tsitsikamma forest. The bridge walk and the plunge are both extraordinary.",
        tag: "Adventure - Garden Route",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Bloukrans Bridge bungee jump world's highest Garden Route",
      },
      {
        title: "Soweto Township Tour",
        desc: "A half-day guided Soweto tour — Vilakazi Street (the only street in the world to have housed two Nobel Peace Prize winners), the 1976 Hector Pieterson Memorial, the Mandela House museum, and the vibrant street food and shebeen culture.",
        tag: "Culture - Soweto",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Soweto tour Vilakazi Street Mandela shebeen South Africa",
      },
      {
        title: "Braai Under the Stars",
        desc: "A South African braai (barbecue) is a cultural institution — the open fire, the boerewors, the social gathering that can last all afternoon and evening. The Karoo, the Winelands, and the Bushveld all provide extraordinary settings.",
        tag: "Culture - National",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "South Africa braai boerewors fire cultural tradition",
      },
      {
        title: "Hermanus Whale Watching",
        desc: "Walk the Hermanus cliff path June–December — southern right whale mothers and calves in Walker Bay below, sometimes within 20 metres of the shore. The whale crier blows his kelp horn when whales are spotted in the bay.",
        tag: "Wildlife - Hermanus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "Hermanus cliff path whale watching southern right South Africa",
      },
    ],
    eatSubtitle:
      "South African food is one of Africa's richest — Cape Malay bobotie and gatsby, Durban bunny chow, a Stellenbosch wine lunch, Knysna oysters, boerewors off a roadside braai, Xhosa umngqusho, and the extraordinary craft beer and artisan coffee scene in Cape Town.",
    eat: [
      {
        category: "Cape Malay",
        name: "Bobotie",
        desc: "South Africa's national dish — spiced minced meat (traditionally lamb or beef) with turmeric, apricot jam, and bay leaves, baked with an egg custard topping. A Cape Malay recipe brought by slaves from the Dutch East Indies in the 17th century.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Bobotie South Africa national dish Cape Malay spiced",
      },
      {
        category: "Durban Indian",
        name: "Bunny Chow",
        desc: "A hollowed-out loaf of white bread filled with curry — lamb, beef, or bean — invented by Durban's Indian community and now a national street food treasure. Eaten with your hands from the bread bowl in a Durban beachfront café.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Bunny chow curry bread Durban Indian South Africa",
      },
      {
        category: "Braai Culture",
        name: "Boerewors and Potjiekos",
        desc: "Boerewors — the coiled beef and spice sausage cooked on the braai — is South Africa's most loved street food. Potjiekos (little pot food) is a slow-cooked stew made in a cast-iron pot directly over coals, a Sunday institution across the country.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "Boerewors braai potjiekos South Africa sausage",
      },
      {
        category: "Garden Route",
        name: "Knysna Oysters",
        desc: "The Knysna Lagoon produces some of the world's finest oysters — plump, briny, and served ice-cold at the Knysna Waterfront or the Featherbed Nature Reserve. The annual Knysna Oyster Festival in July celebrates them with righteous enthusiasm.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Knysna oysters lagoon Garden Route South Africa",
      },
      {
        category: "Drink",
        name: "Cape Wine, Craft Beer, and Rooibos",
        desc: "Stellenbosch Cabernet, Swartland Chenin Blanc, and Walker Bay Pinot Noir are world-class. Craft beer has exploded in Cape Town — Woodstock Brewery, Devil's Peak, and Darling Brew are the standouts. Rooibos tea is endemic to the Cederberg and sold everywhere.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Cape wine craft beer rooibos tea South Africa",
      },
    ],
    staySubtitle:
      "Cape Town for the peninsula and winelands; the private Kruger reserves for big five; the Garden Route for the coastal drive; the Drakensberg for hiking; Johannesburg for the city circuit.",
    stay: [
      {
        type: "Cape Town",
        area: "Cape Town",
        desc: "The Silo Hotel (V&A Waterfront) and The Twelve Apostles (Camps Bay) are the city's finest. Ellerman House in Bantry Bay and Kensington Place in Gardens offer boutique alternatives. The Bo-Kaap area has excellent guesthouses.",
        picks: ["The Silo Hotel Cape Town", "Twelve Apostles Hotel Camps Bay", "Ellerman House"],
      },
      {
        type: "Winelands",
        area: "Stellenbosch / Franschhoek",
        desc: "La Residence and Le Quartier Français in Franschhoek are the valley's finest. Delaire Graff Estate above Stellenbosch has extraordinary views. Babylonstoren is a working farm and design hotel.",
        picks: ["La Residence Franschhoek", "Delaire Graff Estate", "Babylonstoren"],
      },
      {
        type: "Kruger Private",
        area: "Sabi Sand / Timbavati",
        desc: "Singita Boulders and Singita Ebony in the Sabi Sand are the apex. &Beyond Kirkman's Kamp and Lion Sands have excellent reputations. Tanda Tula in the Timbavati is the Boulders equivalent at lower cost.",
        picks: ["Singita Boulders Lodge", "&Beyond Kirkman's Kamp", "Tanda Tula Timbavati"],
      },
      {
        type: "Garden Route",
        area: "Knysna / Wilderness / Tsitsikamma",
        desc: "Pezula Resort (Knysna) and Grootbos Private Nature Reserve (near Hermanus) are the finest. Monkey Valley and Hog Hollow offer excellent mid-range in forest settings.",
        picks: ["Pezula Resort Knysna", "Grootbos Private Nature Reserve", "Hog Hollow Forest Lodge"],
      },
      {
        type: "Johannesburg",
        area: "Sandton / Rosebank",
        desc: "The Saxon Hotel in Saxonwold (where Mandela wrote Long Walk to Freedom) is the city's finest. Johannesburg boutique hotels in Rosebank and Melrose Arch offer excellent alternatives.",
        picks: ["The Saxon Hotel Johannesburg", "54 on Bath Rosebank", "The Peech Hotel"],
      },
    ],
    map: {
      center: [-29.0, 25.0],
      zoom: 5.4,
      seeSpots: [
        { lat: -33.96, lng: 18.41, name: "Table Mountain", desc: "Cape Town iconic summit" },
        { lat: -24.0, lng: 31.5, name: "Kruger National Park", desc: "Big five safari" },
        { lat: -34.35, lng: 18.47, name: "Cape Peninsula", desc: "Cape of Good Hope" },
        { lat: -33.9, lng: 22.4, name: "Garden Route", desc: "Knysna to Tsitsikamma" },
        { lat: -33.93, lng: 18.86, name: "Stellenbosch / Franschhoek", desc: "Cape Winelands" },
        { lat: -33.72, lng: 18.37, name: "Robben Island", desc: "Mandela prison UNESCO" },
        { lat: -28.7, lng: 29.1, name: "Drakensberg", desc: "UNESCO Amphitheatre" },
        { lat: -24.5, lng: 30.8, name: "Blyde River Canyon", desc: "Three Rondavels" },
        { lat: -26.27, lng: 27.87, name: "Soweto", desc: "Township history culture" },
        { lat: -34.42, lng: 19.23, name: "Hermanus", desc: "Whale watching Walker Bay" },
      ],
      doSpots: [
        { lat: -33.96, lng: 18.41, name: "Table Mountain Cable Car", desc: "Sunrise first car" },
        { lat: -24.5, lng: 31.3, name: "Sabi Sand Leopard Drive", desc: "Private reserve night" },
        { lat: -34.09, lng: 18.33, name: "Chapman's Peak Drive", desc: "Cliff road peninsula" },
        { lat: -26.18, lng: 28.03, name: "Apartheid Museum", desc: "Johannesburg history" },
        { lat: -33.91, lng: 19.12, name: "Franschhoek Wine Tram", desc: "Valley estate hopping" },
        { lat: -34.19, lng: 18.45, name: "Boulders Beach Penguins", desc: "African penguin colony" },
        { lat: -33.97, lng: 23.41, name: "Bloukrans Bungee", desc: "World's highest 216m" },
        { lat: -26.27, lng: 27.87, name: "Soweto Tour", desc: "Vilakazi Street Mandela" },
      ],
      staySpots: [
        { lat: -33.9, lng: 18.42, name: "Cape Town", desc: "Peninsula city hotels" },
        { lat: -33.93, lng: 18.86, name: "Winelands", desc: "Stellenbosch Franschhoek" },
        { lat: -24.5, lng: 31.3, name: "Kruger Private Reserves", desc: "Sabi Sand Timbavati" },
        { lat: -33.9, lng: 22.4, name: "Garden Route", desc: "Knysna Tsitsikamma" },
        { lat: -26.1, lng: 28.05, name: "Johannesburg", desc: "Sandton city hotels" },
      ],
    },
    dayTrips: [
      {
        title: "Cape Peninsula Full Day — Penguins, Good Hope, Chapman's Peak",
        subtitle: "The classic Cape Town day out — the full peninsula circuit from Cape Town through Hout Bay, Chapman's Peak Drive, the penguin colony at Boulders Beach, the Cape of Good Hope, and back through Constantia's vineyards.",
        tag: "Nature - Cape Town Full Day",
        distance: "150km circular peninsula route",
        duration: "Full day (8 hours)",
        transport: "Car from Cape Town",
        steps: [
          { time: "8AM", text: "Depart Cape Town south through the southern suburbs to Hout Bay." },
          { time: "9AM", text: "Chapman's Peak Drive — 9km of cliff-hugging road above the Atlantic." },
          { time: "10:30AM", text: "Boulders Beach near Simon's Town — African penguins in their thousands, nesting between the boulders." },
          { time: "12PM", text: "Drive south to Cape Point and the Cape of Good Hope — the southwestern tip of Africa." },
          { time: "1:30PM", text: "Lunch at the Two Oceans Restaurant at Cape Point with the peninsula stretching north." },
          { time: "3PM", text: "Return via Constantia — stop at Groot Constantia (South Africa's oldest winery) for a tasting." },
        ],
      },
      {
        title: "Stellenbosch and Franschhoek Wine Day",
        subtitle: "A day in the Cape Winelands — Stellenbosch's Cape Dutch architecture and cellar doors in the morning, then across the Franschhoek Pass to the valley of the Huguenots for a long lunch at one of South Africa's finest restaurants.",
        tag: "Food & Wine - Winelands Day",
        distance: "~80km from Cape Town",
        duration: "Full day (8 hours)",
        transport: "Car or wine tour from Cape Town",
        steps: [
          { time: "9AM", text: "Depart Cape Town east on the N1 through the Huguenot Tunnel." },
          { time: "10AM", text: "Stellenbosch — walk the oak-lined streets and visit two estate cellar doors (Rust en Vrede, Rust en Vrij)." },
          { time: "12PM", text: "Drive over the Franschhoek Pass — one of the great short drives in South Africa." },
          { time: "12:30PM", text: "Franschhoek Wine Tram hop or walk the village — over 40 wine estates in a 10km valley." },
          { time: "1PM", text: "Long lunch at The Tasting Room at Le Quartier Français or The French Connection." },
          { time: "4PM", text: "Return to Cape Town via the N2 coastal route through Somerset West." },
        ],
      },
      {
        title: "Soweto and Apartheid Museum",
        subtitle: "A full Johannesburg historical day — the Apartheid Museum in the morning (allow at least 3 hours), then a guided Soweto afternoon through Vilakazi Street, the Hector Pieterson Memorial, and a shebeen sundowner.",
        tag: "Culture - Johannesburg Full Day",
        distance: "Johannesburg city and Soweto",
        duration: "Full day (8 hours)",
        transport: "Car or guided tour from Sandton",
        steps: [
          { time: "9AM", text: "Apartheid Museum — enter through the 'whites only' or 'non-whites' gate assigned by your ticket." },
          { time: "9:30AM", text: "The full museum circuit — the Treason Trial gallery, the necklacing footage, the Mandela section." },
          { time: "12:30PM", text: "Drive to Soweto — cross the Soweto Highway." },
          { time: "1PM", text: "Lunch at Sakhumzi restaurant on Vilakazi Street." },
          { time: "2PM", text: "Hector Pieterson Memorial — the photograph that changed the world, 1976." },
          { time: "3PM", text: "Mandela House museum — Number 8115 Vilakazi Street, where Mandela lived before his arrest." },
          { time: "5PM", text: "Shebeen sundowner in Soweto with a local guide." },
        ],
      },
      {
        title: "Blyde River Canyon Panorama Route",
        subtitle: "The Panorama Route through Mpumalanga — God's Window viewpoint, Bourke's Luck Potholes, the Three Rondavels overlook, and the Lisbon and Berlin Falls, all within a 100km circuit from Hazyview.",
        tag: "Nature - Mpumalanga Day",
        distance: "~100km circuit from Hazyview",
        duration: "Full day (7 hours)",
        transport: "Car from Hazyview or White River",
        steps: [
          { time: "7AM", text: "Depart Hazyview north on the R536 toward Graskop." },
          { time: "8AM", text: "God's Window — the escarpment view over the Lowveld, 900m below." },
          { time: "9:30AM", text: "Lisbon Falls and Berlin Falls — two of Mpumalanga's finest waterfalls in quick succession." },
          { time: "11AM", text: "Bourke's Luck Potholes — cylindrical potholes carved by the confluence of the Blyde and Treur rivers." },
          { time: "12:30PM", text: "Three Rondavels overlook — the canyon's most iconic view, three domed peaks above the reservoir." },
          { time: "2PM", text: "Drive south back to Hazyview for Kruger afternoon game drive." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "A week combining Cape Town, the Cape Peninsula and Winelands, and a Kruger big five safari.",
        arrival: {
          route: "Your City -> Cape Town (CPT)",
          meta: "Cape Town International Airport connects directly to London, Amsterdam, Frankfurt, Dubai, and Johannesburg. British Airways, Virgin Atlantic, Lufthansa, and Emirates all fly direct.",
          sideTitle: "Two-Centre",
          sideCopy: "Fly into Cape Town and out of Johannesburg (or vice versa) for a linear trip avoiding backtracking.",
        },
        days: [
          {
            name: "Arrival",
            title: "Cape Town Arrival",
            location: "Cape Town",
            activities: [
              { time: "PM", text: "Arrive CPT, V&A Waterfront hotel check-in." },
              { time: "Night", text: "Boulders Beach area or Cape Town Waterfront dinner." },
            ],
          },
          {
            name: "Table Mountain",
            title: "Table Mountain and City",
            location: "Cape Town",
            activities: [
              { time: "AM", text: "First cable car up Table Mountain." },
              { time: "PM", text: "Bo-Kaap neighbourhood and Cape Malay lunch." },
            ],
          },
          {
            name: "Peninsula",
            title: "Cape Peninsula Circuit",
            location: "Cape Peninsula",
            activities: [
              { time: "AM", text: "Chapman's Peak Drive and Boulders Beach penguins." },
              { time: "PM", text: "Cape of Good Hope and Constantia wine tasting." },
            ],
          },
          {
            name: "Winelands",
            title: "Stellenbosch and Franschhoek",
            location: "Cape Winelands",
            activities: [
              { time: "AM", text: "Stellenbosch cellar doors and Cape Dutch walk." },
              { time: "PM", text: "Franschhoek long lunch at Le Quartier Français." },
            ],
          },
          {
            name: "Fly Kruger",
            title: "Fly to Kruger",
            location: "Sabi Sand / Kruger",
            activities: [
              { time: "AM", text: "Fly CPT to Johannesburg, connect to Hoedspruit or Nelspruit." },
              { time: "PM", text: "Private reserve afternoon game drive — first big five." },
            ],
          },
          {
            name: "Kruger",
            title: "Full Safari Day",
            location: "Sabi Sand / Kruger",
            activities: [
              { time: "AM", text: "Dawn game drive — leopard and lion." },
              { time: "PM", text: "Afternoon drive and night drive." },
            ],
          },
          {
            name: "Departure",
            title: "Morning Drive and Fly Out",
            location: "JNB",
            activities: [
              { time: "AM", text: "Final morning game drive — elephant and rhino." },
              { time: "PM", text: "Charter to Johannesburg and international departure." },
            ],
          },
        ],
        departure: {
          route: "Johannesburg (JNB) -> Your City",
          meta: "O.R. Tambo connects to virtually everywhere. A majority of southern Africa flights transit JNB.",
          sideTitle: "Best Time",
          sideCopy: "Cape Town: October–April (dry summer). Kruger: May–October (dry, wildlife concentrated at waterholes).",
        },
      },
      "10": {
        summary: "Ten days adding the Garden Route, Hermanus whales, and a deeper Kruger circuit including the Panorama Route.",
        arrival: {
          route: "Your City -> Cape Town (CPT)",
          meta: "Ten days allows a proper Garden Route drive between Cape Town and Johannesburg. Drive the N2 east from Cape Town to Port Elizabeth, then fly to Kruger.",
          sideTitle: "Drive Direction",
          sideCopy: "Drive the Garden Route west to east — Cape Town to PE — so you fly into CPT and fly out of Johannesburg via Kruger.",
        },
        days: [
          { name: "Arrival", title: "Cape Town", location: "Cape Town", activities: [{ time: "PM", text: "Arrive CPT." }, { time: "Night", text: "Waterfront dinner." }] },
          { name: "Cape Town", title: "Table Mountain and Peninsula", location: "Cape Town", activities: [{ time: "AM", text: "Table Mountain cable car." }, { time: "PM", text: "Cape Peninsula circuit." }] },
          { name: "Hermanus", title: "Drive to Hermanus", location: "Hermanus", activities: [{ time: "AM", text: "Winelands cellar door stop." }, { time: "PM", text: "Hermanus cliff path whale watching." }] },
          { name: "Garden Route", title: "Mossel Bay and Wilderness", location: "Wilderness / George", activities: [{ time: "AM", text: "Drive east past Swellendam." }, { time: "PM", text: "Wilderness Beach walk and sunset." }] },
          { name: "Knysna", title: "Knysna Lagoon and Oysters", location: "Knysna", activities: [{ time: "AM", text: "Featherbed Nature Reserve boat." }, { time: "PM", text: "Knysna Waterfront oysters." }] },
          { name: "Tsitsikamma", title: "Storms River and Bloukrans", location: "Tsitsikamma", activities: [{ time: "AM", text: "Storms River mouth walk." }, { time: "PM", text: "Bloukrans bungee jump 216m." }] },
          { name: "Fly Kruger", title: "Fly Port Elizabeth to Kruger", location: "Kruger / Sabi Sand", activities: [{ time: "AM", text: "Drive to PE airport and fly to Hoedspruit." }, { time: "PM", text: "First game drive — big five." }] },
          { name: "Kruger", title: "Kruger Full Safari Day", location: "Sabi Sand", activities: [{ time: "AM", text: "Dawn leopard drive." }, { time: "PM", text: "Afternoon and night drive." }] },
          { name: "Panorama", title: "Panorama Route Day Trip", location: "Mpumalanga", activities: [{ time: "AM", text: "God's Window and Bourke's Luck Potholes." }, { time: "PM", text: "Three Rondavels and return." }] },
          { name: "Departure", title: "Final Drive and Fly Out", location: "JNB", activities: [{ time: "AM", text: "Sunrise game drive." }, { time: "PM", text: "Charter JNB and international departure." }] },
        ],
        departure: {
          route: "Johannesburg (JNB) -> Your City",
          meta: "Standard JNB routing. Allow an afternoon in Johannesburg for the Apartheid Museum before departure.",
          sideTitle: "Soweto Add-On",
          sideCopy: "If flying out of JNB, always allow a half-day for the Soweto and Apartheid Museum circuit — it is essential South Africa.",
        },
      },
    },
    footerLine1: "Discover South Africa — Table Mountain, Kruger's leopards, the Cape Winelands, the Garden Route, Soweto's history, and the most complete country in Africa",
    footerLine2: "No visa required for most Western nationalities. Two-centre trip recommended: fly into Cape Town, out of Johannesburg. Rooibos is always free.",
  },

  lesotho: {
    country: "Lesotho",
    heroEyebrow: "Southern Africa — The Mountain Kingdom in the Sky",
    heroTitleHtml: "Le<em>so</em>tho",
    heroTagline:
      "The only country in the world lying entirely above 1,000 metres — an independent mountain kingdom completely surrounded by South Africa, where Basotho horsemen in blankets and conical hats ride across high plateau grassland, the Maluti Mountains rise to 3,482m, the Orange River is born from Afromontane springs, San Bushman rock art survives in remote sandstone caves, and the extraordinary Sani Pass zigzags 1,300 metres up the Drakensberg escarpment into a landscape that feels entirely removed from the world below.",
    heroStats: [
      { label: "Capital", value: "Maseru" },
      { label: "Currency", value: "LSL (Lesotho Loti, pegged to ZAR)" },
      { label: "Language", value: "Sesotho, English" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "Lesotho is southern Africa's most overlooked destination — a true mountain kingdom where traditional Basotho culture survives in daily life, the landscape is extraordinary, and the experience is genuinely unlike anything in the surrounding region.",
    know: [
      {
        icon: "🏔️",
        title: "The Roof of Africa",
        text: "Lesotho's lowest point is 1,400m — making it the only country in the world entirely above 1,000m. The Maluti and Drakensberg ranges in the east rise to Thabana-Ntlenyana at 3,482m, the highest peak in southern Africa.",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Most nationalities receive a free visa on arrival at Lesotho's borders and airports for up to 30 days. The Sani Pass border crossing is the most scenic entry point. South African residents can enter with their SA ID documents.",
      },
      {
        icon: "🐴",
        title: "Basotho Ponies",
        text: "The Basotho pony is the traditional transport of the mountain kingdom — hardy, sure-footed horses that have been bred for the Lesotho highlands for centuries. Pony trekking between remote mountain villages is one of Lesotho's signature experiences.",
      },
      {
        icon: "🧥",
        title: "The Basotho Blanket",
        text: "The Basotho woollen blanket is the national dress — worn by men, women, and children as a cloak, available in dozens of traditional patterns, each with cultural significance. Buying one at the Maseru market is the definitive Lesotho souvenir.",
      },
      {
        icon: "🌧️",
        title: "Climate",
        text: "Lesotho has a harsh mountain climate — summers (November–February) are warm with heavy afternoon thunderstorms. Winters (June–August) are bitterly cold with snowfall on the high peaks. The best trekking is March–May and September–November.",
      },
      {
        icon: "🎿",
        title: "Skiing",
        text: "Afriski Mountain Resort near Butha-Buthe offers the only skiing in southern Africa outside South Africa — a small but genuine ski resort on the Lesotho plateau at 3,222m, extraordinary in the context of southern Africa.",
      },
      {
        icon: "💧",
        title: "Water",
        text: "Lesotho is called the 'water tower of southern Africa' — the Orange (Senqu) River is born here, and the Lesotho Highlands Water Project transfers water to water-scarce South Africa via a series of enormous dams. The Katse Dam is an architectural marvel.",
      },
      {
        icon: "🎨",
        title: "San Rock Art",
        text: "The remote Drakensberg caves and overhangs of eastern Lesotho contain some of the finest San rock art in southern Africa — hundreds of sites accessible only on foot or horseback, with painted figures that are often 2,000 years old.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "The South African Rand is accepted everywhere in Lesotho. ATMs in Maseru and major towns. The country is extremely affordable — accommodation, guides, and pony trekking are all inexpensive by regional standards.",
      },
      {
        icon: "🚗",
        title: "Getting There",
        text: "Maseru is a 1-hour drive from Bloemfontein or 4 hours from Johannesburg. The Sani Pass (Drakensberg side) requires a 4x4 and is accessed from KwaZulu-Natal. Most visitors combine Lesotho with a South Africa trip.",
      },
    ],
    seeSubtitle:
      "The Sani Pass and the Drakensberg escarpment, Basotho horsemen on the plateau, Katse Dam and the highlands water project, the Ts'ehlanyane highland wilderness, San rock art in remote caves, Thabana-Ntlenyana summit, and the Maluti sunset over the mountain kingdom.",
    see: [
      {
        name: "Sani Pass",
        title: "The Drakensberg's Most Dramatic Road",
        desc: "A 4x4-only track climbing 1,300 metres up the Drakensberg escarpment from KwaZulu-Natal into the Lesotho plateau — hairpin bends cut into the cliff face, extraordinary views over the South African lowlands, and the Sani Top Chalet at the summit.",
        tag: "Adventure - Mountain Pass",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Sani Pass Drakensberg 4x4 Lesotho escarpment",
      },
      {
        name: "Ts'ehlanyane National Park",
        title: "Lesotho's Wild Mountain Heartland",
        desc: "A remote highland wilderness in the Maluti Mountains — montane grassland, patches of indigenous forest, the Ts'ehlanyane River gorge, and extraordinary panoramic views across the Lesotho plateau. The park receives very few visitors.",
        tag: "Nature - Remote Wilderness",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Ts'ehlanyane National Park Maluti Mountains Lesotho",
      },
      {
        name: "Katse Dam",
        title: "Engineering Marvel in the Mountains",
        desc: "The double-curvature arch Katse Dam — 185m high and one of Africa's great engineering achievements — holds back the Malibamatso River in a mountain gorge and transfers water to South Africa. The visitor centre and dam wall walk are extraordinary.",
        tag: "Nature & Engineering",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Katse Dam arch Lesotho highlands water project",
      },
      {
        name: "Sehlabathebe National Park",
        title: "Lesotho's Pristine Wilderness",
        desc: "A remote plateau park in the far southeast — sandstone formations, San rock art, alpine wetlands, bearded vultures overhead, and a landscape of extraordinary peace accessible only by 4x4 or on horseback from the Drakensberg escarpment.",
        tag: "Nature - San Rock Art",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Sehlabathebe National Park sandstone San rock art Lesotho",
      },
      {
        name: "Maseru",
        title: "The Mountain Kingdom Capital",
        desc: "A small, walkable capital with a lively market selling Basotho blankets and crafts, the Basotho Hat shop (shaped like a conical Basotho hat), and the gateway to the surrounding mountain landscape.",
        tag: "Capital - Gateway",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Maseru capital Basotho blanket hat market Lesotho",
      },
      {
        name: "Malealea Valley",
        title: "The Gateway to the Highlands",
        desc: "A valley south of Maseru — the gateway for pony trekking into the Lesotho highlands, with extraordinary views of the Maluti Mountains from the Malealea Lodge, traditional Basotho village visits, and the famous 'Gates of Paradise' pass.",
        tag: "Culture & Adventure - Pony Trek",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Malealea Valley pony trek Basotho village Lesotho",
      },
      {
        name: "Thabana-Ntlenyana",
        title: "Southern Africa's Highest Peak",
        desc: "At 3,482m, Thabana-Ntlenyana is the highest point in southern Africa outside of the Rwenzori — a two-day hike from the Sani Pass area across rolling Afromontane plateau, with bearded vultures and Grey rhebok on the approach.",
        tag: "Adventure - Highest Peak",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Thabana-Ntlenyana highest peak southern Africa Lesotho",
      },
      {
        name: "Dinosaur Footprints, Quthing",
        title: "Jurassic Tracks in the Sandstone",
        desc: "Near Quthing in the south, 180-million-year-old dinosaur footprints are embedded in the sandstone alongside San rock art — a remarkable co-location of geological and human history on a remote rock shelf.",
        tag: "History - Dinosaur Tracks",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Dinosaur footprints Quthing sandstone Lesotho",
      },
      {
        name: "Basotho Cultural Village",
        title: "Living History in the Free State",
        desc: "Just across the border at the Golden Gate Highlands, the Basotho Cultural Village recreates traditional Basotho homestead life — huts from different historical eras, traditional cooking demonstrations, and guided cultural context for the mountain kingdom.",
        tag: "Culture - Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Basotho Cultural Village traditional hut South Africa",
      },
      {
        name: "Afriski Mountain Resort",
        title: "Skiing in Africa",
        desc: "At 3,222m on the Lesotho plateau, Afriski is the only ski resort in southern Africa (outside South Africa's own tiny resorts) — a genuine ski slope accessible July–August when the Lesotho highlands receive consistent snowfall.",
        tag: "Adventure - Skiing",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Afriski Mountain Resort skiing Lesotho plateau",
      },
    ],
    doSubtitle:
      "Driving the Sani Pass in a 4x4, pony trekking between Basotho villages, hiking to Thabana-Ntlenyana, the Katse Dam wall walk, San rock art at Sehlabathebe, skiing at Afriski in July, and buying a Basotho blanket at Maseru market.",
    do: [
      {
        title: "Drive the Sani Pass",
        desc: "Take a 4x4 up the Sani Pass — 8km of hairpin bends on a gravel track climbing 1,300m from the South African lowveld to the Lesotho plateau, with views over the entire Drakensberg escarpment from the summit.",
        tag: "Adventure - Sani Pass",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Sani Pass 4x4 climb Drakensberg escarpment Lesotho",
      },
      {
        title: "Pony Trek to a Basotho Village",
        desc: "Hire a Basotho pony at Malealea Lodge and ride across the plateau to a remote village — the guides are local, the horses sure-footed on the mountain tracks, and the overnight village stays reveal a way of life unchanged for generations.",
        tag: "Adventure - Pony Trek",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Pony trek Basotho village Malealea Lesotho highlands",
      },
      {
        title: "Katse Dam Wall Walk",
        desc: "Walk across the top of the Katse Dam — 185m of double-curvature arch above the Malibamatso River gorge, with the dam lake stretching 45km back into the mountains and the sound of the overflow spillway below.",
        tag: "Engineering - Katse Dam",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Katse Dam wall walk arch Lesotho highlands water",
      },
      {
        title: "Buy a Basotho Blanket",
        desc: "The Maseru market and the Basotho Hat shop sell authentic Basotho wool blankets in the traditional patterns — the Seanamarena, the Sehalahala, and the coronation patterns each have specific cultural meanings, and the blanket is the definitive Lesotho souvenir.",
        tag: "Culture - Maseru",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Basotho blanket pattern Maseru market Lesotho souvenir",
      },
      {
        title: "Hike Sehlabathebe for Rock Art",
        desc: "A multi-day hike into Sehlabathebe National Park — San paintings in remote sandstone overhangs, bearded vultures on the thermals, and a silence and emptiness that is extraordinary in a world where wilderness is shrinking.",
        tag: "Adventure - Rock Art",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Sehlabathebe hike San rock art sandstone Lesotho",
      },
      {
        title: "Sani Top Chalet — Highest Pub in Africa",
        desc: "At the top of the Sani Pass, the Sani Top Chalet is the highest pub in Africa at 2,874m — a cold Maluti beer on the deck overlooking the Drakensberg escarpment with South Africa spread out 1,300m below.",
        tag: "Culture - Sani Top",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Sani Top Chalet highest pub Africa Lesotho beer",
      },
    ],
    eatSubtitle:
      "Lesotho's food is simple highland fare — papa (maize porridge) with morogo (wild spinach), grilled lamb on a mountain fire, fresh trout from the highland streams, and a cold Maluti beer at the Sani Top Chalet.",
    eat: [
      {
        category: "Mountain Staple",
        name: "Papa and Morogo",
        desc: "Papa is Lesotho's stiff maize porridge — identical to South African pap — served with morogo (wild spinach or pumpkin leaves) and braised lamb or chicken. The foundation of every Basotho meal, eaten from a communal pot.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Papa morogo maize porridge Basotho Lesotho highland",
      },
      {
        category: "Mountain Protein",
        name: "Grilled Lamb and Offal",
        desc: "The Basotho are herders — lamb and mutton are the primary meats, grilled over an open fire or slow-cooked in a potjie. Sheep head and offal braai (skop and skilpadjies) are beloved at rural gatherings and roadside stops.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Grilled lamb Basotho highland fire Lesotho",
      },
      {
        category: "Highland Luxury",
        name: "Trout from the Mountain Streams",
        desc: "The highland streams of Lesotho are stocked with rainbow and brown trout introduced in the colonial era — caught and grilled fresh at lodges like Malealea, they are extraordinarily good in the mountain air.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg/960px-Fisherman_going_to_work_at_dawn%2C_Mandina_Lodges%2C_Makasutu%2C_The_Gambia_%286646637059%29.jpg",
        alt: "Trout highland stream Malealea Lesotho mountain",
      },
      {
        category: "Market Food",
        name: "Mageu and Fat Cakes",
        desc: "Mageu is a fermented sorghum drink — thin, sour, and drunk cold from plastic packets at any market or taxi rank. Fat cakes (fried dough balls) are the universal street snack, sold from oil-drum fryers at every roadside.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Mageu sorghum fat cakes market Lesotho street",
      },
      {
        category: "Drink",
        name: "Maluti Beer and Joala",
        desc: "Maluti is Lesotho's national lager — brewed in Maseru and drunk cold at the Sani Top Chalet and every lodge. Joala is traditional sorghum beer brewed by Basotho women, drunk from clay pots at village gatherings and social events.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Maluti beer joala sorghum Lesotho national drink",
      },
    ],
    staySubtitle:
      "Maseru for the capital; Malealea Lodge for the pony trek gateway; Sani Top Chalet at the pass summit; Ts'ehlanyane for highland wilderness; Afriski for winter skiing.",
    stay: [
      {
        type: "Gateway",
        area: "Malealea",
        desc: "Malealea Lodge is the finest base for Lesotho highlands travel — a friendly, characterful lodge with the best pony trek operation in the country and extraordinary mountain views.",
        picks: ["Malealea Lodge", "Malealea backpacker chalets"],
      },
      {
        type: "Sani Pass",
        area: "Sani Top",
        desc: "Sani Top Chalet is the only accommodation at the top of the pass — basic but extraordinary, sleeping at 2,874m with the Drakensberg views from the braai deck.",
        picks: ["Sani Top Chalet", "Sani Pass Backpackers (KZN side)"],
      },
      {
        type: "Capital",
        area: "Maseru",
        desc: "Avani Maseru Hotel is the capital's most comfortable option. Several guesthouses around the city centre serve the budget traveller.",
        picks: ["Avani Maseru Hotel", "Lancer's Inn Maseru"],
      },
      {
        type: "Highland Wilderness",
        area: "Ts'ehlanyane",
        desc: "Ts'ehlanyane Lodge inside the national park is a comfortable option for the highland wilderness experience.",
        picks: ["Ts'ehlanyane Lodge"],
      },
      {
        type: "Ski Resort",
        area: "Afriski",
        desc: "Afriski Mountain Resort has its own accommodation — chalets and a hotel at 3,222m, the only ski resort stay in southern Africa.",
        picks: ["Afriski Mountain Resort chalets"],
      },
    ],
    map: {
      center: [-29.6, 28.3],
      zoom: 8.0,
      seeSpots: [
        { lat: -29.6, lng: 29.27, name: "Sani Pass", desc: "Drakensberg 4x4 climb" },
        { lat: -28.7, lng: 28.2, name: "Ts'ehlanyane NP", desc: "Maluti highland wilderness" },
        { lat: -29.32, lng: 28.52, name: "Katse Dam", desc: "Arch dam engineering marvel" },
        { lat: -29.86, lng: 29.04, name: "Sehlabathebe NP", desc: "Rock art remote plateau" },
        { lat: -29.31, lng: 27.49, name: "Maseru", desc: "Capital blanket market" },
        { lat: -29.83, lng: 27.67, name: "Malealea Valley", desc: "Pony trek gateway" },
        { lat: -29.47, lng: 29.27, name: "Thabana-Ntlenyana", desc: "Southern Africa highest" },
        { lat: -30.4, lng: 27.7, name: "Quthing Dinosaur Tracks", desc: "180m year old footprints" },
        { lat: -28.75, lng: 28.68, name: "Afriski Resort", desc: "Africa's ski slope" },
      ],
      doSpots: [
        { lat: -29.6, lng: 29.27, name: "Sani Pass Drive", desc: "4x4 hairpin climb" },
        { lat: -29.83, lng: 27.67, name: "Pony Trek", desc: "Malealea village rides" },
        { lat: -29.32, lng: 28.52, name: "Katse Dam Walk", desc: "Arch dam wall top" },
        { lat: -29.31, lng: 27.49, name: "Basotho Blanket", desc: "Maseru market shop" },
        { lat: -29.86, lng: 29.04, name: "Rock Art Hike", desc: "Sehlabathebe cave paintings" },
        { lat: -29.6, lng: 29.27, name: "Sani Top Pub", desc: "Highest pub Africa" },
      ],
      staySpots: [
        { lat: -29.83, lng: 27.67, name: "Malealea Lodge", desc: "Pony trek base" },
        { lat: -29.6, lng: 29.27, name: "Sani Top Chalet", desc: "Pass summit stay" },
        { lat: -29.31, lng: 27.49, name: "Maseru", desc: "Capital hotels" },
        { lat: -28.7, lng: 28.2, name: "Ts'ehlanyane Lodge", desc: "Highland park" },
        { lat: -28.75, lng: 28.68, name: "Afriski Resort", desc: "Ski resort chalets" },
      ],
    },
    dayTrips: [
      {
        title: "Sani Pass Summit and Sani Top Chalet",
        subtitle: "Drive the Sani Pass from the KwaZulu-Natal side in a 4x4 — 8km of dramatic switchbacks climbing 1,300m to the Lesotho plateau, a cold Maluti at the Sani Top Chalet (highest pub in Africa), and the extraordinary views back down the escarpment.",
        tag: "Adventure - Sani Pass Day",
        distance: "Sani Pass — from Underberg, KZN",
        duration: "Full day (7 hours)",
        transport: "4x4 from Underberg or Sani Pass operators",
        steps: [
          { time: "7:30AM", text: "Depart Underberg with a 4x4 guide or rent and drive independently." },
          { time: "8:30AM", text: "Reach the South Africa / Lesotho border post at the base of the pass." },
          { time: "9AM", text: "Begin the ascent — 8km of switchbacks, the Drakensberg escarpment dropping away to the east." },
          { time: "10AM", text: "Arrive at the Lesotho border post and Sani Top Chalet at 2,874m." },
          { time: "10:30AM", text: "Cold Maluti lager on the deck — the highest pub in Africa, view over the entire KZN escarpment." },
          { time: "12PM", text: "Walk onto the Lesotho plateau — bearded vultures, grey rhebok, and the highland sky." },
          { time: "1PM", text: "Descent — slower on the way down, the views south are extraordinary." },
        ],
      },
      {
        title: "Malealea Pony Trek and Village Stay",
        subtitle: "A one or two-night pony trek from Malealea Lodge into the Maluti Mountains — riding across the plateau on a Basotho pony, staying overnight in a traditional mud-brick village, eating with the family, and returning the following morning.",
        tag: "Culture - Pony Trek Overnight",
        distance: "Malealea Valley, 80km south of Maseru",
        duration: "Overnight (2 days) or full day",
        transport: "Basotho pony from Malealea Lodge",
        steps: [
          { time: "8AM", text: "Match with your Basotho pony at Malealea Lodge — the guide briefs on riding." },
          { time: "9AM", text: "Depart into the Maluti Mountains — the views open up within 30 minutes." },
          { time: "11AM", text: "Cross the 'Gates of Paradise' pass — a sandstone cleft with extraordinary views." },
          { time: "1PM", text: "Arrive at the village — lunch with the family, exploring the homestead." },
          { time: "3PM", text: "Walk to the nearby San rock art shelter." },
          { time: "Night", text: "Dinner with the family and sleep in a traditional rondavel." },
        ],
      },
      {
        title: "Maseru Market and Thaba Bosiu",
        subtitle: "A half-day Maseru cultural circuit — the market for Basotho blankets and crafts, then the short drive to Thaba Bosiu (Mountain at Night), the mountain fortress of King Moshoeshoe I where the Basotho nation was founded.",
        tag: "Culture - Maseru Half Day",
        distance: "Maseru and Thaba Bosiu, 20km",
        duration: "Half day (4 hours)",
        transport: "Car or taxi from Maseru",
        steps: [
          { time: "8AM", text: "Maseru central market — Basotho blankets, conical hats, and craft stalls." },
          { time: "9:30AM", text: "Basotho Hat shop — shaped like a traditional mokorotlo hat, sells authentic blankets." },
          { time: "11AM", text: "Drive 20km east to Thaba Bosiu." },
          { time: "11:30AM", text: "Climb the sandstone mountain with a guide — the founding fortress of the Basotho nation." },
          { time: "12:30PM", text: "The summit graves of Moshoeshoe I and his successors." },
          { time: "1:30PM", text: "Return to Maseru for lunch." },
        ],
      },
      {
        title: "Katse Dam and Highlands Water Project",
        subtitle: "Drive from Maseru into the highlands to the extraordinary Katse Dam — a 185m double-curvature arch dam in a mountain gorge, with a visitor centre explaining the Lesotho Highlands Water Project and a walk across the dam wall.",
        tag: "Engineering - Katse Day Trip",
        distance: "~120km from Maseru",
        duration: "Full day (7 hours)",
        transport: "Car on the A1 highland road",
        steps: [
          { time: "7AM", text: "Depart Maseru east on the A1 — the road climbs steadily into the Maluti Mountains." },
          { time: "9AM", text: "Arrive Katse village and visitor centre." },
          { time: "9:30AM", text: "Guided tour of the Lesotho Highlands Water Project — the transfer tunnels and engineering story." },
          { time: "11AM", text: "Walk across the dam wall — 185m of concrete arch above the Malibamatso gorge." },
          { time: "12PM", text: "Viewpoint above the dam — the lake stretches 45km back into the mountains." },
          { time: "2PM", text: "Return to Maseru via the scenic highland road." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "Lesotho is best experienced as a 3–4 day addition to a South Africa trip — Sani Pass, Malealea pony trek, and the highland landscape.",
        arrival: {
          route: "Via South Africa — Durban (DUR) or Bloemfontein (BFN) to Maseru",
          meta: "Moshoeshoe I International Airport (MSU) has limited direct connections — most visitors drive from South Africa. Bloemfontein is 1 hour; Durban is 4 hours via the Sani Pass approach.",
          sideTitle: "Sani Pass Entry",
          sideCopy: "Enter from the KwaZulu-Natal side via the Sani Pass for the most dramatic and memorable border crossing in southern Africa. Requires a 4x4.",
        },
        days: [
          {
            name: "Entry",
            title: "Sani Pass Arrival",
            location: "Sani Top / Drakensberg",
            activities: [
              { time: "AM", text: "Drive from KZN Drakensberg up the Sani Pass in a 4x4." },
              { time: "PM", text: "Sani Top Chalet — cold Maluti and the view from Africa's highest pub." },
            ],
          },
          {
            name: "Plateau",
            title: "Lesotho Plateau Exploration",
            location: "Sani Top area",
            activities: [
              { time: "AM", text: "Horseback ride or hike onto the plateau from Sani Top." },
              { time: "PM", text: "Drive west toward Mokhotlong — the vast plateau landscape." },
            ],
          },
          {
            name: "Maseru",
            title: "Drive to Maseru",
            location: "Maseru",
            activities: [
              { time: "AM", text: "Drive across the highlands — Basotho villages and mountain scenery." },
              { time: "PM", text: "Maseru market — Basotho blankets and Thaba Bosiu." },
            ],
          },
          {
            name: "Malealea",
            title: "Drive to Malealea",
            location: "Malealea",
            activities: [
              { time: "AM", text: "Drive south to Malealea Lodge." },
              { time: "PM", text: "Malealea views and pony trek briefing." },
            ],
          },
          {
            name: "Pony",
            title: "Pony Trek to Village",
            location: "Maluti Mountains",
            activities: [
              { time: "AM", text: "Full-day pony trek — Gates of Paradise and village overnight." },
            ],
          },
          {
            name: "Return",
            title: "Return from Village",
            location: "Malealea / Maseru",
            activities: [
              { time: "AM", text: "Return trek to Malealea Lodge." },
              { time: "PM", text: "Drive north to Maseru." },
            ],
          },
          {
            name: "Katse",
            title: "Katse Dam and Departure",
            location: "Maseru / Border",
            activities: [
              { time: "AM", text: "Katse Dam wall walk and visitor centre." },
              { time: "PM", text: "Exit via Maseru border to South Africa." },
            ],
          },
        ],
        departure: {
          route: "Maseru bridge border -> Bloemfontein (BFN) or continue to JNB",
          meta: "Exit via the Maseru Bridge border post into South Africa's Free State. Bloemfontein airport is 1.5 hours west.",
          sideTitle: "Combination",
          sideCopy: "Combine Lesotho with a Drakensberg hiking base (KZN) or the Golden Gate Highlands (Free State) on either side.",
        },
      },
      "10": {
        summary: "A deeper Lesotho circuit for those wanting the full highland immersion — add Sehlabathebe, Katse, and Afriski.",
        arrival: {
          route: "Same as 7-day — Sani Pass entry from KZN",
          meta: "Ten days in Lesotho alone is unusual — most combine it with South Africa. This itinerary suits the serious highland hiker or equestrian.",
          sideTitle: "Best Month",
          sideCopy: "March–May for trekking. July–August for skiing at Afriski. Avoid December–February (thunderstorm season).",
        },
        days: [
          { name: "Entry", title: "Sani Pass", location: "Sani Top", activities: [{ time: "AM", text: "Sani Pass 4x4 climb." }, { time: "PM", text: "Sani Top Chalet overnight." }] },
          { name: "Plateau", title: "Plateau Hike", location: "Drakensberg Plateau", activities: [{ time: "AM", text: "Hike onto the plateau from Sani Top." }, { time: "PM", text: "Mokhotlong drive." }] },
          { name: "Sehlabathebe", title: "Sehlabathebe", location: "Sehlabathebe NP", activities: [{ time: "AM", text: "Drive south to Sehlabathebe." }, { time: "PM", text: "Rock art shelter walk." }] },
          { name: "Sehlabathebe2", title: "Sehlabathebe Wilderness", location: "Sehlabathebe NP", activities: [{ time: "AM", text: "Full park hike — bearded vulture." }, { time: "PM", text: "Sandstone formations." }] },
          { name: "Maseru", title: "Drive to Maseru", location: "Maseru", activities: [{ time: "AM", text: "Highlands drive west." }, { time: "PM", text: "Thaba Bosiu and blanket market." }] },
          { name: "Katse", title: "Katse Dam", location: "Katse", activities: [{ time: "AM", text: "Drive to Katse Dam." }, { time: "PM", text: "Dam wall walk and visitor centre." }] },
          { name: "Malealea", title: "Malealea", location: "Malealea", activities: [{ time: "AM", text: "Drive south to Malealea Lodge." }, { time: "PM", text: "Evening views." }] },
          { name: "Pony1", title: "Pony Trek Day One", location: "Maluti Mountains", activities: [{ time: "AM", text: "Depart on horseback." }, { time: "PM", text: "Village overnight." }] },
          { name: "Pony2", title: "Pony Trek Day Two", location: "Maluti Mountains", activities: [{ time: "AM", text: "Return trek and rock art." }, { time: "PM", text: "Return to Malealea." }] },
          { name: "Departure", title: "Afriski or Border", location: "Afriski / Border", activities: [{ time: "AM", text: "Afriski (if July/Aug) or Maseru border." }, { time: "PM", text: "Exit to South Africa." }] },
        ],
        departure: {
          route: "Maseru border -> South Africa connection",
          meta: "Exit and connect onward to Johannesburg or Cape Town.",
          sideTitle: "Ski Timing",
          sideCopy: "Swap the second pony trek day for Afriski if visiting in July or August — the ski resort is a genuinely surreal southern Africa experience.",
        },
      },
    },
    footerLine1: "Discover Lesotho — the Sani Pass, Basotho pony treks, Katse Dam, San rock art, and the extraordinary mountain kingdom above the clouds",
    footerLine2: "Visa on arrival. Rand accepted everywhere. Combine with KwaZulu-Natal Drakensberg for the full escarpment experience.",
  },

  eswatini: {
    country: "Eswatini",
    heroEyebrow: "Southern Africa — Africa's Last Absolute Monarchy, Traditions, and Wilderness",
    heroTitleHtml: "Es<em>wa</em>tini",
    heroTagline:
      "Africa's last absolute monarchy — the small, landlocked Kingdom of Eswatini (formerly Swaziland) punches well above its size with the remarkable Hlane Royal National Park's lion and rhino, the extraordinary Swazi cultural traditions of the Incwala ceremony and Umhlanga Reed Dance, craft markets of extraordinary quality at Malkerns, the lush Ezulwini Valley, and a warmth and accessibility that makes it one of southern Africa's most rewarding short stops.",
    heroStats: [
      { label: "Capital", value: "Mbabane (admin) / Lobamba (royal)" },
      { label: "Currency", value: "SZL (Swazi Lilangeni, pegged to ZAR)" },
      { label: "Language", value: "Swati, English" },
      { label: "Time Zone", value: "UTC+2" },
    ],
    knowSubtitle:
      "Eswatini is one of the most overlooked countries in southern Africa — a genuinely rewarding 2–3 day stop between South Africa and Mozambique or KwaZulu-Natal, with excellent wildlife, extraordinary cultural traditions, and outstanding craft markets.",
    know: [
      {
        icon: "👑",
        title: "Africa's Last Absolute Monarchy",
        text: "King Mswati III rules Eswatini as an absolute monarch — the only absolute monarchy remaining in Africa. The royal household maintains extraordinary cultural traditions, including the annual Incwala (First Fruits) ceremony and the Umhlanga (Reed Dance).",
      },
      {
        icon: "🛂",
        title: "Visa",
        text: "Most Western nationalities do not require a visa for Eswatini — free entry on arrival for up to 30 days for EU, UK, USA, and South African passport holders. Border formalities are simple and quick.",
      },
      {
        icon: "🦁",
        title: "Hlane Royal National Park",
        text: "Hlane (pronounced 'Shla-neh') is Eswatini's largest national park — home to the most accessible lion viewing in the region, white rhino, elephant, hippo, and a magnificent vulture restaurant with Cape vultures feeding daily.",
      },
      {
        icon: "🌿",
        title: "The Ezulwini Valley",
        text: "The Valley of Heaven — Eswatini's lush central valley containing the royal village of Lobamba, the national museum, craft markets, and the Mlilwane Wildlife Sanctuary (the oldest protected area in Eswatini).",
      },
      {
        icon: "🎭",
        title: "Cultural Ceremonies",
        text: "The Umhlanga (Reed Dance) in August/September sees tens of thousands of Swazi maidens present reeds to the Queen Mother in an extraordinary cultural spectacle. The Incwala (First Fruits Ceremony) in December/January is the most sacred royal ceremony.",
      },
      {
        icon: "🧶",
        title: "Craft Tradition",
        text: "Eswatini has one of the finest craft traditions in Africa — Swazi candles from Malkerns, mohair tapestries from Rosecraft, and the extraordinarily beautiful sisal and grass basketry from markets throughout the kingdom.",
      },
      {
        icon: "🚗",
        title: "Getting There",
        text: "Eswatini is easily accessed from KwaZulu-Natal (2 hours from Durban), Mpumalanga (2 hours from the Kruger area), or Mozambique (3 hours from Maputo). It makes an ideal stop on the Johannesburg–Mozambique route.",
      },
      {
        icon: "💵",
        title: "Money",
        text: "South African Rand is accepted everywhere. ATMs in Mbabane and Manzini. The country is very affordable. Craft purchases are best made in cash at the Malkerns Valley markets.",
      },
      {
        icon: "🏔️",
        title: "Landscape",
        text: "Eswatini has four distinct ecological zones — Highveld (montane), Middleveld (fertile farmland), Lowveld (game country and sugarcane), and the Lubombo plateau on the eastern border. The diversity is extraordinary for such a small country.",
      },
      {
        icon: "🦅",
        title: "Birding",
        text: "Eswatini has over 670 recorded bird species — the Lubombo Mountains have several Eswatini-endemic and restricted-range species. The vulture restaurant at Hlane is the finest place in southern Africa to observe Cape vultures at close range.",
      },
    ],
    seeSubtitle:
      "Hlane's lion and rhino, the Ezulwini Valley royal village, Mlilwane Wildlife Sanctuary cycling, the Malkerns craft valley, Sibebe Rock (world's largest granite dome), the Phophonyane Falls Nature Reserve, and the Swazi cultural village of Mantenga.",
    see: [
      {
        name: "Hlane Royal National Park",
        title: "Lions and White Rhino in the Lowveld",
        desc: "Eswatini's largest and finest wildlife reserve — lion, white rhino, elephant, hippo, and one of southern Africa's most accessible vulture restaurants. The guided game drives at Hlane offer exceptional wildlife viewing for a small country.",
        tag: "Wildlife - Big Game",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Hlane Royal National Park lion rhino Eswatini lowveld",
      },
      {
        name: "Mlilwane Wildlife Sanctuary",
        title: "Africa's Most Relaxed Safari",
        desc: "The oldest protected area in Eswatini — Mlilwane has no dangerous big game, allowing visitors to cycle, walk, and horse ride freely among hippos, crocodiles, warthog, and antelope. The Rest Camp below the Execution Rock cliff is one of the best camps in the kingdom.",
        tag: "Wildlife - Cycling Safari",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Mlilwane Wildlife Sanctuary cycling walk hippo Eswatini",
      },
      {
        name: "Mantenga Cultural Village",
        title: "Living Swazi Heritage",
        desc: "A reconstructed Swazi royal village in the Ezulwini Valley — traditional beehive huts, cultural performances of Swazi music and dance, and a guided context for understanding the ceremonies, royal traditions, and daily life of the Swazi people.",
        tag: "Culture - Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Mantenga Cultural Village Swazi dance beehive hut Eswatini",
      },
      {
        name: "Malkerns Valley Craft Markets",
        title: "The Best Craft Shopping in Southern Africa",
        desc: "The Malkerns Valley south of Mbabane — Swazi Candles (extraordinary hand-crafted candles in animal shapes), the House on Fire performing arts venue, Gone Rural (sisal and grass basketry), and Rosecraft mohair tapestries.",
        tag: "Culture - Crafts",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Malkerns Valley craft market Swazi Candles Eswatini",
      },
      {
        name: "Sibebe Rock",
        title: "The World's Largest Exposed Granite Dome",
        desc: "A vast whaleback of exposed granite rising above Mbabane — one of the world's largest exposed granite domes (after Uluru) and a genuine hike up bare granite slabs with extraordinary views over the Eswatini Highveld.",
        tag: "Adventure - Hiking",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Sibebe Rock granite dome Mbabane Eswatini hike",
      },
      {
        name: "Phophonyane Falls Nature Reserve",
        title: "Waterfall and Forest in the Highveld",
        desc: "A private nature reserve near Pigg's Peak in the north — the Phophonyane River drops 80m over a series of cascades through indigenous forest, with trails, birding, and the small tented lodge perched above the falls.",
        tag: "Nature - Waterfall",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg/1280px-Tassili_N%27Ajjer_National_Park_%2849465145453%29.jpg",
        alt: "Phophonyane Falls waterfall forest Pigg's Peak Eswatini",
      },
      {
        name: "Ezulwini Valley",
        title: "The Valley of Heaven",
        desc: "Eswatini's lush central valley — the royal village of Lobamba with the national museum and parliament, the Ezulwini craft market, Mlilwane Wildlife Sanctuary, and the Mantenga Cultural Village, all within 20km of Mbabane.",
        tag: "Culture & Nature - Valley",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Turkey_%2868742801%29.jpeg/1280px-Turkey_%2868742801%29.jpeg",
        alt: "Ezulwini Valley royal village Lobamba Eswatini",
      },
      {
        name: "Bulembu",
        title: "A Ghost Town Reborn",
        desc: "A former asbestos mining town near Pigg's Peak, now a self-contained community development project — renovated colonial mining houses, a craft enterprise, a swallows colony, and the most extraordinary mountain views in the Eswatini Highveld.",
        tag: "Culture - Community",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ksar_Ghardaia_place_march%C3%A9_1.jpg/1280px-Ksar_Ghardaia_place_march%C3%A9_1.jpg",
        alt: "Bulembu ghost town community reborn Eswatini mining",
      },
    ],
    doSubtitle:
      "Guided lion walk at Hlane, cycling Mlilwane among hippos, shopping the Malkerns craft valley, hiking Sibebe Rock, attending the Umhlanga Reed Dance, white water rafting the Usutu River, and a cultural dance performance at Mantenga.",
    do: [
      {
        title: "Guided Lion Walk, Hlane",
        desc: "A guided on-foot walk from Ndlovu Camp toward the Hlane lion area — the park's lion population has expanded significantly, and the guided walk gives context on lion ecology and tracking while providing a genuine thrill in the African bush.",
        tag: "Wildlife - Hlane",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hippo_at_Mana_Pools.jpg/1280px-Hippo_at_Mana_Pools.jpg",
        alt: "Guided lion walk Hlane Eswatini foot wildlife",
      },
      {
        title: "Cycle Mlilwane Wildlife Sanctuary",
        desc: "Hire a mountain bike at Mlilwane Rest Camp and cycle the trails among warthog, hippo, and impala — the only national park in Africa where you can pedal freely among wildlife without a guide, an entirely relaxed and joyful experience.",
        tag: "Adventure - Mlilwane",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Cycle Mlilwane Wildlife Sanctuary hippo warthog Eswatini",
      },
      {
        title: "Malkerns Craft Valley Morning",
        desc: "Spend a morning in the Malkerns Valley — Swazi Candles for extraordinary handmade animal candles, Gone Rural for sisal basketry, and Rosecraft for mohair tapestries woven on the premises. The best craft shopping in southern Africa.",
        tag: "Culture - Crafts",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Malkerns craft Swazi Candles Gone Rural morning Eswatini",
      },
      {
        title: "Hike Sibebe Rock",
        desc: "A 3-hour guided hike up the bare granite slabs of Sibebe Rock — the guide leads the safest line up the dome face, the views expanding with every metre, until the top reveals the entire Eswatini Highveld and the Mbabane valley.",
        tag: "Adventure - Sibebe",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1280px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
        alt: "Sibebe Rock hike granite dome views Mbabane Eswatini",
      },
      {
        title: "Mantenga Cultural Dance Performance",
        desc: "Attend the Mantenga Cultural Village's daily Swazi dance performance — the guide explains each dance's meaning, the traditional beehive homestead is toured, and the cultural context of royal ceremony is made vivid.",
        tag: "Culture - Mantenga",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Egyptian_Tannora_Dance.jpg/1280px-Egyptian_Tannora_Dance.jpg",
        alt: "Mantenga Cultural Village Swazi dance performance Eswatini",
      },
      {
        title: "White Water Rafting, Usutu River",
        desc: "The Usutu River offers Grade III–IV white water through the Swazi Lowveld — a half-day rafting excursion with extraordinary Lowveld scenery, African fish eagles overhead, and the adrenaline of the Usutu's most technical rapids.",
        tag: "Adventure - River",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/RiverGambia_Janjanbureh_20190122_Upstream.jpg/1280px-RiverGambia_Janjanbureh_20190122_Upstream.jpg",
        alt: "White water rafting Usutu River Eswatini lowveld",
      },
    ],
    eatSubtitle:
      "Swazi food is hearty southern African fare — emasi (sour milk), impala steak at an Ezulwini restaurant, braai at Mlilwane Rest Camp, and a cold Sibebe beer in the Malkerns Valley.",
    eat: [
      {
        category: "Traditional",
        name: "Emasi and Sishwala",
        desc: "Emasi is Eswatini's beloved cultured sour milk — drunk as a thick yoghurt or added to sishwala (stiff maize porridge) to make the country's most traditional meal. Found at every local restaurant and roadside food stall across the kingdom.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jollof_rice.jpg/1280px-Jollof_rice.jpg",
        alt: "Emasi sour milk sishwala porridge Eswatini traditional",
      },
      {
        category: "Game Meat",
        name: "Impala and Warthog",
        desc: "The restaurants of the Ezulwini Valley and the Hlane/Mlilwane camps serve excellent impala and warthog — game meat sourced from the reserves themselves, grilled or slow-cooked and served with pap and chakalaka.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG/1280px-Molokheya_and_rice_with_chiken%2C_Egypt_2012.JPG",
        alt: "Impala warthog game meat Ezulwini Eswatini restaurant",
      },
      {
        category: "Braai",
        name: "Mlilwane Braai Evenings",
        desc: "The Mlilwane Rest Camp's evening braai is a southern African institution — guests bring their own meat, the camp provides the fire, and the sound of hippos in the nearby pool accompanies every dinner.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG-Vissers_en_hun_vangst.jpg/1280px-PNG-Vissers_en_hun_vangst.jpg",
        alt: "Mlilwane braai camp evening hippo Eswatini",
      },
      {
        category: "Market",
        name: "Malkerns Fresh Produce and Pies",
        desc: "The Malkerns Valley market stalls sell fresh subtropical fruit, homemade jams, and pies from local bakers — mango, avocado, and macadamia nut are all grown in Eswatini's fertile Middleveld.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cashew_nuts_-_3.jpg/1280px-Cashew_nuts_-_3.jpg",
        alt: "Malkerns market fruit pies avocado mango Eswatini",
      },
      {
        category: "Drink",
        name: "Sibebe Beer and Buganu",
        desc: "Sibebe lager is the national brew — named for the great granite dome. Buganu is the traditional marula beer brewed by Swazi women in February–March when marula fruits ripen, and drunk communally at the Buganu National Festival.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Atay.jpg/800px-Atay.jpg",
        alt: "Sibebe beer buganu marula Eswatini national drink",
      },
    ],
    staySubtitle:
      "Ezulwini Valley for the cultural and wildlife base; Hlane for the game experience; Mlilwane for the cycling safari; Malkerns for crafts; Phophonyane for the waterfall and forest.",
    stay: [
      {
        type: "Ezulwini Valley",
        area: "Ezulwini",
        desc: "Royal Swazi Spa Hotel and Timbali are the valley's most comfortable. Several mid-range guesthouses serve the Ezulwini circuit.",
        picks: ["Royal Swazi Spa Hotel", "Timbali Camp Ezulwini", "Lidwala Lodge"],
      },
      {
        type: "Wildlife",
        area: "Mlilwane / Hlane",
        desc: "Mlilwane Rest Camp (beehive huts and chalets) and the Hlane Ndlovu Camp are the finest in-reserve options. Both offer extraordinary value.",
        picks: ["Mlilwane Rest Camp", "Hlane Ndlovu Camp", "Mlilwane Hippo Haunt"],
      },
      {
        type: "Highveld",
        area: "Malkerns / Mbabane",
        desc: "Malandela's in the Malkerns Valley (next to the House on Fire) is Eswatini's most characterful stay. Several guesthouses in Mbabane serve business and transit travellers.",
        picks: ["Malandela's Farmhouse Malkerns", "House on Fire Malkerns"],
      },
      {
        type: "Waterfall",
        area: "Phophonyane",
        desc: "Phophonyane Falls Eco-Lodge has forest chalets above the falls — simple, characterful, and excellent value in a beautiful private reserve.",
        picks: ["Phophonyane Falls Eco-Lodge"],
      },
    ],
    map: {
      center: [-26.5, 31.5],
      zoom: 9.0,
      seeSpots: [
        { lat: -26.08, lng: 31.85, name: "Hlane Royal NP", desc: "Lion white rhino vulture" },
        { lat: -26.48, lng: 31.18, name: "Mlilwane Sanctuary", desc: "Cycling safari hippo" },
        { lat: -26.47, lng: 31.18, name: "Mantenga Village", desc: "Living Swazi heritage" },
        { lat: -26.53, lng: 31.18, name: "Malkerns Valley", desc: "Swazi candles crafts" },
        { lat: -26.32, lng: 31.14, name: "Sibebe Rock", desc: "World's largest granite dome" },
        { lat: -25.97, lng: 31.12, name: "Phophonyane Falls", desc: "Waterfall forest highveld" },
        { lat: -26.47, lng: 31.17, name: "Ezulwini Valley", desc: "Royal village Valley of Heaven" },
        { lat: -25.84, lng: 31.06, name: "Bulembu", desc: "Ghost town reborn" },
      ],
      doSpots: [
        { lat: -26.08, lng: 31.85, name: "Lion Walk Hlane", desc: "Guided foot safari" },
        { lat: -26.48, lng: 31.18, name: "Cycle Mlilwane", desc: "Bike among wildlife" },
        { lat: -26.53, lng: 31.18, name: "Malkerns Crafts", desc: "Swazi Candles morning" },
        { lat: -26.32, lng: 31.14, name: "Sibebe Hike", desc: "Granite dome summit" },
        { lat: -26.47, lng: 31.18, name: "Mantenga Dance", desc: "Cultural performance" },
        { lat: -26.7, lng: 31.35, name: "Usutu Rafting", desc: "Grade III-IV river" },
      ],
      staySpots: [
        { lat: -26.47, lng: 31.18, name: "Ezulwini Valley", desc: "Valley cultural base" },
        { lat: -26.08, lng: 31.85, name: "Hlane", desc: "Wildlife camp" },
        { lat: -26.48, lng: 31.18, name: "Mlilwane", desc: "Cycling sanctuary camp" },
        { lat: -26.53, lng: 31.18, name: "Malkerns", desc: "Malandela's farmhouse" },
        { lat: -25.97, lng: 31.12, name: "Phophonyane", desc: "Forest waterfall lodge" },
      ],
    },
    dayTrips: [
      {
        title: "Hlane Game Drive and Vulture Restaurant",
        subtitle: "A morning game drive in Hlane Royal National Park — guided lion and rhino tracking, the extraordinary Cape vulture feeding station, and the hippo pool, all within a few hours of the KwaZulu-Natal or Mozambique border.",
        tag: "Wildlife - Hlane Full Morning",
        distance: "Hlane Royal National Park, 60km from Mbabane",
        duration: "Half day (4 hours)",
        transport: "4x4 game vehicle from Ndlovu Camp",
        steps: [
          { time: "6AM", text: "Pre-dawn drive from Ndlovu Camp gate — the lowveld is coolest in the first two hours." },
          { time: "6:30AM", text: "White rhino in the open bush — Hlane has a significant white rhino population." },
          { time: "7:30AM", text: "Vulture restaurant feeding time — Cape vultures descend in large numbers onto the carcass." },
          { time: "8:30AM", text: "Hippo pool at the Hlane waterhole — morning crocodile sightings." },
          { time: "9:30AM", text: "Lion territory in the northern section — the resident prides are well habituated to vehicles." },
          { time: "10:30AM", text: "Return to Ndlovu Camp for breakfast." },
        ],
      },
      {
        title: "Ezulwini Valley Cultural Day",
        subtitle: "A full Ezulwini Valley day — the Mantenga Cultural Village and Swazi dance performance, the royal village at Lobamba, the Swaziland National Museum, and the Mlilwane Wildlife Sanctuary afternoon cycle.",
        tag: "Culture & Wildlife - Ezulwini Full Day",
        distance: "Ezulwini Valley, 15km from Mbabane",
        duration: "Full day (7 hours)",
        transport: "Car in the valley, bicycle at Mlilwane",
        steps: [
          { time: "9AM", text: "Mantenga Cultural Village — guided homestead tour and cultural dance performance." },
          { time: "11AM", text: "Drive to Lobamba royal village — the Swazi parliament and national museum." },
          { time: "12PM", text: "Lobamba National Museum — Swazi history, royal regalia, and cultural exhibits." },
          { time: "1PM", text: "Lunch at the Mlilwane Rest Camp." },
          { time: "2:30PM", text: "Hire a bicycle and cycle the Mlilwane trails — warthog, impala, and hippos." },
          { time: "4:30PM", text: "Sundowner at the Hippo Haunt overlooking the waterhole." },
        ],
      },
      {
        title: "Malkerns Craft Valley and House on Fire",
        subtitle: "A craft-focused morning in the Malkerns Valley — Swazi Candles for the extraordinary handmade candles, Gone Rural for basketry, and the extraordinary House on Fire performing arts space for an afternoon show or art installation.",
        tag: "Culture - Malkerns Day",
        distance: "Malkerns Valley, 25km from Mbabane",
        duration: "Half day (4 hours)",
        transport: "Car on the MR103",
        steps: [
          { time: "9AM", text: "Swazi Candles — watch candles being hand-poured and shaped into extraordinary animal forms." },
          { time: "10AM", text: "Gone Rural — sisal and grass basket weavers at work, the finest basketry in southern Africa." },
          { time: "11AM", text: "Rosecraft — mohair tapestries woven on traditional looms, depicting Swazi landscapes." },
          { time: "12PM", text: "Lunch at the Malandela's restaurant or Farm Shop café." },
          { time: "1:30PM", text: "House on Fire — the extraordinary open-air performing arts space, mosaic sculptures, and current art installation." },
          { time: "3PM", text: "Return to Mbabane or continue to Mlilwane." },
        ],
      },
      {
        title: "Sibebe Rock Hike",
        subtitle: "A 3-hour guided ascent of Sibebe Rock — one of the world's largest exposed granite domes, rising above Mbabane with extraordinary views over the Eswatini Highveld. The guide navigates the safest line up the bare granite face.",
        tag: "Adventure - Sibebe Day",
        distance: "8km from Mbabane city centre",
        duration: "Half day (4 hours)",
        transport: "Car and walking",
        steps: [
          { time: "7AM", text: "Drive 8km from Mbabane to the Sibebe base." },
          { time: "7:30AM", text: "Begin the ascent with the guide — the first section follows a rocky path through scrub." },
          { time: "8:30AM", text: "Onto the bare granite — the slope steepens and the views begin to open." },
          { time: "9:30AM", text: "Summit plateau — the entire Eswatini Highveld visible, Mbabane below, Mozambique visible on clear days." },
          { time: "10:30AM", text: "Descent — the guide chooses a different line down for variety." },
          { time: "11:30AM", text: "Return to base for a cold drink at the Sibebe café." },
        ],
      },
    ],
    itineraries: {
      "7": {
        summary: "Eswatini is best as a 2–3 day stop — this itinerary combines it with the KwaZulu-Natal Drakensberg and Hluhluwe-iMfolozi.",
        arrival: {
          route: "Via South Africa — Durban (DUR) or OR Tambo (JNB) to Mbabane",
          meta: "King Mswati III International Airport near Manzini has domestic connections. Most visitors drive — Durban is 2.5 hours, Johannesburg is 4.5 hours.",
          sideTitle: "On the Way",
          sideCopy: "Eswatini is perfect between the Kruger/Mpumalanga safari and the KwaZulu-Natal coast — 2 nights adds a genuinely different cultural dimension.",
        },
        days: [
          {
            name: "Arrival",
            title: "Mbabane and Ezulwini Arrival",
            location: "Ezulwini Valley",
            activities: [
              { time: "PM", text: "Arrive and Ezulwini Valley hotel check-in." },
              { time: "PM", text: "Mantenga Cultural Village and late afternoon dance performance." },
            ],
          },
          {
            name: "Culture",
            title: "Ezulwini Cultural Day",
            location: "Ezulwini Valley",
            activities: [
              { time: "AM", text: "Lobamba royal village and national museum." },
              { time: "PM", text: "Mlilwane cycle safari among hippos." },
            ],
          },
          {
            name: "Crafts",
            title: "Malkerns Craft Valley",
            location: "Malkerns",
            activities: [
              { time: "AM", text: "Swazi Candles, Gone Rural, Rosecraft." },
              { time: "PM", text: "House on Fire and Malandela's lunch." },
            ],
          },
          {
            name: "Sibebe",
            title: "Sibebe Rock Hike",
            location: "Mbabane",
            activities: [
              { time: "AM", text: "Guided Sibebe Rock ascent — 3 hours to summit." },
              { time: "PM", text: "Mbabane market and city walk." },
            ],
          },
          {
            name: "Hlane",
            title: "Drive to Hlane",
            location: "Hlane Royal NP",
            activities: [
              { time: "AM", text: "Drive east to the Lowveld and Hlane." },
              { time: "PM", text: "Hlane afternoon game drive — rhino and vultures." },
            ],
          },
          {
            name: "Hlane",
            title: "Hlane Full Wildlife Day",
            location: "Hlane Royal NP",
            activities: [
              { time: "AM", text: "Dawn lion drive and vulture restaurant." },
              { time: "PM", text: "Hippo pool walk and Hlane birding." },
            ],
          },
          {
            name: "Departure",
            title: "Depart via Mozambique or KZN",
            location: "Border",
            activities: [
              { time: "AM", text: "Drive east to Mozambique (Maputo 3 hours) or south to KZN (Durban 2.5 hours)." },
            ],
          },
        ],
        departure: {
          route: "Via Mozambique border or KwaZulu-Natal",
          meta: "Eswatini sits neatly between Mozambique and KwaZulu-Natal. The Lomahasha border takes you to Maputo in 3 hours. The Ngwenya border connects to Johannesburg in 4.5 hours.",
          sideTitle: "Best Time",
          sideCopy: "Year-round. August/September for the Umhlanga Reed Dance. December/January for the Incwala First Fruits Ceremony.",
        },
      },
      "10": {
        summary: "Ten days combining Eswatini with the KwaZulu-Natal Drakensberg, Hluhluwe, and the Mozambique coast.",
        arrival: {
          route: "Via Durban (DUR) -> Drakensberg -> Eswatini -> Mozambique",
          meta: "A linear route from Durban through the Drakensberg, across Eswatini, and into southern Mozambique for the beach end.",
          sideTitle: "Linear Route",
          sideCopy: "Fly into Durban, out of Maputo — the perfect southern Africa circuit avoiding any backtracking.",
        },
        days: [
          { name: "Durban", title: "Arrive Durban", location: "Durban", activities: [{ time: "PM", text: "Arrive DUR." }, { time: "Night", text: "Bunny chow and Durban beachfront." }] },
          { name: "Drakens", title: "Drakensberg Drive", location: "Drakensberg", activities: [{ time: "AM", text: "Drive north to the Drakensberg." }, { time: "PM", text: "Amphitheatre trail walk." }] },
          { name: "Drakens2", title: "Drakensberg Hike", location: "Drakensberg", activities: [{ time: "AM", text: "Cathedral Peak or Monk's Cowl hike." }, { time: "PM", text: "San rock art visit." }] },
          { name: "Hluhluwe", title: "Hluhluwe-iMfolozi", location: "KZN", activities: [{ time: "AM", text: "Drive to Hluhluwe game reserve." }, { time: "PM", text: "White rhino afternoon drive." }] },
          { name: "Eswatini1", title: "Enter Eswatini", location: "Ezulwini Valley", activities: [{ time: "AM", text: "Drive into Eswatini." }, { time: "PM", text: "Mantenga and Mlilwane cycle." }] },
          { name: "Eswatini2", title: "Malkerns and Sibebe", location: "Malkerns / Mbabane", activities: [{ time: "AM", text: "Craft valley morning." }, { time: "PM", text: "Sibebe Rock hike." }] },
          { name: "Hlane", title: "Hlane Wildlife", location: "Hlane", activities: [{ time: "AM", text: "Lion drive and vulture restaurant." }, { time: "PM", text: "Hippo pool walk." }] },
          { name: "Maputo1", title: "Drive to Maputo", location: "Maputo", activities: [{ time: "AM", text: "Drive through Lomahasha border to Maputo." }, { time: "PM", text: "Costa do Sol prawn dinner." }] },
          { name: "Maputo2", title: "Maputo Culture", location: "Maputo", activities: [{ time: "AM", text: "Fish market and Polana neighbourhood." }, { time: "PM", text: "Nucleo de Arte and marrabenta evening." }] },
          { name: "Departure", title: "Fly from Maputo", location: "MPM", activities: [{ time: "PM", text: "International departure from Maputo." }] },
        ],
        departure: {
          route: "Maputo (MPM) -> Johannesburg (JNB) -> Your City",
          meta: "A linear itinerary ending in Mozambique. Maputo to JNB takes 1 hour on LAM or SA Express.",
          sideTitle: "Perfect Circuit",
          sideCopy: "Fly into Durban, out of Maputo — the ideal southern Africa loop through three countries, three ocean encounters, and extraordinary wildlife.",
        },
      },
    },
    footerLine1: "Discover Eswatini — Hlane's lions, Mlilwane cycling, Swazi Candles, Sibebe Rock, the Reed Dance, and Africa's last absolute monarchy",
    footerLine2: "No visa required. Rand accepted everywhere. Best combined with KwaZulu-Natal or Mozambique. Sibebe beer cold.",
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
