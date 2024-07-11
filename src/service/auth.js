import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const { data } = await axios.post("/auth/register", { user });
    return data;
  },
  async userLogin(user) {
    const { data } = await axios.post("/auth/login", { user });
    return data;
  },
  async getUser() {
    const { data } = await axios.get("/auth");
    return data;
  },
};

export default AuthService;
