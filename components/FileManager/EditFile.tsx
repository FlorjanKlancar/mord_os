import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FileManagerWindowWrapper from "./FileManagerWindowWrapper";
import { fileModel } from "../../model/fileModel";
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";

type EditFileProps = {
  currentFile?: fileModel;
};

function EditFile({ currentFile }: EditFileProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    fileName: currentFile?.fileName ?? "",
    fileBody: currentFile?.fileBody ?? "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const loadingToast = toast.loading("Loading...");

    try {
      const response = !currentFile
        ? await axios.post("/api/files", formData)
        : await axios.put(`/api/files/${formData.fileName}`, {
            fileBody: formData.fileBody,
          });

      if (response.status === 200) {
        toast.success(response.data.msg, { id: loadingToast });
      }
    } catch (e: any) {
      toast.error(e, { id: loadingToast });
    }
    await queryClient.invalidateQueries(["files"]);
    router.push("/files");
  };

  const removeHandler = async () => {
    const loadingToast = toast.loading("Loading...");
    try {
      const response = await axios.delete(
        `/api/files/${currentFile?.fileName}`
      );

      if (response.status === 200) {
        toast.success(response.data.msg, { id: loadingToast });
      }
    } catch (e: any) {
      toast.error(e, { id: loadingToast });
    }
    await queryClient.invalidateQueries(["files"]);
    router.push("/files");
  };

  return (
    <FileManagerWindowWrapper isEditFilePage={true}>
      <form onSubmit={submitHandler}>
        <div className="flex space-y-5 flex-col items-center px-4 py-5">
          <div className="w-full md:w-1/2">
            {currentFile && (
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 justify-between mb-5">
                <div className="text-sm flex  space-x-2 items-center">
                  <label className="block text-sm font-medium text-slate-300">
                    Created at:
                  </label>
                  <span>
                    {dayjs(currentFile.createdAt).format("DD. MM. YYYY, HH:mm")}
                  </span>
                </div>
                <div className="text-sm flex space-x-2 items-center">
                  <label className="block text-sm font-medium text-slate-300">
                    Updated at:
                  </label>
                  <span>
                    {dayjs(currentFile.updatedAt).format("DD. MM. YYYY, HH:mm")}
                  </span>
                </div>
              </div>
            )}

            <label className="block text-xl font-medium text-slate-300">
              File Name
            </label>
            <input
              className="mt-1 pl-3 block h-12 text-black text-2xl w-full rounded-md outline-none border-gray-300 shadow-sm "
              placeholder="Enter file name"
              autoComplete="off"
              value={formData.fileName}
              onChange={(e: any) =>
                setFormData({ ...formData, fileName: e.target.value })
              }
            />
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="File_data"
              className="block text-xl font-medium text-slate-300"
            >
              File data
            </label>
            <div className="mt-1">
              <textarea
                autoComplete="off"
                rows={8}
                className="mt-1 pl-3 pt-3 block outline-none w-full rounded-md border-gray-300 shadow-sm text-2xl text-black"
                placeholder="Enter some description..."
                value={formData.fileBody}
                onChange={(e: any) =>
                  setFormData({ ...formData, fileBody: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex  space-x-2 md:w-1/2 m-auto">
          {currentFile && (
            <button
              className="bg-rose-800 w-full px-3 py-3 text-base md:text-xl md:px-12 md:py-4 rounded-xl"
              type="button"
              onClick={removeHandler}
            >
              Delete file
            </button>
          )}
          <button
            type="submit"
            className="bg-emerald-800 w-full px-3 py-3 text-base md:text-xl md:px-12 md:py-4 rounded-xl"
          >
            {!currentFile ? "Create file" : "Edit file"}
          </button>
        </div>
      </form>
    </FileManagerWindowWrapper>
  );
}

export default EditFile;
