import React from 'react';
import filmsData from './ListOfFilms';
import FilmItem from './FilmItem';
import './Films.css';

const Films = ({ openModal }) => {
  return (
    <div className="films-container">
      {filmsData.map((film) => (
        <FilmItem key={film.id} film={film} openModal={openModal} />
      ))}
    </div>
  );
};

export default Films;
