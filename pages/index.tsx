import type { NextPage } from "next";
import HomePageView from "../components/Homepage/HomePageView";
import OSWrapper from "../components/OSWrapper";

const Home: NextPage = () => {
  return (
    <OSWrapper pageTitle="Homepage">
      <HomePageView />
    </OSWrapper>
  );
};

export default Home;
