import {
  mobile,
  backend,
  web,
  creator,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  python,
  java,
  cplusplus,
  c,
  jnv,
  gehu,
  tripguide as idsProject,
  carrent as portfolio3d,
  jobit as personalPortfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Cyber Security Enthusiast",
    icon: backend,
  },
  {
    title: "3D Web Developer",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "C", icon: c },
  { name: "C++", icon: cplusplus },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
];

const educations = [
  {
    title: "Secondary Education (Class X)",
    institution: "Jawahar Navodaya Vidyalaya (JNV)",
    degree: "Class X",
    icon: jnv,
    iconBg: "#ffffff",
    date: "2019",
    points: [
      "Completed secondary education with a strong academic foundation in Mathematics and Science.",
      "Built discipline, curiosity, and a passion for learning at a residential school environment.",
    ],
  },
  {
    title: "Senior Secondary Education (Class XII)",
    institution: "Jawahar Navodaya Vidyalaya (JNV)",
    degree: "Class XII — Science Stream",
    icon: jnv,
    iconBg: "#ffffff",
    date: "2021",
    points: [
      "Completed higher secondary education with a focus on the Science stream.",
      "Developed analytical thinking and problem-solving skills that shaped my interest in technology.",
    ],
  },
  {
    title: "Bachelor of Technology",
    institution: "Graphic Era Hill University",
    degree: "B.Tech in Computer Science and Engineering",
    icon: gehu,
    iconBg: "#ffffff",
    date: "2022 - 2026",
    points: [
      "Focused on Software Development, Web Technologies, Data Structures, and Algorithms.",
      "Exploring modern development practices, interactive web experiences, and full stack technologies.",
    ],
  },
];

const achievements = [
  {
    testimonial:
      "Currently pursuing a B.Tech in Computer Science and Engineering, building a strong foundation in software development and modern technologies.",
    name: "Academic Journey",
    designation: "B.Tech CSE Student",
    company: "Graphic Era Hill University",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=academic",
  },
  {
    testimonial:
      "Passionate about network security, ethical hacking concepts, and building secure, resilient systems.",
    name: "Cyber Security",
    designation: "Area of Interest",
    company: "Security & Networking",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=security",
  },
  {
    testimonial:
      "Focused on building end-to-end web applications with React, Node.js, and modern frontend tooling.",
    name: "Full Stack Development",
    designation: "Area of Interest",
    company: "Web Technologies",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=fullstack",
  },
  {
    testimonial:
      "Creating immersive 3D web experiences using React Three Fiber, Three.js, and interactive UI design.",
    name: "3D Web Experiences",
    designation: "Currently Exploring",
    company: "Three.js & R3F",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=threejs",
  },
];

const projects = [
  {
    name: "Intrusion Detection System (IDS)",
    description:
      "Rule-based intrusion detection framework capable of monitoring traffic, analyzing packets, and generating alerts for suspicious network activities.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scapy", color: "green-text-gradient" },
      { name: "networking", color: "pink-text-gradient" },
    ],
    image: idsProject,
    source_code_link: "https://github.com/SidSem",
  },
  {
    name: "3D Developer Portfolio",
    description:
      "Interactive personal portfolio built with React, Three.js, React Three Fiber, and Tailwind CSS — featuring 3D models, smooth animations, and a modern developer aesthetic.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: portfolio3d,
    source_code_link: "https://github.com/SidSem",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "Modern responsive portfolio showcasing projects, skills, and achievements — built with a clean layout, fast performance, and developer-focused presentation.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: personalPortfolio,
    source_code_link: "https://github.com/SidSem",
  },
];

export const socialLinks = {
  github: "https://github.com/SidSem",
  linkedin: "https://linkedin.com/in/SiddharthSemwal",
  email: "siddharth.18semwal@gmail.com",
};

export { services, technologies, educations, achievements, projects };
