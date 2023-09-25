import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { createEntryService } from '../services';
import { newEntry, btn, upload } from './NewEntryPage.module.css';
import { useUser } from '../context/UserContext';
import UploadBtn from '../components/Upload/UploadBtn';

// Importing React component
import { Helmet } from 'react-helmet';

import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const NewEntry = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState();
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createEntryService({
        title,
        description,
        file,
        category,
        token,
      });
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <form onSubmit={handleSubmit} className={newEntry}>
      <Helmet>
        <title>New Service</title>
      </Helmet>
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Add a title to the service..."
        required
      />
      <TextField
        id="description"
        label="Description"
        multiline
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Add a description to the service..."
        rows={10}
        required
      />
      <UploadBtn
        changeHandler={(e) => {
          setFile(e.target.files[0]);
        }}
        className={upload}
        required
      />

      <FormControl>
        <InputLabel id="category">Category</InputLabel>
        <Select
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          label="Category"
        >
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="video-editing">Video-editing</MenuItem>
          <MenuItem value="image-editing">Image-editing</MenuItem>
          <MenuItem value="document-translation">Document-translation</MenuItem>
          <MenuItem value="document-correction">Document-correction</MenuItem>
          <MenuItem value="code-correction">Code-correction</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        className={btn}
        type="submit"
        color="secondary"
      >
        Add
      </Button>

      {error && <Alert severity="error">{error}</Alert>}
    </form>
  );
};
export default NewEntry;
