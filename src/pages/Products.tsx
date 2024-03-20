import * as Components from "@/components";
import { customFetch,type ProductsResponseWithParams, type ProductsResponse } from "@/utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";
export const productsLoader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const res = await customFetch<ProductsResponse>(url, { params });
  return { ...res.data, params };
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
