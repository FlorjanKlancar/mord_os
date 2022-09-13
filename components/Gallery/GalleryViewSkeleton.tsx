import React from "react";
import GalleryWindowWrapper from "./GalleryWindowWrapper";

function GalleryViewSkeleton() {
  const skeletonRows = [1, 2, 3, 4, 5];
  return (
    <GalleryWindowWrapper viewImagePage={false}>
      <div className="flex flex-col max-h-[620px] divide-y-2 overflow-y-auto">
        <div>
          {skeletonRows.map((skeletonRow: number) => (
            <div
              key={skeletonRow}
              className="flex justify-between text-base  hover:bg-slate-500 cursor-pointer px-2 py-3 rounded-xl"
            >
              <div className="flex flex-col space-y-5">
                <div className="w-48 bg-slate-700 h-8 rounded-xl animate-pulse"></div>
                <div className="w-72 bg-slate-700 h-8 rounded-xl animate-pulse"></div>
              </div>

              <div className="w-24 h-24 bg-slate-700 animate-pulse rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </GalleryWindowWrapper>
  );
}

export default GalleryViewSkeleton;
