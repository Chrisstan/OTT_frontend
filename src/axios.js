import axios from "axios";

const instance = axios.create({
    // baseURL: "https://api.themoviedb.org/3",

    // ************************************** ORIGINAL *********************************************
    baseURL: "http://localhost:3000/api",
    // ************************************** ORIGINAL *********************************************
});
export default instance;
