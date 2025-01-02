import React, { FC } from "react";
import classes from "./Experience.module.css";
import { IProfessionalExperience } from "@/types/experience";
import { LinkPreview } from "./LinkPreview";

interface Props {
  experience: IProfessionalExperience;
}

export const Experience: FC<Props> = ({experience}) => {
  return (
    <div className="flex items-center justify-center">
        <div className={classes.itemWrapper}>
          <div className={classes.contentWrapperFull}>
            <div className={classes.contentHeadingWrapper}>
              <p>{experience.designation}</p>
              <p className={classes.duration}>{experience.duration}</p>
            </div>
            <div className="mb-4">
              <LinkPreview url={experience.url} />
            </div>
            <p className={classes.content}>{experience.description}</p>
          </div>
        </div>
    </div>
  );
};
