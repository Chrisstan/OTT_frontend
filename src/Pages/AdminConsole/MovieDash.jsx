import React from "react";
import { Link } from "react-router-dom";

function MovieDash() {
    return( 
        
        <Link to= '/admin/movieDetails'>
        <form>
            <label>Movie ID :
                <input type="number" required />
            </label>
            <label>Movie Name :
                <input type="text" required />
            </label>
            <label>Movie Title :
                <input type="text"  />
            </label>
            <label>Movie Description :
                <input type="text"  />
            </label>
            <label>Movie Budget :
                <input type="number"  />
            </label>
            <label>Movie Revenue :
                <input type="number"  />
            </label>
            <label>Movie Release Date :
                <input type="date"  />
            </label>
            <label>Movie Popularity :
                <input type="number"  />
            </label>


        </form>
        </Link>

   
    );
}
export default MovieDash