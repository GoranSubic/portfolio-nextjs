import React, { FC } from "react";
import { ProfessionalExperience } from "../../constants/Experience";
import classes from "./Experience.module.css";
import Link from "next/link";
import TextWithLineBreaks from "@/utils/textWithLineBreaks";

interface Props {
  isFullJob: boolean;
}

export const Experience: FC<Props> = ({isFullJob}) => {
  return (
    <div className="flex items-center justify-center">
      <ol className={classes.list}>
        {ProfessionalExperience.map((experience, idx) => (
            <li key={idx}>
              <div className={classes.itemWrapper}>
                <div className={classes.iconWrapper}>
                <Link href={`/jobs/${encodeURIComponent(experience.slug)}`} key={idx}>
                  <experience.icon />
                </Link>
                </div>
                <div className={isFullJob ? classes.contentWrapperFull : classes.contentWrapper}>
                  <div className={classes.contentHeadingWrapper}>
                    <Link href={`/jobs/${encodeURIComponent(experience.slug)}`} key={idx}>
                      <p>{experience.designation}</p>
                      <p>({experience.company})</p>
                      <p className={classes.duration}>{experience.duration}</p>
                    </Link>
                  </div>
                  <div className={classes.content}>{isFullJob
                    ? (experience.description.split('\n').map((paragraph, idx) => {
                        return <TextWithLineBreaks text={paragraph} classes={classes.paragraphBlock} key={idx} />
                      }))
                    : experience.short}
                  </div>
                </div>
              </div>
            </li>
        ))}
      </ol>
    </div>
  );
};
