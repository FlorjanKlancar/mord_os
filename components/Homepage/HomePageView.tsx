import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../model/storeModel";
import RSSViewer from "./RSSViewer";

function HomePageView() {
  const { username } = useSelector((state: RootState) => state.auth);
  return (
    <div className="h-full">
      <div className="flex flex-col xl:flex-row items-center space-y-5 xl:justify-between h-full px-4 md:px-12 text-base md:text-3xl">
        <div className="mt-20">
          Welcome back,
          {"  "}
          <span className="underline decoration-sky-700 underline-offset-4">
            {username}
          </span>
        </div>
        <div className="flex items-center xl:h-4/6 w-full xl:w-1/2">
          <RSSViewer />
        </div>
      </div>
    </div>
  );
}

export default HomePageView;
