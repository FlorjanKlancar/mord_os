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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <div className="relative w-full md:w-2/3">
          <img src={url} className="w-full md:w-full h-72 md:h-full" />
        </div>

        <div className="flex flex-col h-full justify-center space-y-12 text-base md:text-xl">
          <div>Title: {title}</div>
          <div>Image ID: {id}</div>
          <div>Album ID: {albumId}</div>
          <div className="truncate">Thumbnail URL: {thumbnailUrl}</div>
        </div>
      </div>
    </GalleryWindowWrapper>
  );
}

export default SpecificImageView;
