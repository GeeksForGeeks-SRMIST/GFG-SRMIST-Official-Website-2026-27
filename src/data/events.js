// src/data/events.js
// Source of truth: report.md, Sections 4, 5, 6, 7

// Gallery images from public/assets/Gallary/ — chronological
const gallaryImages = [
  "/assets/Gallary/1761731850530.jpeg",
  "/assets/Gallary/1761731850828.jpeg",
  "/assets/Gallary/1761731851744.jpeg",
  "/assets/Gallary/1761856282723.jpeg",
  "/assets/Gallary/1762873908518.jpeg",
  "/assets/Gallary/1762873908712.jpeg",
  "/assets/Gallary/1762873908727.jpeg",
  "/assets/Gallary/1762873908739.jpeg",
  "/assets/Gallary/1762873908893.jpeg",
  "/assets/Gallary/1762873908919.jpeg",
  "/assets/Gallary/1762873908939.jpeg",
  "/assets/Gallary/1762873908950.jpeg",
  "/assets/Gallary/1762873908951.jpeg",
  "/assets/Gallary/1762873909125.jpeg",
  "/assets/Gallary/1770913496112.jpeg",
  "/assets/Gallary/1770913496150.jpeg",
  "/assets/Gallary/1770913496178.jpeg",
  "/assets/Gallary/1770913496457.jpeg",
  "/assets/Gallary/1770913497741.jpeg",
  "/assets/Gallary/1770913497972.jpeg",
  "/assets/Gallary/1770913498664.jpeg",
  "/assets/Gallary/1770913507480.jpeg",
  "/assets/Gallary/1770913508760.jpeg",
  "/assets/Gallary/1770913509550.jpeg",
  "/assets/Gallary/1770913511815.jpeg",
  "/assets/Gallary/1770913515048.jpeg",
  "/assets/Gallary/1770913517246.jpeg",
  "/assets/Gallary/1770913517650.jpeg",
];

export const events = [
  {
    id: "ignisia-2025",
    slug: "ignisia-2025",
    name: "IGNISIA 2025",
    theme: "Ultimate Placement Training & DSA Preparation",
    date: "28th October 2025",
    venue: "Tech Park (TP), SRMIST",
    reach: "250+ Participants",
    budget: "₹49,900",
    year: 2025,
    category: "Workshop",
    poster: "/assets/Events/ignisia.webp",
    color: "from-green-600 to-emerald-800",
    accentColor: "text-green-500",
    bgLight: "bg-green-50",
    borderColor: "border-green-200",
    websiteUrl: "https://ignisia25.vercel.app",
    overview:
      "IGNISIA 2025 served as the flagship workshop series for the academic year, bringing together innovation, learning, and collaboration. The event was designed to provide end-to-end placement readiness, combining technical upskilling with professional mentorship.",
    speakers: [
      {
        name: "Mr. D. Meenakshi Sundaram",
        designation: "SRM Alumnus, M.Tech CSE",
        organization: "Founder, DMS Academy & A3 Connect",
        topic: "Tech + Talent + Tenacity: The Real Secret Behind Placement Success",
        image: "/assets/Guest_Speakers/1761731851744.jpeg",
      },
    ],
    keyTakeaways: [
      "AI as an Accelerator: Tools like ChatGPT, DeepSeek, and Google Gemini can turn ideas into architecture rapidly, but core fundamentals define a developer's true direction.",
      "Application over Shortcuts: True technical talent is showcased through the practical application of knowledge rather than relying on automated shortcuts.",
      "The Power of Tenacity: The continuous will to learn and adapt is an engineer's greatest strength in a rapidly evolving tech landscape.",
    ],
    structure: [
      "Deep-dive workshop sessions on DSA and Placement Strategy",
      "Competitive solo coding rounds",
      "Interactive Q&A with industry experts",
      "Classroom-to-Classroom (C2C) promotions across campus",
      "Helpdesks at University Building (UB), Tech Park (TP), and TP2",
      "7 commercial stalls managed over 4 days",
    ],
    challenges: [
      "Multiple date revisions due to severe weather conditions",
      "Overlapping university permission schedules and Diwali holidays",
      "Speaker coordination challenges due to initial date shifts",
      "Tight timelines requiring rapid adaptation",
    ],
    outcomes:
      "Despite logistical hurdles, IGNISIA 2025 was a resounding success. It provided students with critical resume-building insights, simplified DSA concepts, and insider strategies for top-tier tech interviews. The event firmly established GFG SRMIST's brand visibility on campus.",
    gallery: gallaryImages.slice(0, 14),
    topics: ["DSA", "Placement Preparation", "Interview Strategy", "Career Growth"],
  },
  {
    id: "java-verse-2026",
    slug: "java-verse-2026",
    name: "JAVA-VERSE 2026",
    theme: "Java Full Stack Development",
    date: "11th February 2026",
    venue: "Tech Park (TP), 4th Floor, Smart Room 404/405, SRMIST",
    reach: "450+ Registrations | 120+ On-site Attendees",
    budget: "₹10,000",
    year: 2026,
    category: "Workshop",
    poster: "/assets/Events/poster.webp",
    color: "from-blue-600 to-indigo-800",
    accentColor: "text-blue-500",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    websiteUrl: "https://java-verse.vercel.app/",
    overview:
      "JAVA-VERSE 2026 was an intensive, hands-on workshop focused on the complete enterprise development stack. Participants were guided through both frontend implementation and complex backend architectures used in modern IT industries.",
    speakers: [
      {
        name: "Mr. Sasikumar V",
        designation: "Solution Architect",
        organization: "DEV Technology Solutions",
        topic: "Full Stack Enterprise Development with Java & Spring Boot",
        image: "/assets/Guest_Speakers/1770913517650.jpeg",
      },
    ],
    keyTakeaways: [
      "Core Java fundamentals and OOP principles in enterprise context",
      "Spring Boot microservices architecture and REST API design",
      "Frontend Integration with HTML, CSS, JavaScript, and React",
      "Database Management and multi-tier application development",
      "Real-world problem solving through live coding demonstrations",
    ],
    structure: [
      "Live coding demonstrations on Spring Boot and microservices",
      "Real-time problem-solving sessions",
      "Interactive quizzes and gamified logic challenges",
      "Open mic performances and team activities",
      "Exclusive merchandise for top performers",
      "Dedicated event website handling 450+ registrations",
    ],
    challenges: [],
    outcomes:
      "Participants gained highly sought-after, real-world development exposure and enterprise-level understanding. Feedback was overwhelmingly positive, highlighting high engagement levels and a strong preference for the practical, live-coding methodology. Attendees formally requested follow-up advanced sessions.",
    gallery: gallaryImages.slice(14),
    topics: ["Core Java", "Spring Boot", "Microservices", "React", "Database Management"],
  },
];

export const collaborations = [
  {
    id: "edge-case",
    partner: "GeeksforGeeks Campus Body, SRM Ramapuram Campus",
    event: "EDGE CASE",
    type: "Live Coding Experience & Community Partnership",
    description:
      "As a Community Partner for 'EDGE CASE,' GFG SRMIST extended its reach beyond the Kattankulathur campus. This collaboration fostered robust cross-campus engagement, amplified brand visibility for both chapters, and facilitated a broader exchange of technical ideas among the student communities.",
    year: 2026,
  },
];

export const hackathons = [
  {
    id: "road-safety-2026",
    event: "Road Safety Hackathon 2026",
    organizer: "Centre of Excellence for Road Safety, IIT Madras",
    timeline: "Registrations: March 2026 | Submissions: May 2026",
    significance:
      "Representing SRMIST at a prestigious national-level competition organized by IIT Madras, applying advanced problem-solving and full-stack development skills to engineer innovative solutions for real-world road safety challenges.",
    team: [
      { name: "MD Nayaj Mondal",  role: "Team Leader"    },
      { name: "Vishaal Pillay",   role: "Team Member"    },
      { name: "Varad Singhal",    role: "Team Member"    },
      { name: "Mrinal Paul",      role: "Team Member"    },
      { name: "Sudhanshu Kumar",  role: "Team Member"    },
    ],
    level: "National",
    year: 2026,
    color: "from-amber-600 to-orange-700",
  },
];

// All gallery images for the gallery page
export const allGalleryImages = gallaryImages.map((src, i) => ({
  id: i + 1,
  src,
  category: i < 14 ? "IGNISIA 2025" : "JAVA-VERSE 2026",
  caption: i < 14 ? `IGNISIA 2025 — Moment ${i + 1}` : `JAVA-VERSE 2026 — Moment ${i - 13}`,
}));

// Achievement images
export const achievementImages = [
  "/assets/Achivements/1748002572414.jpeg",
  "/assets/Achivements/1761856270933.jpeg",
  "/assets/Achivements/1761856271232.jpeg",
  "/assets/Achivements/1761856279511.jpeg",
  "/assets/Achivements/1761856280972.jpeg",
];
