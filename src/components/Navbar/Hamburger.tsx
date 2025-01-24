import { FC, useEffect, useState } from 'react';
import { MenuItems } from "@/types/menu";
import classes from './Navbar.module.css';
import { NavbarLinks } from './NavbarLinks';

interface Props {
  activeMenu?: MenuItems;
}

export const Hamburger: FC<Props> = ({ activeMenu }) => {
  const [isHambOpen, setIsHambOpen] = useState(false);

  useEffect(() => {
    const toggleMenu = document.getElementById("toggleMenu");
    if (toggleMenu) {
      const firstLine = document.getElementById("firstLine");
      const middleLine = document.getElementById("middleLine");
      const secondLine = document.getElementById("secondLine");
      toggleMenu.onclick = () => {
        setIsHambOpen(old => !old);

        firstLine?.classList.toggle("rotate-45");
        firstLine?.classList.toggle("translate-y-2.5");

        middleLine?.classList.toggle("scale-x-0");

        secondLine?.classList.toggle("-rotate-45");
        secondLine?.classList.toggle("-translate-y-2.5");
      };
    }
  }, []); 

  return (
    <>
    <div className={isHambOpen ? classes.showHamburgerMenuNav : classes.hideMenuNav}>
      <div >
      <NavbarLinks activeMenu={activeMenu} menuType='hamburger' />
      </div>
    </div>

    <button id="toggleMenu" className={classes.navbarLinksHamburgerButton}>
      <div className={classes.hamburgerInnerDiv}>
        <span id="firstLine" className="h-1 w-8 rounded-full bg-black transition"></span>
        <span id="middleLine" className="h-1 w-8 rounded-full bg-black transition"></span>
        <span id="secondLine" className="h-1 w-8 rounded-full bg-black"></span>
      </div>
    </button>
    </>
  );
};
