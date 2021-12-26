import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

axios.defaults.baseURL = "https://mmskitchen.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const BASE_URL = "https://mmskitchen.herokuapp.com";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  
  
  export default function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  

  

  
