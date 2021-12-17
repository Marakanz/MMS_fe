import axios from "axios";

axios.defaults.baseURL = "https://mmskitchen.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const BASE_URL = "https://mmskitchen.herokuapp.com";

const token = localStorage.getItem("user");

export const checkUser = () => {
  console.log(token);
}
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  

  

  
