import axios from "axios";
import authURL from "../../constants/constans";

export const axiosClient = () =>
  axios.create({
    baseURL: authURL,
  });
