// Imporitng hooks from React.
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Importing custom component.
import { loginUserService } from '../../services';

// Importing custom hooks components.
import { useUser } from '../../context/UserContext';
import useTitle from '../../hooks/useTitle';

// Importing CSS.
import { loginForm, btn, link, signupText } from './Login.module.css';

// Importing Materia UI components.
import { Alert, Box, Button, TextField } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  useTitle('Login');

  //---------------Handlers-----------------//
  const changeHandler = (value, identifier) => {
    if (identifier === 'email') {
      setEmail(value);
    }
    if (identifier === 'password') {
      setPassword(value);
    }

    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUserService({ email, password });
      login(data);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box onSubmit={handleSubmit} component="form" className={loginForm}>
      <TextField
        autoFocus
        id="email"
        label="Email"
        type="email"
        placeholder="name@email.com"
        value={email}
        required
        onChange={(e) => changeHandler(e.target.value, 'email')}
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder=""
        value={password}
        required
        onChange={(e) => changeHandler(e.target.value, 'password')}
      />

      <Button
        variant="contained"
        className={btn}
        type="submit"
        color="secondary"
      >
        Login
      </Button>

      {error && <Alert severity="error">{error}</Alert>}
      <Alert severity="success" color="info" className={signupText}>
        If you don`t have an account yet
        <Button variant="text" color="secondary">
          <Link to="/users/register" className={link}>
            Signup
          </Link>
        </Button>
      </Alert>
    </Box>
  );
};
export default Login;
