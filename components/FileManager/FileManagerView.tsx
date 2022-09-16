import dayjs from "dayjs";
import React from "react";
import { useFiles } from "../../hooks/useFiles";
import { fileModel } from "../../model/fileModel";
import Table from "../Table";
import FileManagerViewSkeleton from "./FileManagerViewSkeleton";
import FileManagerWindowWrapper from "./FileManagerWindowWrapper";

function FileManagerView() {
  const { data, isLoading, isError } = useFiles();

  if (isLoading)
    return <FileManagerViewSkeleton numberOfHeadings={4} numberOfRows={10} />;
  if (isError) return <div>Error: {isError}</div>;

  const updatedFilesArray = data.map((file: fileModel) => ({
    ...file,
    createdAt: dayjs(file.createdAt).format("DD. MM. YYYY, HH:mm"),
    updatedAt: dayjs(file.updatedAt).format("DD. MM. YYYY, HH:mm"),
    size: `${file.size} bytes`,
  }));

  const tableHeaders = [
    {
      Header: "File name",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Created at",
      accessor: "col2",
    },
    {
      Header: "Updated at",
      accessor: "col3", // accessor is the "key" in the data
    },
    {
      Header: "Size",
      accessor: "col4", // accessor is the "key" in the data
    },
  ];

  return (
    <FileManagerWindowWrapper isEditFilePage={false}>
      <Table tableHeaders={tableHeaders} data={updatedFilesArray} />
    </FileManagerWindowWrapper>
  );
}

export default FileManagerView;
