import React, { FC } from "react";
import Image from 'next/image';

export const Recommendations: FC = async () => {
  const getLinkedInRecommendations = async () => {
    
      const response = await fetch('http://localhost:3000/api/linkedin', {
        next: {revalidate: 10},
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch LinkedIn recommendations');
      }
  
      const data = await response.json();

      return data;
  }

  const recommendations = await getLinkedInRecommendations();

  return (
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
  );
}