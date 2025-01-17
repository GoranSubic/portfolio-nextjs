import React, { FC } from "react";
import classes from "./Hero.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { sendGTMEvent } from '@next/third-parties/google'
import { SOCIAL_LINKS } from "../../constants/SocialLinks";
import { motion } from "framer-motion";
import {
  animateFromLeftVariant,
  animateFromRightVariant,
} from "../../constants/Animations";
import { ILinkedInUser } from "@/types/recommendations";

interface Props {
  linkedInUser: ILinkedInUser;
}

export const Hero: FC<Props> = ({linkedInUser}) => {
  return (
    <div className={classes.root + " " + classes.trustblue}>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={animateFromLeftVariant}
      >
        <div>
          <p className={classes.greetingMultiLingual}>,</p>
          <p>I&apos;m {linkedInUser.name}</p>
        </div>
        <div className={classes.professionText}>
          <p>A passionate Software Engineer</p>
        </div>
        <div className={classes.resumeBtnWrapper}>
          <Link legacyBehavior href={"/docs/GoranSubic-CV.pdf"}>
            <a target="_blank">
              <button>CURRICULUM VITAE</button>
            </a>
          </Link>
        </div>
        <div className={classes.socialLinks}>
          {SOCIAL_LINKS.map((socialLink) => (
            <button
              key={socialLink.link}
              aria-label={socialLink.name}
              onClick={() => sendGTMEvent({ event: 'buttonClicked', value: `SOCIAL_LINKS_${socialLink.name}` })}
            >
              <a href={socialLink.link} target={"_blank"} rel={"noreferrer"}>
                {<socialLink.component aria-label={socialLink.name} />}
              </a>
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={animateFromRightVariant}
        className={classes.imageWrapper}
      >
        <Image
          src={linkedInUser.picture}
          alt={linkedInUser.name}
          layout={"fill"}
          objectFit={"cover"}
          placeholder="blur"
          blurDataURL={"/favicon.ico"}
        />
        <Image
          src={"/images/goran-linkedin.png"}
          alt={linkedInUser.name + " LinkedIn"}
          layout={"fill"}
          objectFit={"cover"}
          placeholder="blur"
          blurDataURL={"/favicon.ico"}
        />
      </motion.div>
    </div>
  );
};
