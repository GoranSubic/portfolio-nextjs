import React, { FC } from 'react';
import classes from './Projects.module.css';
import { ComponentDetails } from '@/components/ComponentDetails/ComponentDetails';
import { ProjectsDetails } from '@/constants/ProjectsDetails';

export const ProjectsList: FC = () => {
  return (
    <div className={classes.root}>
      {ProjectsDetails.map((project) => (
        <ComponentDetails key={project.title} componentDetails={project} />
      ))}
    </div>
  );
};
