'use client'

import Head from "next/head";
import { FC } from "react";
import { MenuItems } from "../../../types/menu";
import { Navbar } from "../../components/Navbar";
import classes from "./BaseLayout.module.css";

interface Props {
  children?: React.ReactNode;
  activeMenu?: MenuItems;
}

export const BaseLayout: FC<Props> = ({
  children,
  activeMenu,
}) => {
  return (
    <div className={classes.root}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-BoldItalic.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar activeMenu={activeMenu} />
      <div className={classes.mainContent}>{children}</div>
    </div>
  );
};
