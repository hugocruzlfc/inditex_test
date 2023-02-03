import axios from "axios";
const BASE_URL = "/api/products";

export const getProducts = async () => {
  const request = axios.get(BASE_URL);
  const response = await request;
  return response.data;
};
