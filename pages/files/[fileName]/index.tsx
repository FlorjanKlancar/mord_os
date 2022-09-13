import { GetServerSideProps } from "next";
import React from "react";
import EditFile from "../../../components/FileManager/EditFile";
import OSWrapper from "../../../components/OSWrapper";

function EditSpeciticFilePage() {
  return (
    <OSWrapper pageTitle={`Edit file: ${"filename"}`}>
      <EditFile />
    </OSWrapper>
  );
}

export default EditSpeciticFilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { fileName } = context.query;

  console.log({ fileName });
  //fetch that file data

  return { props: {} };
};
