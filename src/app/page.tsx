import type { NextPage } from "next";
import { Home } from "@/containers/Home/Home";
import { BaseLayout } from "@/layouts/BaseLayout";
import { ILinkedInUser } from "@/types/recommendations";
import { RestliClient } from "linkedin-api-client";

const instanceOfRecomm = (data: ILinkedInUser | undefined | object): data is ILinkedInUser => {
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

    return response.data;
}

const HomePage: NextPage = async () => {
  const recommendationsData: unknown = await getRecommendations();

  if (!recommendationsData) {
    return <p className='text-center'>No recommendations found</p>;
  }

  let linkedInUser: ILinkedInUser = {
    name: 'Goran Subić',
    email: 'gsbuic@gmail.com',
    picture: '/images/GoranSubic.jpeg',
  };
  if (instanceOfRecomm(recommendationsData)) {
    linkedInUser = recommendationsData as ILinkedInUser;
  }

  return (
    <BaseLayout linkedInUser={linkedInUser}>
      <Home />
    </BaseLayout>
  );
};

export default HomePage;
