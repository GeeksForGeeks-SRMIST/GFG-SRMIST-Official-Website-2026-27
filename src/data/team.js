// src/data/team.js
// Source of truth: plan.md, GFG Brand Guidelines, verified faculty/student links
// Images verified from: public/assets/Team_26-27/Faculty/ and /Students/
// Social links: supplied in plan.md — only attached to confirmed persons

// ─── Faculty Coordinators ─────────────────────────────────────────────────────
export const faculty = [
  {
    name: "Dr. M. Lakshmi",
    role: "Head of Department",
    department: "Networking and Communications, School of Computing",
    avatar: "/assets/Team_26-27/Faculty/M_Lashmi.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/lakshmi-m-a118a48/",
    },
  },
  {
    name: "Dr. Meenakshi K",
    role: "Faculty Convener & Assistant Professor",
    department: "Networking and Communications",
    avatar: "/assets/Team_26-27/Faculty/kmeenakshi.webp",
    links: {
      website: "https://www.srmist.edu.in/faculty/k-meenakshi/",
    },
  },
  {
    name: "Dr. G. Saranya",
    role: "Assistant Professor",
    department: "Networking and Communications",
    avatar: "/assets/Team_26-27/Faculty/Saranya_Gangadharan.webp",
    links: {
      website: "https://www.srmist.edu.in/faculty/ms-g-saranya/",
    },
  },
  {
    name: "Mrs. M. Safa",
    role: "Associate Professor",
    department: "Networking and Communications",
    avatar: "/assets/Team_26-27/Faculty/Safa_M.webp",
    links: {
      website: "https://www.srmist.edu.in/faculty/mrs-m-safa/",
    },
  },
  {
    name: "Dr. G. Parimala",
    role: "Assistant Professor",
    department: "Networking and Communications",
    avatar: "/assets/Team_26-27/Faculty/Parimala_G.webp",
    links: {
      website: "https://www.srmist.edu.in/faculty/g-parimala/",
    },
  },
  {
    name: "Dr. A. Rathinam",
    role: "Professor & Director, Alumni Affairs",
    department: "SRMIST",
    avatar: "/assets/Team_26-27/Faculty/Rathinam_Ananthanarayanan.webp",
    links: {
      website: "https://www.srmist.edu.in/faculty/dr-a-rathinam/",
    },
  },
];

// ─── Core Leadership ──────────────────────────────────────────────────────────
// Photos from: public/assets/Team_26-27/Students/
// Social links: from plan.md — attached only to confirmed persons
export const coreLeadership = [
  {
    name: "Mrinal Paul",
    role: "President & Campus Mantri",
    avatar: "/assets/Team_26-27/Students/Mrinal_Paul.webp",
    domain: "Leadership",
    bio: "Leading GFG SRMIST with a vision to bridge academic learning and industry-ready skills.",
    links: {
      linkedin:  "https://www.linkedin.com/in/mrinalpaul12/",
      instagram: "https://www.instagram.com/mrinal.paul_/",
    },
  },
  {
    name: "Neelanjana Mandal",
    role: "Secretary",
    avatar: "/assets/Team_26-27/Students/Neelanjana_Mandal.webp",
    domain: "Leadership",
    bio: "Driving organizational excellence and coordinating club operations across all domains.",
    links: {
      linkedin:  "https://www.linkedin.com/in/neelanjana-mandal/",
      instagram: "https://www.instagram.com/_neelanjana03_/",
    },
  },
  {
    name: "MD Nayaj Mondal",
    role: "Joint Secretary",
    avatar: "/assets/Team_26-27/Students/Md_Nayaj_Mondal.webp",
    domain: "Leadership",
    bio: "GFG focal point for Aaruush '26 & Cognixion. Team leader at Road Safety Hackathon, IIT Madras.",
    links: {
      linkedin:  "https://www.linkedin.com/in/md-nayaj-mondal/",
      instagram: "https://www.instagram.com/md._n.m._india_18/",
      github:    "https://github.com/mdnm18",
    },
  },
];

// ─── Directors ────────────────────────────────────────────────────────────────
export const directors = [
  { name: "Rithun Krishnaa",  role: "Director", domain: "Corporate"   },
  { name: "Raj Kumar Mehta",  role: "Director", domain: "Management"  },
  { name: "Akshara Kumari",   role: "Director", domain: "Technical"   },
  { name: "Prathyush Haran",  role: "Director", domain: "Management"  },
  { name: "Shudhansh Kumar",  role: "Director", domain: "Technical"   },
  { name: "Yashavini",        role: "Director", domain: "Creatives"   },
  { name: "Daksh Jain",       role: "Director", domain: "Creatives"   },
  { name: "Jayna Shirlie",    role: "Director", domain: "Corporate"   },
];

// ─── Associate Leads ──────────────────────────────────────────────────────────
export const associateLeads = [
  { name: "Soham Siddhartha Mishra", role: "Associate Lead", domain: "Technical"  },
  { name: "G. Naga Sri Harshitha",   role: "Associate Lead", domain: "Corporate"  },
  { name: "Kosuru Sri Vardhan",      role: "Associate Lead", domain: "Management" },
  { name: "Eshita Verma",            role: "Associate Lead", domain: "Creative"   },
  { name: "Gunit Chawla",            role: "Associate Lead", domain: "Technical"  },
  { name: "Sashank Peddada",         role: "Associate Lead", domain: "Creatives"  },
  { name: "Vishaal Pillay",          role: "Associate Lead", domain: "Technical"  },
  { name: "Chelsa Clephen",          role: "Associate Lead", domain: "Management" },
  { name: "Nithin M",                role: "Associate Lead", domain: "Creatives"  },
  { name: "D. Hemasri Sanchita",     role: "Associate Lead", domain: "Management" },
  { name: "M. Sai Sujan Balaji",     role: "Associate Lead", domain: "Corporate"  },
  { name: "T. Nikitha KL",           role: "Associate Lead", domain: "Creatives"  },
];

// ─── Members ──────────────────────────────────────────────────────────────────
export const members = [
  { name: "Thammisetti Sri Babitha", role: "Member", domain: "Corporate" },
  { name: "Nishant Ranjan",          role: "Member", domain: "Technical" },
  { name: "Bhavana",                 role: "Member", domain: "Technical" },
  { name: "Arshad",                  role: "Member", domain: "Corporate" },
  { name: "A. Bhavishya",            role: "Member", domain: "Corporate" },
  { name: "Sarathi RN",              role: "Member", domain: "Technical" },
  { name: "Bhavy",                   role: "Member", domain: "Technical" },
  { name: "Ekansh Kumar Singh",      role: "Member", domain: "Corporate" },
];

// ─── Ex-Leadership (historical reference) ─────────────────────────────────────
export const exLeadership = [
  { name: "Mudit Khater",       role: "ex-President"           },
  { name: "Punit Joshi",        role: "ex-Technical Director"  },
  { name: "Devanshi Karaulia",  role: "ex-Management Director" },
  { name: "Mridangam Goswami",  role: "ex-Corporate Director"  },
  { name: "Plakshi Sharma",     role: "ex-Creatives Director"  },
];

// ─── Domain taxonomy ──────────────────────────────────────────────────────────
export const domains = ["Technical", "Corporate", "Management", "Creatives", "Leadership"];

export const domainColors = {
  Technical:  {
    bg:     "bg-blue-50  dark:bg-blue-900/20",
    text:   "text-blue-700  dark:text-blue-300",
    border: "border-blue-200  dark:border-blue-800",
    badge:  "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  Corporate:  {
    bg:     "bg-amber-50 dark:bg-amber-900/20",
    text:   "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800",
    badge:  "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  },
  Management: {
    bg:     "bg-purple-50 dark:bg-purple-900/20",
    text:   "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-800",
    badge:  "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  Creatives:  {
    bg:     "bg-pink-50  dark:bg-pink-900/20",
    text:   "text-pink-700  dark:text-pink-300",
    border: "border-pink-200  dark:border-pink-800",
    badge:  "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  },
  Leadership: {
    bg:     "bg-primary-50 dark:bg-primary-900/20",
    text:   "text-primary-700 dark:text-primary-300",
    border: "border-primary-200 dark:border-primary-800",
    badge:  "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300",
  },
  Creative:   {
    bg:     "bg-pink-50  dark:bg-pink-900/20",
    text:   "text-pink-700  dark:text-pink-300",
    border: "border-pink-200  dark:border-pink-800",
    badge:  "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  },
};

// ─── Referral list (controlled list for Join Us form) ─────────────────────────
// Only leadership + directors included to prevent abuse
export const referralList = [
  "Mrinal Paul",
  "Neelanjana Mandal",
  "MD Nayaj Mondal",
  "Rithun Krishnaa",
  "Raj Kumar Mehta",
  "Akshara Kumari",
  "Prathyush Haran",
  "Shudhansh Kumar",
  "Yashavini",
  "Daksh Jain",
  "Jayna Shirlie",
];
