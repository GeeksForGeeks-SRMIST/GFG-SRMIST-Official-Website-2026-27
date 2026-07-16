// src/data/team.js
// Source of truth: report.md, Section 11 — Acknowledgements

export const faculty = [
  {
    name: "Dr. M. Lakshmi",
    role: "Head of Department",
    department: "Networking and Communications, School of Computing",
    avatar: null,
  },
  {
    name: "Dr. Meenakshi K",
    role: "Faculty Convener & Assistant Professor",
    department: "Networking and Communications",
    avatar: "/assets/Team_26-27/1712138855103.jpeg",
  },
  {
    name: "Dr. Saranya Gangadharan",
    role: "Assistant Professor",
    department: "Networking and Communications",
    avatar: null,
  },
  {
    name: "Dr. Safa M",
    role: "Associate Professor",
    department: "Networking and Communications",
    avatar: null,
  },
  {
    name: "Dr. Parimala G",
    role: "Assistant Professor",
    department: "Networking and Communications",
    avatar: null,
  },
  {
    name: "Dr. Rathinam Ananthanarayanan",
    role: "Professor & Director, Directorate of Alumni Affairs (DAA)",
    department: "SRMIST",
    avatar: null,
  },
];

export const coreLeadership = [
  {
    name: "Mrinal Paul",
    role: "President & Campus Mantri",
    avatar: "assets/Achivements/1748002572414.jpeg",
    domain: "Leadership",
    bio: "Leading GFG SRMIST with a vision to bridge academic learning and industry-ready skills.",
  },
  {
    name: "Neelanjana Mandal",
    role: "Secretary",
    avatar: null,
    domain: "Leadership",
    bio: "Driving organizational excellence and coordinating club operations across all domains.",
  },
  {
    name: "MD Nayaj Mondal",
    role: "Joint Secretary",
    avatar: null,
    domain: "Leadership",
    bio: "Team leader for the Road Safety Hackathon at IIT Madras, championing innovation and development.",
  },
];

export const directors = [
  { name: "Rithun Krishnaa",    role: "Director",       domain: "Corporate"    },
  { name: "Raj Kumar Mehta",    role: "Director",       domain: "Management"   },
  { name: "Akshara Kumari",     role: "Director",       domain: "Technical"    },
  { name: "Prathyush Haran",    role: "Director",       domain: "Management"   },
  { name: "Shudhansh Kumar",    role: "Director",       domain: "Technical"    },
  { name: "Yashavini",          role: "Director",       domain: "Creatives"    },
  { name: "Daksh Jain",         role: "Director",       domain: "Creatives"    },
  { name: "Jayna Shirlie",      role: "Director",       domain: "Corporate"    },
];

export const associateLeads = [
  { name: "Soham Siddhartha Mishra",    role: "Associate Lead", domain: "Technical"    },
  { name: "G. Naga Sri Harshitha",      role: "Associate Lead", domain: "Corporate"    },
  { name: "Kosuru Sri Vardhan",         role: "Associate Lead", domain: "Management"   },
  { name: "Eshita Verma",              role: "Associate Lead", domain: "Creative"     },
  { name: "Gunit Chawla",              role: "Associate Lead", domain: "Technical"    },
  { name: "Sashank Peddada",           role: "Associate Lead", domain: "Creatives"    },
  { name: "Vishaal Pillay",            role: "Associate Lead", domain: "Technical"    },
  { name: "Chelsa Clephen",            role: "Associate Lead", domain: "Management"   },
  { name: "Nithin M",                  role: "Associate Lead", domain: "Creatives"    },
  { name: "D. Hemasri Sanchita",       role: "Associate Lead", domain: "Management"   },
  { name: "M. Sai Sujan Balaji",       role: "Associate Lead", domain: "Corporate"    },
  { name: "T. Nikitha KL",             role: "Associate Lead", domain: "Creatives"    },
];

export const members = [
  { name: "Thammisetti Sri Babitha",   role: "Member", domain: "Corporate"  },
  { name: "Nishant Ranjan",            role: "Member", domain: "Technical"  },
  { name: "Bhavana",                   role: "Member", domain: "Technical"  },
  { name: "Arshad",                    role: "Member", domain: "Corporate"  },
  { name: "A. Bhavishya",              role: "Member", domain: "Corporate"  },
  { name: "Sarathi RN",                role: "Member", domain: "Technical"  },
  { name: "Bhavy",                     role: "Member", domain: "Technical"  },
  { name: "Ekansh Kumar Singh",        role: "Member", domain: "Corporate"  },
  { name: "Varad Singhal",             role: "Member", domain: "Technical"  },
];

export const exLeadership = [
  { name: "Mudit Khater",          role: "ex-President"            },
  { name: "Punit Joshi",           role: "ex-Technical Director"   },
  { name: "Devanshi Karaulia",     role: "ex-Management Director"  },
  { name: "Mridangam Goswami",     role: "ex-Corporate Director"   },
  { name: "Plakshi Sharma",        role: "ex-Creatives Director"   },
];

export const domains = ["Technical", "Corporate", "Management", "Creatives", "Leadership"];

export const domainColors = {
  Technical:  { bg: "bg-blue-50  dark:bg-blue-900/20",  text: "text-blue-700  dark:text-blue-300",  border: "border-blue-200  dark:border-blue-800"  },
  Corporate:  { bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800" },
  Management: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800" },
  Creatives:  { bg: "bg-pink-50  dark:bg-pink-900/20",  text: "text-pink-700  dark:text-pink-300",  border: "border-pink-200  dark:border-pink-800"  },
  Leadership: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800" },
};
