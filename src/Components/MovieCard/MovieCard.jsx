import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ id, path, poster_path, title, name, size, media }) {
    const base_Url = "https://res.cloudinary.com/zohoott/image/upload/v1652282662/ott/";
    {console.log("result******",media)}
    return (
        <div className="cardItem">
        
            
            <Link to={`/movies/${id}/${path}/${media}`} className="link">
                <img
                    className={`row_poster ${size ? "posterLarge" : ""} `}
                    key={id}
                    src={
                        size
                            ? `${base_Url}${poster_path}`
                            : `${base_Url}${path}`
                    }
                
                ></img>
                {console.log("result******",media)}
                <div className="poster_name ">
                    {title !== undefined ? <p>{title}</p> : <p>{name}</p>}
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
