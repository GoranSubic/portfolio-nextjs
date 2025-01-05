import { BaseLayout } from "@/layouts/BaseLayout";
import classes from '@/components/Projects/Projects.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { RestliClient } from "linkedin-api-client";
import { Experience } from "@/components/Experience/Experiences";

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
    <BaseLayout linkedInUser={linkedInUser}>
      <div>
          <h1 className={classes.heading}>Experiences</h1>
          <Experience isFullJob={true} />
      </div>
    </BaseLayout>
  );
}