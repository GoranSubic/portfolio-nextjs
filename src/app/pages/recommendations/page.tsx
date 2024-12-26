import { RestliClient } from 'linkedin-api-client';
import { NextResponse } from 'next/server';
import { BaseLayout } from "@/app/layouts/BaseLayout";
// import { Recommendations } from "@/app/components/Recommendations/Recommendations";
import Image from 'next/image';
import { IRecommendation } from '@/app/types/recommendations';


export default async function Page() {
  const accessToken: string | undefined = process.env.LINKEDIN_ACCESS_TOKEN;

  if (!accessToken) {
      return NextResponse.json({ error: 'Access token is required' }, { status: 500 });
  }

  const restliClient = new RestliClient();
  restliClient.setDebugParams({ enabled: true });

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

  return (
    <BaseLayout>
      {/* <Recommendations recommendations={recommendations} /> */}
      <div>
          <h1>Recommendations</h1>
          <ul>
          {/* {recommendations.map((recommendation) => ( */
              <li key={recommendations.name}>
              <p>{recommendations.email}</p>
              <Image
                  src={recommendations.picture}
                  alt={recommendations.name}
                  width={100}
                  height={100}
              />
              </li>
          /* ))} */}
          </ul>
      </div>
    </BaseLayout>
  );
}