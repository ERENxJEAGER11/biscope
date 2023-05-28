import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button, Grid } from '@mui/material';
import { ExitToApp, ArrowBack } from '@mui/icons-material';
import { userSelector } from '../../features/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
 const navigate = useNavigate();

  const {
    user: { username },
  } = useSelector(userSelector);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const profile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/zaheer-zk');
        const data = await response.json();
        console.log('data', data);
        setProfile(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    profile();
  }, [])
  

  const favoriteMovies = [];
  return (
    <>
          <Button startIcon={<ArrowBack/>} onClick={() => navigate('/')} color="primary">Go Back</Button>

      <Grid container spacing={3} className='flex justify-center'>
        <Grid item lg={5} xl={4}>
          <img 
            src={profile?.avatar_url}
            alt={profile?.name} 
            className='w-[90%] rounded-lg shadow-xl'
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{display: "flex", justifyContent: "center", flexDirection: "column"}} className='flex justify-center flex-col'>
          <Typography variant="h2" gutterBottom className='text-cyan-600'>
            {profile?.name}
          </Typography>
          <Typography variant="h5">
            Bio 
          </Typography>
          <Typography variant="body2" align='justify' paragraph>
            {profile?.bio || 'Sorry no biography yet...'}
          </Typography>
          <Box display="flex" justifyContent="space-around">
            <Button variant='contained' color='primary' target='_blank' href={`https://github.com/Zaheer-zk`}>
              GitHub
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
