import React from "react";
import CameraView from "../../components/Camera/CameraView";
import OSWrapper from "../../components/OSWrapper";

function CameraPage() {
  return (
    <OSWrapper pageTitle="Camera">
      <CameraView />
    </OSWrapper>
  );
}

export default CameraPage;
