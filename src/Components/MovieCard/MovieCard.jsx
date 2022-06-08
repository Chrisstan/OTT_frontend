import { React } from "react";
import "./movieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({
    id,
    path,
    poster_path,
    title,
    name,
    size,
    media,
}) {
    const navToTitle = useNavigate();
    const navToSignIn = useNavigate();

    const base_Url = "https://res.cloudinary.com/zohoott/image/upload/v1652282662/ott/";
    // {console.log("result******",media)}


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

                {/* {console.log("result******",media)} */}

                <div className="poster_name ">
                    {name !== undefined ? (
                        <p className="poster_title">{name}</p>
                    ) : (
                        <p className="poster_title">{title}</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default MovieCard;
