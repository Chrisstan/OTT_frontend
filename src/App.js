import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./Components/request";
import Header from "./Components/Header/Header";
import Label from "./Components/Label/Label";
import Row from "./Components/Row";
import MovieTitle from "./Pages/MovieDetails/MovieTitle";
import JoinNow from "./Pages/Join_Now/JoinNow";

function App() {
    let isLarge = true;
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/signup" element={<JoinNow />} />
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
                                    title="Netflix Trending"
                                    fetchUrl={requests.fetchTrending}
                                    size={isLarge}
                                />
                                <Row
                                    title="Originals"
                                    fetchUrl={requests.fetchNetflixOriginals}
                                />
                                <Row
                                    title="TopRated"
                                    fetchUrl={requests.fetchTopRated}
                                />
                                <Row
                                    title="Action Movies"
                                    fetchUrl={requests.fetchActionMovies}
                                />
                                <Row
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
                                />
                            </>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/movies/:id/:path"
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
