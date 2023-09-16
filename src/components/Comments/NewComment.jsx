import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import UploadBtn from "../Upload/UploadBtn";
import { buttons, newComment } from "./NewComment.module.css";

const NewComment = () => {
  const { entryId } = useParams();
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className={newComment}>
      <TextField
        id="comment"
        label="Comment"
        multiline
        rows={10}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        placeholder="Write your comment here..."
        required
      />

      <div className={buttons}>
        <UploadBtn />

        <Button color="secondary" type="submit" variant="contained">
          Add
        </Button>
      </div>
    </form>
  );
};

export default NewComment;
