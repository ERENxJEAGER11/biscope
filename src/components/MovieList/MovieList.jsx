import { Grid } from '@mui/material';
import React from 'react';
import Movie from '../Movie/Movie';

function MovieList({ movies, numberOfMovies, excludFirst }) {
  let removedMovies;
  const removedMovie = excludFirst ? 1 : 0;
  return (
    <Grid
      container
      className="flex flex-wrap justify-center overflow-auto sm:justify-between">
      {movies?.results?.slice(removedMovie, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} id={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
