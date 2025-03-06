import React, { FC } from "react";
import classes from "./Experience.module.css";
import { IProfessionalExperience } from "@/types/experience";
import LinkPreview from "./LinkPreview";
import TextWithLineBreaks from "@/utils/textWithLineBreaks";
import { extractMetaTags } from "@/utils/extractMetaTags";

interface Props {
  experience: IProfessionalExperience;
}

export const Experience: FC<Props> = async ({experience}) => {
  const data = await extractMetaTags(experience.url) ?? undefined;

  const dataLink = {
    title: data && data.title ? data.title : experience.company,
    description: data && data.description ? data.description : experience.description,
    image: data &&  data.image ? data.image : experience.image,
  }

  return (
    <div className="flex items-center justify-center">
        <div className={classes.itemWrapper}>
          <div className={classes.contentWrapperFull}>
            <div className={classes.contentHeadingWrapper}>
              <p>{experience.designation}</p>
              <p className={classes.duration}>{experience.duration}</p>
            </div>
            <div className="mb-4">
              <LinkPreview data={dataLink} url={experience.url} />
            </div>
            <div className={classes.content}>
              <h2 className={classes.heading2}>Job Description</h2>
              {
                <TextWithLineBreaks
                  text={experience.description}
                  classParagraphBlock={classes.paragraphBlock}
                  classListIcon={classes.listIcon}
                />
              }
            </div>
          </div>
        </div>
    </div>
  );
};
