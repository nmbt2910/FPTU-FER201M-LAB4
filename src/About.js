import React from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '400px',
    margin: '0 auto',
    padding: theme.spacing(2),
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: '24px',
    textAlign: 'center',
  },
  text: {
    marginBottom: theme.spacing(2),
    textAlign: 'center', // Center the long text horizontally
  },
  video: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <video
        src="/assets/videos/about.mp4"
        className={classes.video}
        autoPlay
        loop
        muted
      />
      <Paper className={classes.container}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          About Page
        </Typography>
        <Typography variant="body1" className={classes.text}>
          This is a simple About page using Material-UI.
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          porttitor diam sed dui semper, nec porta dui consequat. Nulla vel
          velit sed eros pharetra dapibus sed vel tellus. Sed vitae nunc
          pharetra, consectetur arcu eget, cursus justo. Sed consectetur
          turpis eu metus tincidunt, quis pretium mauris suscipit. Duis
          fringilla, mauris sit amet posuere pharetra, urna diam ultricies
          nulla, et tincidunt neque arcu ut mi. Donec feugiat pharetra
          suscipit. Nullam vel arcu sed lorem dictum mattis. In finibus
          interdum lectus a scelerisque.
        </Typography>
      </Paper>
    </div>
  );
};

export default About;