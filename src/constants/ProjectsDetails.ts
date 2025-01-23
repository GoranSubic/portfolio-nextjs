import { IComponentDetails } from "@/types/componentDetails";
import { FaNodeJs, FaReact, FaSymfony } from "react-icons/fa";

export const ProjectsDetails: IComponentDetails[] = [
  {
    icon: FaReact,
    title: "Portfolio - NextJS",
    description:
      `
This is a <a href="https://nextjs.org" target="_blank">[Next.js]</a> project bootstrapped with ['create-next-app'] - NextJS, TypeScript, TailwindCss.<nextline>
GitHub link: <a href="https://github.com/GoranSubic/portfolio-nextjs" target="_blank">portfolio-nextjs</a>.<paragraph>
I have made this project as presentation of my experience and skills.
      `,
    techStack: "NextJS - TypeScript - TailwindCss",
    componentURL: "https://goransubic.vercel.app/",
  },
  {
    icon: FaNodeJs,
    title: "CV Generator - ExpressJS",
    description:
      `
This is a backend project, used stack: NodeJs, Express, Prisma ORM.<nextline>
GitHub link: <a href="https://github.com/GoranSubic/cvgenerator-back-nodejs">CV Generator</a><paragraph>
There are thinks to improve, for now it is functional.<nextline>
In future plans are to create frontend using React and <a href="https://refine.dev/docs" target="_blank">Refine</a>.<nextline>
      `,
    techStack: "NodeJs - Express - Prisma",
    componentURL: "https://github.com/GoranSubic/cvgenerator-back-nodejs",
  },
  {
    icon: FaSymfony,
    title: "JSON import - Import from URL",
    description:
      `
Symfony, test task. Project built for Act Digital selection process.<nextline>
GitHub link: <a href="https://github.com/GoranSubic/jsonimport">JSON import</a>.
      `,
    techStack: "PHP - Symfony - OOP, Doctrine ORM - MySQL, Twig",
    componentURL: "https://github.com/GoranSubic/wordgame",
  },
  {
    icon: FaSymfony,
    title: "Practice Projects - Design Patterns",
    description:
      `
Symfony, example project, implemented Domain Driven Design - "Word Game".<nextline>
GitHub link: <a href="https://github.com/GoranSubic/wordgame">Word Game</a>.
      `,
    techStack: "PHP - Symfony - DDD",
    componentURL: "https://github.com/GoranSubic/wordgame",
  },
];
