import React, { useState } from "react";
import OSWindow from "../OSWindow";
import { Scrollbars } from "react-custom-scrollbars";
import { useQueryClient } from "@tanstack/react-query";
import OpenButton from "../OpenButton";
import RSSDataView from "./RSSDataView";

function RSSViewer() {
  const queryClient = useQueryClient();

  const [isShown, setIsShown] = useState<boolean>(true);

  const refreshData = async () => {
    await queryClient.invalidateQueries(["comments"]);
  };
  return (
    <>
      {isShown ? (
        <OSWindow
          title={"Comments viewer"}
          isShown={isShown}
          setIsShown={setIsShown}
          refreshFunction={refreshData}
          isEditFilePage={false}
        >
          <div className="flex flex-col max-h-[527px] overflow-y-auto ">
            <Scrollbars style={{ height: 527 }}>
              <RSSDataView />
            </Scrollbars>
          </div>
        </OSWindow>
      ) : (
        <div className="flex w-full justify-end text-base">
          <OpenButton
            buttonTitle="Open Comments viewer"
            isShown={isShown}
            setIsShown={setIsShown}
          />
        </div>
      )}
    </>
  );
}

export default RSSViewer;
