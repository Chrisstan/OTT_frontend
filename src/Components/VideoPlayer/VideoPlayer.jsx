import { useParams } from "react-router-dom";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import {React, useState} from "react";
import "./videoPlayer.css";

function VideoPlayer() {
    const { media } = useParams();
    const base_Url =
        "https://res.cloudinary.com/zohoott/video/upload/v1652331550/ott/";
    console.log("^^^^^", window.location.pathname);

    const PlayerComponent = () => {
        const [fullscreenMode, setFullscreenMode] = useState(false);
        let player = null;
        const ref = (p) => {
            player = p;
        };

        const start = () => {
            if (fullscreenMode !== false)
                findDOMNode(player).requestFullscreen();
        };

        const end = () => {
            setFullscreenMode(document.fullscreenElement !== null);
        };
    };

    return (
        <>
            <div className="full_screen">
                <ReactPlayer
                    url={`${base_Url}${media}`}
                    width="100%"
                    height="100%"
                    controls
                    playing={true}
                />
            </div>
        </>
    );
}

export default VideoPlayer;
