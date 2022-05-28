import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import axios from "axios";
 import "../LogIn/logIn.css";

function OtpLogin() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [login, setLogin] = useState(false);

    const generate = async () => {
        const res = await axios
            .get(`http://localhost:8080/movies/otp?email=${email}`)
            .then((response) => {
                console.log("👉👉 >>", response.data);
                // setOtp(response.data);
                // setisLoading(true);
            })
            .catch((error) => {
                console.log(error.res);
            });
    };
    
    const submit = (e) => {
        e.preventDefault();
        setMessage("");
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        AuthService.otplogin(email,otp)
        .then((res) => {
                setLogin(true);
                // localStorage.setItem("logIn", "Logged In");
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",res);

                navigate("/home");
                // window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
            }
        );
    };

    return (
        <>
            <div className="auth_container">
                <div className="sign_in_container">
                    <div className="sign_in_title_container">
                        <h1 className="sign_in_title">Sign In</h1>
                    </div>
                    <div className="sign_in_form">
                        <div className="user_field">
                            <label className="input_lable">Email</label>
                            <input
                                type="email"
                                className="user_input"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        <div>
                            <button className="generate_btn" onClick={generate}>Generate OTP</button>
                        </div>
                        </div>
                        </div>
                        <div className="user_field">
                            <label className="input_lable">OTP</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            ></input>
                    </div>
                        <div className="user_field">
                            <button className="sign_in_btn" onClick={submit}>
                                Log In
                            </button>
                        </div>
                    {message && (
                        <div className="alert_area">
                            <div
                                className={
                                    login ? "success_msg" : "failure_msg"
                                }
                                role="alert"
                            >
                                {message ? message : setMessage(" ")}
                            </div>
                        </div>
                    )}

                                    <div className="otp_field">
                                        <p className="otp"> Login with  </p>
                                        <Link to="/">
                                            <p className="otp_link"> Password</p>
                                        </Link>
                                    </div>

            
                </div>
            </div>
        </>
    );
}

export default OtpLogin;
