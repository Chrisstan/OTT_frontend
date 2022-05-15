import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../axios";
import MovieCard from "./MovieCard/MovieCard";

function Row({ fetchUrl, title, size }) {
    const [movies, setMovies] = useState([]);
    // const [movieData, setMovieData] = useState([]);

    const data = async () => {
        const req = await axios.get(fetchUrl);
        console.log("👉 >> ", req);
        setMovies(req.data.movies);
        // setMovieData(movies.name);
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
                    {console.log (movies)}
                    
                    {/* {console.log(movieData)} */}
                    {/* {console.log ("*****",movies[0].media_path)} */}
                    {movies.map((item) => (
                        <>  
                        {console.log("***###",item)}
                        {console.log("***Media Path#",item.media_path)}
                            <MovieCard
                                id={item.movie_id}
                                path={item.backdrop_path}
                                poster_path={item.posterPath}
                                media = {item.media_path}
                                title={item.movie_title}
                                name={item.movie_name}
                                description = {item.movie_description}
                                date={item.m_release_date}
                                result={movies}
                                size={size}
                        
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
