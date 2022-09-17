import React from "react";
import { useComments } from "../../hooks/useComments";
import { commentsModel } from "../../model/commentsModel";
import RSSViewerSkeleton from "./RSSViewerSkeleton";

function RSSDataView() {
  const { data, isLoading, isError } = useComments();

  if (isLoading) return <RSSViewerSkeleton numberOfRows={5} />;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <>
      {data.map((comment: commentsModel) => (
        <div
          className="flex text-sm h-24 space-x-5 hover:bg-slate-500 cursor-pointer px-2 py-3 rounded-xl"
          key={comment.id}
        >
          <div className="w-5">{comment.postId}</div>
          <div className="w-52 truncate">{comment.email}</div>
          <div className="w-72 truncate">{comment.name}</div>
          <div className="h-24 w-full">{comment.body}</div>
        </div>
      ))}
    </>
  );
}

export default RSSDataView;
