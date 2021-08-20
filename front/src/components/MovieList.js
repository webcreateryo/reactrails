import React, { useState, useEffect } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Search from "./Search";
import {
  Container,
  } from '@material-ui/core';
import Card from "@material-ui/core/Card";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


const MovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
    };


    return (
     <div className="App">
<Container>
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
<Card>
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (

          movies.map((movie, index) => (

            <Movie key={`${index}-${movie.Title}-${movie.Decription}`} movie={movie} >

            </Movie>

          ))
        )}
      </div>
      </Card>

      </Container>
    </div>
  );
};


export default MovieList;
