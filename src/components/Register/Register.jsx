import { registerForm } from './Register.module.css';

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
          <input
            type="text"
            placeholder="Select your username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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

          <button>Signup</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
};
export default Register;

// !1qYqqqq
