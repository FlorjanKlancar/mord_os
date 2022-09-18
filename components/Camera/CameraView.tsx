import React from "react";
import OSWindow from "../OSWindow";
import Webcam from "react-webcam";

function CameraView() {
  return (
    <div className="h-full">
      <div className="flex items-center h-full px-4 sm:px-12 text-3xl">
        <div className="w-full relative -mt-10">
          <OSWindow
            title={"Camera"}
            isShown={true}
            setIsShown={() => {}}
            isEditFilePage={false}
          >
            <div className="flex items-center justify-center">
              <Webcam />
            </div>
          </OSWindow>
        </div>
      </div>
    </div>
  );
}

export default CameraView;
