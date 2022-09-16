import FileManagerView from "../../components/FileManager/FileManagerView";
import OSWrapper from "../../components/OSWrapper";

const FileManagerPage = () => {
  return (
    <OSWrapper pageTitle="File Manager">
      <FileManagerView />
    </OSWrapper>
  );
};

export default FileManagerPage;
