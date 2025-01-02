import { IComponentDetails } from "@/types/componentDetails";
import { FaNodeJs, FaReact, FaSymfony } from "react-icons/fa";

export const ProjectsDetails: IComponentDetails[] = [
  {
    icon: FaReact,
    title: "Portfolio - NextJS",
    description:
      "NextJS, TypeScript, TailwindCss - https://github.com/GoranSubic/portfolio-nextjs.",
    techStack: "NextJS - TypeScript - TailwindCss",
    componentURL: "https://goransubic.vercel.app/",
  },
  {
    icon: FaNodeJs,
    title: "CV Generator - Express",
    description: "NodeJs, Express, Prisma - Backend project: https://github.com/GoranSubic/cvgenerator-back-nodejs",
    techStack: "NodeJs - Express - Prisma",
    componentURL: "https://github.com/GoranSubic/cvgenerator-back-nodejs",
  },
  {
    icon: FaSymfony,
    title: "Practice Projects - Design Patterns",
    description:
      "Symfony project implemented Domain Driven Design - “Word Game”. This work could be downloaded from: https://github.com/GoranSubic/wordgame (Mar 2022).",
    techStack: "PHP - Symfony - DDD",
    componentURL: "https://github.com/GoranSubic/wordgame",
  },
];
