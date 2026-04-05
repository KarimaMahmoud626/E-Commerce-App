import { axiosClient } from "../axiosClient";

export const apiGetUser = async (id) => axiosClient.get(`${id}`);
