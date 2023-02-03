import axios from "axios";


const BASE_URL = "/api/templates";

export const getTemplates = async () => {
  const request = axios.get(BASE_URL);
  const response = await request;
  return response.data;
};

export const addTemplate = async (templateName: string) => {
  const request = axios.post(BASE_URL, {name:templateName });
  const response = await request;
  return response.data;
};


