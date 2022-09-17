import React from "react";
import OSWindow from "../OSWindow";

type RSSViewerSkeletonProps = {
  numberOfRows: number;
};

function RSSViewerSkeleton({ numberOfRows }: RSSViewerSkeletonProps) {
  return (
    <div className="flex flex-col">
      {[...Array(numberOfRows)].map((e, i: number) => (
        <div
          className="flex text-sm h-24 space-x-5 hover:bg-slate-500 cursor-pointer px-2 py-3 rounded-xl"
          key={i}
        >
          <div className="w-8 h-8 animate-pulse bg-slate-700 rounded-xl"></div>
          <div className="w-52 h-8 animate-pulse bg-slate-700 rounded-xl"></div>
          <div className="w-72 h-8 animate-pulse bg-slate-700 rounded-xl"></div>
          <div className="h-16 w-3/4 animate-pulse bg-slate-700 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
}

export default RSSViewerSkeleton;
