import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../../axios";
import "./movieTitle.css";
import { padding } from "@mui/system";

function MovieTitle() {
    const [movieData, setmovieData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const { id, path, media } = useParams();

    const base_Url =
        "https://res.cloudinary.com/zohoott/image/upload/v1652282662/ott";

    const data = async () => {
        const res = await axios
            .get(

                `/movies/get_movie_by_id/${id}`
            )
            .then((response) => {
                // console.log("👉👉 >>", response.data);
                setmovieData(response.data);
                setisLoading(true);
            })
            .catch((error) => {
                // console.log(error.res);
            });
    };

    useEffect(() => {
        data();
    }, []);

    // console.log("////*", isLoading);
    const movieRelease = () => {
        return (
            movieData?.m_release_date.substr(0, 4) ||
            movieData?.m_release_date.substr(0, 4)
        );
    };
    return (
        <>
            <div className="container">
                <div className="movieDetailsContainer">
                    <div className="boxGradient">
                        <div className="movieDetails">
                                <h1 className="movieTitle">
                                    {movieData?.movie_name}
                                </h1>

                            <div className="movieinfo">
                                <h5 className="releaseYear">
                                    {movieRelease()}
                                </h5>
                                <span className="seperator"></span>
                                <h5 className="voteCount">13+</h5>
                                <span className="seperator"></span>
                                { <h5 className="origin">{movieData?.m_popularity}🌟</h5> }
                            </div>
                            <>
                                    <div className="movieDescription">
                                        <p className="description">
                                            {movieData?.movie_description}
                                        </p>
                                    </div>
                                
                            </>
                        </div>
                        <div className="watchBtnContainer">
                            <Link to={`/movies/${media}`} className="vLink">
                                <button className="play btn">Play</button>
                            </Link>
                        </div>
                    </div>
                    <img
                        src={`${base_Url}/${path}`}
                        alt=""
                        className="movieImg"
                    />
                </div>
            </div>
        </>
    );
}

export default MovieTitle;
