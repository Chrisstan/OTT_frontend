import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import axios from "../../axios";
 import "../LogIn/logIn.css";

function OtpLogin() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [login, setLogin] = useState(false);
    
    let navigate = useNavigate();

    const generate = async () => {
        const res = await axios
            .get(`/auth/otp?email=${email}`)
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
        AuthService.otplogin(email,otp,password)
        
        .then((res) => {
                // setLogin(true);
                // localStorage.setItem("logIn", "Logged In");
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",res);
                console.log(login);
                // if(password==confirmPassword){
                //     setPassword(password)
                // }

                navigate("/");
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
                        <h1 className="sign_in_title">Reset Password</h1>
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
                            <label className="input_lable">Password</label>
                            <input
                                name="password1"
                                type="password"
                                className="user_input"
                                required
                                value={password}
                                
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            </div>

                            {/* <div className="user_field">
                            <label className="input_lable">Confirm Password</label>
                            <input
                                name="password2"
                                type="password"
                                className="user_input"
                                required
                                value={confirmPassword}
                                onChange={setConfirmPassword}

                            ></input>
                            </div> */}
                        <div className="user_field">
                            <button className="sign_in_btn" onClick={submit}>
                                Submit
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
                                        <Link to="/login">
                                            <p className="otp_link"> Password</p>
                                        </Link>
                                    </div>

            
                </div>
            </div>
        </>
    );
}

export default OtpLogin;
