import {
  XCircleIcon,
  ArrowPathIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";
import DropdownMenu from "./DropdownMenu";

type OSWindowProps = {
  title: string;
  isShown: boolean;
  children: React.ReactNode;
  setIsShown: (isShown: boolean) => void;
  refreshFunction?: () => void;
  isEditFilePage: boolean;
  currentAlbumId?: number;
  setAlbumId?: (currentAlbumId: number) => void;
  viewImagePage?: boolean;
};

function OSWindow({
  title,
  isShown,
  children,
  setIsShown,
  refreshFunction,
  isEditFilePage,
  currentAlbumId,
  setAlbumId,
  viewImagePage,
}: OSWindowProps) {
  const router = useRouter();

  return (
    <div
      className={`h-full w-full bg-slate-900 shadow-slate-900 shadow-xl rounded-xl flex flex-col ${
        isShown ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <h1>{title}</h1>
        {title === "Gallery" && currentAlbumId && (
          <DropdownMenu
            selectedNumber={currentAlbumId}
            setAlbumId={setAlbumId!}
          />
        )}
        <div className="flex space-x-5">
          {(isEditFilePage || viewImagePage) && (
            <ArrowUturnLeftIcon
              className="h-8 w-8 hover:text-slate-400 cursor-pointer "
              onClick={() =>
                router.push(isEditFilePage ? "/files" : "/gallery")
              }
            />
          )}
          {refreshFunction && (
            <ArrowPathIcon
              className="h-8 w-8 hover:text-slate-400 cursor-pointer duration-300 hover:rotate-180"
              onClick={refreshFunction}
            />
          )}
          <XCircleIcon
            className="h-8 w-8 hover:text-slate-400 cursor-pointer"
            onClick={() => setIsShown(!isShown)}
          />
        </div>
      </div>
      <hr className="border-slate-800" />
      <div className="p-5">{children}</div>
    </div>
  );
}

export default OSWindow;
