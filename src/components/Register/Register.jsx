import { registerForm } from './Register.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:8000/users/register`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password }),
    });

    const data = await res.json();

    if (data.status === 'error') {
      console.log(data.status);
      setError(data.message);
    } else {
      setError('');
      setEmail('');
      setPassword('');
      setUserName('');
    }

    console.log(data);
  };

  return (
    <>
      <div className={registerForm}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            id="username"
            type="text"
            placeholder="SelectedName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
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

          <button>Signup</button>
          {error && <p>{error}</p>}
        </form>
        <p>
          If you already have an account <Link to="/users/login">Login</Link>
        </p>
      </div>
    </>
  );
};
export default Register;
