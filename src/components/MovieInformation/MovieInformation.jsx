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

// hooks and events ----
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB';
import categories from '../../assets/index';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import MovieList from '../MovieList/MovieList';

function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: recommendations, isFetching: isRecommendationsFetching } = useGetRecommendationsQuery({list: '/recommendations', movie_id: id});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isFetching = false;
  // const error = true;

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
        </Link>
      </Box>
    );
  }

  console.log('data : ', data);
  console.log('recommendations : ', recommendations);

  return (
    <div className='p-0'>
      <Box display="flex" justifyContent="space-around">
          <Button startIcon={<ArrowBack/>} onClick={() => navigate('/')} color="primary">Go Back</Button>
          </Box>
      <Grid
        container
        className="flex justify-around my-10 mx-0 flex-col sm:flex-row sm:flex-wrap p-0">
        <Grid item sm={12} lg={4} className='p-0'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt="Movie poster"
            className="rounded-xl shadow-2xl sm:w-[80%] w-[100%] h-[350px] my-0 mx-auto mb-8 p-0"
          />
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Typography variant="h3" align="center" gutterBottom>
            {data?.title} ({data?.release_date})
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>{data?.tagline}
          </Typography>
          <Grid item className='flex justify-around my-10 mx-0 flex-col sm:flex-row sm:flex-wrap '>
          <Box display="flex" align="center">
            <Rating readOnly value={data?.vote_average / 2 } />
            <Typography variant='subtitle1' gutterBottom>{data?.vote_average.toFixed(1)} / 10</Typography>
          </Box>
            <Typography variant='h6' align='center' gutterBottom>{data?.runtime}min {data?.spoken_languages.length > 0 ? ` / ${data?.spoken_languages[0].name}` : ''}</Typography>
          </Grid>
          <Grid item className='flex justify-around'>{data?.genres?.map((genre) => {
            return (
              <Link key={genre.name} to='/' className='flex items-center'
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
                <img src={categories[genre.name.toLowerCase()]}
                    alt="genre"/>
                <Typography variant='subtitle1' align='center' gutterBottom>
                  {genre.name}
                </Typography>
              </Link>
            );
          })}</Grid>
          <Typography variant='h5' gutterBottom>
            Overview
          </Typography>
          <Typography>
            {data?.overview}
          </Typography>
          <Typography variant='h5' gutterBottom>
            Cast
          </Typography>
          <Grid item container>
            {data && data?.credits?.cast?.map((cast) => (
              cast.profile_path &&
                (<Link key={cast.id} to={`/actors/${cast.id}`} className='flex flex-col justify-around m-3'>
                  <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                      alt="cast" className='w-[90px] flex justify-center rounded-lg shadow-xl'/>
                  <Typography variant='h6' align='center' gutterBottom className='text-gray-500 w-3'> 
                    {cast.name}
                  </Typography>
                  <Typography align='center' gutterBottom className='text-gray-400'> 
                    {cast.character}
                  </Typography>
                </Link>)
            )).slice(0,6)}
          </Grid>
        </Grid>
        <Typography variant='h5' gutterBottom style={{marginTop: "10px"}}>
              You may also like...
        </Typography>
        {/* Loop through the recommendations and show in the screen */}
        { recommendations ? 
          <MovieList movies={recommendations} numberOfMovies={18}/>
        : <Typography variant='h5' gutterBottom >
          No such movie for recommendation
          </Typography>
        }
      </Grid>
    </div>
  );
}

export default MovieInformation;
