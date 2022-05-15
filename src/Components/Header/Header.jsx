import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="nav">
            <div className="nav_black">
                <div className="logoContainer">
                    <img
                        src={require("../../asserts/logo/logo.png")}
                        alt=""
                        className="nav_logo"
                    ></img>
                </div>
                <div className="btn_container">
                    <Link to="/signup">
                        <div className="nav_join_btn">
                            <button className="join_btn">JOIN NOW</button>
                        </div>
                    </Link>
                    <div className="nav_signInBtn">
                        <button className="signInBtn">SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
