import type { NextPage } from "next";
import FileManagerView from "../../components/FileManager/FileManagerView";
import OSWrapper from "../../components/OSWrapper";

const FileManagerPage: NextPage = () => {
  return (
    <OSWrapper pageTitle="File Manager">
      <FileManagerView />
    </OSWrapper>
  );
};

export default FileManagerPage;
