import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { imageModel } from "../model/imageModel";
import { AxiosResponse } from "../model/axiosResponseModel";

export const useGallery = (galleryId: number) => {
  return useQuery<imageModel[]>(
    ["gallery", galleryId],
    async () => {
      const response: AxiosResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${galleryId}/photos`
      );
      return response.data;
    },
    {
      // The query will not execute until the userId exists
      enabled: !!galleryId,
    }
  );
};
