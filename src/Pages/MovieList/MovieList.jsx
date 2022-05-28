<<<<<<< HEAD
// import React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";

// function MovieList() {
//     const columns = [
//         { id: "name", label: "Name", minWidth: 170 },
//         { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//         {
//             id: "population",
//             label: "Population",
//             minWidth: 170,
//             align: "right",
//             format: (value) => value.toLocaleString("en-US"),
//         },
//         {
//             id: "size",
//             label: "Size\u00a0(km\u00b2)",
//             minWidth: 170,
//             align: "right",
//             format: (value) => value.toLocaleString("en-US"),
//         },
//         {
//             id: "density",
//             label: "Density",
//             minWidth: 170,
//             align: "right",
//             format: (value) => value.toFixed(2),
//         },
//     ];

//     return (
//         <div className="movie_table">
//             <Paper sx={{ width: "100%", top: "10%", overflow: "hidden" }}>
//                 <TableContainer sx={{ maxHeight: 440 }}>
//                     <Table stickyHeader aria-label="sticky table">
//                         <TableHead>
//                             <TableRow>
//                                 {columns.map((column) => (
//                                     <TableCell
//                                         key={column.id}
//                                         align={column.align}
//                                         style={{ minWidth: column.minWidth }}
//                                     >
//                                         {column.label}
//                                     </TableCell>
//                                 ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {/* {rows
//             // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                 {columns.map((column) => {
//                   const value = row[column.id];
//                   return (
//                     <TableCell key={column.id} align={column.align}>
//                     {column.format && typeof value === 'number'
//                           ? column.format(value)
//                           : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//                 );
//               })} */}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 {/* <TablePagination
//       rowsPerPageOptions={[10, 25, 100]}
//       component="div"
//       count={rows.length}
//       rowsPerPage={rowsPerPage}
//       page={page}
//       onPageChange={handleChangePage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     /> */}
//             </Paper>
//         </div>
//     );
// }

// export default MovieList;
=======
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
import { delete_movie } from "../../services/movieCrudService";
import UpdateMovie from "../UpdateMovie/UpdateMovie";

function MovieList() {
    const [movies, setMovies] = useState([]);
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
            .get(`http://localhost:8080/movies/get_allmovies`)
            .then((response) => {
                console.log("👉👉 >>", response.data);
                setMovies(response.data);
            })
            .catch((error) => {
                // console.log(error.res);
            });
    };

    const navToUpdatePage = useNavigate();

    useEffect(() => {
        data();
    }, []);

    console.log("💩💩💩💩💩💩💩", movies);

    return (
        <div className="movie_table">
            <Paper
                sx={{
                    width: "90%",
                    top: "10%",
                    overflow: "hidden",
                    // backgroundColor: "#a3a3a3",
                    border: "3px solid black",
                    // borderColor: "#a3a3a3"
                }}
            >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody border={"3px solid black"}>
                            {movies.map((movie) => (
                                <>
                                    <TableRow
                                        key={movie.movie_id}
                                        style={{ border: "3px solid black" }}
                                    >
                                        <TableCell
                                            align={"center"}
                                            style={{
                                                border: "3px solid black",
                                                width: "20px",
                                            }}
                                        >
                                            {movie.movie_id}
                                        </TableCell>
                                        <TableCell
                                            align={"center"}
                                            width="70px"
                                            overflow="hidden"
                                        >
                                            {movie.movie_name}
                                        </TableCell>
                                        <TableCell
                                            align={"center"}
                                            width="10px"
                                            overflow="hidden"
                                        >
                                            {movie.movie_title}
                                        </TableCell>
                                        <TableCell
                                            align={"center"}
                                            width="10px"
                                            overflow="hidden"
                                        >
                                            {movie.movie_description}
                                        </TableCell>

                                        <TableCell align={"center"}>
                                            {movie.posterPath}
                                        </TableCell>
                                        <TableCell align={"center"}>
                                            {movie.backdropPath}
                                        </TableCell>
                                        <TableCell align={"center"}>
                                            {movie.mediaPath}
                                        </TableCell>
                                        <TableCell align={"center"}>
                                            <div className="edit">
                                                <Link
                                                    to={{
                                                        pathname: `/update/${movie.movie_id}`,
                                                        
                                                        
                                                    }}
                                                >
                                                    <EditIcon
                                                        className="edit_icon"
                                                        // onClick={() =>
                                                        //     navToUpdatePage(
                                                        //         "/update"
                                                        //     )
                                                        // }
                                                    />
                                                </Link>
                                            </div>
                                            <div className="edit">
                                                <DeleteOutlineIcon
                                                    className="delete_icon"
                                                    onClick={() =>
                                                        delete_movie(
                                                            movie.movie_id
                                                        )
                                                    }
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    /> */}
            </Paper>
        </div>
    );
}

export default MovieList;
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
