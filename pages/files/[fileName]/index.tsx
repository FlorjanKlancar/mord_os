import { GetServerSideProps } from "next";
import React from "react";
import EditFile from "../../../components/FileManager/EditFile";
import OSWrapper from "../../../components/OSWrapper";
import { getFileInfo } from "../../api/files/[fileName]";

function EditSpeciticFilePage({ file }: any) {
  const parseFile = JSON.parse(file);

  return (
    <OSWrapper pageTitle={`Edit file: ${"filename"}`}>
      <EditFile currentFile={parseFile} />
    </OSWrapper>
  );
}

export default EditSpeciticFilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { fileName } = context.query;

  const file = await getFileInfo(fileName!.toString());
  if (!file) return { notFound: true };
  const stringifyFile = JSON.stringify(file);

  return { props: { file: stringifyFile } };
};
