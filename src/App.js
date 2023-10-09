import React, { useState } from 'react';
import Modal from 'react-modal';

import Films from './Films';


// Custom hook for theme toggle
const useThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return [isDarkTheme, toggleTheme];
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDarkTheme, toggleTheme] = useThemeToggle();

  const openModal = (film) => {
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div className="films-container">
        <Films openModal={openModal} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
      >
        {selectedFilm && (
          <div>
            <h2>{selectedFilm.title}</h2>
            <p>{selectedFilm.description}</p>
            <img src={selectedFilm.imageUrl} alt={selectedFilm.title} />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;