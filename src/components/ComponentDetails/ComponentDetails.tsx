import React, { FC } from'react';
import classes from'./ComponentDetails.module.css';
import { FaLink } from'react-icons/fa';
import { IComponentDetails } from'@/types/components';
import Link from 'next/link';

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
              <FaLink />
            </a>
          </Link>
        )}
      </div>
      <p className={classes.description}>{description}</p>
      <p className={classes.techStack}>{techStack}</p>
    </div>
  );
};
