// Importing hook from React
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Importing user context
import { useUser } from "../../context/UserContext";

// Importing the CSS
import { btnContainer, editForm } from "./EditPassword.module.css";

// Importing ui material components
import { Alert, Button, TextField } from "@mui/material";
import { updatePassword } from "../../services";

const EditPassword = () => {
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatedNewPass, setRepeatedNewPass] = useState("");
  const [error, setError] = useState("");

  const changeHandler = (e, identifier) => {
    if (identifier === "currentPass") {
      setCurrentPass(e.target.value);
    } else if (identifier === "newPass") {
      setNewPass(e.target.value);
    } else if (identifier === "repeatedNewPass") {
      setRepeatedNewPass(e.target.value);
    }
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass === repeatedNewPass) {
      try {
        const data = await updatePassword(currentPass, newPass, token);
        console.log(data);
        logout();
        navigate("/users/login");
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("New password and repeated password don't match");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={editForm}>
      <TextField
        label="Current password"
        type="password"
        value={currentPass}
        onChange={(e) => changeHandler(e, "currentPass")}
        required
      />
      <TextField
        label="New password"
        type="password"
        value={newPass}
        onChange={(e) => changeHandler(e, "newPass")}
        required
      />
      <TextField
        label="Repeat password"
        type="password"
        value={repeatedNewPass}
        onChange={(e) => changeHandler(e, "repeatedNewPass")}
        required
      />

      <div className={btnContainer}>
        <Button color="secondary" type="submit" variant="contained">
          Change
        </Button>
        <Button
          color="secondary"
          type="button"
          variant="contained"
          onClick={() => navigate("/")}>
          Cancel
        </Button>
      </div>

      {error && <Alert severity="error">{error}</Alert>}
    </form>
  );
};

export default EditPassword;
