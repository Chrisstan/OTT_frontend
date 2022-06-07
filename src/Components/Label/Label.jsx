import "./label.css";
import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import requests from "../request";
// import 'bootstrap/dist/css/bootstrap.min.css'

function Label() {
    const [movie, setMovie] = useState([""]);

    const navToPlay = useNavigate();
    const navToSignIn = useNavigate();
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            // console.log("request", request);
            // console.log("sss", request.data.movies);
            setMovie(
                request.data.movies[
                    Math.floor(Math.random() * request.data.movies.length)
                ]
            );
            // console.log(Math.floor(Math.random() * request.data.movies.length));

            return request;
        }
        fetchData();
    }, []);

    // console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    // {
    //     console.log("##################", movie?.backdrop_path);
    // }

    const loggedIn = localStorage.getItem("user");

    const navToPage = () => {
        loggedIn != null
            ? navToPlay(`/movies/${movie?.media_path}`)
            : navToSignIn("/login");
    };

    return (
        <>
        <header className="banner"
            style={{
                marginTop:"50px",
                backgroundSize: "cover",
                backgroundImage:   `url(
                    "https://res.cloudinary.com/zohoott/image/upload/v1652331550/ott/${movie?.backdrop_path}"
                )`,
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="banner_contents">
                        <h1 className="banner_title">
                            {movie?.movie_title || movie?.movie_name}
                        </h1>

                <div className="banner_buttons">
                                <button className="banner_button" onClick={navToPage}>Play</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.movie_description, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>


        </>
    );
}

export default Label;
