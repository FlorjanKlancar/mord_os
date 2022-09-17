import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useGallery } from "../../hooks/useGallery";
import { imageModel } from "../../model/imageModel";
import GalleryViewSkeleton from "./GalleryViewSkeleton";
import GalleryWindowWrapper from "./GalleryWindowWrapper";

function GalleryView() {
  const [albumId, setAlbumId] = useState<number>(1);
  const { data, isLoading, isError } = useGallery(albumId);

  if (isLoading) return <GalleryViewSkeleton numberOfRows={5} />;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <GalleryWindowWrapper
      viewImagePage={false}
      currentAlbumId={albumId}
      setAlbumId={setAlbumId}
    >
      <div className="flex flex-col max-h-[620px] divide-y-2 overflow-y-auto">
        <div>
          <Scrollbars
            style={{
              height: 620,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            }}
          >
            {data.map((image: imageModel) => (
              <Link href={`/gallery/${image.id}`} key={image.id}>
                <div className="flex justify-between text-base  hover:bg-slate-500 cursor-pointer px-2 py-3 rounded-xl">
                  <div className="flex flex-col space-y-5">
                    <div>
                      Album: {image.albumId}, Image: {image.id}
                    </div>
                    <div className="text-xl">Title: {image.title}</div>
                  </div>
                  <div className="w-24 h-24 relative">
                    <img
                      className="rounded-xl"
                      src={image.url}
                      alt={image.title}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </Scrollbars>
        </div>
      </div>
    </GalleryWindowWrapper>
  );
}

export default GalleryView;
