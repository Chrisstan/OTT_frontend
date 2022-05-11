import React from "react";
import { Link } from "react-router-dom";
import "./joinNow.css";

function JoinNow({ errors }) {
    return (
        <>
            <form action="#">
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
                                ></input>
                            </div>
                            <div className="field">
                                <label className="input_lable">Email</label>
                                <input
                                    type="email"
                                    className="user_input"
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <label className="input_lable">Password</label>
                                <input
                                    type="password"
                                    className="user_input"
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <button type="submit" className="sign_up_btn">
                                    Sign Up
                                </button>
                            </div>
                            <div className="field">
                                <p className="log_in_field">Already Have an account ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default JoinNow;
