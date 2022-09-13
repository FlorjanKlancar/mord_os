import React, { useState } from "react";
import { useComments } from "../../hooks/useComments";
import { commentsModel } from "../../model/commentsModel";
import OSWindow from "../OSWindow";
import { Scrollbars } from "react-custom-scrollbars";
import { useQueryClient } from "@tanstack/react-query";
import OpenButton from "../OpenButton";

function RSSViewer() {
  const queryClient = useQueryClient();

  const [isShown, setIsShown] = useState<boolean>(true);
  const { data, isLoading, isError } = useComments();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {isError}</div>;

  const refreshData = async () => {
    await queryClient.invalidateQueries(["comments"]);
  };
  return (
    <>
      {isShown ? (
        <OSWindow
          title={"Comments viewer"}
          isShown={isShown}
          setIsShown={setIsShown}
          refreshFunction={refreshData}
          isEditFilePage={false}
        >
          <div className="flex flex-col max-h-[527px] divide-y-2 overflow-y-auto">
            <Scrollbars style={{ height: 527 }}>
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
            </Scrollbars>
          </div>
        </OSWindow>
      ) : (
        <div className="flex w-full justify-end text-base">
          <OpenButton
            buttonTitle="Open Comments viewer"
            isShown={isShown}
            setIsShown={setIsShown}
          />
        </div>
      )}
    </>
  );
}

export default RSSViewer;
