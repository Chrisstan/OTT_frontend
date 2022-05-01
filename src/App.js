import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./Components/request";
import Header from "./Components/Header/Header";
import Label from "./Components/Label/Label";
import Row from "./Components/Row";
import MovieTitle from "./Pages/MovieDetails/MovieTitle";

function App() {
  let isLarge = true;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
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
                <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
                <Row
                  title="Documentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/movies/:id/:path" element={<MovieTitle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
