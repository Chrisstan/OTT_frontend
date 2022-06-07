import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../axios";
import MovieCard from "../MovieCard/MovieCard";

function Row({ fetchUrl, title, size }) {
    const [isLoading, setisLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const data = async () => {
        const req = await axios.get(fetchUrl);
        // console.log("👉", req);

        setMovies(req.data.movies);

        // setMovies(req.data.results);
        setisLoading(true);
        // console.log("!!!!!!!Loaded!!!!!!!!!!");
    };

    useEffect(() => {
        data();
    }, []);

    return (
        <div className="row_container">
            <div className="row_title_container">
                <h1 className="row_title">{title}</h1>
            </div>
            <div className="row_posters_container">
                <div className="row_posters">
                    {/* {console.log("********@@@@@@@@", movies)} */}
                    {movies.map((item) => (
                        <>
                            {/* {console.log("***###", item)} */}
                            {/* {console.log("***Media Path#", item.media_path)} */}
                            {isLoading ? (
                                <MovieCard
                                id={item.movie_id}
                                path={item.backdrop_path}
                                poster_path={item.posterPath}
                                media = {item.media_path}
                                title={item.movie_title}
                                name={item.movie_name}
                                description = {item.movie_description}
                                popularity = {item.m_popularity}
                                date={item.m_release_date}
                                result={movies}
                                size={size}
                                />
                            ) : (
                                <></>
                                // <Skeleton
                                //     variant="rectangular"
                                //     animation="wave"
                                //     sx={{ bgcolor: "#57575746" }}
                                // />
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Row;
