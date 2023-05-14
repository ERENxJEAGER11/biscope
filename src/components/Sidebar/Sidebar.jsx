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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../services/TMDB';
import categories from '../../assets/index';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const redLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw4vFyaUMKu9NK3e6wfQpaiTw3tRydqztWPKiCLxJHui4PcBNXKQYjjOWk-YqXPiR4hM&usqp=CAU';
const blueLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw4vFyaUMKu9NK3e6wfQpaiTw3tRydqztWPKiCLxJHui4PcBNXKQYjjOWk-YqXPiR4hM&usqp=CAU';

function Sidebar({ setMobileOpen }) {
  const { data, isFetching } = useGetGenresQuery();
  // console.log(data);
  const theme = useTheme();

  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const categoriesLabel = [
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
        {categoriesLabel.map(({ label, value }) => (
          <Link key={value} className="decoration-0" to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  src={categories[value.toLowerCase()]}
                  alt="genre"
                  className=""
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={id} className="decoration-0" to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img
                    src={categories[name.toLowerCase()]}
                    alt="genre"
                    className=""
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
}

export default Sidebar;
