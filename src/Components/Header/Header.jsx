import "./header.css";
import AuthService from "../../services/auth-service";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

function Header() {
    const [logIn, setLogIn] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const logOut = () => {
        AuthService.logout();
        localStorage.removeItem("user");
        setLogIn(localStorage.getItem(""));
        window.location.reload();
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navToUpload = () => {
        navigate("/admin");
    };
    const navToList = () => {
        navigate("/movies");
    };

    const navToHome = () => {
        navigate("/");
    };

    let ROLE;

    if (logIn) {
        ROLE = JSON.parse(localStorage.getItem("user")).roles[0];
        // setUser(Role);
        // console.log(ROLE);
    };
    

    return (
        <div className="nav">
            <div className="nav_black">
                <div className="logoContainer">
                    <img className="nav_logo" src={require("../../asserts/logo.png")} onClick={navToHome}></img>
                </div>
                {!logIn && (
                    <div className="btn_container">
                        <Link to="/signup">
                            <div className="nav_join_btn">
                                <button className="join_btn">JOIN NOW</button>
                            </div>
                        </Link>
                        <Link to="/login">
                            <div className="nav_signInBtn">
                                <button className="signInBtn">LOG IN</button>
                            </div>
                        </Link>
                    </div>
                )}
                {logIn && (
                    <>
                        <div className="avatar_container">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                    open ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                                <Avatar sx={{ width: 34, height: 34 }}></Avatar>
                            </IconButton>
                        </div>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 4,
                                    },
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 43,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{
                                horizontal: "left",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            {ROLE === "ROLE_ADMIN" ? (
                                <div>

                                    <MenuItem onClick={navToUpload}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Upload
                                    </MenuItem>
                                    <MenuItem onClick={navToList}>
                                        <ListItemIcon>
                                            <FormatListBulletedOutlinedIcon fontSize="small" />
                                        </ListItemIcon>
                                        Movie List
                                    </MenuItem>
                                </div>
                            ) : (
                                ""
                            )}

                            <MenuItem onClick={logOut}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
