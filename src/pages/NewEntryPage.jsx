import { createEntryService } from "../services";
import { newEntry, btn } from "./NewEntryPage.module.css";
import { useUser } from "../context/UserContext";

import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const NewEntry = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const entry = await createEntryService({
        title,
        description,
        file,
        category,
        token,
      });
      console.log(entry);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p>{error}</p>;

  if (loading) return <p>Creating Service...</p>;

  return (
    <form onSubmit={handleSubmit} className={newEntry}>
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
        maxRows={8}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Add a description to the service..."
        rows={10}
        required
      />
      <TextField
        id="file"
        label="File"
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        required
      />

      <FormControl>
        <InputLabel
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}></InputLabel>
        <Select>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="video-editing">Video-editing</MenuItem>
          <MenuItem value="image-editing">Image-editing</MenuItem>
          <MenuItem value="document-translation">Document-translation</MenuItem>
          <MenuItem value="document-correction">Document-correction</MenuItem>
          <MenuItem value="code-correction">Code-correction</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" className={btn}>
        Add
      </Button>

      {error && <p>{error}</p>}
    </form>
  );
};
export default NewEntry;
