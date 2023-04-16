import { Grid } from '@mui/material';
import React from 'react';
import Movie from '../Movie/Movie';

function MovieList({ movies }) {
  return (
    <Grid
      container
      className="flex flex-wrap justify-center overflow-auto sm:justify-between">
      {movies?.results.map((movie, i) => (
        <Movie key={i} movie={movie} id={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
