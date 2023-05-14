import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

function Profile() {
  const {
    user: { username },
  } = useSelector(userSelector);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const favoriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" component="h4">
          My Profile
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ExitToApp />}
          onClick={logout}>
          Logout
        </Button>
      </Box>
      {!favoriteMovies.lenght ? (
        <Typography variant="h5" component="h5">
          You have no favorite movies
        </Typography>
      ) : (
        <Box>
          <Typography variant="h5" component="h5">
            Your favorite movies
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Profile;
