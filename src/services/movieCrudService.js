import axios from "../axios";

const DELETE_URL = `/movies/delete_movie/id/`;
const GET_BY_MOVIEID_URL = `/movies/get_movie_by_id/`;

export const delete_movie = (movie_id) => {
    console.log("MOVIE ID: ", movie_id);
    return axios.delete(DELETE_URL + movie_id)
};



// const movieCrudService = {
//     delete_movie
// };

// export default movieCrudService;
