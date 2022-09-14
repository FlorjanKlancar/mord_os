import dayjs from "dayjs";
import React from "react";
import { fileModel } from "../../model/fileModel";
import Table from "../Table";
import FileManagerWindowWrapper from "./FileManagerWindowWrapper";

type FileManagerViewProps = {
  files: fileModel[];
};

function FileManagerView({ files }: FileManagerViewProps) {
  const fileData = files.map((file: fileModel) => ({
    ...file,
    createdAt: dayjs(file.createdAt).format("DD. MM. YYYY, HH:mm"),
    updatedAt: dayjs(file.updatedAt).format("DD. MM. YYYY, HH:mm"),
    size: `${file.size} bytes`,
  }));
  console.log("table data", fileData);
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
      <Table tableHeaders={tableHeaders} data={fileData} />
    </FileManagerWindowWrapper>
  );
}

export default FileManagerView;
