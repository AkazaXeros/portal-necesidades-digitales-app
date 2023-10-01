// Importing hooks from React.
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Importing custom component.
import { registerUserService } from '../../services';

// Imporitng custom hooks component.
import useTitle from '../../hooks/useTitle';

// Importing CSS
import {
  registerForm,
  btn,
  link,
  alertError,
  loginText,
} from './Register.module.css';

// Importing Material UI components.
import { Alert, Box, Button, TextField } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  useTitle('Signup');

  //------------------Handlers-----------------//
  const changeHandler = (value, identifier) => {
    if (identifier === 'username') {
      setUserName(value);
    }
    if (identifier === 'email') {
      setEmail(value);
    }
    if (identifier === 'password') {
      setPassword(value);
    }

    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ userName, email, password });
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
        onChange={(e) => changeHandler(e.target.value, 'username')}
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
        onChange={(e) => changeHandler(e.target.value, 'email')}
        required
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => changeHandler(e.target.value, 'password')}
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

      <Alert severity="success" color="info" className={loginText}>
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
