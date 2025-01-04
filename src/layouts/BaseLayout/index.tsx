'use client'

import Head from "next/head";
import { FC } from "react";
import { MenuItems } from "@/types/menu";
import { Navbar } from "@/components/Navbar";
import classes from "./BaseLayout.module.css";
import { Hero } from "@/components/Hero/Hero";
import { ILinkedInUser } from "@/types/recommendations";
import { Footer } from "@/components/Footer";

interface Props {
  linkedInUser: ILinkedInUser;
  children?: React.ReactNode;
  activeMenu?: MenuItems;
}

export const BaseLayout: FC<Props> = ({
  linkedInUser,
  children,
  activeMenu,
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
      <Hero linkedInUser={linkedInUser} />
      <br />
      <div className={classes.mainContent}>{children}</div>
      <Footer />
    </div>
  );
};
