import React, { FC } from "react";
import { ProfessionalExperience } from "../../constants/Experience";
import classes from "./Experience.module.css";
import Link from "next/link";

interface Props {
  isFullJob: boolean;
}

export const Experience: FC<Props> = ({isFullJob}) => {
  return (
    <div className="flex items-center justify-center">
      <ol className={classes.list}>
        {ProfessionalExperience.map((experience, idx) => (
          <Link href={`/jobs/${encodeURIComponent(experience.slug)}`} key={idx}>
            <li>
              <div className={classes.itemWrapper}>
                <div className={classes.iconWrapper}>
                  <experience.icon />
                </div>
                <div className={isFullJob ? classes.contentWrapperFull : classes.contentWrapper}>
                  <div className={classes.contentHeadingWrapper}>
                    <p>{experience.designation}</p>
                    <p>({experience.company})</p>
                    <p className={classes.duration}>{experience.duration}</p>
                  </div>
                  <div className={classes.content}>{isFullJob
                    ? (experience.description.split('\n').map((paragraph) => {
                        return <p>{paragraph}</p>;
                      }))
                    : experience.short}
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};
