import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import SpecificImageView from "../../../components/Gallery/SpecificImageView";
import OSWrapper from "../../../components/OSWrapper";
import { imageModel } from "../../../model/imageModel";

function ViewSpecificImage({
  albumId,
  id,
  title,
  url,
  thumbnailUrl,
}: imageModel) {
  return (
    <OSWrapper pageTitle={`Image: ${"image title"}`}>
      <SpecificImageView
        albumId={albumId}
        id={id}
        title={title}
        url={url}
        thumbnailUrl={thumbnailUrl}
      />
    </OSWrapper>
  );
}

export default ViewSpecificImage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { imageId } = context.query;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${imageId}`
    );
    return { props: response.data };
  } catch (e: any) {
    return { notFound: true };
  }
};
