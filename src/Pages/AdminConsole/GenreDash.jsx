import React from "react";
import { Link } from "react-router-dom";

function GenreDash() {
    return(
        <Link to= '/admin/genreDetails'>
        <form>
            <label> Genre ID :
                <input type="number" required />
            </label>
            <label>Movie Genre :
                <input type="text" required />
            </label>
    
        </form>
        </Link>
    );
}
export default GenreDash