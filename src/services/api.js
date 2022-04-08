import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-grupo1.herokuapp.com",
});

export default api;
