// Importing CSS
import {
  editProfileForm,
  btnContainer,
  avatarInput,
} from './EditUserProfile.module.css';

import { useUser } from '../../context/UserContext';
import { updateUserService } from '../../services';

// Importing Material UI components
import { Alert, Avatar, Button, TextField, Tooltip } from '@mui/material';

// Importing React component
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';

// Component for editing the user's profile
const EditUserProfile = ({ onCancel, onUpdateProfile }) => {
  const { user, token, setUser } = useUser();

  // --------- Events ---------
  const [avatar, setAvatar] = useState(
    user.avatar ? `${import.meta.env.VITE_BACKEND_URL}${user.avatar}` : null
  );
  const [avatarFile, setAvatarFile] = useState();
  const [userName, setUserName] = useState(user.userName);
  const [biography, setBiography] = useState(user.biograph);
  const [error, setError] = useState('');

  useTitle('Edit User');

  // --------- Handlers ---------
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);

      setAvatarFile(file);
    }
  };

  const changeHandler = (e, identifier) => {
    if (identifier === 'username') {
      setUserName(e.target.value);
    } else if (identifier === 'biography') {
      setBiography(e.target.value);
    }
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      avatarFile ||
      user.userName !== userName ||
      user.biograph !== biography
    ) {
      try {
        const data = await updateUserService({
          avatarFile,
          biography,
          userName,
          token,
        });

        onCancel();
        setUser(data);
        onUpdateProfile(data);
      } catch (err) {
        setError(err.message);
      }
    } else {
      onCancel();
    }
  };
  // --------------------------

  return (
    <form className={editProfileForm} onSubmit={handleSubmit}>
      <Tooltip title="Edit" placement="left-end">
        <label>
          <Avatar alt="Usuario" src={avatar} sx={{ width: 80, height: 80 }} />
          <input
            className={avatarInput}
            type="file"
            onChange={handleAvatarChange}
          />
        </label>
      </Tooltip>

      <TextField
        id="username"
        label="New Username"
        type="text"
        value={userName}
        variant="outlined"
        onChange={(e) => changeHandler(e, 'username')}
      />

      <TextField
        id="biography"
        label="Biography"
        type="text"
        placeholder="Tell us a bit about you..."
        multiline
        rows={5}
        value={biography || ''}
        onChange={(e) => changeHandler(e, 'biography')}
      />

      <div className={btnContainer}>
        <Button variant="contained" type="submit" color="secondary">
          Save
        </Button>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>

      {error && <Alert severity="error">{error}</Alert>}
    </form>
  );
};

export default EditUserProfile;
