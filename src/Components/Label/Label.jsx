import "./label.css";
import { React, useState, useEffect, useRef } from "react";
import axios from "../../axios";
import requests from "../request";
// import 'bootstrap/dist/css/bootstrap.min.css'

function Label() {
    const [movie, setMovie] = useState([""]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            console.log("request", request);
            console.log("sss", request.data.movies);
            setMovie(
                request.data.movies[
                    Math.floor(Math.random() * request.data.movies.length)
                ]
            );
            console.log(Math.floor(Math.random() * request.data.movies.length));

            return request;
        }
        fetchData();
    }, []);

    // console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    {
        console.log("##################", movie?.backdrop_path);
    }

    return (
        <>
            <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
            >
                <header
                    className="banner"
                    style={{
                        marginTop: "50px",
                        backgroundSize: "cover",
                        backgroundImage: `url(
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
                            <button className="banner_button">Play</button>
                            <button className="banner_button">My List</button>
                        </div>
                        <h1 className="banner_description">
                            {truncate(movie?.movie_description, 150)}
                        </h1>
                    </div>

                    <div className="banner--fadeBottom" />
                </header>
            </div>
        </>
    );
}

export default Label;
