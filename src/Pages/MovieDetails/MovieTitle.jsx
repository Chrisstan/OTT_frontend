import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./movieTitle.css";

function MovieTitle() {
    const [movieData, setmovieData] = useState();
    const { id, path } = useParams();
    const base_Url = "https://image.tmdb.org/t/p/w500";

    const data = async () => {
        const res = await axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((res) => {
                console.log("👉👉 >>", res.data);
                setmovieData(res.data);
            })
            .catch((error) => {
                console.log(error.res);
            });
    };

    useEffect(() => {
        data();
    }, []);

    const movieOrigin = () => {
        return movieData?.production_countries[0].iso_3166_1;
    };
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
                            <h1 className="movieTitle">
                                {movieData?.original_title}
                            </h1>
                            <div className="movieinfo">
                                <h5 className="releaseYear">
                                    {movieRelease()}
                                </h5>
                                <span className="seperator"></span>
                                <h5 className="voteCount">13+</h5>
                                <span className="seperator"></span>
                                <h5 className="origin">{movieOrigin()}</h5>
                            </div>
                            <div className="movieDescription">
                                <p className="description">
                                    {movieData?.overview}
                                </p>
                            </div>
                        </div>
                        <div className="watchBtnContainer">
                            <button className="play btn">Play</button>
                            <button className="myList btn">My List</button>
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
