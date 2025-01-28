import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Projects/Projects.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { RestliClient } from "linkedin-api-client";
import { ProjectsList } from "@/components/Projects/ProjectsList";
import { MenuItems } from "@/types/menu";

const instanceOfLinkedInUser = (data: ILinkedInUser | undefined | object): data is ILinkedInUser => {
    if (data !== undefined && data !== null) {
        return 'name' in data;
    }

    return false;
}

async function getLinkedInUser(): Promise<ILinkedInUser> {
  const accessToken: string | undefined = process.env.LINKEDIN_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error('Access token is required');
  }

  const restliClient = new RestliClient();
  restliClient.setDebugParams({ enabled: true });

  const response = await restliClient.get({
      resourcePath: '/userinfo',
      accessToken
  });

  const linkedInUser: ILinkedInUser = {
    name: (response !== undefined && response.data !== undefined) && response.data.name || '',
    email: (response !== undefined && response.data !== undefined) && response.data.email || '',
    picture: (response !== undefined && response.data !== undefined) && response.data.picture || '',
  };

  return linkedInUser;
}

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