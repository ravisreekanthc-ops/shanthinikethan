export interface SchoolEvent {
  id: string;
  title: string;
  category: "Academics & Science" | "Cultural & National" | "Health & Sports" | "Pre-Primary";
  badge: string;
  date: string;
  description: string;
  image: string;
  highlight?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Robotics & STEM" | "Laboratories" | "Campus & Classrooms" | "Cultural & Events";
  image: string;
  caption: string;
}

export interface SchoolVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration?: string;
  tag: string;
}

export const OFFICIAL_EVENTS: SchoolEvent[] = [
  {
    id: "event-science-congress",
    title: "National Science Congress & ISRO Educational Mission",
    category: "Academics & Science",
    badge: "1st Place District & State Selection",
    date: "Annual Academic Session",
    description:
      "In the National Science Congress - Science Fair, our students of Grade 9, Dhanusree & Nargis, bagged 1st place in the District and were selected for State Level. As a recognition of their scientific innovation, they received the prestigious opportunity to visit the ISRO Satellite Launching Centre (SDSC SHAR) and observe space propulsion firsthand.",
    image: "https://www.srishantiniketancbse.com/images/bg/w8.jpeg",
    highlight: "ISRO Study Tour Sponsored",
  },
  {
    id: "event-maths-day",
    title: "Maths Day, Vedic Mathematics & Abacus Championship",
    category: "Academics & Science",
    badge: "District Level Toppers",
    date: "National Mathematics Day",
    description:
      "A proud milestone for Sri Shantiniketan: Grade 3 student Bhavagna secured 1st place in Abacus, and Grade 7 student Yaswanth won 2nd place in Vedic Mathematics in the District-level Abacus & Vedic Mathematics competition.",
    image: "https://www.srishantiniketancbse.com/images/bg/w15.jpeg",
    highlight: "1st & 2nd District Ranks",
  },
  {
    id: "event-multiplex-english",
    title: "Multiplex English Talent Show",
    category: "Academics & Science",
    badge: "Public Speaking & Eloquence",
    date: "Literary & Communication Conclave",
    description:
      "Showcasing the linguistic prowess and public speaking abilities of our students across all grades. Students demonstrated spoken English eloquence, elocution, declamation, and dramatic storytelling before an appreciative parent and educator audience.",
    image: "https://www.srishantiniketancbse.com/images/bg/w47.jpeg",
    highlight: "Grade 1 to 10 Fluency Showcase",
  },
  {
    id: "event-national-integration",
    title: "National Integration & Cultural Unity Conclave",
    category: "Cultural & National",
    badge: "Unity in Diversity",
    date: "National Integration Day",
    description:
      "To celebrate the rich tapestry of Indian civilization and cultural harmony, the entire school enthusiastically participated in the 'National Integration' celebration. Children dressed in traditional attire representing different states of India, learning respect and joy in regional diversity.",
    image: "https://www.srishantiniketancbse.com/images/bg/w63.jpeg",
    highlight: "All-School Cultural Pageant",
  },
  {
    id: "event-police-commemoration",
    title: "Police Commemoration Day - Nandyal Station Tribute",
    category: "Cultural & National",
    badge: "Civic Honor & Patriotism",
    date: "21st October",
    description:
      "Students visited the Nandyal Police Station on 21st October to observe Police Commemoration Day, paying tribute to the valiant martyrs who laid down their lives safeguarding our nation and interacting with senior police officials on civic responsibility.",
    image: "https://www.srishantiniketancbse.com/images/bg/w2.jpeg",
    highlight: "Experiential Civic Field Trip",
  },
  {
    id: "event-fit-india",
    title: "Fit India Health & Athletic Fitness Movement",
    category: "Health & Sports",
    badge: "Fit India Movement",
    date: "National Sports Week",
    description:
      "Reinforcing the adage 'a healthy mind resides in a healthy body', our school orchestrated the Fit India event with mass yoga drills, agility circuits, martial arts demonstrations, and dietary awareness workshops.",
    image: "https://www.srishantiniketancbse.com/images/bg/w61.jpeg",
    highlight: "Mass Yoga & Athletic Drills",
  },
  {
    id: "event-mango-day",
    title: "Pre-Primary Mango Day - Sensorial Observation",
    category: "Pre-Primary",
    badge: "Early Childhood Experiential",
    date: "Foundational Session",
    description:
      "The academic calendar commenced with the delightful 'Mango Day', conducted by our Pre-Primary and Kindergarten learners. Kids explored the botanical characteristics, nutritional benefits, and varieties of mangoes through hands-on sensory observation and creative rhymes.",
    image: "https://www.srishantiniketancbse.com/images/bg/w62.jpeg",
    highlight: "Sensorial Nature Learning",
  },
];

export const OFFICIAL_GALLERY: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "5-Acre Main Academic Campus & Fleet",
    category: "Campus & Classrooms",
    image: "/images/gallery/front_view.jpg",
    caption: "Spacious multi-story academic complex with dedicated GPS-enabled transport fleet and tree-lined campus grounds in Nandyal.",
  },
  {
    id: "gal-2",
    title: "All-Weather Volleyball & Athletics Court",
    category: "Campus & Classrooms",
    image: "/images/gallery/n_img_8361.jpg",
    caption: "Students engaged in outdoor volleyball practice under professional athletic coaching on the dedicated sports grounds.",
  },
  {
    id: "gal-3",
    title: "Patriotic Pageant & Freedom Fighters Tribute",
    category: "Cultural & Events",
    image: "/images/gallery/n_7.jpg",
    caption: "Students dressed as national heroes and freedom fighters celebrating Indian heritage with tricolor flags on the sports turf.",
  },
  {
    id: "gal-4",
    title: "Astronomy Showcase & Astronomical Telescope",
    category: "Robotics & STEM",
    image: "/images/gallery/n_robotic_2.jpg",
    caption: "Dignitaries and faculty inspecting celestial observation apparatus and high-magnification astronomical telescope at the STEM inauguration.",
  },
  {
    id: "gal-5",
    title: "Junior STEM & Motorized Rover Building",
    category: "Robotics & STEM",
    image: "/images/gallery/n_robotic.jpg",
    caption: "Primary students demonstrating functional motorized robotic rovers and mechanical wheel assemblies constructed in STEM sessions.",
  },
  {
    id: "gal-6",
    title: "Humanoid Robotics & Mechanism Engineering",
    category: "Robotics & STEM",
    image: "/images/gallery/n_robotics_2.jpg",
    caption: "Young roboticist displaying an articulated humanoid bipedal robot assembled using mechanical gears, motors, and engineering blueprints.",
  },
  {
    id: "gal-7",
    title: "Interactive STEM Kits & Mechanical Prototyping",
    category: "Robotics & STEM",
    image: "/images/gallery/n_robotics_4.jpg",
    caption: "Hands-on assembly of mechanical linkages and engineering components guided by interactive digital learning panels.",
  },
  {
    id: "gal-8",
    title: "3D Drawing Pen & Rapid Prototyping Lab",
    category: "Robotics & STEM",
    image: "/images/gallery/n_robotics_5.jpg",
    caption: "Students creating 3D physical models and geometric structures using handheld 3D extrusion pens in the innovation makerspace.",
  },
  {
    id: "gal-9",
    title: "Composite Physics & Space Science Innovation Lab",
    category: "Laboratories",
    image: "/images/gallery/n_science_lab.jpg",
    caption: "Equipped with space shuttle aerospace murals, planetary orbit models, acoustic tuning forks, and electrical testing instruments.",
  },
  {
    id: "gal-10",
    title: "Chemistry Wet-Lab & Experimental Science",
    category: "Laboratories",
    image: "/images/gallery/n_l4.jpg",
    caption: "Secondary students conducting chemical titration and reaction experiments with certified glassware, reagents, and safety gear.",
  },
  {
    id: "gal-11",
    title: "Mathematics Laboratory (M-LAB)",
    category: "Laboratories",
    image: "/images/gallery/potos_lab_m_lab_5.jpg",
    caption: "Collaborative activity tables with geometric solids, arithmetic manipulatives, and Vedic Math exploration boards.",
  },
  {
    id: "gal-12",
    title: "Digital Computer Education & IT Laboratory",
    category: "Laboratories",
    image: "/images/gallery/photos2_l7.jpg",
    caption: "Modern workstation lab featuring dedicated desktop computers, keyboard master shortcuts, and structured coding curriculum.",
  },
  {
    id: "gal-13",
    title: "Central Library & Knowledge Resource Center",
    category: "Campus & Classrooms",
    image: "/images/gallery/photos2_lib.jpg",
    caption: "Quiet reading room stocked with reference encyclopedias, NCERT resources, fiction, and educational journals for all grades.",
  },
  {
    id: "gal-14",
    title: "Science Exhibition & Model Demonstration",
    category: "Cultural & Events",
    image: "/images/gallery/images_bg_w11.jpeg",
    caption: "Young innovators presenting working science projects, eco-friendly models, and experimental apparatus to visitors.",
  },
  {
    id: "gal-15",
    title: "Annual Day Cultural Arts & Classical Dance Gala",
    category: "Cultural & Events",
    image: "/images/gallery/potos_potos_cultural__2.jpg",
    caption: "Vibrant traditional dance performances, dramatic skits, and artistic celebrations on the brightly lit campus grand stage.",
  },
  {
    id: "gal-16",
    title: "Morning Assembly & Student Council Formations",
    category: "Cultural & Events",
    image: "/images/gallery/potos_potos_dsc_0725.jpg",
    caption: "Disciplined morning assemblies fostering values, student pledge recitations, and campus-wide collective events.",
  },
];

export const OFFICIAL_VIDEOS: SchoolVideo[] = [
  {
    id: "vid-1",
    youtubeId: "0oo0RrIAo1Q",
    title: "Sri Shantiniketan Campus Walkthrough & Academic Life",
    description: "Experience the vibrant student life, state-of-the-art infrastructure, and dedicated educators of Sri Shantiniketan CBSE School, Nandyal.",
    duration: "Campus Tour",
    tag: "Campus Overview",
  },
  {
    id: "vid-2",
    youtubeId: "zoiONr93t4Q",
    title: "Science Exhibition & STEM Innovation Fair",
    description: "Young scientists and innovators from Grades 1 to 10 presenting functional models in renewable energy, robotics, and environmental physics.",
    duration: "Student Highlights",
    tag: "STEM Innovation",
  },
  {
    id: "vid-3",
    youtubeId: "lXVLo5xk6Hk",
    title: "Pre-Primary Celebrations & Experiential Learning",
    description: "Joyful foundational learning moments, Mango Day activities, and sensorial playway experiences at Sri Shantiniketan Kindergarten.",
    duration: "Foundational Wing",
    tag: "Pre-Primary",
  },
  {
    id: "vid-4",
    youtubeId: "z5wX2PGkXg0",
    title: "Sports Meet & Fit India Athletic Demonstrations",
    description: "Athletic agility, synthetic track sprints, yoga formations, and karate exhibitions on our 5-acre sports ground.",
    duration: "Athletics",
    tag: "Sports & Fitness",
  },
  {
    id: "vid-5",
    youtubeId: "4TFJji0bJao",
    title: "Annual Day Celebrations & Cultural Grandeur",
    description: "Mesmerizing Indian classical dance recitals, drama performances, and academic merit awards felicitation.",
    duration: "Annual Day",
    tag: "Cultural Arts",
  },
];
