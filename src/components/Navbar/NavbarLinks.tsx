import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useContext, useState } from 'react';
import Link from 'next/link';
import classes from './Navbar.module.css';
import {
  scaleAnElementVariants,
  scaleAnimation,
} from "@/constants/Animations";
import { MenuItems } from "@/types/menu";
import { MenuContext } from "./MenuContext";
import { ProfessionalExperience } from "@/constants/Experience";

interface Props {
  menuType?: string;
}

export const NavbarLinks: FC<Props> = ({ menuType }) => {
  const menucontext = useContext(MenuContext);
  const jobsMenuItems = ProfessionalExperience?.length ? ProfessionalExperience : [];
  const [isJobsOpen, setIsJobsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsJobsOpen(old => !old);
  }

  let transClass = isJobsOpen ? classes.navbarSubLinks : classes.hideMenuNav;
  if (menuType === "hamburger") {
    transClass = classes.navbarSubLinksHamburgerOpen;
  }

  return (
    <>
      <Link legacyBehavior href={"/projects"}>
          <a>
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={
                clsx({
                  [classes.isActive]: menucontext === MenuItems.PROJECTS,
                  [classes.navbarLinksElement]: true,
                })
              }
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Projects
            </motion.div>
          </a>
        </Link>
        <span>
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={
                clsx({
                  [classes.isActive]: menucontext === MenuItems.JOBS,
                  [classes.navbarLinksElement]: true,
                })
              }
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
              onClick={toggle}
            >
              <div>
                <Link legacyBehavior href={"/jobs"}>
                  <a>
                Jobs
                  </a>
                </Link>
                <div className={transClass}>
                  {
                    jobsMenuItems.map(item =>
                      <Link
                        key={item.slug}
                        className={
                          clsx({
                            [classes.isActive]: menucontext === item.slug,
                            "text-white hover:text-blue-400": true,
                          })
                        }
                        href={"/jobs/" + item?.slug || ''}
                        onClick={toggle}
                      >
                        {item.company}
                      </Link>
                    )
                  }
                </div>
              </div>
            </motion.div>
        </span>
        <Link legacyBehavior href={"/recommendations"}>
          <a>
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              variants={scaleAnElementVariants()}
              className={
                clsx({
                  [classes.isActive]: menucontext === MenuItems.RECOMMENDATIONS,
                  [classes.navbarLinksElement]: true,
                })
              }
              whileHover={scaleAnimation}
              whileTap={scaleAnimation}
            >
              Recommendations
            </motion.div>
          </a>
        </Link>
    </>
  );
};
