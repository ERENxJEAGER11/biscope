import { TextField, InputAdornment } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../features/currentGenreOrCategory';

function Search() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className="flex justify-center w-[100%] sm:w-36">
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        variant="standard"
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
