import React from "react";
import Table from "../Table";
import FileManagerWindowWrapper from "./FileManagerWindowWrapper";

function FileManagerView() {
  const dummyFiles = [
    {
      fileName: "first_file.txt",
      createdAt: "22.1.2222",
      updatedAt: "22.2.2222",
    },
    {
      fileName: "third_file.txt",
      createdAt: "22.8.2222",
      updatedAt: "22.9.2222",
    },
    {
      fileName: "second_file.txt",
      createdAt: "22.6.2222",
      updatedAt: "22.7.2222",
    },
    {
      fileName: "fourth_file.txt",
      createdAt: "22.4.2222",
      updatedAt: "22.5.2222",
    },
    {
      fileName: "fifth_file.txt",
      createdAt: "22.2.2222",
      updatedAt: "22.3.2222",
    },
  ];

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
  ];

  return (
    <FileManagerWindowWrapper isEditFilePage={false}>
      <Table tableHeaders={tableHeaders} data={dummyFiles} />
    </FileManagerWindowWrapper>
  );
}

export default FileManagerView;
