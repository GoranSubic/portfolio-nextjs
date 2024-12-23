'use client'

import React, { FC } from "react";
import { About } from "../../components/About";
import { Hero } from "../../components/Hero/Hero";
import classes from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={classes.root}>
      <Hero />
      <br />
      <About />
    </div>
  );
};
