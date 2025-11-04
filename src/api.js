import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || ""; // empty for local dev if you want to use proxy
console.log("backend base url",API_BASE);
const api = axios.create({
  baseURL:process.env.REACT_APP_API_URL|| API_BASE,
  withCredentials:true
});

export default api;
