import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import UploadBtn from "../Upload/UploadBtn";

const NewComment = () => {
  const { entryId } = useParams();
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="comment"
        label="Comment"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        placeholder="Write your comment here..."
        required
      />

      <UploadBtn />

      <Button color="secondary" type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
};

export default NewComment;
