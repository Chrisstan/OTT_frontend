import React from "react";
import { Link } from "react-router-dom";
import { isEmail } from "validator";

import "../Join_Now/joinNow.css";

import { useState } from "react";
import AuthService from "../../services/auth-service";

const required = (value) => {
    if (!value) {
        return (
            <div className="failure_msg" role="alert">
                This field is required!
            </div>
        );
    }
};
const valid_email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="failure_msg" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const valid_username = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="failure_msg" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const valid_password = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="failure_msg" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

function JoinNow() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        
        AuthService.register(username, email, password).then(
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
    };

    return (
        <>
            <div className="auth_container">
                <div className="sign_up_container">
                    <div className="sign_up_title_container">
                        <h1 className="sign_up_title">Sign Up</h1>
                    </div>
                    <div className="sign_up_form">
                        <div className="field">
                            <label className="input_lable">UserName</label>
                            <input
                                type="text"
                                className="user_input"
                                required
                                value={username}
                                onChange={(x) => setUsername(x.target.value)}
                                validations={[required, valid_username]}
                            ></input>
                        </div>
                        <div className="field">
                            <label className="input_lable">Email</label>
                            <input
                                type="email"
                                className="user_input"
                                required
                                value={email}
                                onChange={(x) => setEmail(x.target.value)}
                                validations={[required, valid_email]}
                            ></input>
                        </div>
                        <div className="field">
                            <label className="input_lable">Password</label>
                            <input
                                type="password"
                                className="user_input"
                                required
                                value={password}
                                onChange={(x) => setPassword(x.target.value)}
                                validations={[required, valid_password]}
                            ></input>
                        </div>

                        <div className="field">
                            <button className="sign_up_btn" onClick={submit}>
                                Register
                            </button>
                        </div>
                    </div>
                    {message && (
                        <div className="alert_area">
                            <div
                                className={
                                    successful ? "success_msg" : "failure_msg"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <div className="login_field">
                        <p className="log_in_link">
                            Already Have an account ?{" "}
                        </p>
                        <Link to="/">
                            <p className="log_in_link link"> Log In</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinNow;
