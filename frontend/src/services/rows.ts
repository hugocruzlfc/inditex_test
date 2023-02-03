import axios from "axios";
import { Row } from "../types";
const BASE_URL = "/api/rows";

export const getRows = async () => {
  const request = axios.get(BASE_URL);
  const response = await request;
  return response.data;
};

export const addRow = async (newRow: Row) => {
  const request = axios.post(BASE_URL, newRow);
  const response = await request;
  return response.data;
};