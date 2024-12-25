import React from 'react';
import { BaseLayout } from "@/app/layouts/BaseLayout";
import { NextPage } from 'next';
import { Recommendations } from '@/app/components/Recommendations/Recommendations';

const RecommendationsPage: NextPage = () => {
  return (
    <BaseLayout>
      <Recommendations />
    </BaseLayout>
  );
};

export default RecommendationsPage;