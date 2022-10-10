import { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Container } from "react-bootstrap";
import MovieBox from "./component/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    getDataRequest();
  }, []);
  const getDataRequest = async () => {
    const url = "https://movie-task.vercel.app/api/popular";
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log("RJ", responseJson.data.results);
    setMovies(responseJson.data.results);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <>
      <nav class="navbar container-fluid bg-light mt-0">
        <div class="container-fluid">
          <a
            class="navbar-brand text-bold"
            style={{ opacity: "0.4", cursor: "pointer" }}
          >
            Navbar
          </a>
          <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <select
              value=""
              // onChange={()={}}
            >
              {movies.map((year) => (
                <option>{year.release_date.slice(0, 4)}</option>
              ))}
            </select>
            <button class="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="grid">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
