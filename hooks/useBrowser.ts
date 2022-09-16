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
      console.log("API CALLED", response);
      return response.data;
      /*  return {
        limit: 4,
        products: [
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
          {
            brand: "Apple",
            category: "smartphones",
            description: "An apple mobile which is nothing like apple",
            discountPercentage: 12.96,
            id: 1,
            images: [
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
              "https://dummyjson.com/image/i/products/71/1.jpg",
            ],
            price: 549,
            rating: 4.69,
            stock: 94,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: "iPhone 9",
          },
        ],
        skip: 0,
        total: 4,
      }; */
    },
    {
      // The query will not execute until the userId exists
      enabled: !!searchQuery,
    }
  );
};
