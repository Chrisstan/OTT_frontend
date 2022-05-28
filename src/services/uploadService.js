<<<<<<< HEAD
import axios from "axios";

const API_URL = "http://localhost:8080/movies/create_movie";

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
=======
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
    backdropPath,
    mediaPath
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
        backdropPath,
        mediaPath,
    });
};

const UploadService = {
    upload,
};
export default UploadService;
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
