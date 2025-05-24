
export interface NavItem {
  name: string;
  sectionId: string;
}

// Renamed from Project to Certificate
export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  issuedBy?: string; // Optional: New field for issuer
  certificateUrl?: string; // Optional: Link to the certificate itself
  liveUrl?: string; // Kept for potential other links
  repoUrl?: string; // Kept for potential other links
}

// Updated Skill interface for pop-ups
export interface Skill {
  name: string;
  imageUrl?: string; // For logo/image in pop-up
  description?: string; // For description in pop-up
  category?: string; // Optional: To know which category it belongs to, if needed
}

export interface SkillCategory {
  name: string;
  skills: Skill[]; // Was string[], now Skill[]
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  logoUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  cvUrl?: string;
}