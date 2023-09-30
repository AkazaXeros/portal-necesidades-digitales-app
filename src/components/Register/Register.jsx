import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Alert, Box, Button, TextField } from '@mui/material';

import { registerForm, btn, link, alertError } from './Register.module.css';
import { registerUserService } from '../../services';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useTitle('Signup');

  const changeHandler = (e, identifier) => {
    if (identifier === 'username') {
      setUserName(e.target.value);
    }
    if (identifier === 'email') {
      setEmail(e.target.value);
    }
    if (identifier === 'password') {
      setPassword(e.target.value);
    }

    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ userName, email, password });
      // console.log(data);
      navigate('/users/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={registerForm}>
      <TextField
        autoFocus
        id="username"
        label="Username"
        type="text"
        placeholder="Pol"
        value={userName}
        variant="outlined"
        required
        onChange={(e) => changeHandler(e, 'username')}
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        placeholder="name@email.com"
        value={email}
        variant="outlined"
        helperText={error.message}
        error={error.error}
        onChange={(e) => changeHandler(e, 'email')}
        required
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => changeHandler(e, 'password')}
        required
      />

      <Button
        variant="contained"
        type="submit"
        className={btn}
        color="secondary"
      >
        Signup
      </Button>

      {error && (
        <Alert severity="error" className={alertError}>
          {error}
        </Alert>
      )}

      <Alert severity="success" color="info">
        If you already have an account
        <Button variant="text">
          <Link to="/users/login" className={link}>
            Login
          </Link>
        </Button>
      </Alert>
    </Box>
  );
};
export default Register;
