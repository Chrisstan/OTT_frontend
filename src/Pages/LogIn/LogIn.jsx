import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";

import "../LogIn/logIn.css";

function LogIn() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [login, setLogin] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setMessage("");
        AuthService.login(username, password).then(
            (res) => {
                setLogin(true);
                // localStorage.setItem("logIn", "Logged In");
                console.log(
                    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
                    res
                );

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
                            <label className="input_lable">UserName</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className="user_field">
                            <label className="input_lable">Password</label>
                            <input
                                type="password"
                                className="user_input"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="user_field">
                            <button className="sign_in_btn" onClick={submit}>
                                Log In
                            </button>
                        </div>
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
                                        <Link to="/otpLogin">
                                            <p className="otp_link"> OTP</p>
                                        </Link>
                                    </div>
                                        <div className="sign_in_field"> 
                                            <p className="sign_in_link">New User ?  </p>
                                            <Link to="/signup">
                                                <p className="sign_in_link link"> Sign up</p>
                                            </Link>
                                        </div>
            
                </div>
            </div>
        </>
    );
}

export default LogIn;
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";

import "../LogIn/logIn.css";

function LogIn() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [login, setLogin] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setMessage("");
        AuthService.login(username, password).then(
            (res) => {
                setLogin(true);
                // localStorage.setItem("logIn", "Logged In");
                console.log(
                    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
                    res
                );

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
                            <label className="input_lable">UserName</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className="user_field">
                            <label className="input_lable">Password</label>
                            <input
                                type="password"
                                className="user_input"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="user_field">
                            <button className="sign_in_btn" onClick={submit}>
                                Log In
                            </button>
                        </div>
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
                    <div className="sign_in_field">
                        <p className="sign_in_link">New User ? </p>
                        <Link to="/signup">
                            <p className="sign_in_link link"> Sign in</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
