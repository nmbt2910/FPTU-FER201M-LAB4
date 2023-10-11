import React from 'react';
import filmsData from './ListOfFilms';
import FilmItem from './FilmItem';
import Box from '@mui/material/Box';

const Films = ({ openModal }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', maxWidth: '75%', margin: '0 auto' }}>
      {filmsData.map((film) => (
        <FilmItem key={film.id} film={film} openModal={openModal} />
      ))}
    </Box>
  );
};

export default Films;