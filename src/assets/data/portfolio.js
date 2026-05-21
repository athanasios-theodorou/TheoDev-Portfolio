// Portfolio Data - Athanasios Theodorou

export const personal = {
  name: "Athanasios Theodorou",
  alias: "TheoDev",
  tagline: "React Developer",
  bio: "As a Frontend Developer specializing in React and modern web technologies, I focus on building scalable, high-performance, and visually refined digital experiences. I enjoy transforming complex ideas into intuitive interfaces with clean architecture, smooth interactions, and strong attention to detail — creating products that feel modern in every aspect.",
  email: "athanasiostheodorou13@gmail.com",
  location: "Athens, Greece",
  links: {
    linkedin: "https://www.linkedin.com/in/athanasios-theodorou/",
    github: "https://github.com/athanasios-theodorou",
    facebook: "https://www.facebook.com/thanos.theodorou13/",
    instagram: "https://www.instagram.com/_theodoroyy_/",
    telegram: "https://t.me/prozak13",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Framer Motion",
  "MySQL",
  "and many more...",
];

export const stats = [
  {
    label: "Total Projects",
    value: "6",
    icon: "code",
    description: "Innovative web solutions crafted",
  },
  {
    label: "Certificates",
    value: "3",
    icon: "award",
    description: "Professional skills validated",
  },
  {
    label: "Years of Experience",
    value: "2",
    icon: "globe",
    description: "Continuous learning journey",
  },
];

export const projects = [
  {
    id: 1,
    title: "ThesisGate",
    description:
      "A modern full-stack platform designed to streamline the bachelor's thesis lifecycle, facilitating seamless collaboration between students and instructors.",
    extendedDescription:
      "Engineered to optimize academic workflows, this system reduces manual coordination in thesis submissions, assignments, and tracking. It features a responsive React UI with advanced state management, powered by a PHP (Slim) backend with over 70 RESTful API endpoints, a normalized MySQL database, and secure Role-Based Access Control (RBAC) using JWT.",
    tags: ["React Framework", "PHP/Slim", "MySQL"],
    image: "/images/thesis-gate.webp",
    liveUrl: "#",
    detailUrl: "#",
    status: "Developing",
  },
  {
    id: 2,
    title: "TheoDev Portfolio",
    description:
      "A high-performance, immersive professional portfolio showcasing my technical journey, featuring fluid animations and a clean, modern aesthetic.",
    extendedDescription:
      "Built with React and Vite for maximum speed and efficiency, this portfolio serves as a centralized hub for my professional identity. It utilizes Framer Motion to create a deeply engaging user experience with sophisticated transitions and micro-interactions. The site meticulously organizes my project gallery, technical certifications, and tech stack, reflecting a commitment to clean code and high-end UI/UX principles.",
    tags: ["React Framework", "Framer Motion", "Vite"],
    image: "/images/theodev-portfolio.webp",
    liveUrl: "https://theo-dev-portfolio.vercel.app/",
    detailUrl: "#",
    status: "Deployed",
  },
  {
    id: 3,
    title: "Fuel Stations Data Viewer",
    description:
      "A responsive data visualization web application designed to load, parse, and display dynamic fuel station datasets for intuitive user exploration.",
    extendedDescription:
      "Built with vanilla JavaScript (ES6+) and the Fetch API, this application efficiently processes complex XML and JSON data structures into dynamic data tables. It offers a highly interactive experience, allowing users to search records by brand or fuel type, filter by 24-hour availability, and sort stations based on real-time pricing or proximity.",
    tags: ["JSON/XML", "Data Visualization", "JavaScript"],
    image: "/images/fuel-stations-data-viewer.webp",
    liveUrl: "https://fuel-stations-data-viewer.vercel.app/",
    detailUrl: "#",
    status: "Deployed",
  },
  {
    id: 4,
    title: "WebVillas",
    description:
      "A feature-rich PHP real estate platform for managing and discovering premium villa listings with integrated location services and image management.",
    extendedDescription:
      "WebVillas is a robust property management application that simplifies the listing process for real estate owners. It features a complete CRUD system for villas, secure user authentication, and multi-image upload capabilities. By integrating the Google Maps API, it provides users with precise geographical context for each property, all presented through a fully responsive and clean interface.",
    tags: ["PHP", "MySQL", "Google Maps"],
    image: "/images/web-villas.webp",
    liveUrl: "#",
    detailUrl: "#",
    status: "Developing",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description:
      "A modern, interactive game built with React, focusing on clean component architecture, predictable state updates, and real-time game logic.",
    extendedDescription:
      "This project goes beyond a simple game by implementing advanced React patterns. It features dynamic player name customization, a robust win/draw detection algorithm, and a move history tracking system. Developed using React Hooks for efficient state management, it demonstrates how to handle complex UI synchronization and conditional rendering in a minimalist, responsive environment.",
    tags: ["React Framework", "Game Logic", "Hooks"],
    image: "/images/tic-tac-toe.webp",
    liveUrl: "https://tic-tac-toe-by-theod.vercel.app/",
    detailUrl: "#",
    status: "Deployed",
  },
  {
    id: 6,
    title: "Sports Team Portal",
    description:
      "A polished, multi-page web experience designed for athletic organizations, featuring dynamic content sections, historical archives, and interactive media galleries.",
    extendedDescription:
      "This project serves as a comprehensive digital hub for sports teams and their fanbases. Built with a focus on semantic HTML5 and modern CSS3, it features a modular multi-page architecture including dedicated sections for team history, real-time news updates, and an interactive media gallery. The responsive design ensures that fans can stay connected with their favorite team across any device or screen size.",
    tags: ["HTML5/CSS3", "Responsive Design", "UI/UX"],
    image: "/images/sports-team-portal.webp",
    liveUrl: "https://sports-team-website.vercel.app/",
    detailUrl: "#",
    status: "Deployed",
  },
];

export const certificates = [
  {
    title: "React - The Complete Guide (Next.js, Redux)",
    issuer: "Udemy",
    year: "2026",
  },
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    year: "2026",
  },
  {
    title: "Responsive Web Development (HTML & CSS)",
    issuer: "Udemy",
    year: "2026",
  },
];

export const techStack = [
  {
    category: "Front-End (Client-Side)",
    techs: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Framer Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      },
    ],
  },
  {
    category: "Back-End (Server-Side)",
    techs: [
      {
        name: "NodeJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Slim Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
  },
  {
    category: "Database Layer",
    techs: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      },
      {
        name: "Doctrine",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original.svg",
      },
    ],
  },
  {
    category: "Creative & Prototyping Tools",
    techs: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
  },
];
