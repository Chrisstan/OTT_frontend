<<<<<<< HEAD
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

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

  const otplogin = (email, otp) => {
    return axios
      .post(API_URL + "otp_login", {
        email,
        otp,
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
=======
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

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
    logout,
    getCurrentUser,
};
export default AuthService;
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
