import axios from "../axios";

const API_URL = "/movies/create_movie";
const GENRE_URL = `/movies/mapGenre/`

const upload = (
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
    return axios.post(API_URL, {
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

const addGenre = (movie_id, genre_id) => {
    console.log(movie_id,genre_id);
    return axios.post(GENRE_URL + movie_id +`/`+ genre_id)
}


const UploadService = {
    upload,
    addGenre,
};
export default UploadService;
