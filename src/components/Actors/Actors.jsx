import React from 'react';

// import styles ----
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from '@mui/material';

// import icons ----
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutline,
  Remove,
  ArrowBack,
} from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';

// import actions ----

function Actors() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const page = 1;
  const { isFetching, error, data } = useGetActorQuery(id);
  const { isFetching: isFetchingMovies, error: errorMovies, data: dataMovies } = useGetMoviesByActorIdQuery({id, page});

  // Handle error and edge cases
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column">
        <Link to="/">
          Something went wrong &nbsp;
          <Typography variant="h4" color="error">
            {error.message}
          </Typography>
          <Button startIcon={<ArrowBack/>} onClick={() => navigate('/')} color="primary">Go Back</Button>
        </Link>
      </Box>
    );
  }
  console.log('Actor : ',data);
  
  return <>
      <Grid container spacing={3} className='flex justify-center'>
        <Grid item lg={5} xl={4}>
          <img 
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.name} 
            className='w-[90%] rounded-lg shadow-xl'
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{display: "flex", justifyContent: "center", flexDirection: "column"}} className='flex justify-center flex-col'>
          <Typography variant="h2" gutterBottom className='text-cyan-600'>
            {data.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="h5">
            Biography
          </Typography>
          <Typography variant="body2" align='justify' paragraph>
            {data.biography || 'Sorry no biography yet...'}
          </Typography>
          <Box display="flex" justifyContent="space-around">
            <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              More info
            </Button>
          <Button startIcon={<ArrowBack/>} onClick={() => navigate('/')} color="primary">Go Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box className="my-5">
        <Typography variant="h2" align='center'>
          Movies
        </Typography>
        {dataMovies && <MovieList movies={dataMovies} numberOfMovies={12}/>}
      </Box>
  </>;
}

export default Actors;
