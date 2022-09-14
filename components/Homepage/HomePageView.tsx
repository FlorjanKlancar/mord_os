import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../model/storeModel";
import RSSViewer from "./RSSViewer";

function HomePageView() {
  const { username } = useSelector((state: RootState) => state.auth);
  return (
    <div className="h-full">
      <div className="flex items-center justify-between h-full px-12 text-3xl">
        <div>
          Welcome back,
          {"  "}
          <span className="underline decoration-sky-700 underline-offset-4">
            {username}
          </span>
        </div>
        <div className="flex items-center h-4/6 w-1/2">
          <RSSViewer />
        </div>
      </div>
    </div>
  );
}

export default HomePageView;
