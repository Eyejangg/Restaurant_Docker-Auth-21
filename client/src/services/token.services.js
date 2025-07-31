const getUser = () => {
  // ดึงข้อมูล
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = () => {
  // Set User เก็บ Json เป็น String = user, JSON.Stringify
  localStorage.setItem("user", JSON.stringify(user));
};

const getLocalAccessToken = () => {
  const user = getUser();
  return user.token;
};

// Remove
const removeUser = () => {
  localStorage.removeItem("user");
};

// TokenService มี method ทั้งหมด 4 อัน เราจะเรียกใช้
const TokenService = {
  getLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
