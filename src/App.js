import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./Components/request";
import Header from "./Components/Header/Header";
import Label from "./Components/Label/Label";
<<<<<<< HEAD
// import Row from "./Components//Row";
=======
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
import MovieTitle from "./Pages/MovieDetails/MovieTitle";
import JoinNow from "./Pages/Join_Now/JoinNow";
import Row from "./Components/Row/Row";
import LogIn from "./Pages/LogIn/LogIn";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import MovieList from "./Pages/MovieList/MovieList";
<<<<<<< HEAD
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import OtpLogin from "./Pages/OtpLogin/OtpLogin";
=======
import UpdateMovie from "./Pages/UpdateMovie/UpdateMovie";
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9

function App() {
    let isLarge = true;
    const userRole = () => {
        if (localStorage.getItem("user")) {
            console.log(
                "AAAAAAAAAAAAAAAAAAA",
                JSON.parse(localStorage.getItem("user")).roles[0]
            );
            let role = JSON.parse(localStorage.getItem("user")).roles[0];
            if (role) {
                return role;
            }
        }
    };
    return (
        <>
            <Router>
                <Routes>
                    {userRole() === "ROLE_ADMIN" ? (
                        <Route path="/admin" element={<AdminPanel />} />
                    ) : (
                        <></>
                    )}
                    <Route
                        path="/movies"
                        element={
                            <>
                                <Header />
                                <MovieList />
                            </>
                        }
                    />
                </Routes>

                <Routes>
                    <Route path="/signup" element={<JoinNow />} />
                </Routes>
                <Routes>
<<<<<<< HEAD
                    <Route path="/" element={<LogIn />} />
                </Routes>

                <Routes>
                    <Route path="/otpLogin" element={<OtpLogin />} />
                </Routes>

                <Routes>
                    <Route path="/movies/:media" element={<VideoPlayer/>} />
=======
                    <Route path="/movies/:media" element={<VideoPlayer />} />
                </Routes>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                </Routes>
                <Routes>
                    <Route path="/update/:id" element={<UpdateMovie/>} />
>>>>>>> 4c743cdd60f7a1ae3fad144730ba626abfbf33c9
                </Routes>

                <Routes>
                    <Route
                        exact
                        path="/home"
                        element={
                            <>
                                <Header />
                                <Label />
                                <Row
                                    title="Netflix Trending"
                                    fetchUrl={requests.fetchTrending}
                                    size={isLarge}
                                />
                                {/* <Row
                                    title="Originals"
                                    fetchUrl={requests.fetchNetflixOriginals}
                                />
                                <Row
                                    title="TopRated"
                                    fetchUrl={requests.fetchTopRated}
                                /> */}
                                <Row
                                    title="Action Movies"
                                    fetchUrl={requests.fetchActionMovies}
                                />
                                {/* <Row
                                    title="Comedies"
                                    fetchUrl={requests.fetchComedyMovies}
                                />
                                <Row
                                    title="Horror"
                                    fetchUrl={requests.fetchHorrorMovies}
                                />
                                <Row
                                    title="Romance"
                                    fetchUrl={requests.fetchRomanceMovies}
                                />
                                <Row
                                    title="Documentaries"
                                    fetchUrl={requests.fetchDocumentaries}
                                /> */}
                            </>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/movies/:id/:path/:media"
                        element={
                            <>
                                <Header />
                                <MovieTitle />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
