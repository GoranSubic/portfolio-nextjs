import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useState } from 'react';
import classes from './Navbar.module.css';
import {
  scaleAnElementVariants,
  scaleAnimation,
} from "@/constants/Animations";
import { MenuItems } from "@/types/menu";
import { ProfessionalExperience } from "@/constants/Experience";
import Link from 'next/link';

interface Props {
  activeMenu?: MenuItems;
  menuType?: string;
}

export const NavbarLinks: FC<Props> = ({ activeMenu, menuType }) => {
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
                  [classes.isActive]: activeMenu === MenuItems.PROJECTS,
                }) +
                classes.navbarLinksElement
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
                  [classes.isActive]: activeMenu === MenuItems.JOBS,
                }) +
                classes.navbarLinksElement
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
                        className="text-white hover:text-blue-400"
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
                  [classes.isActive]: activeMenu === MenuItems.RECOMMENDATIONS,
                }) +
                classes.navbarLinksElement
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
