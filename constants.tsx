import React from 'react';
import { NavItem, Certificate, SkillCategory, Experience, PersonalInfo, Skill } from './types'; // Certificate, Skill updated

export const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 ml-1" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
 <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Placeholder for a generic certificate icon for skills if specific image is not available
export const CertificateIconSkill: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75c-.621 0-1.125-.504-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75M9.06 4.938l3.375-3.375a1.125 1.125 0 011.591 0l3.375 3.375M9.06 4.938V7.875m6.69-2.937V7.875m0 9.375c.398.333.84.585 1.32.753M9.06 4.938A2.25 2.25 0 007.875 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h9.75a2.25 2.25 0 002.25-2.25V15M12 9V5.625m0 3.375c0 .435.252.818.638 1.006M12 9v3.75m-3.75-3.375c0 .435.252.818.638 1.006m-.638-1.006H9.75m3.75 0c.386 0 .75.132 1.027.368m0 0V5.625m3.375 3.375c0 .435.252.818.638 1.006m-.638-1.006h.113m0 0V5.625" />
  </svg>
);


export const PERSONAL_INFO: PersonalInfo = {
  name: "Alex Doe",
  title: "Senior Frontend Engineer & UI/UX Enthusiast",
  tagline: "Crafting beautiful and intuitive digital experiences.",
  bio: [
    "I'm a passionate Senior Frontend Engineer with a deep love for creating elegant, performant, and user-centric web applications. With over 7 years of experience in the field, I've honed my skills in React, TypeScript, and modern JavaScript frameworks, always striving to bridge the gap between intricate technical challenges and seamless user experiences.",
    "My journey into tech was fueled by a fascination with how design and code can come together to solve real-world problems. I believe in a collaborative approach, working closely with designers, product managers, and backend teams to deliver high-quality products. I'm particularly interested in UI/UX design principles and how they can be leveraged to build applications that are not only functional but also delightful to use.",
    "When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or experimenting with new design tools. I'm always eager to learn and grow, and I'm excited about the future of web development."
  ],
  contact: {
    email: "alex.doe@example.com",
    linkedin: "https://linkedin.com/in/alexdoe",
    github: "https://github.com/alexdoe",
  },
  cvUrl: "/alex-doe-cv.pdf", // Placeholder
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", sectionId: "home" },
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Certificates", sectionId: "certificates" }, // Updated from "Projects"
  { name: "Experience", sectionId: "experience" },
  { name: "Contact", sectionId: "contact" },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", imageUrl: "https://picsum.photos/seed/reactlogo/200/200", description: "A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies." },
      { name: "TypeScript", imageUrl: "https://picsum.photos/seed/tslogo/200/200", description: "An open-source language which builds on JavaScript, by adding static type definitions." },
      { name: "JavaScript (ESNext)", imageUrl: "https://picsum.photos/seed/jslogo/200/200", description: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions." },
      { name: "Next.js", imageUrl: "https://picsum.photos/seed/nextjslogo/200/200", description: "An open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites." },
      { name: "HTML5", imageUrl: "https://picsum.photos/seed/html5logo/200/200", description: "The standard markup language for documents designed to be displayed in a web browser." },
      { name: "CSS3/Sass", imageUrl: "https://picsum.photos/seed/css3logo/200/200", description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. Sass is a preprocessor." },
      { name: "Tailwind CSS", imageUrl: "https://picsum.photos/seed/tailwindlogo/200/200", description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup." },
    ],
  },
  {
    name: "UI/UX Design",
    skills: [
      { name: "Figma", imageUrl: "https://picsum.photos/seed/figmalogo/200/200", description: "A collaborative interface design tool. Create, test, and ship better designs from start to finish." },
      { name: "Adobe XD", imageUrl: "https://picsum.photos/seed/adobexdlogo/200/200", description: "A vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc." },
      { name: "User Research", description: "The systematic investigation of users and their requirements, to add context and insight into the process of designing the user experience." },
      { name: "Wireframing", description: "A way to design a website service at the structural level. A wireframe is commonly used to lay out content and functionality on a page." },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "Node.js", imageUrl: "https://picsum.photos/seed/nodelogo/200/200", description: "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser." },
      { name: "Express.js", description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications." },
      { name: "Python", imageUrl: "https://picsum.photos/seed/pythonlogo/200/200", description: "An interpreted, high-level and general-purpose programming language." },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", imageUrl: "https://picsum.photos/seed/githublogo/200/200", description: "Git is a distributed version-control system for tracking changes in source code during software development. GitHub is a provider of Internet hosting for software development and version control using Git." },
      { name: "Docker", imageUrl: "https://picsum.photos/seed/dockerlogo/200/200", description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers." },
    ],
  },
];

// Renamed from PROJECTS_DATA
export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "c1",
    title: "Finansial dan Investasi",
    description: "Mengenal dunia finansial mulai dari pentingnya investasi dan pengelolaan keuangan pribadi, hingga strategi investasi yang efektif.",
    imageUrl: "/assets/dikoding_finansial.jpeg",
    tags: ["React", "Redux", "Frontend", "Nanodegree"],
    issuedBy: "DIKODiNG",
    repoUrl: "", // Example: link to a capstone project
  },
  {
    id: "c2",
    title: "Python Dasar",
    description: "Belajar python dari dasar hingga mahir, mencakup sintaks dasar, struktur data, dan pemrograman berorientasi objek.",
    imageUrl: "/assets/dikoding_python_dasar.jpeg",
    tags: ["CSS", "Sass", "Responsive Design", "Frontend"],
    issuedBy: "DIKODiNG",
    certificateUrl: "#",
    repoUrl: "https://github.com/auraauvarose/learn-python", // Example: link to a capstone project
  },
  {
    id: "c3",
    title: "Pemahaman Dasar Keamanan Siber",
    description: "Mmeperlajari konsep dasar keamanan siber, termasuk ancaman umum, teknik pertahanan, dan praktik terbaik untuk melindungi data.",
    imageUrl: "/assets/pemahaman_dasar_security.jpeg",
    tags: ["Full-Stack", "MERN", "Node.js", "MongoDB", "Bootcamp"],
    repoUrl: "#", // Example: link to a capstone project
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "e1",
    role: "Senior Frontend Engineer",
    company: "Innovatech Solutions Inc.",
    duration: "Jan 2021 - Present",
    responsibilities: [
      "Led the development of key features for a flagship SaaS product, improving user engagement by 25%.",
      "Architected and implemented a scalable component library using React and TypeScript, reducing development time by 30%.",
      "Mentored junior engineers and conducted code reviews to ensure high-quality standards.",
      "Collaborated with UI/UX designers to translate mockups and prototypes into responsive web interfaces.",
    ],
    logoUrl: "https://picsum.photos/seed/innovatech/50/50",
  },
  {
    id: "e2",
    role: "Frontend Developer",
    company: "WebWorks Co.",
    duration: "Jun 2018 - Dec 2020",
    responsibilities: [
      "Developed and maintained responsive websites and web applications for various clients.",
      "Integrated third-party APIs and services to enhance application functionality.",
      "Participated in agile development cycles, including sprint planning and daily stand-ups.",
      "Optimized web performance, achieving significant improvements in load times.",
    ],
    logoUrl: "https://picsum.photos/seed/webworks/50/50",
  },
  {
    id: "e3",
    role: "Junior Web Developer",
    company: "Startup X",
    duration: "Jul 2016 - May 2018",
    responsibilities: [
      "Assisted in the development of the company's main web portal using HTML, CSS, and JavaScript.",
      "Gained experience with version control systems like Git.",
      "Contributed to bug fixing and feature enhancements.",
    ],
    logoUrl: "https://picsum.photos/seed/startupx/50/50",
  },
];