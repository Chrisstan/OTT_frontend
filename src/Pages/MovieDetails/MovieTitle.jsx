import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./movieTitle.css";
import { Skeleton } from "@mui/material";
import { padding } from "@mui/system";

function MovieTitle() {
    const [movieData, setmovieData] = useState();
    const [isLoading, setisLoading] = useState(false);
    const { id, path, media } = useParams();
    // const base_Url = "https://image.tmdb.org/t/p/w500";

    // ******************************* ORIGINAL *************************************

    const base_Url =
        "https://res.cloudinary.com/zohoott/image/upload/v1652282662/ott";

    // ******************************* ORIGINAL *************************************

    const data = async () => {
        const res = await axios
            .get(
                // ******************************* ORIGINAL *************************************

                `http://localhost:8080/movies/get_movie_by_id/${id}`
                // ******************************* ORIGINAL *************************************

                // `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                console.log("👉👉 >>", response.data);
                setmovieData(response.data);
                setisLoading(true);
            })
            .catch((error) => {
                console.log(error.res);
            });
    };

    useEffect(() => {
        data();
    }, []);

    console.log("////*", isLoading);
    const movieRelease = () => {
        return (
            movieData?.release_date.substr(0, 4) ||
            movieData?.release_date.substr(0, 4)
        );
    };
    return (
        <>
            <div className="container">
                <div className="movieDetailsContainer">
                    <div className="boxGradient">
                        <div className="movieDetails">
                            {isLoading ? (
                                <h1 className="movieTitle">
                                    {/* {movieData?.original_title} */}
                                    {/* ****************************************************************                                 */}
                                    {movieData?.movie_name}
                                    {/* ****************************************************************                                 */}
                                </h1>
                            ) : (
                                <Skeleton
                                    variant="h1"
                                    animation="wave"
                                    height={38}
                                    width={280}
                                    sx={{ bgcolor: "#57575746" }}
                                />
                            )}
                            <div className="movieinfo">
                                <h5 className="releaseYear">
                                    {movieRelease()}
                                </h5>
                                <span className="seperator"></span>
                                <h5 className="voteCount">13+</h5>
                                <span className="seperator"></span>
                                {/* <h5 className="origin">{movieOrigin()}</h5> */}
                            </div>
                            <>
                                {isLoading ? (
                                    <div className="movieDescription">
                                        <p className="description">
                                            {/* {movieData?.overview} */}
                                            {/* ******************************************************************************** */}
                                            {movieData?.movie_description}

                                            {/* ********************************************************************************                                             */}
                                        </p>
                                    </div>
                                ) : (
                                    <Skeleton
                                        sx={{ bgcolor: "#57575746" }}
                                        variant="rectangular"
                                        animation="wave"
                                        height={70}
                                        width={400}
                                    />
                                )}
                            </>
                        </div>
                        <div className="watchBtnContainer">
                            {/* ******************************************************/}
                            <Link to={`/movies/${media}`} className="vLink">
                                <button className="play btn">Play</button>
                            </Link>
                            {/* ******************************************************/}
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
