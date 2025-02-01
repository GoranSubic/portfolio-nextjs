import type { NextPage } from "next";
import { Home } from "@/containers/Home/Home";
import { BaseLayout } from "@/layouts/BaseLayout";
import { ILinkedInUser } from "@/types/recommendations";
import { MenuItems } from "@/types/menu";
import { getLinkedInUser, instanceOfLinkedInUser } from "@/utils/linkedInUser";

const HomePage: NextPage = async () => {
  const linkedInUserData: unknown = await getLinkedInUser();

  let linkedInUser: ILinkedInUser = {
    name: 'Goran Subić',
    email: 'gsbuic@gmail.com',
    picture: '/images/GoranSubic.jpeg',
  };

  if (linkedInUserData !== undefined && linkedInUserData !== null && instanceOfLinkedInUser(linkedInUserData)) {
    linkedInUser = linkedInUserData as ILinkedInUser;
  }

  return (
    <BaseLayout linkedInUser={linkedInUser} activeMenu={MenuItems.HOME}>
      <Home />
    </BaseLayout>
  );
};

export default HomePage;
