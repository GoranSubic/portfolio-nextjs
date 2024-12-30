import { motion } from "framer-motion";
import { FC } from "react";
import { scaleAnElementVariants } from "../../constants/Animations";
import { SKILLS } from "../../constants/Skills";
import { Experience } from "../Experience/Experience";
import classes from "./About.module.css";

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
          My name is Goran Subić, I&apos;m an IT professional with more than 10 years in the IT environment.
          <br />
          Most of my experience is in the field of backend development using PHP with Symfony, Laravel and Zend frameworks.
          <br />
          I have experience in frontend development as well. Projects that I have maintained on the frontend side are made using Vue JS.
          <br />
          I&apos;m a developer who is dedicated to the job and writes the code that I believe you can be proud of :)
          You could check my portfolio <a href="https://goransubic.github.io/" target="_blank">https://goransubic.github.io/</a> and there you could find CV and information important about education and work experience.
          <br />
          Besides portfolio, that is made using Next JS + TypeScript + TailwindCSS, I have a couple projects that I&apos;m working on.
          First project that I could present to you, is created using Symfony + Vue.
          Next, I have made a project using Node JS + Express + Prisma. That is a backend project, I have to complete the frontend part using Next Js.
          Also, there are a couple of projects that can be found on my GitHub profile that were made for practice and learning purposes.
          <br />
          I believe that I can be a useful part of your team because of my working experience with such a team,
          technologies that I&apos;m experienced in and great willingness to learn and improve my knowledge and skills.
          During my career, I met great people, we did a lot of good work, but sometimes there were different types of pressure that I had to deal with.
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
        <Experience />
      </motion.div>
    </div>
  );
};
