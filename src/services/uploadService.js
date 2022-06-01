import axios from "../axios";

const API_URL = "/movies/create_movie";

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

const UploadService = {
    upload,
};
export default UploadService;
