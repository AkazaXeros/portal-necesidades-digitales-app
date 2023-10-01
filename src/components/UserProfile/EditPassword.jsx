// Importing hooks from React.
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Importing custom hooks component.
import { useUser } from '../../context/UserContext';

// Importing CSS.
import { btnContainer, editForm } from './EditPassword.module.css';

// Importing Material UI components.
import { Alert, Button, TextField } from '@mui/material';
import { updatePassword } from '../../services';

const EditPassword = () => {
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [repeatedNewPass, setRepeatedNewPass] = useState('');
  const [error, setError] = useState('');

  //---------------Handlers--------------//
  const changeHandler = (e, identifier) => {
    if (identifier === 'currentPass') {
      setCurrentPass(e.target.value);
    } else if (identifier === 'newPass') {
      setNewPass(e.target.value);
    } else if (identifier === 'repeatedNewPass') {
      setRepeatedNewPass(e.target.value);
    }
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass === repeatedNewPass) {
      try {
        await updatePassword(currentPass, newPass, token);
        logout();
        navigate('/users/login');
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
        onChange={(e) => changeHandler(e, 'currentPass')}
        required
      />
      <TextField
        label="New password"
        type="password"
        value={newPass}
        onChange={(e) => changeHandler(e, 'newPass')}
        required
      />
      <TextField
        label="Repeat password"
        type="password"
        value={repeatedNewPass}
        onChange={(e) => changeHandler(e, 'repeatedNewPass')}
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
          onClick={() => navigate('/')}
        >
          Cancel
        </Button>
      </div>

      {error && <Alert severity="error">{error}</Alert>}
    </form>
  );
};

export default EditPassword;
