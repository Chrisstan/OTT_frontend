import { React, useState } from "react";
import "./movieCard.css";
import { Link, useNavigate } from "react-router-dom";
// import { Skeleton } from "@mui/material";

function MovieCard({
    id,
    path,
    poster_path,
    title,
    name,
    size,
    result,
    media,
}) {
    const navToTitle = useNavigate();
    const navToSignIn = useNavigate();

    // const base_Url = "https://image.tmdb.org/t/p/w500";

    // ***********************************************ORIGINAL******************************

    const base_Url = "https://res.cloudinary.com/zohoott/image/upload/v1652282662/ott/";
    {console.log("result******",media)}

    // ***********************************************ORIGINAL******************************

    const loggedIn = localStorage.getItem("user");

    const navToPage = () => {
        loggedIn != null
            ? navToTitle(`/movies/${id}/${path}/${media}`)
            : navToSignIn("/");
    };

    return (
        <>
            <div className="cardItem">
                <img
                    className={`row_poster ${size ? "posterLarge" : ""} `}
                    key={id}
                    src={
                        size
                            ? `${base_Url}${poster_path}`
                            : `${base_Url}${path}`
                    }
                    onClick={navToPage}
                ></img>

                {console.log("result******",media)}

                <div className="poster_name ">
                    {title !== undefined ? (
                        <p className="poster_title">{title}</p>
                    ) : (
                        <p className="poster_title">{name}</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default MovieCard;
