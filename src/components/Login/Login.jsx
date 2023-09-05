import { loginForm } from './Login.module.css';

import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [user, setUser] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:8000/users/login`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.status === 'error') {
      console.log(data.status);
      setError(data.message);
    } else {
      setError('');
      setEmail('');
      setPassword('');
      setUser(data);
      navigate('/');
    }

    console.log(data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className={loginForm}>
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            id="email"
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>
          {error && <p>{error}</p>}
        </form>
        <p>
          If you don't have an account yet{' '}
          <Link to="/users/register">Signup</Link>
        </p>
      </div>
    </>
  );
};
export default Login;
