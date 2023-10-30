import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Hidden, Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  drawer: {
    width: 500,
  },
}));

const Header = ({ toggleTheme }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BTFilmLibrary
          </Typography>
          <div className={classes.linkContainer}>
            <Hidden smDown>
              <nav>
                <Link to="/" className={classes.navLink}>
                  Home
                </Link>
                <Link to="/news" className={classes.navLink}>
                  News
                </Link>
                <Link to="/about" className={classes.navLink}>
                  About
                </Link>
                <Link to="/contact" className={classes.navLink}>
                  Contact
                </Link>
              </nav>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={closeDrawer}
                className={classes.drawer}
              >
                <List>
                  <ListItem button component={Link} to="/" onClick={closeDrawer}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={Link} to="/about" onClick={closeDrawer}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem button component={Link} to="/news" onClick={closeDrawer}>
                    <ListItemText primary="News" />
                  </ListItem>
                  <ListItem button component={Link} to="/contact" onClick={closeDrawer}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
            </Hidden>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;