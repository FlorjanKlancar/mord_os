import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { commentsModel } from "../model/commentsModel";
import { AxiosResponse } from "../model/axiosResponseModel";

export const useComments = () => {
  return useQuery<commentsModel[]>(["comments"], async () => {
    const response: AxiosResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    return response.data;
  });
};
