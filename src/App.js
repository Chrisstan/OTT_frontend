import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./Components/request";
import Header from "./Components/Header/Header";
import Label from "./Components/Label/Label";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import MovieTitle from "./Pages/MovieDetails/MovieTitle";
import JoinNow from "./Pages/Join_Now/JoinNow";
import Row from "./Components/Row/Row";
import LogIn from "./Pages/LogIn/LogIn";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import MovieList from "./Pages/MovieList/MovieList";
import OtpLogin from "./Pages/OtpLogin/OtpLogin";
import UpdateMovie from "./Pages/UpdateMovie/UpdateMovie";

function App() {
    let isLarge = true;
    const userRole = () => {
        if (localStorage.getItem("user")) {
            // console.log(
            //     "AAAAAAAAAAAAAAAAAAA",
            //     JSON.parse(localStorage.getItem("user")).roles[0]
            // );
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

                    <Route path="/login" element={<LogIn />} />
                </Routes>

                <Routes>
                    <Route path="/otpLogin" element={<OtpLogin />} />
                </Routes>

                <Routes>
                    <Route path="/movies/:media" element={<VideoPlayer/>} />
                </Routes>

                <Routes>
                    <Route path="/update/:id" element={<UpdateMovie/>} />
                </Routes>

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Header />
                                <Label />
                                <Row
                                    title="Trending"
                                    fetchUrl={requests.fetchTrending}
                                    size={isLarge}
                                />
                                <Row
                                    title="Action Movies"
                                    fetchUrl={requests.fetchActionMovies}
                                />
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
