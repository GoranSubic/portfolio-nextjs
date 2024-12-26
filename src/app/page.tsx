import type { NextPage } from "next";
import { Home } from "@/containers/Home/Home";
import { BaseLayout } from "@/layouts/BaseLayout";

const HomePage: NextPage = () => {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  );
};

export default HomePage;
