import React, { useEffect, useState } from "react";
import OpenButton from "../OpenButton";
import OSWindow from "../OSWindow";
import Results from "./Results";
import Search from "./Search";

function BrowserView() {
  const [isShown, setIsShown] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");
  const [queryInput, setQueryInput] = useState<string>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    setQueryInput(searchInput);
  };

  return (
    <div className="h-full">
      <div className="flex items-center h-full px-4 sm:px-12 text-3xl">
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
                  setQueryInput={setQueryInput}
                />
              </div>
              <div className="mt-5 text-base flex items-center h-full md:text-xl">
                {queryInput.length ? (
                  <Results searchInput={queryInput} />
                ) : (
                  <div className="flex flex-col space-y-3">
                    <div>Enter something in the search input :)</div>
                    <div>
                      Try searching something like phone, plant, motorcycle...
                    </div>
                  </div>
                )}
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
