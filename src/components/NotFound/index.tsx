import { FC } from "react";
import Image from "next/image";
import classes from "./NotFound.module.css";
import Link from "next/link";
import Head from "next/head";

export const NotFound: FC = () => {
  return (
    <div className={classes.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Not Found</title>
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
      <h2>404 - Oops! Page not found.</h2>
      <p>You seem lost! Maybe go to homepage and search again.</p>
      <Image
        src={"/not-found.svg"}
        alt={"not-found"}
        height={300}
        width={300}
      />
      <div className={classes.goHomeBtnWrapper}>
        <Link legacyBehavior href={"/"}>
          <a>
            <button>Go Home</button>
          </a>
        </Link>
      </div>
    </div>
  );
};
