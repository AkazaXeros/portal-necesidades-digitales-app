import { loginForm } from "./Login.module.css";
import { loginUserService } from "../../services";
import { useUser } from "../../context/UserContext";

import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });
      console.log(data);
      login(data);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={loginForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          id="email"
          type="email"
          placeholder="name@email.com"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder=""
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button colorScheme="teal" variant="solid">
          Login
        </Button>

        {error && <p>{error}</p>}
      </form>
      <p>
        If you don`t have an account yet{" "}
        <button>
          {" "}
          <Link to="/users/register">Signup</Link>
        </button>
      </p>
    </div>
  );
};
export default Login;
