import React from "react";
import { imageModel } from "../../model/imageModel";
import GalleryWindowWrapper from "./GalleryWindowWrapper";

function SpecificImageView({
  albumId,
  id,
  title,
  url,
  thumbnailUrl,
}: imageModel) {
  return (
    <GalleryWindowWrapper viewImagePage={true}>
      <div className="grid grid-cols-2">
        <div className="relative">
          <img src={url} />
        </div>
        <div className="flex flex-col h-full justify-center space-y-12">
          <div>Title: {title}</div>
          <div>Image ID: {id}</div>
          <div>Album ID: {albumId}</div>
          <div>Thumbnail URL: {thumbnailUrl}</div>
        </div>
      </div>
    </GalleryWindowWrapper>
  );
}

export default SpecificImageView;
