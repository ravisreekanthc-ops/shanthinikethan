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
    title: "Robotics & Artificial Intelligence Lab",
    category: "Robotics & STEM",
    image: "https://www.srishantiniketancbse.com/n/robotic%202.JPG",
    caption: "Students designing and programming autonomous robotics rovers and sensor mechanisms.",
  },
  {
    id: "gal-2",
    title: "Electronics & Embedded Circuit Engineering",
    category: "Robotics & STEM",
    image: "https://www.srishantiniketancbse.com/n/robotic.jpg",
    caption: "Hands-on microcontroller programming, breadboard circuits, and STEM experimentation.",
  },
  {
    id: "gal-3",
    title: "Robotics Competitive Showcase",
    category: "Robotics & STEM",
    image: "https://www.srishantiniketancbse.com/n/robotics%205.jpg",
    caption: "Senior secondary students presenting working engineering prototypes and automation models.",
  },
  {
    id: "gal-4",
    title: "STEM Innovation & Hands-On Science Kits",
    category: "Robotics & STEM",
    image: "https://www.srishantiniketancbse.com/n/robotics%204.jpg",
    caption: "Fostering analytical curiosity through interactive science and robotics fabrication modules.",
  },
  {
    id: "gal-5",
    title: "Composite Science & Chemistry Laboratory",
    category: "Laboratories",
    image: "https://www.srishantiniketancbse.com/n/science%20lab.jpg",
    caption: "Fully equipped CBSE standard chemistry, physics, and biology testing apparatus.",
  },
  {
    id: "gal-6",
    title: "Mathematics & Experimental Science Lab",
    category: "Laboratories",
    image: "https://www.srishantiniketancbse.com/Potos/LAB/M%20LAB%205.jpg",
    caption: "Concrete mathematical manipulatives, geometry modeling tools, and Vedic Math tables.",
  },
  {
    id: "gal-7",
    title: "Central Digital Library & Resource Center",
    category: "Campus & Classrooms",
    image: "https://www.srishantiniketancbse.com/photos2/LIB.jpg",
    caption: "Vast repository of reference encyclopedias, NCERT textbooks, journals, and digital catalog.",
  },
  {
    id: "gal-8",
    title: "Interactive Smart Classrooms",
    category: "Campus & Classrooms",
    image: "https://www.srishantiniketancbse.com/photos2/L7.jpg",
    caption: "Digital audio-visual boards, ergonomic student seating, and climate-controlled environment.",
  },
  {
    id: "gal-9",
    title: "Spacious Modern Academic Blocks",
    category: "Campus & Classrooms",
    image: "https://www.srishantiniketancbse.com/photos2/l3.jpg",
    caption: "Well-ventilated corridors, safety monitored campus spaces, and green courtyard vistas.",
  },
  {
    id: "gal-10",
    title: "Science Fair & Academic Exhibition",
    category: "Cultural & Events",
    image: "https://www.srishantiniketancbse.com/images/bg/w11.jpeg",
    caption: "Students presenting working projects and research papers to visiting examiners.",
  },
  {
    id: "gal-11",
    title: "Cultural Heritage & Annual Celebrations",
    category: "Cultural & Events",
    image: "https://www.srishantiniketancbse.com/Potos/pOTOS/CULTURAL%20%202.JPG",
    caption: "Traditional classical dances, dramatic skits, and musical performances on the grand stage.",
  },
  {
    id: "gal-12",
    title: "Student Leadership & School Assemblies",
    category: "Cultural & Events",
    image: "https://www.srishantiniketancbse.com/Potos/pOTOS/DSC_0725.JPG",
    caption: "Morning solemn assemblies, pledge recitations, and student council investiture.",
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
