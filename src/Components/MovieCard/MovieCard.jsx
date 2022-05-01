import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ id, path, poster_path, title, name, size, result }) {
    const base_Url = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="cardItem">
            <Link to={`/movies/${id}${path}`} className="link">
                <img
                    className={`row_poster ${size ? "posterLarge" : ""} `}
                    key={id}
                    src={
                        size
                            ? `${base_Url}${poster_path}`
                            : `${base_Url}${path}`
                    }
                ></img>
                <div className="poster_name ">
                    {title !== undefined ? <p>{title}</p> : <p>{name}</p>}
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
