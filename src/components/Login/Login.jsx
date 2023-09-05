import { loginForm } from './Login.module.css';

import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
      </div>
    </>
  );
};
export default Login;
