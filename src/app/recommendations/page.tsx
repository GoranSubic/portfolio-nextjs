import { RestliClient } from 'linkedin-api-client';
// import { NextResponse } from 'next/server';
import { BaseLayout } from "@/layouts/BaseLayout";
import Image from 'next/image';
import { IRecommendation } from '@/types/recommendations';

export const revalidate = 3600 // invalidate every hour

export default async function Recommendations() {
  const getRecommendations = async () => {
    const accessToken: string | undefined = process.env.LINKEDIN_ACCESS_TOKEN;
  
    if (!accessToken) {
        // return NextResponse.json({ error: 'Access token is required' }, { status: 500 });
        throw new Error('Access token is required');
    }

    const restliClient = new RestliClient();
    // restliClient.setDebugParams({ enabled: true });

    const response = await restliClient.get({
        resourcePath: '/userinfo',
        accessToken
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch LinkedIn recommendations');
    }

    const recommendationsData = response.data;
    const recommendations: IRecommendation = {
      name: recommendationsData.name,
      email: recommendationsData.email,
      picture: recommendationsData.picture,
    };

    return recommendations;
  }

  const recommendations = await getRecommendations();
  

  // const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/userinfo';

  // const response = await fetch(`${LINKEDIN_API_URL}`, {
  //   headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // if (response.status !== 200) {
  //   throw new Error('Failed to fetch LinkedIn recommendations');
  // }

  // const recommendations = await response.json();

  return (
    <BaseLayout>
      <div>
          <h1>Recommendations</h1>
          <ul>
              <li key={recommendations.name}>
              <p>{recommendations.email}</p>
              <Image
                  src={recommendations.picture}
                  alt={recommendations.name}
                  width={100}
                  height={100}
              />
              </li>
          </ul>
      </div>
    </BaseLayout>
  );
}