'use client'

import Head from "next/head";
import { FC } from "react";
import { MenuItems } from "@/types/menu";
import { Navbar } from "@/components/Navbar";
import classes from "./BaseLayout.module.css";
import { Hero } from "@/components/Hero/Hero";
import { ILinkedInUser } from "@/types/recommendations";
import { Footer } from "@/components/Footer";
import { MenuContext } from "@/components/Navbar/MenuContext";

interface Props {
  linkedInUser: ILinkedInUser;
  activeMenu: MenuItems | string;
  children?: React.ReactNode;
}

export const BaseLayout: FC<Props> = ({
  linkedInUser,
  activeMenu,
  children,
}) => {
  return (
    <div className={classes.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Goran Subić | Software Engineer</title>
        <meta
          content={
            "Goran Subić is a Software Engineer currently working at Act Digital Serbia with 5 years of experience in building and maintaining web applications."
          }
          name="description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"Goran Subić"} />
        <meta
          property="og:description"
          content={
            "Goran Subić is a Software Engineer currently working at Act Digital Serbia with 5 years of experience in building and maintaining web applications."
          }
        />
        <meta
          property="og:title"
          content={"Goran Subić | Software Engineer"}
        />
        <meta property="og:image" content={`/images/logo.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Goran Subić | Software Engineer"}
        />
        <meta
          name="twitter:description"
          content={
            "Goran Subić is a Software Engineer currently working at Act Digital Serbia with 5 years of experience in building and maintaining web applications."
          }
        />
      </Head>
      <MenuContext.Provider value={activeMenu}>
        <Navbar />
      </MenuContext.Provider>
      <Hero linkedInUser={linkedInUser} />
      <br />
      <div className={classes.mainContent}>{children}</div>
      <Footer />
    </div>
  );
};
