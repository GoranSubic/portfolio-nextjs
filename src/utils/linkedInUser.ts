import { RestliClient } from "linkedin-api-client";
import { ILinkedInUser } from "@/types/recommendations";

export const instanceOfLinkedInUser = (data: ILinkedInUser | undefined | object): data is ILinkedInUser => {
    if (data !== undefined && data !== null) {
        return 'name' in data;
    }

    return false;
}

export const getLinkedInUser = async (): Promise<ILinkedInUser | undefined> => {
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

  let linkedInUser: ILinkedInUser | undefined = undefined;
  try {
    const restliClient = new RestliClient();
    restliClient.setDebugParams({ enabled: true });

    const response = await restliClient.get({
        resourcePath: '/userinfo',
        accessToken
    });

    linkedInUser = {
      name: (response !== undefined && response.data !== undefined) && response.data.name ? response.data.name : '',
      email: (response !== undefined && response.data !== undefined) && response.data.email ? response.data.email : '',
      picture: (response !== undefined && response.data !== undefined) && response.data.picture ? response.data.picture : '',
    };
  } catch (error) {
    console.error('Error calling LinkedIn API: ', error);
  }

  return linkedInUser;
}
