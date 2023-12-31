// Imporitng hooks from React.
import { useState } from 'react';

// Importing custom hooks.
import { useUser } from '../../context/UserContext';
import useTitle from '../../hooks/useTitle';

// Importing custom component.
import { updateEntryService } from '../../services';

// Imporitng CSS
import { updateEntry, btn } from './UpdateEntry.module.css';

// Importing Material UI components.
import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';

const UpdateEntry = ({ entry, onEdit, setEntry }) => {
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(entry.resolved);

  const { token } = useUser();

  useTitle('Update Entry');

  //-------------Handler-------------//
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await updateEntryService(
        category,
        resolved,
        token,
        entry.id
      );

      setEntry(data);
      onEdit();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <CircularProgress className="circularLoading" />;

  return (
    <form onSubmit={handleSubmit} className={updateEntry}>
      <FormControl>
        <FormLabel id="resolved">Done</FormLabel>
        <RadioGroup
          id="resolved"
          onChange={(e) => {
            setResolved(e.target.value);
          }}
          value={resolved}
          label="resolved"
        >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
          <FormControlLabel value={0} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

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

export default UpdateEntry;
