import { Button } from "@chakra-ui/react";
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
    <div className={registerForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          autoFocus
          id="username"
          type="text"
          placeholder="SelectedName"
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button colorScheme="yellow" variant="solid" type="submit">
          Signup
        </Button>

        {error && <p>{error}</p>}
      </form>

      <p>
        If you already have an account{" "}
        <button>
          {" "}
          <Link to="/users/login" className="login">
            Login
          </Link>
        </button>
      </p>
    </div>
  );
};
export default Register;
