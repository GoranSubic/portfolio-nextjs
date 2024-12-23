import React, { FC } from "react";
import { ProfessionalExperience } from "../../../constants/Experience";
import classes from "./Experience.module.css";

export const Experience: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <ol className={classes.list}>
        {ProfessionalExperience.map((experience, idx) => (
          <li key={idx}>
            <div className={classes.itemWrapper}>
              <div className={classes.iconWrapper}>
                <experience.icon />
              </div>
              <div className={classes.contentWrapper}>
                <div className={classes.contentHeadingWrapper}>
                  <p>{experience.designation}</p>
                  <p>({experience.company})</p>
                  <p className={classes.duration}>{experience.duration}</p>
                </div>
                <p className={classes.content}>{experience.short}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
