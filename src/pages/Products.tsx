import * as Components from "@/components";
import { customFetch, type ProductsResponse } from "@/utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";
export const productsLoader: LoaderFunction =
  async (): Promise<ProductsResponse> => {
    const res = await customFetch<ProductsResponse>(url);
    return { ...res.data };
  };

export const Products = () => {
  return (
    <>
      <Components.Filters />
      <Components.ProductsContainer />
      <Components.PaginationContainer />
    </>
  );
};
