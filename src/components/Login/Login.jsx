import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Alert, Box, Button, TextField } from '@mui/material';

import { loginForm, btn, link } from './Login.module.css';
import { loginUserService } from '../../services';
import { useUser } from '../../context/UserContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();
  useTitle('Login');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUserService({ email, password });
      // console.log(data);
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
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder=""
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
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
      <Alert severity="success" color="info">
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
