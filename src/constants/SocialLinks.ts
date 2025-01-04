import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/GoranSubic",
    component: FaGithub,
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/goran-subic/",
    component: FaLinkedin,
    name: "Linkedin",
  },
];

export const LIBRARIES_USED_LINKS = [
  {
    link: "https://nextjs.org/",
    component: SiNextdotjs,
    name: "Next.js",
  },
  {
    link: "https://www.typescriptlang.org/",
    component: SiTypescript,
    name: "Typescript",
  },
  {
    link: "https://tailwindcss.com/",
    component: SiTailwindcss,
    name: "TailwindCSS",
  },
];