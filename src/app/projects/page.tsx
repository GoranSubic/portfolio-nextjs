import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Projects/Projects.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { ProjectsList } from "@/components/Projects/ProjectsList";
import { MenuItems } from "@/types/menu";
import { getLinkedInUser, instanceOfLinkedInUser } from "@/utils/linkedInUser";

export default async function Projects() {
  const linkedInUserData: unknown = await getLinkedInUser();

  let linkedInUser: ILinkedInUser = {
    name: 'Goran Subić',
    email: 'gsbuic@gmail.com',
    picture: '/images/GoranSubic.jpeg',
  };

  if (linkedInUserData !== undefined && linkedInUserData !== null && instanceOfLinkedInUser(linkedInUserData)) {
    linkedInUser = linkedInUserData as ILinkedInUser;
  }

  return (
    <BaseLayout linkedInUser={linkedInUser} activeMenu={MenuItems.PROJECTS}>
      <div>
          <h1 className={classes.heading}>Projects</h1>
          <ProjectsList />
      </div>
    </BaseLayout>
  );
}