import axios from "axios";

const authAxiosClient = axios.create({
  baseURL: "https://api.github.com/users",
});

export default authAxiosClient;
