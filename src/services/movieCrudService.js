import axios from "../axios";

const DELETE_URL = `/movies/delete_movie/id/`;
const UPDATE_URL = `/movies/update_movie`;
const GENRE_URL = `/movies/mapGenre/`

const delete_movie = (movie_id) => {
    console.log("MOVIE ID: ", movie_id);
    return axios.delete(DELETE_URL + movie_id)
};

const update_movie = (
    movie_id,
    movie_title,
    movie_name,
    movie_description,
    m_release_date,
    m_popularity,
    movie_budget,
    m_revenue,
    posterPath,
    backdrop_path,
    media_path
) => {
    return axios.put(UPDATE_URL, {
        movie_id,
        movie_title,
        movie_name,
        movie_description,
        m_release_date,
        m_popularity,
        movie_budget,
        m_revenue,
        posterPath,
        backdrop_path,
        media_path,
    });
};

const updateGenre = (movie_id, genre_id) => {
    console.log(movie_id,genre_id);
    return axios.post(GENRE_URL + movie_id +`/`+ genre_id)
}


const movieCrudService = {
    delete_movie,
    update_movie,
    updateGenre
};

export default movieCrudService;
