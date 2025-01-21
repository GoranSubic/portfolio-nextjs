'use client'

import { motion } from "framer-motion";
import { FC } from "react";
import { scaleAnElementVariants } from "../../constants/Animations";
import { SKILLS } from "../../constants/Skills";
import { Experience } from "../Experience/Experiences";
import classes from "./About.module.css";
import { ContactForm } from "../ContactForm/ContactForm";

export const About: FC = () => {
  return (
    <div className={classes.root}>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h1 className={classes.heading}># Who Am I?</h1>
        <p>
          My name is Goran Subić, I&apos;m an IT professional with more than 10 years of experience in the industry.
          <br /><br />
          Most of my experience  lies in backend development, where I&apos;ve worked extensively with PHP and frameworks such as Symfony, Laravel, and Zend.
          <br />
          Lastly, I gained experience working on project using NodeJS, Express, TypeScript, Prisma.
          <br /><br />
          I have experience in frontend development as well. Projects that I have maintained on the frontend side are made moslty using Vue JS.
          <br />
          Also, I gained experience using NextJS, TypeScript, TailwindCSS. This portfolio was made using that stack.
          <br /><br />
          I&apos;m a developer who is dedicated to the job and writes code that I believe you can be proud of :)
          You can check my portfolio here at <a href="https://goransubic.vercel.app/" target="_blank">https://goransubic.vercel.app/</a> and on GitHub <a href="https://github.com/GoranSubic/portfolio-nextjs" target="_blank">https://github.com/GoranSubic/portfolio-nextjs</a> where you will find my CV and important information about my education and work experience.
          <br /><br />
          In addition to my portfolio, which was built using Next JS + TypeScript + TailwindCSS, I am currently working on a few projects.
          <br />
          One of these (which I could present to you) is a project created with Symfony and Vue.js: <a href="https://alternativa8.rs/" target="_blank">https://alternativa8.rs/</a>.
          <br />
          Another project, I&apos;ve developed uses NodeJS + Express + Prisma for the backend, with plans to complete the frontend using Next.js.
          <br />
          Also, there are a couple of projects on my GitHub profile, which I&apos;ve created for practice and learning purposes.
          <br /><br />
          I believe I can be a valuable addition to your team thanks to my experience as a team player,
          my expertise in various technologies, and my strong desire to continue learning and improving my skills.
          <br />
          Throughout my career, I&apos;ve had the privilege of working with great people, delivering quality work, and effectively handling various pressures along the way.
        </p>
      </motion.div>
      <br />
      <br />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
        className={classes.skills}
      >
        <h2 className={classes.heading}># What I work with?</h2>
        <div className={classes.skillsList}>
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              aria-label={skill.name}
              className={classes.skillWrapper}
            >
              <skill.component />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <br />
      <br />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h2 className={classes.heading}># My professional experience</h2>
        <Experience isFullJob={false} />
      </motion.div>
      <br />
      <br />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h2 className={classes.heading}># Send a message to me</h2>
        <ContactForm />
      </motion.div>
    </div>
  );
};
