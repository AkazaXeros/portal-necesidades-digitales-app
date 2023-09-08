import { newEntry } from "./NewEntry.module.css";

import { useState } from "react";

const NewEntry = () => {
  // const [user] = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("file", file);
    fd.append("category", category);

    const res = await fetch("http://localhost:8000/entries", {
      method: "POST",
      headers: { Authorization: `${data.token}` },
      body: fd,
    });

    const data = await res.json();

    if (data.status === "error") {
      console.log(data.status);
      setError(data.message);
    } else {
      setError("");
      setTitle("");
      setDescription("");
      setFile(null);
      setCategory("");
    }
    console.log(data);
  };

  return (
    <div>
      <form className={newEntry} onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
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
        <textarea
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

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          <option value="video-editing">Video-editing</option>
          <option value="image-editing">Image-editing</option>
          <option value="document-translation">Document-translation</option>
          <option value="document-correction">Document-correction</option>
          <option value="code-correction">Code-correction</option>
          <option value="other">Other</option>
        </select>
        <button>Add</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
export default NewEntry;
