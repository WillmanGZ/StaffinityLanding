import axios from "axios";

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

// API Instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
