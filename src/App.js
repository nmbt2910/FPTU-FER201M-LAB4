import React, { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Films from './Films';
import Contact from './Contact';
import Header from './Header';
import About from './About';
import News from './News';

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

  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: isDarkTheme ? 'dark' : 'light',
      },
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Header toggleTheme={toggleTheme} />

          <Switch>
            <Route exact path="/">
              <div style={{ padding: '20px' }}>
                <Films openModal={openModal} />
              </div>
            </Route>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
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
    </ThemeProvider>
  );
};

export default App;