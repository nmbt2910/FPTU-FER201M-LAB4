import React, { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Films from './Films';
import Contact from './Contact';
import Header from './Header';

function useThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return [isDarkTheme, toggleTheme];
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDarkTheme, toggleTheme] = useThemeToggle();

  const openModal = (film) => {
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFilm(null);
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <Header />

        <button onClick={toggleTheme}>Toggle Theme</button>


        <Switch>
          <Route exact path="/">
            <div className="films-container">
              <Films openModal={openModal} />
            </div>
          </Route>
          <Route path="/contact" component={Contact} />
        </Switch>

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
    </Router>
  );
};

export default App;