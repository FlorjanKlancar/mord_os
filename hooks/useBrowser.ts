import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AxiosResponse } from "../model/axiosResponseModel";
import { dummyAPIResponseModel } from "../model/dummyAPIResponseModel";

export const useBrowser = (searchQuery: string) => {
  return useQuery<dummyAPIResponseModel>(
    ["browser", searchQuery],
    async () => {
      const response: AxiosResponse = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );

      return response.data;
    },
    {
      // The query will not execute until the userId exists
      enabled: !!searchQuery,
    }
  );
};
