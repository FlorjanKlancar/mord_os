import React, { useState } from "react";
import OpenButton from "../OpenButton";
import OSWindow from "../OSWindow";
import Search from "./Search";

function BrowserView() {
  const [isShown, setIsShown] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    console.log("SEARCH", searchInput);
  };

  return (
    <div className="h-full">
      <div className="flex items-center h-full px-12 text-3xl">
        <div className="h-3/4 w-full relative -mt-10">
          {isShown ? (
            <OSWindow
              title={"Browser"}
              isShown={isShown}
              setIsShown={setIsShown}
              isEditFilePage={false}
            >
              <div className="flex flex-col justify-center items-center">
                <Search
                  setSearchInput={setSearchInput}
                  searchInput={searchInput}
                  submitHandler={submitHandler}
                />
                <div className="flex justify-start items-start">Results:</div>
              </div>
            </OSWindow>
          ) : (
            <div className="flex items-center justify-center h-full">
              <OpenButton
                buttonTitle="Open Browser"
                isShown={isShown}
                setIsShown={setIsShown}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowserView;
