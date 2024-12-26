import React, { FC } from "react";
import Image from 'next/image';
import { IRecommendation } from "@/app/types/recommendations";

interface Props {
  recommendations: IRecommendation;
}

export const Recommendations: FC<Props> = ({recommendations}) => {
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