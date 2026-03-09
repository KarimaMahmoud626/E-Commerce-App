import axios from "axios";

const productAxiosClient = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export default productAxiosClient;
