import { RestliClient } from 'linkedin-api-client';
import { IRecommendation } from '@/types/recommendations';
import Image from 'next/image';
import classes from './Recomm.module.css';
// import fetch from 'node-fetch';
 
const instanceOfRecomm = (data: IRecommendation | undefined | object): data is IRecommendation => { 
    if (data !== undefined && data !== null) {
        return 'name' in data; 
    }

    return false;
} 
 
async function getRecommendations() {
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

//   const response = await fetch('https://api.linkedin.com/v2/me', {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return response.json();

    return response.data;
}

export default async function RecommendationList() {
    const recommendationsData: unknown = await getRecommendations();

    if (!recommendationsData) {
        return <p className='text-center'>No recommendations found</p>;
    }

    if (instanceOfRecomm(recommendationsData)) {
        const recommendations: IRecommendation = recommendationsData as IRecommendation;
    
        // const recommendations: IRecommendation = {
        //     name: recommendationsData.name || '',
        //     email: recommendationsData.email || '',
        //     picture: recommendationsData.picture || '',
        // };

        return (
            <div className={classes.root}>
                <ul>
                    <li key={recommendations.name}>
                    <p>LinkedIn Name: {recommendations.name}</p>
                    <p>LinkedIn Email: {recommendations.email}</p>
                    <Image
                        src={recommendations.picture}
                        alt={recommendations.name}
                        width={100}
                        height={100}
                    />
                    </li>
                </ul>
            </div>
        );
    }

    return <p className='text-center'>No recommendations found</p>;
}