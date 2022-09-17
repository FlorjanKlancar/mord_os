import React, { useState } from "react";
import OpenButton from "../OpenButton";
import OSWindow from "../OSWindow";

type GalleryWindowWrapperProps = {
  children: React.ReactNode;
  currentAlbumId?: number;
  setAlbumId?: (currentAlbumId: number) => void;
  viewImagePage: boolean;
};

function GalleryWindowWrapper({
  children,
  currentAlbumId,
  setAlbumId,
  viewImagePage,
}: GalleryWindowWrapperProps) {
  const [isShown, setIsShown] = useState<boolean>(true);
  return (
    <div className="h-full">
      <div className="flex items-center h-full px-4 sm:px-12 text-3xl">
        <div className="h-3/4 w-full relative -mt-10">
          {isShown ? (
            <OSWindow
              title={"Gallery"}
              isShown={isShown}
              setIsShown={setIsShown}
              isEditFilePage={false}
              currentAlbumId={currentAlbumId}
              setAlbumId={setAlbumId}
              viewImagePage={viewImagePage}
            >
              {children}
            </OSWindow>
          ) : (
            <div className="flex items-center justify-center h-full">
              <OpenButton
                buttonTitle="Open Gallery"
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

export default GalleryWindowWrapper;
