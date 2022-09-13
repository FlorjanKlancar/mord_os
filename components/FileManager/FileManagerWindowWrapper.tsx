import React, { useState } from "react";
import OpenButton from "../OpenButton";
import OSWindow from "../OSWindow";
import Table from "../Table";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

type FileManagerWindowWrapperProps = {
  children: React.ReactNode;
  isEditFilePage: boolean;
};

function FileManagerWindowWrapper({
  children,
  isEditFilePage,
}: FileManagerWindowWrapperProps) {
  const router = useRouter();

  const [isShown, setIsShown] = useState<boolean>(true);

  return (
    <div className="h-full">
      <div className="flex items-center h-full px-12 text-3xl">
        <div className="h-3/4 w-full relative -mt-10">
          {isShown ? (
            <OSWindow
              title={"File manager"}
              isShown={isShown}
              setIsShown={setIsShown}
              isEditFilePage={isEditFilePage}
            >
              {children}
              {!isEditFilePage && (
                <div className="absolute bottom-5 right-5">
                  <PlusCircleIcon
                    className="w-12 h-12 hover:text-slate-400 cursor-pointer"
                    onClick={() => router.push("/files/new")}
                  />
                </div>
              )}
            </OSWindow>
          ) : (
            <div className="flex items-center justify-center h-full">
              <OpenButton
                buttonTitle="Open File Manager"
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

export default FileManagerWindowWrapper;
