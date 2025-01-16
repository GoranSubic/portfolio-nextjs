import React, { FC } from "react";
import { About } from "@/components/About";
import classes from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={classes.root}>
      <About />
    </div>
  );
};
