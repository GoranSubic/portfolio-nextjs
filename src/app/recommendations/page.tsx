// import { RestliClient } from 'linkedin-api-client';
// import { NextResponse } from 'next/server';
import { BaseLayout } from "@/layouts/BaseLayout";
import Image from 'next/image';
import { IRecommendation } from '@/types/recommendations';


export default async function Page() {
  // const accessToken: string | undefined = process.env.LINKEDIN_ACCESS_TOKEN;

  // if (!accessToken) {
  //     return NextResponse.json({ error: 'Access token is required' }, { status: 500 });
  // }

  // const restliClient = new RestliClient();
  // restliClient.setDebugParams({ enabled: true });

  // const response = await restliClient.get({
  //     resourcePath: '/userinfo',
  //     accessToken
  // });

  // const recommendationsData = response.data;
  // const recommendations: IRecommendation = {
  //   name: recommendationsData.name,
  //   email: recommendationsData.email,
  //   picture: recommendationsData.picture,
  // };

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

  const recommendations: IRecommendation = {
    name: 'recommendationsData.name',
    email: 'recommendationsData.email',
    picture: 'https://miro.medium.com/v2/resize:fit:541/1*cY6466o_056cs-XXIN2U0g.png',
  };

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