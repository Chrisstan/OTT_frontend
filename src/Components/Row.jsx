import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../axios";
import MovieCard from "./MovieCard/MovieCard";

function Row({ fetchUrl, title, size }) {
    const [movies, setMovies] = useState([]);

    const data = async () => {
        const req = await axios.get(fetchUrl);
        console.log("👉", req);
        setMovies(req.data.results);
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
                    {movies.map((item) => (
                        <>
                            <MovieCard
                                id={item.id}
                                path={item.backdrop_path}
                                poster_path={item.poster_path}
                                title={item.title}
                                name={item.name}
                                size={size}
                                result={movies}
                            />
                        </>
                    ))}
                </div>
                {/* <div className="right_nav_btn">
          <div className="right"> & </div>
          <span className="horizontal_gradient"></span>
        </div> */}
            </div>
        </div>
    );
}
export default Row;
