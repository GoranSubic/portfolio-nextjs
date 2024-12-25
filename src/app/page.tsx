import type { NextPage } from "next";
import { Home } from "@/app/containers/Home/Home";
import { BaseLayout } from "@/app/layouts/BaseLayout";

const HomePage: NextPage = () => {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  );
};

export default HomePage;
