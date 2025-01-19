import { BaseLayout } from "@/layouts/BaseLayout";
import RecommendationList from "@/components/Recommendations/RecommList";
import classes from '@/components/Recommendations/Recomm.module.css';
import { ILinkedInUser } from "@/types/recommendations";
import { RestliClient } from "linkedin-api-client";
import Image from "next/image";
import Link from "next/link";

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

//   const response = await fetch('https://api.linkedin.com/v2/me', {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return response.json();

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

export default async function Recommendations() {
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
        <div className={classes.heading}>
          <h1 className={classes.headingTitle}>Recommendations</h1>
          <span className={classes.headingTitle}>from:</span>
          <Link
            href="https://www.linkedin.com/in/goran-subic/details/recommendations/"
            target="_blank"
            className={classes.headingTitleLn}
          >
            <Image
              src="/images/recommendations/LI-Logo.png"
              alt="LinkedIn Logo"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
        </div>
        <RecommendationList />
      </div>
    </BaseLayout>
  );
}