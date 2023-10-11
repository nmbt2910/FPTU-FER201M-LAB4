import React, { useState } from 'react';
import {
  Typography,
  Container,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';

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
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: '24px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
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

const Contact = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
    <video
        src="assets/videos/about.mp4"
        className={classes.video}
        autoPlay
        loop
        muted
      />
    <Container className={classes.container}>
      <Typography variant="h2" component="h2" className={classes.heading}>
        Contact Us
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          className={classes.textField}
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          className={classes.textField}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        
      </form>
    </Container>
    </div>
  );
};

export default Contact;