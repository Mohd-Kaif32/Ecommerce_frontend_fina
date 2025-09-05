import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || ""; // empty for local dev if you want to use proxy
const api = axios.create({
  baseURL: API_BASE,
});

export default api;
