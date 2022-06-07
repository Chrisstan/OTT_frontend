import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../MovieList/movieList.css";

import axios from "../../axios";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import movieCrudService from "../../services/movieCrudService";
// import { DataGrid } from "@mui/x-data-grid";

function MovieList() {
    const [movies, setMovies] = useState([]);
    // console.log("  A          ",movies);
    const columns = [
        { id: "movie_id", label: "Movie Id", align: "center" },
        {
            id: "movie_name",
            label: "Movie Name",
            minWidth: 90,
            align: "center",
        },
        {
            id: "movie_title",
            label: "Movie Title",
            minWidth: 80,
            align: "center",
        },
        {
            id: "movie_description",
            label: "Movie Description",
            minWidth: 160,
            align: "center",
        },
        {
            id: "posterPath",
            label: "Poster Path",
            minWidth: 100,
            align: "center",
        },
        {
            id: "backdropPath",
            label: "Backdrop Path",
            minWidth: 100,
            align: "center",
        },
        {
            id: "mediaPath",
            label: "Media Path",
            minWidth: 100,
            align: "center",
        },
        {
            id: "edit",
            label: "Edit",
            minWidth: 50,
            align: "center",
        },
    ];

    const data = async () => {
        const req = await axios
            .get(`/movies/get_allmovies`)

            .then((response) => {
                response.json()
            })
            .then((response) => {
                console.log("👉👉 >>", response.data);
                setMovies(response.data);
            })
            .catch((error) => {
                // console.log(error.res);
            });
    };

    useEffect(() => {
        data();
    }, []);

    const delete_data = async (id) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAA", id);
        await movieCrudService.delete_movie(id);
        data();
    };

    const navToUpdatePage = useNavigate();

    console.log("💩💩💩💩💩💩💩", movies);

    return (

        <div className="movie_table">
            {/* <DataGrid columns={columns}
            rows= {movies}
            /> */}
        </div>
    );
}

export default MovieList;
