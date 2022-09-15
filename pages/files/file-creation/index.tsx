import React from "react";
import EditFile from "../../../components/FileManager/EditFile";
import OSWrapper from "../../../components/OSWrapper";

function NewFilePage() {
  return (
    <OSWrapper pageTitle="Create new file">
      <EditFile />
    </OSWrapper>
  );
}

export default NewFilePage;
