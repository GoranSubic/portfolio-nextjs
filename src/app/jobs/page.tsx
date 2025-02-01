import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Projects/Projects.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { Experience } from "@/components/Experience/Experiences";
import { MenuItems } from "@/types/menu";
import { getLinkedInUser, instanceOfLinkedInUser } from "@/utils/linkedInUser";

export default async function Jobs() {
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
    <BaseLayout linkedInUser={linkedInUser} activeMenu={MenuItems.JOBS}>
      <div>
          <h1 className={classes.heading}>Experiences</h1>
          <Experience isFullJob={true} />
      </div>
    </BaseLayout>
  );
}