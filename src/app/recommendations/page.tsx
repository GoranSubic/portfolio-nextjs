import { BaseLayout } from "@/layouts/BaseLayout";
import RecommendationList from "@/components/Recommendations/RecommList";
import classes from '@/components/Recommendations/Recomm.module.css';

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