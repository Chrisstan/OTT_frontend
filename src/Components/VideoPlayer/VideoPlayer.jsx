import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import React from "react";

function VideoPlayer() {
    const { media} = useParams();
    const base_Url = "https://res.cloudinary.com/zohoott/video/upload/v1652331550/ott/";
console.log("^^^^^", window.location.pathname)

    return (
        <>
        {/* <div>
            <h1> Hello Video</h1>
            <h1> Hello Video</h1>
            <h1> Hello Video</h1>
            <h1> Hello Video</h1>
            <h1> Hello Video</h1>
            <h1> Hello Video</h1>
            
        </div> */}

    
       <ReactPlayer url={`${base_Url}${media}`} width = "100%" height="100%" controls/>
        </>
    );



}
export default VideoPlayer
