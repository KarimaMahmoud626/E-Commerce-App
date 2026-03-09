import authAxiosClient from "./authAxiosClient";

export const getUser = async (id) => {
  const response = await authAxiosClient.get(`/${id}`);
  return response.data;
};
