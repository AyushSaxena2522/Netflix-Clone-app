import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import requests from "../requests";

import TopNav from "../components/TopNav";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const movies = useSelector((state) => state.netflix.movies);
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);

  const [movie, setMovie] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  });

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });

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

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies)

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />

        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "50% 10%",
          }}
        >
          <div className="banner__contents">
            <div className="title">
              <h1> 
              {movie?.title || movie.name || movie?.original_name}
              </h1>
            </div>

            <div className="buttons">
              <button onClick={() => navigate("/player")} className="playBtn">
                Play
              </button>
              <button onClick={() => navigate("/myList")} className="moreBtn">My List</button>
            </div>

            <p>{movie?.overview}</p>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-color: black;
  /* background-size: auto; */

  .hero{
    position: relative;
        .banner {
        color: white;
        object-fit: contain;
        height: 550px;
        
        .banner__contents {
                margin-left: 30px;
                padding-top: 140px;
                height: 190px;
                .title {
                    margin-left: 3rem;
                    text-transform: uppercase;
                    font-size: 53px;
                    align-items: flex-start;
                    background: -webkit-linear-gradient(#eee, rgb(249, 57, 4));
                    outline: 5px;
                    outline-color: #000000;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                    p {
                        margin-bottom: 0px;
                        width: 640px;
                        margin-top: 5px;
                        margin-left: 3rem;
                        margin-bottom: 5rem;
                        font-family: "lexend Deca", sans-serif;
                        color: white;
                        font-size: medium;
                    }
                    .buttons {
                        position: absolute;
                        display: flex;
                        margin-top: 8rem;
                        gap: 2rem;
                        margin-left: 3.5rem;
                    
                        .playBtn {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: red;
                            border-radius: 1rem;
                            font-size: 1.4rem;
                            gap: 1rem;
                            padding: 0.9rem;
                            padding-left: 2rem;
                            padding-right: 2.4rem;
                            border: none;
                            cursor: pointer;
                        }
                        .moreBtn {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            background-color: black;
                            border-radius: 1rem;
                            font-size: 1.4rem;
                            gap: 1rem;
                            padding: 0.9rem;
                            padding-left: 2rem;
                            padding-right: 2.4rem;
                            border: 0.1rem solid white;
                            cursor: pointer;
                        }
                    }
                }
        }
    }

`

export default Netflix
