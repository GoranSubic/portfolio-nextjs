import React, { FC } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IComponentDetails } from "@/types/componentDetails";
import classes from "./ComponentDetails.module.css";
import TextWithLineBreaks from "@/utils/textWithLineBreaks";

interface Props {
  componentDetails: IComponentDetails;
}

export const ComponentDetails: FC<Props> = ({ componentDetails }) => {
  const { title, description, techStack, componentURL } = componentDetails;

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        <p className={classes.title}>{title}</p>
        {componentDetails.componentURL !=='#' && (
          <Link legacyBehavior href={componentURL}>
            <a target={'_blank'} rel={'noreferrer'}>
              <FaGithub />
            </a>
          </Link>
        )}
      </div>
      <TextWithLineBreaks text={description} classes={classes.paragraphBlock} />
      <p className={classes.techStack}>{techStack}</p>
    </div>
  );
};
