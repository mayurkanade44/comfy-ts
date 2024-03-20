import { FeaturedProducts, Hero } from "@/components";
import { type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products?featured=true";

export const landingLoader: LoaderFunction =
  async (): Promise<ProductsResponse> => {
    const response = await customFetch(url);
    console.log(response);

    return { ...response.data };
  };

export const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
