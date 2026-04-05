import productAxiosClient from "./productAxiosClient";

export const getProducts = async ({ limit = 10 }) => {
  const response = await productAxiosClient.get(`?limit=${limit}`);
  return response;
};
