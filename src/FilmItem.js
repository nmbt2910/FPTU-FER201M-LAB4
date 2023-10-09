import React, { useState } from 'react';

const FilmItem = ({ film }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDetailClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="film-item">
        <img src={film.image} alt={film.title} />
        <h3>{film.title}</h3>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <button onClick={handleDetailClick}>Detail</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <img src={film.image} alt={film.title} />
            <h3>{film.title}</h3>
            <p>{film.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilmItem;