'use client'

import { motion } from "framer-motion";
import { FC } from "react";
import { scaleAnElementVariants } from "@/constants/Animations";
import { SKILLS } from "@/constants/Skills";
import { Experiences } from "../Experience/Experiences";
import classes from "./About.module.css";
import { ContactForm } from "../ContactForm/ContactForm";
import { About as AboutMe } from "@/constants/About";
import TextWithLineBreaks from "@/utils/textWithLineBreaks";

export const About: FC = () => {
  const halfSkills = Math.ceil(SKILLS.length / 2);
  const firstHalf = SKILLS.slice(0, halfSkills - 1);
  const secondHalf = SKILLS.slice(halfSkills - 1, SKILLS.length);
  const skills = [firstHalf, secondHalf];

  return (
    <div className={classes.root}>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={scaleAnElementVariants()}
      >
        <h2 className={classes.heading}># Who Am I?</h2>
        <h1 className={classes.heading}>Goran Subić, Web Development Engineer</h1>
        <TextWithLineBreaks text={AboutMe.text} classParagraphBlock={classes.paragraphBlock} />
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
          {skills.map((skillGroup, index) => (
            <div key={index} className={classes.skillsGroup}>
              {skillGroup.map((skill) => (
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
        <Experiences isFullJob={false} />
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
