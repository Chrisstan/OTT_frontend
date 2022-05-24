import React from "react";
import { Link } from "react-router-dom";
import { isEmail } from "validator";

import "../AdminPanel/adminPanel.css";

import { useState } from "react";
import axios from "axios";
import UploadService from "../../services/uploadService";



function AdminPanel() {
    const [movieId, setMovieId] = useState("");
    const [movieTitle, setMovieTitle] = useState("");
    const [movieName, setMovieName] = useState("");
    const [movieDescp, setMovieDescp] = useState("");
    const [release, setRelease] = useState("");
    const [popularity, setPopularity] = useState("");
    const [budget, setBudget] = useState("");
    const [revenue, setRevenue] = useState("");
    const [poster, setPoster] = useState("");
    const [backDrop, setBackDrop] = useState("");
    const [media, setMedia] = useState("");
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const required = (value) => {
        if (!value) {
            setMessage("Plz Fill Out all the required Feilds")
            return (
                <div className="failure_msg">
                    <sup>*</sup>This field is required!
                </div>
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        UploadService.upload(
            movieId,
            movieTitle,
            movieName,
            movieDescp,
            release,
            popularity,
            budget,
            revenue,
            poster,
            backDrop,
            media
        ).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
                setSuccessful(false);
            }
        );
        console.log("message ", message);
    };
    return (
        <>
            <div className="container">
                <div className="upload_container">
                    <div className="upload_title_container">
                        <h1 className="upload_title">Upload/ Edit Content</h1>
                    </div>
                    <div className="upload_form">
                        <div className="field id">
                            <label className="input_lable">Movie Id</label>
                            <input
                                type="number"
                                className="user_input"
                                required
                                value={movieId}
                                onChange={(x) => setMovieId(x.target.value)}
                                // validations={[required]}
                            ></input>
                        </div>

                        <div className="field title">
                            <label className="input_lable">Movie Title</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={movieTitle}
                                onChange={(x) => setMovieTitle(x.target.value)}
                                // validations={[required, valid_email]}
                            ></input>
                        </div>

                        <div className="field name">
                            <label className="input_lable">Movie Name</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={movieName}
                                onChange={(x) => setMovieName(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field date">
                            <label className="input_lable">Release Date</label>
                            <input
                                type="date"
                                className="user_input"
                                required
                                value={release}
                                onChange={(x) => setRelease(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field descp">
                            <label className="input_lable">
                                Movie Description
                            </label>
                            <input
                                type="text"
                                className="user_input desc"
                                required
                                value={movieDescp}
                                onChange={(x) => setMovieDescp(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field popularity">
                            <label className="input_lable">Popularity</label>
                            <input
                                type="number"
                                className="user_input"
                                value={popularity}
                                onChange={(x) => setPopularity(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field budget">
                            <label className="input_lable">Movie Budget</label>
                            <input
                                type="number"
                                className="user_input"
                                required
                                value={budget}
                                onChange={(x) => setBudget(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field revenue">
                            <label className="input_lable">Revenue</label>
                            <input
                                type="number"
                                className="user_input"
                                value={revenue}
                                onChange={(x) => setRevenue(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field poster">
                            <label className="input_lable">Poster Path</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={poster}
                                onChange={(x) => setPoster(x.target.value)}
                                // validations={[required, valid_password]}
                            ></input>
                        </div>
                        <div className="field backdrop">
                            <label className="input_lable">BackDrop Path</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={backDrop}
                                onChange={(x) => setBackDrop(x.target.value)}
                            ></input>
                        </div>
                        <div className="field media">
                            <label className="input_lable">Media Path</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={media}
                                onChange={(x) => setMedia(x.target.value)}
                            ></input>
                        </div>

                        <div className="update_btn">
                            <button className="sign_up_btn" onClick={submit}>
                                Update
                            </button>
                        </div>
                    </div>
                    {message && (
                        <div className="alert_area">
                            <div
                                className={
                                    successful ? "success_msg" : "failure_msg"
                                }
                            >
                                {message ? message : setMessage(" ")}
                                {message ? message : setMessage(" ")}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default AdminPanel;
