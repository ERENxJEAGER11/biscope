import React from 'react'
import { Typography, Button, Card, CardMedia, Box, CardContent } from '@mui/material'
import {Link, useParams} from 'react-router-dom'

const FeaturedMovie = ({movies}) => {
    console.log('movie: ', movies);
  return (
    <div>
        <Box component={Link} to={`/movie/${movies.id}`} className='h-[490px] flex justify-center mb-6'>
            <Card className='w-[100%] flex justify-end flex-col relative'
                    style={{ backgroundColor: "rgba(0,0,0,0.575)", backgroundBlendMode: "darken"}}>
                <CardMedia
                    component="img"
                    height="140"
                    className='absolute top-0 right-0 h-[100%] w-[100%] bg-blend-darken'
                    style={{ backgroundColor: "rgba(0,0,0,0.575)", backgroundBlendMode: "darken"}}
                    image={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
                    alt={movies.title}
                    media="picture"
                    title={movies.title}
                />
                <Box padding="20px" className="relative bg-transparent">
                    <CardContent className="text-slate-200 w-[100%] sm:w-[40%]">
                        <Typography variant="h5" component="h2" gutterBottom>
                            {movies?.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {movies?.overview}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    </div>
  )
}

export default FeaturedMovie