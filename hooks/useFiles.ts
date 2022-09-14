import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AxiosResponse } from "../model/axiosResponseModel";
import { fileModel } from "../model/fileModel";

export const useFiles = () => {
  return useQuery<fileModel[]>(["files"], async () => {
    const response: AxiosResponse = await axios.get("/api/files");
    console.log("USE FILES", response);

    return response.data;
  });
};
