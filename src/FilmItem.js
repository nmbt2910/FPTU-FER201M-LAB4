import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Films.css';

const FilmItem = ({ film, openModal, isDarkTheme }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDetailClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const textColor = isDarkTheme ? '#000' : '#fff';
  const backgroundColor = isDarkTheme ? '#fff' : '#000';

  return (
    <Box
      sx={{
        flexBasis: 'calc(33.33% - 10px)',
        margin: '5px',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        backgroundColor: 'inherit',
        color: 'inherit',
        '@media (max-width: 768px)': {
          flexBasis: 'calc(50% - 10px)',
        },
        '@media (max-width: 480px)': {
          flexBasis: '100%',
        },
      }}
    >
      <img
        src={film.image}
        alt={film.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
      />
      <h3 style={{ marginTop: '10px', fontSize: '16px' }}>{film.title}</h3>
      <p>Year: {film.year}</p>
      <p>Nation: {film.nation}</p>
      <Button variant="contained" onClick={handleDetailClick}>
        Detail
      </Button>
      {showModal && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '80%',
              maxWidth: '800px',
              maxHeight: '80%',
              borderRadius: '4px',
              padding: '20px',
              overflow: 'auto',
              color: isDarkTheme ? '#000' : '#fff',
              backgroundColor: isDarkTheme ? '#fff' : '#2a2a2a',
            }}
          >
            <h2>{film.title}</h2>
            {film.videoId && <YouTube videoId={film.videoId} opts={opts} />}
            <p>{film.description}</p>
            <button onClick={closeModal}>Close</button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FilmItem;