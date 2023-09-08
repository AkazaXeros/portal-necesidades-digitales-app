import { Link } from "react-router-dom";
import { useState } from "react";

import { registerForm } from "./Register.module.css";
import { registerUserService } from "../../services";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUserService({ userName, email, password });
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={registerForm}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              id="username"
              type="text"
              placeholder="SelectedName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

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
