/* ═══════════════════════════════════════════════════════════
   DATA.JS — ITG Intelligent Tourist Guide
   All destination data. Loaded first before other scripts.
═══════════════════════════════════════════════════════════ */

const destinations = [
  {
    id: 1,
    name: "Tiger's Nest Monastery",
    category: "culture",
    location: "Paro, Bhutan",
    rating: 4.9,
    entryFee: "₹2,500",
    bestTime: "March – May",
    image: "https://images.unsplash.com/photo-1593331792312-15bead7aaa9b?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://unsplash.com/photos/monastery-clinging-to-a-steep-cliff-face-Xsdzlds4v_s",
    mapEmbed: "https://maps.google.com/maps?q=Tigers+Nest+Monastery+Bhutan&output=embed",
    shortDesc: "A sacred Buddhist monastery clinging to a sheer cliff face at 3,120m — one of Asia's most iconic sites.",
    fullDesc: "Perched dramatically on a cliff face 3,120 meters above the Paro valley, Tiger's Nest Monastery (Paro Taktsang) is Bhutan's most iconic landmark. Built in 1692, it clings to a sheer rock face above a forested gorge. The monastery is accessible via a steep 2-3 hour hike through pine forest, rewarding visitors with breathtaking views and profound spiritual atmosphere.",
    nearby: [2, 5, 8]
  },
  {
    id: 2,
    name: "Hampi Ruins",
    category: "culture",
    location: "Karnataka, India",
    rating: 4.7,
    entryFee: "₹40",
    bestTime: "Oct – Feb",
    image: "https://images.unsplash.com/photo-1696239108269-448ce8d0bacc?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Hampi+Karnataka+India&output=embed",
    shortDesc: "A UNESCO World Heritage Site with stunning boulder-strewn landscapes and ancient Vijayanagara Empire ruins.",
    fullDesc: "Hampi is a village in northern Karnataka, India, situated within the ruins of Vijayanagara — the former capital of the Vijayanagara Empire. The ruins span over 4,100 hectares and include temples, markets, royal enclosures, and water structures. The landscape is surreal — giant boulders of volcanic rock interspersed with ancient monuments and lush banana plantations.",
    nearby: [5, 9, 12]
  },
  {
    id: 3,
    name: "Rann of Kutch",
    category: "nature",
    location: "Gujarat, India",
    rating: 4.8,
    entryFee: "Free",
    bestTime: "Nov – Feb",
    image: "https://media.istockphoto.com/id/1486836065/photo/various-views-of-the-rann-of-kutch.jpg?s=612x612&w=0&k=20&c=_M1-Am7pqAsSwLF8h9nKjkYadIzwDAGMmQvEXsRFTfk=",
    mapEmbed: "https://maps.google.com/maps?q=Rann+of+Kutch+Gujarat&output=embed",
    shortDesc: "An otherworldly white salt desert that turns into a shimmering moonscape under the full moon.",
    fullDesc: "The Rann of Kutch is the world's largest salt desert, spanning around 30,000 km² in the Thar Desert in the Kutch district of Gujarat. During the dry season it becomes a vast expanse of white salt, stretching endlessly to the horizon. The annual Rann Utsav festival transforms this barren landscape into a cultural celebration with folk music, dance, and craft.",
    nearby: [10, 13]
  },
  {
    id: 4,
    name: "Valley of Flowers",
    category: "nature",
    location: "Uttarakhand, India",
    rating: 4.9,
    entryFee: "₹150",
    bestTime: "July – Sep",
    image: "https://plus.unsplash.com/premium_photo-1669885052640-34e1f68f6b8b?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Valley+of+Flowers+Uttarakhand&output=embed",
    shortDesc: "A UNESCO-listed alpine valley carpeted with hundreds of wildflower species in the high Himalayas.",
    fullDesc: "The Valley of Flowers National Park is an Indian national park located in West Himalaya. It is known for its meadows of endemic alpine flowers and the outstanding natural beauty of the surrounding landscape. The valley has a rich biodiversity, with over 520 species of flowering plants. The valley is also home to the rare Asiatic black bear, snow leopard, and brown bear.",
    nearby: [6, 11]
  },
  {
    id: 5,
    name: "Ajanta Caves",
    category: "culture",
    location: "Maharashtra, India",
    rating: 4.8,
    entryFee: "₹40",
    bestTime: "Nov – Mar",
    image: "https://images.unsplash.com/photo-1572461275348-bf5edc4e4ef9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Ajanta+Caves+Maharashtra&output=embed",
    shortDesc: "Rock-cut Buddhist cave monuments dating from the 2nd century BCE — a masterpiece of ancient art.",
    fullDesc: "The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE in the Aurangabad district of Maharashtra. The caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art. The paintings depict the Jataka tales, the life of the Buddha, and various Buddhist deities.",
    nearby: [2, 9, 12]
  },
  {
    id: 6,
    name: "Chopta Meadows",
    category: "adventure",
    location: "Uttarakhand, India",
    rating: 4.6,
    entryFee: "Free",
    bestTime: "Apr – Jun, Sep – Nov",
    image: "https://images.unsplash.com/photo-1718889550016-ad3cf358fd06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Chopta+Uttarakhand+India&output=embed",
    shortDesc: "Known as the 'Mini Switzerland of India' — pristine alpine meadows perfect for trekking and camping.",
    fullDesc: "Chopta is a small region in Uttarakhand and is one of the most beautiful places in India. Known as Mini Switzerland of India, Chopta is an untouched destination covered with dense forests, snowcapped mountains, and blooming meadows. It serves as the base camp for trekking to Tungnath (the highest Shiva temple in the world) and Chandrashila peak.",
    nearby: [4, 11]
  },
  {
    id: 7,
    name: "Spiti Valley",
    category: "adventure",
    location: "Himachal Pradesh, India",
    rating: 4.9,
    entryFee: "Permit ₹500",
    bestTime: "June – Sep",
    image: "https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Spiti+Valley+Himachal+Pradesh&output=embed",
    shortDesc: "A cold desert mountain valley at 3,800m — stark, stunning, and utterly remote.",
    fullDesc: "Spiti Valley is a cold desert mountain valley located high in the Himalaya Mountains in the northeastern part of the Indian state of Himachal Pradesh. The name Spiti means 'The Middle Land' — the land between Tibet and India. It is one of the least populated regions in India and boasts some of the most dramatic landscapes — barren mountains, ancient monasteries, and crystal-clear rivers.",
    nearby: [6, 4]
  },
  {
    id: 8,
    name: "Sundarbans",
    category: "nature",
    location: "West Bengal, India",
    rating: 4.7,
    entryFee: "₹200",
    bestTime: "Oct – Mar",
    image: "https://images.unsplash.com/photo-1706459671567-43529d418cd1?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Sundarbans+West+Bengal&output=embed",
    shortDesc: "The world's largest mangrove forest and home to the majestic Royal Bengal Tiger.",
    fullDesc: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra, and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. A large part of it is covered by a Reserved Forest and is famous for being one of the last refuges for the Bengal tiger.",
    nearby: [3, 13]
  },
  {
    id: 9,
    name: "Chettinad Village Trail",
    category: "food",
    location: "Tamil Nadu, India",
    rating: 4.6,
    entryFee: "Free",
    bestTime: "Oct – Mar",
    image: "https://assets.cntraveller.in/photos/60ba17670f3a5367ec9fe1cf/16:9/w_960,c_limit/NV-Horizontal-Thali-Shot1-jpg.jpg",
    mapEmbed: "https://maps.google.com/maps?q=Chettinad+Tamil+Nadu+India&output=embed",
    shortDesc: "Experience one of India's most distinct cuisines in the grand mansions of the Nattukotai Chettiars.",
    fullDesc: "Chettinad is a region of the Sivaganga district in Tamil Nadu, famous for its unique cuisine and grand mansions. Chettinad cuisine is renowned for its use of a variety of spices including kalpasi (stone flower), marathi mokku (dried flower pods), and star anise. The region is also famous for its palatial mansions built by the Nattukotai Chettiar community that showcase Dravidian and colonial architecture.",
    nearby: [5, 12]
  },
  {
    id: 10,
    name: "Majuli River Island",
    category: "culture",
    location: "Assam, India",
    rating: 4.5,
    entryFee: "Free",
    bestTime: "Oct – Mar",
    image: "https://images.unsplash.com/photo-1534483877780-a284a3fa7fc2?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Majuli+Island+Assam+India&output=embed",
    shortDesc: "The world's largest river island — a living cultural hub of Vaishnavite monasteries and mask-making.",
    fullDesc: "Majuli is a river island in the Brahmaputra River, Assam, and is the largest river island in the world. It is the centre of Neo-Vaishnavite culture. The island is home to 22 satras (Vaishnavite monasteries) which preserve and promote the arts, culture, and traditions of Assam. Majuli is famous for its mask-making tradition, classical Sattriya dance, and unique biodiversity.",
    nearby: [3, 8]
  },
  {
    id: 11,
    name: "Zanskar Trek",
    category: "adventure",
    location: "Ladakh, India",
    rating: 5.0,
    entryFee: "Permit ₹1,000",
    bestTime: "June – Sep",
    image: "https://images.unsplash.com/photo-1702704944450-0f3a575491a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapEmbed: "https://maps.google.com/maps?q=Zanskar+Valley+Ladakh+India&output=embed",
    shortDesc: "One of India's most extreme and breathtaking treks through remote Himalayan landscapes.",
    fullDesc: "Zanskar is a sub-district of the Kargil district, in the union territory of Ladakh. Located at an average altitude of 4,000 metres above sea level, Zanskar is characterized by high mountain passes, deep gorges, and dramatic river valleys. The famous Chadar Trek — walking on the frozen Zanskar River in winter — is one of the world's most unique trekking experiences.",
    nearby: [7, 6, 4]
  },
  {
    id: 12,
    name: "Pondicherry French Quarter",
    category: "food",
    location: "Puducherry, India",
    rating: 4.6,
    entryFee: "Free",
    bestTime: "Oct – Feb",
    image: "https://www.treebo.com/blog/wp-content/uploads/2016/08/Food-in-Pondicherry_4.jpg",
    mapEmbed: "https://maps.google.com/maps?q=Pondicherry+French+Quarter+India&output=embed",
    shortDesc: "Sip filter coffee and eat French-Tamil cuisine in the colonial streets of Pondicherry.",
    fullDesc: "Puducherry's French Quarter, also known as the White Town, is a charming neighborhood with colonial-era buildings painted in pastel hues. The area is famous for its café culture, French bakeries, Tamil-French fusion cuisine, and boutique restaurants. The streets are lined with bougainvillea and retain a distinctly European character while being infused with South Indian culture.",
    nearby: [9, 5]
  },
  {
    id: 13,
    name: "Lonar Crater Lake",
    category: "nature",
    location: "Maharashtra, India",
    rating: 4.4,
    entryFee: "₹25",
    bestTime: "Nov – Feb",
    image: "https://memorableindia.com/wp-content/uploads/2019/08/xlonar-crater.jpg.pagespeed.ic_.rbmcsAFV0g.jpg.webp",
    mapEmbed: "https://maps.google.com/maps?q=Lonar+Crater+Lake+Maharashtra&output=embed",
    shortDesc: "A 52,000-year-old meteorite impact crater lake — the only hyper-saline lake formed by such an impact.",
    fullDesc: "Lonar crater is a saline soda lake located at Lonar in Buldhana district, Maharashtra. It was created by a meteorite impact during the Pleistocene Epoch and is one of the four known hyper-velocity impact craters in basaltic rock anywhere on Earth. The crater lake has a mean diameter of 1.2 km and is about 150 meters below the crater rim, and the water is both saline and alkaline.",
    nearby: [3, 8]
  }
];

/* ── Helper functions ────────────────────────────────────── */

/**
 * Get destinations filtered by category
 * @param {string} category - 'all' | 'adventure' | 'culture' | 'food' | 'nature'
 * @returns {Array}
 */
function getByCategory(category) {
  if (!category || category === 'all') return destinations;
  return destinations.filter(d => d.category === category);
}

/**
 * Search destinations by name or description
 * @param {string} query
 * @returns {Array}
 */
function searchDestinations(query) {
  const q = query.toLowerCase().trim();
  if (!q) return destinations;
  return destinations.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.location.toLowerCase().includes(q) ||
    d.shortDesc.toLowerCase().includes(q) ||
    d.category.toLowerCase().includes(q)
  );
}

/**
 * Get a single destination by ID
 * @param {number} id
 * @returns {Object|undefined}
 */
function getById(id) {
  return destinations.find(d => d.id === id);
}

/**
 * Get star string for rating
 * @param {number} rating
 * @returns {string}
 */
function getStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/**
 * Count by category
 */
function getCategoryCount(category) {
  return destinations.filter(d => d.category === category).length;
}
