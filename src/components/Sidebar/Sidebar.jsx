import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const redLogo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw4vFyaUMKu9NK3e6wfQpaiTw3tRydqztWPKiCLxJHui4PcBNXKQYjjOWk-YqXPiR4hM&usqp=CAU';
  const blueLogo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw4vFyaUMKu9NK3e6wfQpaiTw3tRydqztWPKiCLxJHui4PcBNXKQYjjOWk-YqXPiR4hM&usqp=CAU';

  const categories = [
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },
    {
      label: 'Upcoming',
      value: 'upcoming',
    },
  ];
  const demoCategories = [
    {
      label: 'Action',
      value: 'action',
    },
    {
      label: 'Comedy',
      value: 'Comedy',
    },
    {
      label: 'Horror',
      value: 'horror',
    },
  ];
  return (
    <>
      <Link to="/" className="flex justify-center py-[10%] px-0">
        <img
          className="w-[50%]"
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Biscope logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className="decoration-0" to="/">
            <ListItem>
              <ListItemIcon>
                {/* <img src="" alt="categories" className="" /> */}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className="decoration-0" to="/">
            <ListItem>
              <ListItemIcon>
                {/* <img src="" alt="genre" className="" /> */}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
