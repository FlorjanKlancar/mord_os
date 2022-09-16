import React from "react";
import FileManagerWindowWrapper from "./FileManagerWindowWrapper";

type FileManagerViewSkeletonProps = {
  numberOfHeadings: number;
  numberOfRows: number;
};

function FileManagerViewSkeleton({
  numberOfRows,
  numberOfHeadings,
}: FileManagerViewSkeletonProps) {
  return (
    <FileManagerWindowWrapper isEditFilePage={false}>
      <div className="w-full h-full">
        <table className="table w-full">
          <thead>
            <tr>
              {[...Array(numberOfHeadings)].map((e, i: number) => (
                <th key={i} className="p-2">
                  <div className="w-5/6 h-8 animate-pulse bg-slate-700 rounded-xl"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(numberOfRows)].map((e, i: number) => (
              <tr key={i} className="hover:bg-slate-500 cursor-pointer ">
                {[...Array(numberOfHeadings)].map((i: number) => (
                  <td key={i} className="p-2">
                    <div className="w-5/6 h-8 animate-pulse bg-slate-700 rounded-xl "></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FileManagerWindowWrapper>
  );
}

export default FileManagerViewSkeleton;
