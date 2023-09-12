import { loginForm, btn } from "./Login.module.css";
import { loginUserService } from "../../services";
import { useUser } from "../../context/UserContext";

import { Box, Button, TextField } from "@mui/material";

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

      <Button variant="contained" className={btn} type="submit">
        Login
      </Button>

      {error && <p>{error}</p>}
      <p>
        If you don`t have an account yet
        <Button variant="text">
          <Link to="/users/register">Signup</Link>
        </Button>
      </p>
    </Box>
  );
};
export default Login;
