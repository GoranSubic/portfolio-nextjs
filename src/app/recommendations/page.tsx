import { BaseLayout } from "@/layouts/BaseLayout";
import RecommendationList from "@/app/recommendations/RecommList";
import classes from '@/app/recommendations/Recomm.module.css';

export default async function Recommendations() {
  return (
    <BaseLayout>
      <div>
          <h1 className={classes.heading}>Recommendations</h1>
          <RecommendationList />
      </div>
    </BaseLayout>
  );
}