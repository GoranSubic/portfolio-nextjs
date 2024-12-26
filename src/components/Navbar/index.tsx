import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import {
  scaleAnElementVariants,
  svgLogoPathVariants,
  svgVariants,
  whileHoverButton,
  scaleAnimation,
} from "../../constants/Animations";
import { MenuItems } from "../../types/menu";
import classes from "./Navbar.module.css";

interface Props {
  activeMenu?: MenuItems;
}

export const Navbar: FC<Props> = ({ activeMenu }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      className={classes.root}
    >
      <motion.div>
        <Link legacyBehavior href={"/"}>
          <a>
            <div className={classes.logoWrapper}>
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={"hidden"}
                whileInView={"visible"}
                variants={svgVariants}
                whileHover={whileHoverButton}
              >
                <motion.path
                  variants={svgLogoPathVariants}
                  d="M 13.50,20.20
           C 13.50,20.20 13.50,16.00 13.50,16.00
             13.50,16.00 10.11,16.00 10.11,16.00
             10.11,16.00 10.11,14.00 10.11,14.00
             10.11,14.00 15.55,14.00 15.55,14.00
             15.55,14.00 15.55,20.98 15.55,20.98
             14.74,21.65 13.86,22.16 12.89,22.50
             11.93,22.84 10.91,23.00 9.81,23.00
             7.41,23.00 5.54,22.34 4.19,21.03
             2.84,19.71 2.17,17.87 2.17,15.50
             2.17,13.14 2.84,11.30 4.19,9.98
             5.54,8.66 7.41,8.00 9.81,8.00
             10.81,8.00 11.76,8.09 12.66,8.25
             13.56,8.42 14.39,8.67 15.16,9.00
             15.16,9.00 15.16,11.00 15.16,11.00
             14.38,10.67 13.57,10.42 12.70,10.25
             11.85,10.09 10.95,10.00 10.00,10.00
             8.12,10.00 6.71,10.46 5.77,11.39
             4.83,12.31 4.36,13.68 4.36,15.50
             4.36,17.32 4.83,18.70 5.77,19.62
             6.71,20.54 8.12,21.00 9.98,21.00
             10.72,21.00 11.38,20.94 11.95,20.81
             12.52,20.68 13.04,20.48 13.50,20.20 Z"
                  fill="url(#paint0_angular_48_5)"
                />
                <motion.path
                  variants={svgLogoPathVariants}
                  d="M 28.23,9.00
           C 28.23,9.00 28.23,11.00 28.23,11.00
             27.45,10.67 26.71,10.42 26.02,10.25
             25.32,10.09 24.64,10.00 24.00,10.00
             22.86,10.00 21.99,10.20 21.38,10.59
             20.77,10.99 20.47,11.55 20.47,12.27
             20.47,12.88 20.67,13.34 21.08,13.66
             21.48,13.97 22.25,14.22 23.39,14.41
             23.39,14.41 24.64,14.64 24.64,14.64
             26.18,14.91 27.32,15.39 28.05,16.08
             28.79,16.77 29.16,17.68 29.16,18.83
             29.16,20.20 28.66,21.23 27.66,21.94
             26.66,22.65 25.21,23.00 23.30,23.00
             22.58,23.00 21.80,22.92 20.98,22.75
             20.17,22.59 19.33,22.34 18.45,22.00
             18.45,22.00 18.45,20.00 18.45,20.00
             19.30,20.34 20.12,20.59 20.92,20.75
             21.72,20.92 22.52,21.00 23.30,21.00
             24.48,21.00 25.39,20.80 26.03,20.41
             26.68,20.01 27.00,19.45 27.00,18.72
             27.00,18.07 26.77,17.57 26.30,17.22
             25.84,16.86 25.08,16.59 24.03,16.41
             24.03,16.41 22.77,16.19 22.77,16.19
             21.22,15.90 20.11,15.44 19.42,14.81
             18.73,14.18 18.39,13.30 18.39,12.19
             18.39,10.89 18.86,9.87 19.81,9.12
             20.77,8.38 22.09,8.00 23.77,8.00
             24.47,8.00 25.20,8.09 25.94,8.25
             26.69,8.42 27.45,8.67 28.23,9.00 Z"
                  fill="url(#paint1_angular_48_5)"
                />
                <motion.circle
                  variants={svgLogoPathVariants}
                  cx="16"
                  cy="16"
                  r="15.2344"
                  stroke="url(#paint2_angular_48_5)"
                  strokeWidth="0.46875"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular_48_5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.1855 15.8286) rotate(90) scale(17.1429 16.292)"
                  >
                    <stop offset="0.324005" stopColor="#1B77CC" />
                    <stop offset="0.771372" stopColor="#2D7BC2" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_angular_48_5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.1855 15.8286) rotate(90) scale(17.1429 16.292)"
                  >
                    <stop offset="0.324005" stopColor="#1B77CC" />
                    <stop offset="0.771372" stopColor="#2D7BC2" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_angular_48_5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16 16) rotate(90) scale(15)"
                  >
                    <stop
                      offset="0.418101"
                      stopColor="#003D99"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="0.885371"
                      stopColor="#0884CA"
                      stopOpacity="0.5"
                    />
                  </radialGradient>
                </defs>
              </motion.svg>
            </div>
          </a>
        </Link>
      </motion.div>
      <div className={classes.navbarLinks}>
        <Link legacyBehavior href={"/projects"}>
          <a>
            <motion.p
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.PROJECTS,
              })}
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Projects
            </motion.p>
          </a>
        </Link>
        <Link legacyBehavior href={"/jobs"}>
          <a>
            <motion.p
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.JOBS,
              })}
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Jobs
            </motion.p>
          </a>
        </Link>
        <Link legacyBehavior href={"/recommendations"}>
          <a>
            <motion.p
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={clsx({
                [classes.isActive]: activeMenu === MenuItems.RECOMMENDATIONS,
              })}
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Recommendations
            </motion.p>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};
