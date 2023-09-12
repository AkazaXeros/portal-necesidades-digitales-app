import { createEntryService } from "../services";
import { newEntry } from "./NewEntryPage.module.css";
import { useUser } from "../context/UserContext";

import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { useState } from "react";

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
    <form className={newEntry} onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <Input
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Add a title to the service..."
        required
      />

      <label htmlFor="description">Description:</label>
      <Textarea
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Add a description to the service..."
        rows={10}
        required
      />

      <label className="fileInput">
        <span>📁</span>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          required
        />
      </label>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          <option value="other">Other</option>
          <option value="video-editing">Video-editing</option>
          <option value="image-editing">Image-editing</option>
          <option value="document-translation">Document-translation</option>
          <option value="document-correction">Document-correction</option>
          <option value="code-correction">Code-correction</option>
        </Select>
      </FormControl>

      <Button colorScheme="yellow">Add</Button>
      {error && <p>{error}</p>}
    </form>
  );
};
export default NewEntry;
