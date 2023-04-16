import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function Movie({ movie, id }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="p-[10px]">
      <Grow in key={id} timeout={(id + 1) * 250}>
        <Link
          to={`/movie/${movie.id}`}
          className="items-center font-bold flex flex-col hover:cursor-pointer decoration-0">
          {movie.poster_path ? (
            <img
              className=" rounded-[20px] h-[300px] mb-[10px] hover:scale-[1.05] shadow-xl"
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ) : (
            <img alt={movie.title} src="https://picsum.photos/200/300" />
          )}
          <Typography
            className="overflow-hidden mt-[10px] mb-0 text-center"
            variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average}`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
