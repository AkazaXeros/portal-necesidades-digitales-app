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
          <input
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password..."
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

// !1qYqqqq  lachocharica@gmail.com
