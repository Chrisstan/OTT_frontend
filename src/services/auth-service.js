import axios from "../axios";

const API_URL = "/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.username) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  const otplogin = (email, otp, password) => {
    return axios
      .post(API_URL + "password_reset", {
        email,
        otp,
        password,
      })
      .then((response) => {
        if (response.data.email) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    otplogin,
    logout,
    getCurrentUser,
};
export default AuthService;
