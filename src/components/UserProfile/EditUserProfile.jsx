import { Modal, TextField } from "@mui/material";
import { useState } from "react";

const EditUserProfile = () => {
  const [avatar, setAvatar] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [biography, setBiography] = useState();

  return (
    <Modal>
      <TextField
        id="avatar"
        label="Avatar"
        type="file"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <TextField
        id="username"
        label="Username"
        type="text"
        placeholder="Pol"
        value={userName}
        variant="outlined"
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        id="biography"
        label="Biography"
        type="text"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />
    </Modal>
  );
};

export default EditUserProfile;
