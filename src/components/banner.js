import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
import { styled } from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "50% 10%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

const header = styled.div`
    .banner {
  color: white;
  object-fit: contain;
  height: 450px;
}
.banner__contents {
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
}
.banner__title {
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
}
.banner__description {
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 18px;
  max-width: 360px;
  height: 80px;
}
.banner__button {
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;
}
.banner__button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}
.banner__fadeBottom {
  height: 7.5rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
}
.banner__description {
  font-size: 16px;
}
`


export default Banner;