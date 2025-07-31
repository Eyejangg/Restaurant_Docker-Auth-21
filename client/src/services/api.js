import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL; // เรียกใช้ VITE import.meta.env = pattern ของ VITE เรียกใช้ .env จาก src
import TokenService from "./token.services"; // เรียกใช้ token.services

const instantce = axios.create({
  // สร้าง instant object
  baseURL: baseURL, // เรียก baseURL
  headers: {
    "Content-Type": "application/json", // message ที่เราคุยกัน เป็น json
  },
});

// -- ดักจับ Req
// add interceptor to Request object
//
instantce.interceptors.request.use(
  (config) => {
    //recieve after logged in // หลังจากเรา login เราจะได้  Token
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    // ถ้าเกิดว่า เจอ Error
    return Promise.reject(error); // Return reject
  }
);

export default instantce;
