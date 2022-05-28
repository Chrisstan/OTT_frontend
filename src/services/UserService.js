<<<<<<< HEAD
import axios from "axios";
const API_URL = "http://localhost:3000/api/test/";
const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
const getUserBoard = () => {
    return axios.get(API_URL + "user");
};
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod");
};
const getAdminBoard = () => {
    return axios.get(API_URL + "admin");
};
const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};
export default UserService;
=======
import axios from "axios";
const API_URL = "http://localhost:3000/api/test/";
const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
const getUserBoard = () => {
    return axios.get(API_URL + "user");
};
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod");
};
const getAdminBoard = () => {
    return axios.get(API_URL + "admin");
};
const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};
export default UserService;
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
