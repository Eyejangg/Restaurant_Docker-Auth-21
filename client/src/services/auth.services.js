import api from "./api";
import TokenService from "./token.services";

const API_URL = impoer.meta.env.VITE_API;

// Register = User,name,email,password = signup
const register = async (username, name, email, password) => {
  // ส่งค่าไป แล้วส่งกลับไปใน signup
  return api.post(API_URL + "signup", {
    username,
    name,
    email,
    password,
  });
};

// Login
const login = async (username, password) => {
  return await api.post(API_URL + "signin", { username, password });
  // saveing user data to local storgae
  // เก็บข้อมูล
  if (!response.data.token) {
    return response;
  } // ถ้ามี Token = success Login สำเร็จ
  TokenService.setUser(response.data);
};

// มี login ก็ต้องมี logout
// removeUser
const logout = () => {
  TokenService.removeUser();
};


// เรียกใช้ 
const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
