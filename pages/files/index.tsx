import FileManagerView from "../../components/FileManager/FileManagerView";
import OSWrapper from "../../components/OSWrapper";
import { useFiles } from "../../hooks/useFiles";

const FileManagerPage = () => {
  const { data, isLoading, isError } = useFiles();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <OSWrapper pageTitle="File Manager">
      {data && <FileManagerView files={data} />}
    </OSWrapper>
  );
};

export default FileManagerPage;
