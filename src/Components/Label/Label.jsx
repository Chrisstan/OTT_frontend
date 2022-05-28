import "./label.css";
import React from "react";

function Label() {
    return (
        <div className="label_container">
            <div className="label_title">
                <h1 className="title">Movies</h1>
            </div>
            <div className="label_content">
                <p className="content">
                    Movies move us like nothing else can, whether they are
                    scary, funny, dramatic, romantic or anywhere in-between. So
                    many titles, so much to experience.
                </p>
            </div>
        </div>
    );
}

export default Label;
