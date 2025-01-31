import { FC, useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import { NavbarLinks } from './NavbarLinks';

export const Hamburger: FC = () => {
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
      <NavbarLinks menuType='hamburger' />
      </div>
    </div>

    <button id="toggleMenu" className={classes.navbarLinksHamburgerButton}>
      <div className={classes.hamburgerInnerDiv}>
        <span id="firstLine" className="h-1 w-8 rounded-full bg-white transition"></span>
        <span id="middleLine" className="h-1 w-8 rounded-full bg-white transition"></span>
        <span id="secondLine" className="h-1 w-8 rounded-full bg-white transition"></span>
      </div>
    </button>
    </>
  );
};
